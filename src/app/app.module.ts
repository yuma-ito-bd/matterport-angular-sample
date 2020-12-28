import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatterportViewComponent } from './matterport-view/matterport-view.component';
import { MatterportFrameComponent } from './matterport-frame/matterport-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    MatterportViewComponent,
    MatterportFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
