import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import Rootlayout from './pages/Rootlayout';
import Productpage from './pages/Productpage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        { index: true, element: <Homepage /> },
        { path: 'products', element: <Productpage /> },
        { path: 'about', element: <Aboutpage /> },
        { path: 'contact', element: <Contactpage /> }
      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App;
