import { Component, HostListener, OnInit, Provider } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallApiService } from '../call-api.service';
import { ProviderCallingService } from '../provider-calling.service';
import { printerface } from '../pr';
import { ProviderI } from '../pr';
import { DetailsService } from '../details.service';
import { DetailsProviders } from '../details';
import { BranchesService } from '../branches.service';
import { LocationApiResponse, LocationInfo } from '../branches';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SpecialityService } from '../speciality.service';

import { fadeInOut, slideLeftAnimation } from '../animations';
import { slideDownAnimation } from '../animations';
import { MapService } from '../map.service';

@Component({
  selector: 'app-providers-page',
  templateUrl: './providers-page.component.html',
  styleUrls: ['./providers-page.component.scss'],
  animations: [[fadeInOut], [slideDownAnimation], [slideLeftAnimation]],


})
export class ProvidersPageComponent implements OnInit {

  long: string = "";
  lat: string = "";
  pagee: number = 1;

  stuffId: string = '';
  public isDetailsClicked: boolean = false;
  public isBranchesClicked: boolean = false;
  public isBranchesDetailsClicked: boolean = false;

  public initialPrinterface: ProviderI[] = [];
  public locinfo: LocationInfo[] | null = null;
  public detailsprv: DetailsProviders | null = null;
  public specialities: string[] = [];
  selectedSpeciality: string[] = [];


  constructor(
    private route: ActivatedRoute,
    private server: CallApiService,
    private router: Router,
    private prcl: ProviderCallingService,
    private detserv: DetailsService,
    private branchserv: BranchesService,
    private specialityService: SpecialityService,
    private mapService: MapService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.stuffId = params['stuffId'] || '';
      this.loadPrinterfaceData(this.pagee);
      
    });
    this.specialityService.getSpecialities().subscribe((data) => {
      if (data && data.data && data.data.specialties) {
        this.specialities = data.data.specialties;
      }
    });


  }
  loadPrinterfaceData(page: number): void {
    this.prcl.getApiResponse(this.stuffId, page).subscribe(
      (response: printerface) => {
        this.initialPrinterface = this.initialPrinterface.concat(response.data.items);

        console.log('Done');
        console.log(this.initialPrinterface);
      },
      (error) => {
        console.error(error);
        console.log('Not Received');
      }
    );
  }
  @HostListener('window:scroll', ['$event'])
  onscroll(event: Event): void {

    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

   
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

   
    if (scrollPosition + window.innerHeight >= documentHeight - 200) {
      this.pagee++; 
      this.loadPrinterfaceData(this.pagee); 
    }
  }



  private openGoogleMapsFromDetails() {
    if (this.detailsprv && this.detailsprv.data.locationInfo) {
      const longitude = this.detailsprv.data.locationInfo.longitude || '';
      const latitude = this.detailsprv.data.locationInfo.latitude || '';
      this.mapService.openGoogleMaps(latitude, longitude);
    } else {
      console.error("Location information is missing.");
    }
  }


  impmap(){
    this.openGoogleMapsFromDetails();
  };


  providerId: number = 0;
  branchid: number | null = 0;

  Details(provider: ProviderI) {
    this.providerId = provider.id;
    this.isDetailsClicked = true;
    this.isBranchesClicked = false;
    provider.showdet = !provider.showdet;

    this.isBranchesDetailsClicked = false;

    this.initialPrinterface?.forEach(p => {
      if (p !== provider) {
        p.showdet = false;
      }
    });
    
    this.detserv.getApiResponse(this.providerId).subscribe(

      (response: DetailsProviders) => {
        this.detailsprv = response;
        console.log("Details");
        console.log(this.detailsprv);
    
    
      },
      error => {
        console.error(error);
        console.log("no");
      }

    );


  }

  Branches(provider: ProviderI) {
    this.providerId = provider.id;

    this.isDetailsClicked = false;
    this.isBranchesClicked = true;
    provider.showdet = !provider.showdet ;

if(provider.showdet==false){
  this.isBranchesDetailsClicked=false;
}


    this.initialPrinterface?.forEach(p => {
      if (p !== provider) {
        p.showdet = false;
      }
    });

    this.branchserv.getApiResponse(this.stuffId, this.providerId).subscribe(

      (response: LocationApiResponse) => {
        this.locinfo = response.data.items;
        console.log(this.locinfo);
      },
      error => {
        console.error(error);

      }

    );

  }




  BranchesDetails(provider: ProviderI, l: LocationInfo) {
    this.providerId = provider.id;
    this.isDetailsClicked = false;
    this.isBranchesClicked = true;
    this.branchid = l.id;
    this.isBranchesDetailsClicked = true;


    this.initialPrinterface?.forEach(p => {
      if (p !== provider) {
        p.showdet = false;
      }
    });

    this.detserv.getApiResponse_2(this.providerId, this.branchid).subscribe(


      (response: DetailsProviders) => {
        this.detailsprv = response;
        console.log("branchesDetails");
        console.log(this.detailsprv);
      },
      error => {
        console.error(error);
        console.log("no branches details");
      }

    );

  }


}