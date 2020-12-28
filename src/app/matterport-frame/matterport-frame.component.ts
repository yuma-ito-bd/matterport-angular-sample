import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-matterport-frame',
    templateUrl: './matterport-frame.component.html',
    styleUrls: ['./matterport-frame.component.scss'],
})
export class MatterportFrameComponent implements OnInit {
    @ViewChild('showCaseIframe', { static: true })
    showCaseElement!: ElementRef<HTMLIFrameElement>;
    @Input() url = '';

    @Output() init = new EventEmitter<HTMLIFrameElement>();

    constructor() {}

    ngOnInit(): void {
        this.showCaseElement.nativeElement.src = this.url;
        this.init.emit(this.showCaseElement.nativeElement);
    }
}
