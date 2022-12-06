import { v4 as uuid } from 'uuid';

export default function generateItems() {
  const fullList = [
    { name: '🍞 Bread', amount: 1, id: uuid() },
    { name: '🥛 Milk', amount: 1, id: uuid() },
    { name: '🍪 Chocolate cookies', amount: 2, id: uuid() },
    { name: '🍟 French Fries', amount: 2, id: uuid() },
    { name: '🧋 Bubble Tea', amount: 2, id: uuid() },
    { name: '🥟 Dumplings', amount: 1, id: uuid() },
    { name: '🍚 Rice', amount: 1, id: uuid() },
    { name: '🧂 Salt', amount: 1, id: uuid() },
    { name: '🧈 Butter', amount: 1, id: uuid() },
    { name: '🍿 Popcorn', amount: 2, id: uuid() },
    { name: '🥚 Eggs', amount: 10, id: uuid() },
    { name: '🧀 Cheese', amount: 1, id: uuid() },
    { name: '🫐 Blueberries', amount: 2, id: uuid() },
    { name: '🥝 Kiwi', amount: 3, id: uuid() },
    { name: '🧄 Garlic', amount: 1, id: uuid() },
    { name: '🍅 Tomatoes', amount: 4, id: uuid() },
    { name: '🥑 Avocado', amount: 2, id: uuid() },
    { name: '🥕 Carrot', amount: 3, id: uuid() },
    { name: '🥒 Cucumber', amount: 1, id: uuid() },
  ];

  const shuffledList = fullList.sort(() => 0.5 - Math.random());
  return shuffledList.slice(0, Math.floor(Math.random() * (15 - 5) + 5));
};
