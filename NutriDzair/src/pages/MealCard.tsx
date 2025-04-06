import { useState } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon, 
  PhoneIcon } from '@chakra-ui/icons';
import { Icon, Icon as FireIcon } from '@chakra-ui/react';

const mockDatabase = {
  user: {
    name: "Fateh",
    dailyCalorieGoal: 1800
  },
  days: [
    {
      day: "Sunday",
      totalCalories: 1721,
      nutritionalBreakdown: {
        carbs: 211,
        fats: 36,
        protein: 129
      },
      totalCost: "1000.00DA",
      meals: [
        {
          id: 1,
          type: "Breakfast",
          name: "Avocado Toast with Eggs",
          description: "Whole grain toast topped with avocado and two poached eggs. Served with a side of berries.",
          calories: 400,
          macros: { protein: 50, carbs: 50, fats: 50 },
          rating: 4.8,
          cost: "210.00DA",
          tags: ["Mediterranean"]
        },
        {
          id: 2,
          type: "Lunch",
          name: "Grilled Chicken Salad",
          description: "Fresh mixed greens with grilled chicken, cherry tomatoes, cucumber and light vinaigrette.",
          calories: 500,
          macros: { protein: 50, carbs: 50, fats: 50 },
          rating: 4.4,
          cost: "250.00DA",
          tags: ["High Protein"]
        },
        {
          id: 3,
          type: "Dinner",
          name: "Baked Salmon with Vegetables",
          description: "Wild-caught salmon fillet baked with lemon and herbs. Served with roasted seasonal vegetables.",
          calories: 400,
          macros: { protein: 50, carbs: 50, fats: 50 },
          rating: 4.9,
          cost: "280.00DA",
          tags: ["Keto", "Mediterranean"]
        }
      ]
    },
    {
      day: "Monday",
      totalCalories: 1600,
      nutritionalBreakdown: {
        carbs: 190,
        fats: 40,
        protein: 110
      },
      totalCost: "900.00DA",
      meals: [
        {
          id: 4,
          type: "Breakfast",
          name: "Oatmeal with Nuts",
          description: "A warm bowl of oatmeal topped with mixed nuts and honey.",
          calories: 350,
          macros: { protein: 40, carbs: 60, fats: 40 },
          rating: 4.6,
          cost: "200.00DA",
          tags: ["Vegetarian"]
        },
        {
          id: 5,
          type: "Lunch",
          name: "Quinoa & Chickpea Salad",
          description: "A nutritious salad with quinoa, chickpeas, and a lemon dressing.",
          calories: 450,
          macros: { protein: 50, carbs: 50, fats: 50 },
          rating: 4.5,
          cost: "300.00DA",
          tags: ["High Fiber"]
        },
        {
          id: 6,
          type: "Dinner",
          name: "Steak with Mashed Potatoes",
          description: "Juicy grilled steak with creamy mashed potatoes.",
          calories: 550,
          macros: { protein: 60, carbs: 50, fats: 40 },
          rating: 4.7,
          cost: "400.00DA",
          tags: ["Protein-rich"]
        }
      ]
    }
  ]
};

function MealCard() {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const currentDay = mockDatabase.days[currentDayIndex];
  const [selectedMealType, setSelectedMealType] = useState("Breakfast");

  const handlePreviousDay = () => {
    setCurrentDayIndex(prev => (prev === 0 ? mockDatabase.days.length - 1 : prev - 1));
  };

  const handleNextDay = () => {
    setCurrentDayIndex(prev => (prev === mockDatabase.days.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-700 mb-2">
          Here's Your Personalized<br />
          Meal Plan, <span className="text-orange-400">{mockDatabase.user.name}</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-md mx-auto">
          Custom meal plan designed to meet your nutritional goals and food preferences.
        </p>
      </div>

      <div className="flex items-center justify-center space-x-4 mb-6">
        <button onClick={handlePreviousDay} className="p-1" title='blank'>
          <ChevronLeftIcon boxSize={5} color="gray.500" />
        </button>
        <h2 className="text-xl font-medium text-gray-700">{currentDay.day}</h2>
        <button onClick={handleNextDay} className="p-1" title='blank'>
          <ChevronRightIcon boxSize={5} color="gray.500" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="text-center">
          <p className="text-orange-400 font-medium mb-2">Daily calories :</p>
          <div className="relative mx-auto w-36 h-36">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E8F5E9"
                strokeWidth="3"
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
              <Icon as={FireIcon} boxSize={4} color="orange.500" />
            </div>
          </div>
        </div>

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

        <div className="text-center">
          <p className="text-orange-400 font-medium mb-4">Total cost for today :</p>
          <p className="text-3xl font-bold text-gray-700">{currentDay.totalCost}</p>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 rounded-full p-1 inline-flex">
          {["Breakfast", "Lunch", "Dinner"].map(mealType => (
            <button
              key={mealType}
              className={`px-6 py-1 rounded-full text-sm ${selectedMealType === mealType ? "bg-orange-400 text-white" : "text-gray-500"}`}
              onClick={() => setSelectedMealType(mealType)}
            >
              {mealType}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {currentDay.meals
          .filter(meal => meal.type === selectedMealType)
          .map(meal => (
            <div key={meal.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-200 h-40 relative">
                <div className="absolute bottom-2 right-2 bg-white rounded-md px-2 py-1 text-xs font-medium">
                  {meal.cost}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-800">{meal.name}</h3>
                  <div className="flex items-center text-yellow-500">
                    <span className="text-xs mr-1">{meal.rating}/5</span>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4">{meal.description}</p>
                <div className="flex justify-between text-xs text-gray-600 mb-4">
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
                      className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="flex flex-col items-center space-y-2">
        <button className="bg-green-500 text-white py-3 px-8 rounded-full flex items-center justify-center w-64">
          <CalendarIcon boxSize={4} mr={2} />
          Weekly view
        </button>
        <button className="text-gray-500 py-2 px-4 rounded-full border border-gray-200 flex items-center justify-center w-64">
          <Icon as={PhoneIcon} boxSize={4} mr={2} />
          return to homescreen
        </button>
      </div>
    </div>
  );
}

export default MealCard;
