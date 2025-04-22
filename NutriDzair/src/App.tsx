
// App.tsx
//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import HomePage from './pages/Homepage';
import MealPlanner from "./pages/MealPlanner/MealPlanner";

// Create router with all your routes
/*const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);*/

function App() {
  return (
    //<RouterProvider router={router} />
    <MealPlanner/>
  );
}

export default App;
