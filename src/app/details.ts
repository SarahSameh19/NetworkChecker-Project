

export interface DetailsProviders {
    data: {
      provider: {
        name: string;
        photo: string;
        type: string;
      };
      specialties: {
        major: string;
        minor: string;
      };
      contactInfo: {
        phones: string[];
        hotline: string | null;
      };
      locationInfo: {
        city: string;
        area: string;
        address: string;
        longitude: string ;
        latitude: string ;
      };
    };
    message: string;
    errorList: any[];
  }
  