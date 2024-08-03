import {random} from '@/common/utils'

/* eslint-disable max-len */
const names = [
  ['Alla Napoletana', 'This pizza is created using anchovies, mozzarella, and tomatoes, offering a classic and rich flavor that stands out.'],
  ['Ave Cesare', 'Hail, Caesar! This pizza is a salute to ancient Roman tradition, blending history with delicious taste.'],
  ['Cosa Nostra', 'Our pizza is a playful nod to the Sicilian Mafia, known as "Cosa Nostra", bringing a taste of mystery and excitement.'],
  ['El rodillo de Polichinela', 'The rolling pin of Pulcinella, inspired by the Italian classical character, adds a touch of culture to your meal.'],
  ['Il Colosseo', 'The Colosseum pizza, named after the famous amphitheater in the heart of Rome, offers a grand and historic taste experience.'],
  ['La pizza di Dante', 'Dante’s Pizza, paying tribute to the major Italian poet of the Late Middle Ages, combines literary history with great flavor.'],
  ['Liguria Pizza', 'Featuring basil pesto and no tomato sauce, this pizza brings a unique flavor that is both refreshing and distinct.'],
  ['Pizza Romana', 'A delicious combination of anchovies, capers, mozzarella, and tomatoes, this pizza offers a taste of Roman culinary art.'],
  ['Pizza Veronese', 'Made simply with Prosciutto crudo and mushrooms, this pizza provides a rich and savory taste that is hard to resist.'],
  ['Pomodoro Pachina', 'Topped with arugula and cherry tomatoes, this pizza delivers a fresh, vibrant, and healthy flavor that delights.'],
]
/* eslint-enable max-len */

const randomPizza = (value: string) => {
  const index = random(0, names.length - 1)
  const zeroOrOne = Number(value !== 'name')

  return names[index]?.at(zeroOrOne) ?? 'Italian Pizza'
}

export default randomPizza
