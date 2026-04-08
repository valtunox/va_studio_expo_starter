export const PROFILE = {
  name: 'Alex',
  calorieTarget: 2100,
  proteinTarget: 140,
  carbsTarget: 230,
  fatTarget: 70,
  fiberTarget: 30,
  waterTarget: 8,
  currentWeight: 172,
  targetWeight: 165,
  height: 70,
  streak: 12,
  dietType: 'Balanced',
};

export const TODAY = {
  caloriesConsumed: 1467,
  protein: 89,
  carbs: 156,
  fat: 42,
  fiber: 18,
  waterConsumed: 5,
  meals: [
    { id: '1', type: 'breakfast', name: 'Greek Yogurt Bowl', calories: 340, protein: 28, carbs: 35, fat: 12, time: '7:30 AM', emoji: '🥣' },
    { id: '2', type: 'lunch', name: 'Grilled Chicken Salad', calories: 520, protein: 42, carbs: 28, fat: 22, time: '12:15 PM', emoji: '🥗' },
    { id: '3', type: 'snack', name: 'Protein Shake', calories: 220, protein: 30, carbs: 15, fat: 5, time: '3:00 PM', emoji: '🥤' },
    { id: '4', type: 'dinner', name: 'Salmon & Quinoa', calories: 580, protein: 38, carbs: 45, fat: 24, time: '7:00 PM', emoji: '🐟' },
  ],
};

export const RECIPES = [
  { id: '1', title: 'Avocado Toast & Eggs', category: 'Breakfast', calories: 380, protein: 18, carbs: 32, fat: 22, time: '10 min', difficulty: 'Easy', rating: 4.8, emoji: '🥑', featured: true },
  { id: '2', title: 'Chicken Stir Fry', category: 'Dinner', calories: 450, protein: 38, carbs: 35, fat: 16, time: '25 min', difficulty: 'Medium', rating: 4.7, emoji: '🍳', featured: true },
  { id: '3', title: 'Berry Protein Smoothie', category: 'Snack', calories: 280, protein: 32, carbs: 28, fat: 6, time: '5 min', difficulty: 'Easy', rating: 4.9, emoji: '🫐', featured: false },
  { id: '4', title: 'Quinoa Buddha Bowl', category: 'Lunch', calories: 520, protein: 22, carbs: 58, fat: 18, time: '20 min', difficulty: 'Easy', rating: 4.6, emoji: '🥙', featured: true },
  { id: '5', title: 'Overnight Oats', category: 'Breakfast', calories: 350, protein: 15, carbs: 52, fat: 10, time: '5 min', difficulty: 'Easy', rating: 4.8, emoji: '🥣', featured: false },
  { id: '6', title: 'Salmon Poke Bowl', category: 'Lunch', calories: 480, protein: 35, carbs: 42, fat: 20, time: '15 min', difficulty: 'Easy', rating: 4.9, emoji: '🍣', featured: true },
  { id: '7', title: 'Sweet Potato Curry', category: 'Dinner', calories: 420, protein: 12, carbs: 55, fat: 18, time: '35 min', difficulty: 'Medium', rating: 4.5, emoji: '🍛', featured: false },
  { id: '8', title: 'Greek Salad Wrap', category: 'Lunch', calories: 390, protein: 20, carbs: 38, fat: 16, time: '10 min', difficulty: 'Easy', rating: 4.4, emoji: '🌯', featured: false },
  { id: '9', title: 'Protein Energy Balls', category: 'Snack', calories: 180, protein: 14, carbs: 18, fat: 8, time: '15 min', difficulty: 'Easy', rating: 4.7, emoji: '🟤', featured: false },
  { id: '10', title: 'Grilled Chicken Breast', category: 'Dinner', calories: 320, protein: 45, carbs: 4, fat: 12, time: '20 min', difficulty: 'Easy', rating: 4.6, emoji: '🍗', featured: false },
];

export const MEAL_PLAN = {
  monday: [
    { type: 'breakfast', name: 'Overnight Oats', calories: 350, emoji: '🥣' },
    { type: 'lunch', name: 'Quinoa Buddha Bowl', calories: 520, emoji: '🥙' },
    { type: 'dinner', name: 'Grilled Salmon', calories: 480, emoji: '🐟' },
  ],
  tuesday: [
    { type: 'breakfast', name: 'Avocado Toast & Eggs', calories: 380, emoji: '🥑' },
    { type: 'lunch', name: 'Greek Salad Wrap', calories: 390, emoji: '🌯' },
    { type: 'dinner', name: 'Chicken Stir Fry', calories: 450, emoji: '🍳' },
  ],
  wednesday: [
    { type: 'breakfast', name: 'Berry Smoothie', calories: 280, emoji: '🫐' },
    { type: 'lunch', name: 'Salmon Poke Bowl', calories: 480, emoji: '🍣' },
    { type: 'dinner', name: 'Sweet Potato Curry', calories: 420, emoji: '🍛' },
  ],
  thursday: [
    { type: 'breakfast', name: 'Greek Yogurt Bowl', calories: 340, emoji: '🥣' },
    { type: 'lunch', name: 'Chicken Caesar Wrap', calories: 420, emoji: '🌯' },
    { type: 'dinner', name: 'Grilled Chicken', calories: 320, emoji: '🍗' },
  ],
  friday: [
    { type: 'breakfast', name: 'Protein Pancakes', calories: 360, emoji: '🥞' },
    { type: 'lunch', name: 'Tuna Salad', calories: 380, emoji: '🥗' },
    { type: 'dinner', name: 'Pasta Primavera', calories: 520, emoji: '🍝' },
  ],
  saturday: [
    { type: 'breakfast', name: 'Acai Bowl', calories: 400, emoji: '🫐' },
    { type: 'lunch', name: 'Falafel Plate', calories: 500, emoji: '🧆' },
    { type: 'dinner', name: 'Sushi Platter', calories: 550, emoji: '🍣' },
  ],
  sunday: [
    { type: 'breakfast', name: 'French Toast', calories: 420, emoji: '🍞' },
    { type: 'lunch', name: 'Grilled Veggie Bowl', calories: 380, emoji: '🥗' },
    { type: 'dinner', name: 'Herb Roasted Chicken', calories: 480, emoji: '🍗' },
  ],
};

export const WEIGHT_HISTORY = [
  { date: 'Mar 1', weight: 178 },
  { date: 'Mar 8', weight: 177 },
  { date: 'Mar 15', weight: 176 },
  { date: 'Mar 22', weight: 175.5 },
  { date: 'Mar 29', weight: 174 },
  { date: 'Apr 5', weight: 173.5 },
  { date: 'Apr 12', weight: 173 },
  { date: 'Apr 19', weight: 172 },
];

export const WEEKLY_CALORIES = [
  { day: 'Mon', value: 1950 },
  { day: 'Tue', value: 2100 },
  { day: 'Wed', value: 1880 },
  { day: 'Thu', value: 2050 },
  { day: 'Fri', value: 2200 },
  { day: 'Sat', value: 1750 },
  { day: 'Sun', value: 1467 },
];

export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;

export const CATEGORIES = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack'] as const;
