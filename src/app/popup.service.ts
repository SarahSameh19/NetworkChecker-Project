import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {


    public isPopupVisible:boolean = false;
  
    public openPopup(): void {
      this.isPopupVisible = true;
    }
  
    public closePopup(): void {
      this.isPopupVisible = false;
    }
}
