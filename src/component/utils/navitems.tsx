import { Navitem } from "../../Types/types";
import Nav1 from "../Nav1";
import Nav2 from "../Nav2";
import Nav3 from "../Nav3";



export const navItems: Navitem[] = [
    {
      name: "Nav" ,
      path: '/nav1',
      element: <Nav1 />
    },
    {
      name:"Nav2",
      path: '/nav2',
      element: <Nav2 />
    },
    {
      name:"Nav3",
      path: '/nav3',
      element: <Nav3 />
    },
    
    {
      name: "" ,
      path: '/', 
      element: ""
    },
    
  ];
