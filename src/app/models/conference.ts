//Conference is DTO class declared on the backend
//Best practice we need to declare it as interface
export interface Conference {
  id: number;
  title: string;
  description: string;
  picture: string;
  address: string;
  nbr_Max: number;
  nbr_Participation:number;
  date: string;
}
