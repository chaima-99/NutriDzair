// src/App.jsx
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Flame, Home, Calendar } from 'lucide-react';
// Mock database with all days of the week
// const mockDatabase = {
//   user: {
//     name: "Fateh",
//     dailyCalorieGoal: 1800
//   },
//   days: [
//     {
//       day: "Sunday",
//       totalCalories: 1721,
//       nutritionalBreakdown: {
//         carbs: 211,
//         fats: 36,
//         protein: 129
//       },
//       totalCost: "1000.00DA",
//       meals: [
//         {
//           id: 1,
//           type: "Breakfast",
//           name: "Avocado Toast with Eggs",
//           description: "Whole grain toast topped with avocado and two poached eggs. Served with a side of berries.",
//           calories: 400,
//           macros: {
//             protein: 50,
//             carbs: 50,
//             fats: 50
//           },
//           rating: 4.8,
//           cost: "210.00DA",
//           tags: ["Mediterranean"]
//         },
//         {
//           id: 2,
//           type: "Lunch",
//           name: "Grilled Chicken Salad",
//           description: "Fresh mixed greens with grilled chicken, cherry tomatoes, cucumber and light vinaigrette.",
//           calories: 500,
//           macros: {
//             protein: 50,
//             carbs: 50,
//             fats: 50
//           },
//           rating: 4.4,
//           cost: "250.00DA",
//           tags: ["High Protein"]
//         },
//         {
//           id: 3,
//           type: "Dinner",
//           name: "Baked Salmon with Vegetables",
//           description: "Wild-caught salmon fillet baked with lemon and herbs. Served with roasted seasonal vegetables.",
//           calories: 400,
//           macros: {
//             protein: 50,
//             carbs: 50,
//             fats: 50
//           },
//           rating: 4.9,
//           cost: "280.00DA",
//           tags: ["Keto", "Mediterranean"]
//         }
//       ]
//     },
//     {
//       day: "Monday",
//       totalCalories: 1650,
//       nutritionalBreakdown: {
//         carbs: 205,
//         fats: 32,
//         protein: 115
//       },
//       totalCost: "950.00DA",
//       meals: [
//         {
//           id: 4,
//           type: "Breakfast",
//           name: "Greek Yogurt Parfait",
//           description: "Greek yogurt layered with fresh berries, honey, and homemade granola.",
//           calories: 380,
//           macros: {
//             protein: 45,
//             carbs: 55,
//             fats: 40
//           },
//           rating: 4.6,
//           cost: "180.00DA",
//           tags: ["Vegetarian"]
//         },
//         {
//           id: 5,
//           type: "Lunch",
//           name: "Mediterranean Bowl",
//           description: "Quinoa bowl with chickpeas, cucumber, tomato, olives, feta cheese and tahini dressing.",
//           calories: 520,
//           macros: {
//             protein: 45,
//             carbs: 65,
//             fats: 48
//           },
//           rating: 4.7,
//           cost: "270.00DA",
//           tags: ["Mediterranean", "Vegetarian"]
//         },
//         {
//           id: 6,
//           type: "Dinner",
//           name: "Turkey Meatballs with Zoodles",
//           description: "Lean turkey meatballs served over zucchini noodles with homemade marinara sauce.",
//           calories: 450,
//           macros: {
//             protein: 55,
//             carbs: 30,
//             fats: 42
//           },
//           rating: 4.5,
//           cost: "240.00DA",
//           tags: ["Low Carb"]
//         }
//       ]
//     },
//     {
//       day: "Tuesday",
//       totalCalories: 1750,
//       nutritionalBreakdown: {
//         carbs: 220,
//         fats: 38,
//         protein: 140
//       },
//       totalCost: "1050.00DA",
//       meals: [
//         {
//           id: 7,
//           type: "Breakfast",
//           name: "Protein Smoothie Bowl",
//           description: "Protein-packed smoothie with banana, berries, almond milk, topped with seeds and nuts.",
//           calories: 420,
//           macros: {
//             protein: 52,
//             carbs: 58,
//             fats: 45
//           },
//           rating: 4.7,
//           cost: "200.00DA",
//           tags: ["High Protein", "Vegetarian"]
//         },
//         {
//           id: 8,
//           type: "Lunch",
//           name: "Chicken Wrap",
//           description: "Whole grain wrap with grilled chicken, avocado, lettuce, tomato and light dressing.",
//           calories: 550,
//           macros: {
//             protein: 48,
//             carbs: 62,
//             fats: 52
//           },
//           rating: 4.3,
//           cost: "280.00DA",
//           tags: ["High Protein"]
//         },
//         {
//           id: 9,
//           type: "Dinner",
//           name: "Beef Stir Fry",
//           description: "Lean beef strips stir-fried with mixed vegetables and served with brown rice.",
//           calories: 480,
//           macros: {
//             protein: 58,
//             carbs: 55,
//             fats: 44
//           },
//           rating: 4.6,
//           cost: "300.00DA",
//           tags: ["High Protein"]
//         }
//       ]
//     },
//     {
//       day: "Wednesday",
//       totalCalories: 1680,
//       nutritionalBreakdown: {
//         carbs: 200,
//         fats: 35,
//         protein: 125
//       },
//       totalCost: "980.00DA",
//       meals: [
//         {
//           id: 10,
//           type: "Breakfast",
//           name: "Veggie Omelette",
//           description: "Three egg omelette with spinach, mushrooms, onions and a sprinkle of cheese.",
//           calories: 350,
//           macros: {
//             protein: 48,
//             carbs: 42,
//             fats: 50
//           },
//           rating: 4.8,
//           cost: "190.00DA",
//           tags: ["Keto", "Vegetarian"]
//         },
//         {
//           id: 11,
//           type: "Lunch",
//           name: "Tuna Salad Sandwich",
//           description: "Whole grain bread with tuna salad, lettuce, tomato and a side of fresh fruits.",
//           calories: 480,
//           macros: {
//             protein: 52,
//             carbs: 58,
//             fats: 45
//           },
//           rating: 4.2,
//           cost: "260.00DA",
//           tags: ["High Protein"]
//         },
//         {
//           id: 12,
//           type: "Dinner",
//           name: "Vegetable Curry",
//           description: "Mixed vegetables in a flavorful curry sauce served with a small portion of basmati rice.",
//           calories: 420,
//           macros: {
//             protein: 45,
//             carbs: 52,
//             fats: 48
//           },
//           rating: 4.7,
//           cost: "230.00DA",
//           tags: ["Vegetarian"]
//         }
//       ]
//     },
//     {
//       day: "Thursday",
//       totalCalories: 1700,
//       nutritionalBreakdown: {
//         carbs: 215,
//         fats: 37,
//         protein: 130
//       },
//       totalCost: "1020.00DA",
//       meals: [
//         {
//           id: 13,
//           type: "Breakfast",
//           name: "Overnight Oats",
//           description: "Oats soaked overnight with almond milk, chia seeds, and topped with fresh fruits.",
//           calories: 380,
//           macros: {
//             protein: 42,
//             carbs: 60,
//             fats: 44
//           },
//           rating: 4.5,
//           cost: "175.00DA",
//           tags: ["Vegetarian"]
//         },
//         {
//           id: 14,
//           type: "Lunch",
//           name: "Quinoa Salad",
//           description: "Quinoa with mixed vegetables, chickpeas, and lemon-herb dressing.",
//           calories: 510,
//           macros: {
//             protein: 48,
//             carbs: 62,
//             fats: 46
//           },
//           rating: 4.6,
//           cost: "245.00DA",
//           tags: ["Vegetarian", "Mediterranean"]
//         },
//         {
//           id: 15,
//           type: "Dinner",
//           name: "Grilled Steak",
//           description: "Lean grilled steak with roasted sweet potatoes and steamed broccoli.",
//           calories: 520,
//           macros: {
//             protein: 58,
//             carbs: 52,
//             fats: 50
//           },
//           rating: 4.9,
//           cost: "320.00DA",
//           tags: ["High Protein"]
//         }
//       ]
//     },
//     {
//       day: "Friday",
//       totalCalories: 1630,
//       nutritionalBreakdown: {
//         carbs: 195,
//         fats: 34,
//         protein: 120
//       },
//       totalCost: "930.00DA",
//       meals: [
//         {
//           id: 16,
//           type: "Breakfast",
//           name: "Protein Pancakes",
//           description: "Protein-enriched pancakes topped with fresh berries and a light drizzle of maple syrup.",
//           calories: 420,
//           macros: {
//             protein: 45,
//             carbs: 52,
//             fats: 42
//           },
//           rating: 4.7,
//           cost: "210.00DA",
//           tags: ["High Protein"]
//         },
//         {
//           id: 17,
//           type: "Lunch",
//           name: "Lentil Soup",
//           description: "Hearty lentil soup with carrots, celery, and onions, served with a small whole grain roll.",
//           calories: 480,
//           macros: {
//             protein: 46,
//             carbs: 58,
//             fats: 40
//           },
//           rating: 4.4,
//           cost: "220.00DA",
//           tags: ["Vegetarian"]
//         },
//         {
//           id: 18,
//           type: "Dinner",
//           name: "Baked Chicken",
//           description: "Herb-roasted chicken breast with quinoa and roasted seasonal vegetables.",
//           calories: 460,
//           macros: {
//             protein: 55,
//             carbs: 48,
//             fats: 42
//           },
//           rating: 4.6,
//           cost: "280.00DA",
//           tags: ["High Protein"]
//         }
//       ]
//     },
//     {
//       day: "Saturday",
//       totalCalories: 1780,
//       nutritionalBreakdown: {
//         carbs: 225,
//         fats: 40,
//         protein: 135
//       },
//       totalCost: "1080.00DA",
//       meals: [
//         {
//           id: 19,
//           type: "Breakfast",
//           name: "Breakfast Burrito",
//           description: "Whole grain wrap filled with scrambled eggs, black beans, avocado, and salsa.",
//           calories: 450,
//           macros: {
//             protein: 48,
//             carbs: 55,
//             fats: 46
//           },
//           rating: 4.8,
//           cost: "230.00DA",
//           tags: ["High Protein"]
//         },
//         {
//           id: 20,
//           type: "Lunch",
//           name: "Poke Bowl",
//           description: "Fresh raw fish with rice, avocado, cucumber, and sesame-soy dressing.",
//           calories: 520,
//           macros: {
//             protein: 52,
//             carbs: 60,
//             fats: 48
//           },
//           rating: 4.9,
//           cost: "350.00DA",
//           tags: ["High Protein"]
//         },
//         {
//           id: 21,
//           type: "Dinner",
//           name: "Vegetable Pasta",
//           description: "Whole grain pasta with mixed vegetables in a light tomato sauce.",
//           calories: 480,
//           macros: {
//             protein: 42,
//             carbs: 65,
//             fats: 44
//           },
//           rating: 4.5,
//           cost: "260.00DA",
//           tags: ["Vegetarian"]
//         }
//       ]
//     }
//   ]
// };

// function MealCard() {
//   const [currentDayIndex, setCurrentDayIndex] = useState(0);
//   const currentDay = mockDatabase.days[currentDayIndex];
//   const [selectedMealType, setSelectedMealType] = useState("Breakfast");

//   // Navigation functions to move between days
//   const handlePreviousDay = () => {
//     setCurrentDayIndex(prevIndex => 
//       prevIndex === 0 ? mockDatabase.days.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNextDay = () => {
//     setCurrentDayIndex(prevIndex => 
//       prevIndex === mockDatabase.days.length - 1 ? 0 : prevIndex + 1
//     );
//   };

import { mockDatabase } from './Database_result_interface';

function MealCard() {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [mockDatabase, setMockDatabase] = useState(null);

  // Fetch the mock database from the JSON file
  useEffect(() => {
    fetch('./././mockDatabase.json')
      .then((response) => response.json())
      .then((data) => setMockDatabase(data))
      .catch((error) => console.error('Error fetching the data:', error));
  }, []);

  // Return null if the data is not yet loaded
  if (!mockDatabase) return null;

  const currentDay = mockDatabase.days[currentDayIndex];
  const [selectedMealType, setSelectedMealType] = useState("Breakfast");

  // Navigation functions to move between days
  const handlePreviousDay = () => {
    setCurrentDayIndex(prevIndex =>
      prevIndex === 0 ? mockDatabase.days.length - 1 : prevIndex - 1
    );
  };

  const handleNextDay = () => {
    setCurrentDayIndex(prevIndex =>
      prevIndex === mockDatabase.days.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto text-xl p-4 font-sans bg-white text-gray-800">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-gray-700 mb-8">
          Here's Your Personalized<br />Meal Plan, <span className="text-orange-400">{mockDatabase.user.name}</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-md mx-auto">
          Custom meal plan designed to meet your nutritional goals and food preferences. 
          Adjust and customize as needed to fit your lifestyle.
        </p>
      </div>

      <div className="flex items-center justify-center space-x-4 mb-6 ">
        <button 
          onClick={handlePreviousDay} 
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Previous day"
        >
          <ChevronLeft className="w-7 h-7 text-gray-500" />
        </button>
        <h2 className="text-2xl font-medium text-gray-700">{currentDay.day}</h2>
        <button 
          onClick={handleNextDay} 
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Next day"
        >
          <ChevronRight className="w-7 h-7 text-gray-500" />
        </button>
      </div>

      <div className="max-w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-2xl">
        {/* Daily Calories */}
        <div className="text-center">
          <p className="text-orange-400 font-medium mb-2 text-2xl">Daily calories :</p>
          <div className="relative mx-auto w-36 h-36">
            {/* Circular progress bar */}
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E8F5E9"
                strokeWidth="3"
                strokeDasharray="100, 100"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#4ADE80"
                strokeWidth="3"
                strokeDasharray={`${(currentDay.totalCalories / mockDatabase.user.dailyCalorieGoal) * 100}, 100`}
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="text-2xl font-bold text-gray-700">{currentDay.totalCalories}</span>
              <Flame className="w-6 h-6 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Nutritional Breakdown */}
        <div className="text-center">
          <p className="text-orange-400 font-medium mb-4">Nutritional Breakdown :</p>
          <div className="flex justify-center space-x-6">
            <div className="text-center">
              <span className="text-gray-700 font-bold block">{currentDay.nutritionalBreakdown.carbs}g</span>
              <span className="text-sm text-gray-500">Carbs</span>
            </div>
            <div className="text-center">
              <span className="text-gray-700 font-bold block">{currentDay.nutritionalBreakdown.fats}g</span>
              <span className="text-sm text-gray-500">Fats</span>
            </div>
            <div className="text-center">
              <span className="text-gray-700 font-bold block">{currentDay.nutritionalBreakdown.protein}g</span>
              <span className="text-sm text-gray-500">Protein</span>
            </div>
          </div>
        </div>

        {/* Total Cost */}
        <div className="text-center">
          <p className="text-orange-400 font-medium mb-4">Total cost for today :</p>
          <p className="text-3xl font-bold text-gray-700">{currentDay.totalCost}</p>
        </div>
      </div>

      {/* Meal Type Selector */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 rounded-full p-2 inline-flex">
          {["Breakfast", "Lunch", "Dinner"].map(mealType => (
            <button
              key={mealType}
              className={`px-6 py-1 rounded-full text-m ${
                selectedMealType === mealType
                  ? "bg-orange-400 text-white"
                  : "text-gray-600 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedMealType(mealType)}
            >
              {mealType}
            </button>
          ))}
        </div>
      </div>

      {/* Meal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {currentDay.meals
          .filter(meal => meal.type === selectedMealType)
          .map(meal => (
            <div key={meal.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-200 h-60 relative">
                {/* Placeholder for meal image */}
                <div className="absolute bottom-2 right-2 bg-white rounded-md px-2 py-1 text-xl font-medium">
                  {meal.cost}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4 h-20">
                  <h3 className="font-bold text-gray-800">{meal.name}</h3>
                  <div className="flex items-center text-yellow-500 font-medium">
                    <span className="text-m mr-1">{meal.rating}/5</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{meal.description}</p>
                <div className="flex justify-between text-xs text-gray-700 mb-4">
                  <div className="text-center">
                    <span className="block font-medium">{meal.calories}kcal</span>
                    <span>calories</span>
                  </div>
                  <div className="text-center">
                    <span className="block font-medium">{meal.macros.protein}g</span>
                    <span>protein</span>
                  </div>
                  <div className="text-center">
                    <span className="block font-medium">{meal.macros.carbs}g</span>
                    <span>carbs</span>
                  </div>
                  <div className="text-center">
                    <span className="block font-medium">{meal.macros.fats}g</span>
                    <span>fats</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {meal.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-s bg-green-200 text-green-800 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Footer buttons */}
      <div className="flex flex-col items-center space-y-2">
        <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full flex items-center justify-center w-64 transition-colors">
          <Calendar className="w-6 h-6 mr-2" />
          Weekly view
        </button>
        <button className="text-gray-500 hover:text-gray-700 py-2 px-4 rounded-full border border-gray-200 hover:border-gray-300 flex items-center justify-center w-75 transition-colors">
          <Home className="w-6 h-6 mr-2" />
          <a href="Homepages.tsx">return to homescreen</a>
        </button>
      </div>
    </div>
  );
}

export default MealCard;