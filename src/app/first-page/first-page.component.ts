import { Component } from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {
  constructor(private popupData: PopupService) {}

  public openpopup(): void {
    this.popupData.openPopup();
  }
}
