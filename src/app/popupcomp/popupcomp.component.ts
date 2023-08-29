import { Component } from '@angular/core';
import { PopupService } from '../popup.service';
import { CallApiService } from '../call-api.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-popupcomp',
  templateUrl: './popupcomp.component.html',
  styleUrls: ['./popupcomp.component.scss']
})
export class PopupcompComponent {

constructor(public popupData:PopupService , private server:CallApiService,private router: Router){}

closepopup():void{
  this.popupData.closePopup();
}

gotoproviders(){
   this.server.getApi().subscribe();
  this.router.navigate(['/providers']);
  this.popupData.closePopup();
}

}


