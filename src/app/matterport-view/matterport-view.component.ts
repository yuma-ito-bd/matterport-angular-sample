import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatterportService } from '../services/matterport.service';

@Component({
    selector: 'app-matterport-view',
    templateUrl: './matterport-view.component.html',
    styleUrls: ['./matterport-view.component.scss'],
})
export class MatterportViewComponent implements OnInit {
    @ViewChild('showCaseIframe', { static: true })
    showCaseElement!: ElementRef<HTMLIFrameElement>;

    constructor(private matterPort: MatterportService) {}

    ngOnInit(): void {
        // Matterportの表示
        this.matterPort.getViewUrl().subscribe((url) => {
            this.showCaseElement.nativeElement.src = url;
        });

        this.matterPort.initializeSDK(this.showCaseElement.nativeElement);
    }
}
