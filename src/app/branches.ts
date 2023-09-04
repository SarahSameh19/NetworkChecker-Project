export interface LocationInfo {
    id: number;
    area: string;
    city: string;
    address: string;
  }
  
  export interface LocationApiResponse {
    data: {
      items: LocationInfo[];
      pagination: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
      };
    };
    message: string;
    errorList: any[];
  }
  