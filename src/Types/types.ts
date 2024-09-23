

export interface Navitem{
    name : string
    path: string;
    element: React.ReactNode;
    // element:any
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

export interface LandingPageProps {
    children: React.ReactNode; 
  }
  