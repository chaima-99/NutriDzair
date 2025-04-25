interface NutritionalBreakdown {
  carbs: number;
  fats: number;
  protein: number;
}

interface Meal {
  id: number;
  type: string;
  name: string;
  description: string;
  calories: number;
  macros: NutritionalBreakdown;
  rating: number;
  cost: string;
  tags: string[];
}

interface Day {
  day: string;
  totalCalories: number;
  nutritionalBreakdown: NutritionalBreakdown;
  totalCost: string;
  meals: Meal[];
}

interface mockDatabase {
  user: {
    name: string;
    dailyCalorieGoal: number;
  };
  days: Day[];
}