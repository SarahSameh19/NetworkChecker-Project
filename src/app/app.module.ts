import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { PopupcompComponent } from './popupcomp/popupcomp.component';
import { ProvidersPageComponent } from './providers-page/providers-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ClickOutsideDirective } from './click-outside.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FirstPageComponent,
    PopupcompComponent,
    ProvidersPageComponent,
    ClickOutsideDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
