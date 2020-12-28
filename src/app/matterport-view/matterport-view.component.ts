import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { TagId } from '../models/TagId';
import { MatterportService } from '../services/matterport.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-matterport-view',
    templateUrl: './matterport-view.component.html',
    styleUrls: ['./matterport-view.component.scss'],
})
export class MatterportViewComponent implements OnInit, OnDestroy {
    @ViewChild('showCaseIframe', { static: true })
    showCaseElement!: ElementRef<HTMLIFrameElement>;
    selectedTagId?: TagId;
    hoveredTagId?: TagId;
    private onDestroy$ = new Subject();

    constructor(private matterPort: MatterportService) {}

    async ngOnInit(): Promise<void> {
        // Matterportの表示
        this.matterPort.getViewUrl().subscribe((url) => {
            this.showCaseElement.nativeElement.src = url;
        });

        await this.matterPort.initializeSDK(this.showCaseElement.nativeElement);
        this.matterPort
            .listenClickEvent()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((id) => {
                this.selectedTagId = id;
            });
        this.matterPort
            .listenHoverEvent()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(({ id, hovering }) => {
                this.hoveredTagId = hovering ? id : undefined;
            });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
    }
}
