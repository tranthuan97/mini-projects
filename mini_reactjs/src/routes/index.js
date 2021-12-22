import Calculator from "../modules/Calculator";
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
]

export default routes;