export interface Employment {
    company: String;
    imgUrl?: String;
    period: String;
    location?: String;
    detail: {
      title?: String;
      responsibilitie: Array<String>;
      additional?: {
        title?: String;
        Responsibilitie?: Array<String>;
      },
      others?: {
        title: String;
        otherInformation: Array<String>;
      }  
    }  
}
