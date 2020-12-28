import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { TagId } from '../models/TagId';

type HoverEvent = {
    id: TagId;
    hovering: boolean;
};

@Injectable({
    providedIn: 'root',
})
export class MatterportSDKWrapperService {
    // 型定義ファイルがないので、anyで宣言する
    private sdk: any;

    private readonly clickSubject = new Subject<TagId>();
    public readonly click$ = this.clickSubject.asObservable();
    private readonly hoverSubject = new Subject<HoverEvent>();
    public readonly hover$ = this.hoverSubject.asObservable();

    constructor() {}

    /**
     * SDKの初期化を行う
     * @param element Matterportを表示しているIframe要素
     */
    async initialize(element: HTMLIFrameElement): Promise<void> {
        const { matterPortApiKey, matterPortSdkVer } = environment;
        const sdk = await (window as any).MP_SDK.connect(
            element,
            matterPortApiKey,
            matterPortSdkVer
        );
        this.sdk = sdk;
    }

    /**
     * クリックイベントをlistenする
     */
    listenClickEvent(): Observable<TagId> {
        this.sdk.on(this.sdk.Mattertag.Event.CLICK, (tagSid: string) => {
            this.clickSubject.next(new TagId(tagSid));
        });
        return this.click$;
    }

    /**
     * hoverイベントをlistenする
     */
    listenHoverEvent(): Observable<HoverEvent> {
        this.sdk.on(
            this.sdk.Mattertag.Event.HOVER,
            (tagSid: string, hovering: boolean): void => {
                this.hoverSubject.next({ id: new TagId(tagSid), hovering });
            }
        );
        return this.hover$;
    }
}
