import { Component } from '@angular/core';
import { PopupService } from '../popup.service';
import { CallApiService } from '../call-api.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiResponse } from '../inter';
import { printerface } from '../pr';



@Component({
  selector: 'app-popupcomp',
  templateUrl: './popupcomp.component.html',
  styleUrls: ['./popupcomp.component.scss']
})
export class PopupcompComponent {
  
  apiResponse: ApiResponse = {
    data: { flag: false },
    message: '',
    errorList: []
  };
  apiError: boolean = false;
  loading: boolean = true;


  insuranceNumber: string = ''; 

  constructor(public popupData: PopupService, private server: CallApiService,
     private router: Router  ) {
   }

  closepopup(): void {
    this.popupData.closePopup();
  }

  gotoproviders() {
    this.server.getApi(this.insuranceNumber).subscribe(
      response => {
        this.apiResponse = response;
        this.loading = false;
        this.apiError = false;
        this.popupData.closePopup();
        
        if(this.apiError==false){
        this.router.navigate(['/providers'], {
          queryParams: { stuffId: this.insuranceNumber }
        });
        }
      },
      error => {
        this.loading = false;
       
        this.apiError = true;
      
        
      }


      
      );
      




 
  }

}


