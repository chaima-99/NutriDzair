
// App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Homepage';
import MealPlanner from './pages/MealPlanner/MealPlanner';
import Loading from './pages/loading';
import Hero from './Components/hero';

// Create router with all your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/meal-planner',
    element: <MealPlanner />,
  },
  {
    path: '/loading',
    element: <Loading />,
  },
  {
    path: '/input',
    element: <Hero />
  }
]);

function App() {
  return (
    //<RouterProvider router={router} />
    <MealPlanner/>
  );
}

export default App;
