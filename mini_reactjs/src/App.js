import { Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './modules/Todo';
import Todo2 from './modules/Todo2';
import routes from './routes';

function App() {
  const renderRoute = (item, index) => {
    return <Route key={index} path={item.path} element={<item.element />} />
  }

  return (
    <div>
      <Routes>
        {/* {routes.map(renderRoute)} */}
        <Route path="/" element={<Todo2 />} />
      </Routes>
    </div>
  );
}

export default App;
