import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { ProvidersPageComponent } from './providers-page/providers-page.component';
// import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path:'',redirectTo:'/firstpage',pathMatch:'full'},
  {path:'firstpage',component:FirstPageComponent},
  {path:'providers',component:ProvidersPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
export const listt=[FirstPageComponent,ProvidersPageComponent];