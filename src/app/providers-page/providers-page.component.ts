import { Component, OnInit, Provider } from '@angular/core';
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


@Component({
  selector: 'app-providers-page',
  templateUrl: './providers-page.component.html',
  styleUrls: ['./providers-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate('0.5s ease-out')]),
      transition(':leave', animate('0.5s ease-in', style({ opacity: 0 }))),  ]),
    ],



})
export class ProvidersPageComponent implements OnInit {

  stuffId: string = '';
  public isDetailsClicked: boolean = false;
  public isBranchesClicked: boolean = false;


  public initialPrinterface: ProviderI[] | null = null;
  public locinfo: LocationInfo[] | null = null;
  public detailsprv: DetailsProviders | null = null;

  constructor(
    private route: ActivatedRoute,
    private server: CallApiService,
    private router: Router,
    private prcl: ProviderCallingService,
    private detserv: DetailsService,
    private branchserv: BranchesService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.stuffId = params['stuffId'] || '';

      this.prcl.getApiResponse(this.stuffId).subscribe(
        (response: printerface) => {
          this.initialPrinterface = response.data.items;
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
  providerId: number = 0;

  Details(provider: ProviderI) {
    this.providerId = provider.id;
    this.isDetailsClicked = true;
    this.isBranchesClicked = false;
    provider.showdet = !provider.showdet;


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
    provider.showdet = !provider.showdet;


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


}
