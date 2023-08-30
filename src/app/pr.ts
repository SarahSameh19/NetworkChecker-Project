export interface printerface {
    data: {
      items: null;
      pagination: null;
    };
    message: string;
    errorList: ErrorItem[];
  }
  
 export  interface ErrorItem {
    id: number;
    message: string;
  }
  