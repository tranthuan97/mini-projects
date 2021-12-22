import { Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
  const renderRoute = (item, index) => {
    return <Route key={index} path={item.path} element={<item.element />} />
  }

  return (
    <div>
      <Routes>
        {routes.map(renderRoute)}
      </Routes>
    </div>
  );
}

export default App;
