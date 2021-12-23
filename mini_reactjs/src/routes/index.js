import Calculator from "../modules/Calculator";
import Colorful from "../modules/Colorful";
import HomePage from "../pages/home";

const routes = [
  {
    name: 'Home page',
    path: '/',
    element: HomePage,
    
  },
  {
    name: 'Calculator page',
    path: 'calculator',
    element: Calculator,
    
  },
  {
    name: 'Colorful page',
    path: 'colorful',
    element: Colorful,
    
  },
]

export default routes;