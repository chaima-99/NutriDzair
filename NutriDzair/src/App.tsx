// App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Homepage';
import MealPlanner from './pages/MealPlanner/MealPlanner';

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
]);

function App() {
  return (
    <RouterProvider router={router}>
      <h1>Welcome to NutriDzair</h1>
    </RouterProvider>
  );
}

export default App;
