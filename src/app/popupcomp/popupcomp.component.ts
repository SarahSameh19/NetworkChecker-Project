import { Component } from '@angular/core';
import { PopupService } from '../popup.service';
import { CallApiService } from '../call-api.service';
import { Router } from '@angular/router'; // Import Router
import { Item } from '../inter'; // Make sure this path is correct

@Component({
  selector: 'app-popupcomp',
  templateUrl: './popupcomp.component.html',
  styleUrls: ['./popupcomp.component.scss']
})
export class PopupcompComponent {
  apiData: Item[] = [];
  
  constructor(public popupData: PopupService, private server: CallApiService, private router: Router) {}

  closepopup(): void {
    this.popupData.closePopup();
  }

  gotoproviders() {
    this.server.getApi().subscribe(
      (response) => {
        this.apiData = response.data.items;
        console.log('API data received:', this.apiData);
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.router.navigate(['/providers']);
        this.popupData.closePopup();
      }
    );
  }
}
