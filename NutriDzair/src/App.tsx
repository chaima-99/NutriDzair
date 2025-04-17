// App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Homepage';


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
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
