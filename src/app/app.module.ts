import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { PopupcompComponent } from './popupcomp/popupcomp.component';
import { ProvidersPageComponent } from './providers-page/providers-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { printerface } from '../app/pr';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FirstPageComponent,
    PopupcompComponent,
    ProvidersPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
