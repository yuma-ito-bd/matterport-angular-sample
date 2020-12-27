import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-matterport-view',
    templateUrl: './matterport-view.component.html',
    styleUrls: ['./matterport-view.component.scss'],
})
export class MatterportViewComponent implements OnInit {
    @ViewChild('showCaseIframe', { static: true })
    showCaseElement!: ElementRef<HTMLIFrameElement>;

    constructor() {}

    ngOnInit(): void {
        // Matterportの表示
        const modelSid = 'SxQL3iGyoDo';
        this.showCaseElement.nativeElement.src = `https://my.matterport.com/show?m=${modelSid}&qs=1`;
    }
}
