import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallApiService } from '../call-api.service';
import { ProviderCallingService } from '../provider-calling.service';
import { printerface } from '../pr';

@Component({
  selector: 'app-providers-page',
  templateUrl: './providers-page.component.html',
  styleUrls: ['./providers-page.component.scss']
})
export class ProvidersPageComponent implements OnInit {
  stuffId: string = '';
  
  initialPrinterface: printerface = {
    data: {
      items: null,
      pagination: null,
    },
    message: '',
    errorList: [],
  };



  constructor(
    private route: ActivatedRoute,
    private server: CallApiService,
    private router: Router,
    private prcl: ProviderCallingService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.stuffId = params['stuffId'] || '';
 
      this.prcl.getApiResponse(this.stuffId).subscribe(

        response => {
         
          this.initialPrinterface = response;
          console.log("Done");
          console.log(this.initialPrinterface);
        },
        error => {
          console.error(error);
          console.log("Not Recieved");
        }

      );
    });
  }
}
