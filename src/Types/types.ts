export interface Navitem{
    name :string;
    path: string;
}

export interface AppRoutesProps {
    routes: Navitem[];
  }

 export  interface BreadcrumbItem {
    name: string;
    path: string;
  }
  
 export interface BreadcrumbProps {
    navItems: BreadcrumbItem[];
  }
  