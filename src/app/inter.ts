export interface ApiResponse {
    data: {
      items: Item[];
      pagination: Pagination;
    };
    message: string;
    errorList: any[]; 
  }
  
  export interface Item {
    id: number;
    photo: string;
    name: string;
    type: string;
    hotline: string | null;
    numberOfBranches: number;
    branchId: number | null;
    area: string | null;
  }
  
 export interface Pagination {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  }
  