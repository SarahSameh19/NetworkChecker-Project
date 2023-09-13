
export interface ProviderI {
  id: number;
  photo: string;
  name: string;
  type: string;
  hotline: string | null;
  numberOfBranches: number;
  branchId: number | null;
  area: string | null;
  showdet:boolean;
}

export interface printerface {
    data: {
      items: ProviderI[] ;
      pagination: null;
    };
    message: string;
    errorList: ErrorItem[];
  }
  
 export  interface ErrorItem {
    id: number;
    message: string;
  }
  