import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  openGoogleMaps(latitude: string, longitude: string) {


    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    
  
    window.open(googleMapsUrl, '_blank');
  
  
  }
}
