import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MatterportModelService {
    constructor() {}

    /**
     * 表示用URLを取得する
     */
    getViewUrl(): Observable<string> {
        // const modelSid = 'SxQL3iGyoDo'; // Construction Site
        const modelSid = 'JGPnGQ6hosj'; // Southern California Luxuary Home

        const url = `https://my.matterport.com/show?m=${modelSid}&qs=1`;
        // APIなどからIDを取得することを想定しObservable型にする
        return of(url);
    }
}
