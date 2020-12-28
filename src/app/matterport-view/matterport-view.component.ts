import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { TagId } from '../models/TagId';
import { MatterportSDKWrapperService } from '../services/matterport-sdk-wrapper.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatterportModelService } from '../services/matterport-model.service';

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

    constructor(
        private matterportSdk: MatterportSDKWrapperService,
        private matterportModel: MatterportModelService
    ) {}

    async ngOnInit(): Promise<void> {
        // Matterportの表示
        this.matterportModel.getViewUrl().subscribe((url) => {
            this.showCaseElement.nativeElement.src = url;
        });

        await this.matterportSdk.initialize(this.showCaseElement.nativeElement);
        this.matterportSdk
            .listenClickEvent()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((id) => {
                this.selectedTagId = id;
            });
        this.matterportSdk
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
