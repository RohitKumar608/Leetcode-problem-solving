// /**
//  * @param {string[]} foods
//  * @param {string[]} cuisines
//  * @param {number[]} ratings
//  */
// var FoodRatings = function (foods, cuisines, ratings) {
//   this.foods = foods.map((food, idx) => {
//     return {
//       name: food,
//       cuisine: cuisines[idx],
//       rating: ratings[idx],
//     }
//   })
// }

// /**
//  * @param {string} food
//  * @param {number} newRating
//  * @return {void}
//  */
// FoodRatings.prototype.changeRating = function (food, newRating) {
//   const foodDetails = this.foods.find((currFood) => currFood.name === food)
//   foodDetails.rating = newRating
// }

// /**
//  * @param {string} cuisine
//  * @return {string}
//  */
// FoodRatings.prototype.highestRated = function (cuisine) {
//   const filteredItems = this.foods.filter((food) => food.cuisine === cuisine)
//   filteredItems.sort((a, b) => {
//     if (b.rating === a.rating) {
//       return a.name.localeCompare(b.name)
//     }
//     return b.rating - a.rating
//   })

//   return filteredItems[0].name
// }

// /**
//  * Your FoodRatings object will be instantiated and called as such:
//  * var obj = new FoodRatings(foods, cuisines, ratings)
//  * obj.changeRating(food,newRating)
//  * var param_2 = obj.highestRated(cuisine)
//  */

// const foods = ['kimchi', 'miso', 'sushi', 'moussaka', 'ramen', 'bulgogi']
// const cuisines = [
//   'korean',
//   'japanese',
//   'japanese',
//   'greek',
//   'japanese',
//   'korean',
// ]
// const ratings = [9, 12, 8, 15, 14, 7]
// var obj = new FoodRatings(foods, cuisines, ratings)
// console.log(obj.highestRated('korean'))
// console.log(obj)

/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
// var FoodRatings = function (foods, cuisines, ratings) {
//   this.food = {}
//   this.mapping = {}
//   cuisines.forEach((cuisine, idx) => {
//     this.mapping[foods[idx]] = { cuisine, rating: ratings[idx] }
//     if (!this.food[cuisine]) {
//       this.food[cuisine] = {}
//     }
//     const cuisineFoods = this.food[cuisine]
//     if (!cuisineFoods[ratings[idx]]) {
//       cuisineFoods[ratings[idx]] = []
//     }
//     cuisineFoods[ratings[idx]].push(foods[idx])
//   })
// }

// /**
//  * @param {string} food
//  * @param {number} newRating
//  * @return {void}
//  */
// FoodRatings.prototype.changeRating = function (food, newRating) {
//   const { cuisine, rating } = this.mapping[food]
//   this.mapping[food].rating = newRating
//   const foods = this.food[cuisine][rating] || []
//   this.food[cuisine][rating] = foods.filter((val) => val !== food)
//   if (this.food[cuisine][rating].length === 0) delete this.food[cuisine][rating]
//   if (!this.food[cuisine][newRating]) {
//     this.food[cuisine][newRating] = []
//   }
//   this.food[cuisine][newRating].push(food)
// }

// /**
//  * @param {string} cuisine
//  * @return {string}
//  */
// FoodRatings.prototype.highestRated = function (cuisine) {
//   const filteredItems = this.food[cuisine]
//   let maxData = []
//   for (const key in filteredItems) {
//     maxData = filteredItems[key]
//   }
//   maxData.sort((a, b) => a.localeCompare(b))
//   return maxData[0]
// }

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */

/*
 @param{string}name
 @param{string}cuisine
 @param{number}rating
 */
function FoodData(name, cuisine, rating) {
  this.name = name
  this.cuisine = cuisine
  this.rating = rating
}

class FoodRatings {
  constructor(foods, cuisines, ratings) {
    //Map<string, FoodData>
    this.foodNameToFoodData = new Map()
    this.cuisineNameToHeapifiedFoodData = new Map()

    for (let i = 0; i < foods.length; ++i) {
      let currentFood = new FoodData(foods[i], cuisines[i], ratings[i])
      this.foodNameToFoodData.set(foods[i], currentFood)
      if (!this.cuisineNameToHeapifiedFoodData.has(cuisines[i])) {
        this.cuisineNameToHeapifiedFoodData.set(
          cuisines[i],
          new MaxPriorityQueue({
            compare: (x, y) =>
              x.rating === y.rating
                ? x.name.localeCompare(y.name)
                : y.rating - x.rating,
          })
        )
      }
      this.cuisineNameToHeapifiedFoodData.get(cuisines[i]).enqueue(currentFood)
    }
  }

  changeRating(food, newRating) {
    let toUpdate = this.foodNameToFoodData.get(food)
    let updated = new FoodData(toUpdate.name, toUpdate.cuisine, newRating)
    this.foodNameToFoodData.set(food, updated)
    this.cuisineNameToHeapifiedFoodData.get(toUpdate.cuisine).enqueue(updated)
  }

  highestRated(cuisine) {
    let highestRatedFoodForCuisine = ''
    while (true) {
      let food = this.cuisineNameToHeapifiedFoodData.get(cuisine).front()
      if (food.rating !== this.foodNameToFoodData.get(food.name).rating) {
        this.cuisineNameToHeapifiedFoodData.get(cuisine).dequeue()
      } else {
        highestRatedFoodForCuisine = food.name
        break
      }
    }
    return highestRatedFoodForCuisine
  }
}

const opr = [
  'FoodRatings',
  'highestRated',
  'changeRating',
  'changeRating',
  'highestRated',
]
const data = [
  [
    [
      'xxdcg',
      'wfqdeytt',
      'jqmfm',
      'ukqbjikyx',
      'aymciznrnw',
      'qhjjrvr',
      'wzcinxg',
      'ikxj',
    ],
    [
      'lruhtqy',
      'lruhtqy',
      'lruhtqy',
      'lruhtqy',
      'lruhtqy',
      'lruhtqy',
      'lruhtqy',
      'lruhtqy',
    ],
    [8, 6, 1, 17, 20, 2, 17, 14],
  ],
  ['lruhtqy'],
  ['wfqdeytt', 17],
  ['aymciznrnw', 9],
  ['lruhtqy'],
  ['ukqbjikyx', 10],
  ['lruhtqy'],
  ['xxdcg', 11],
  ['ikxj', 15],
  ['aymciznrnw', 10],
  ['wfqdeytt', 10],
  ['xxdcg', 16],
  ['ikxj', 2],
  ['aymciznrnw', 16],
  ['lruhtqy'],
  ['wzcinxg', 12],
  ['lruhtqy'],
]
const ratings = [9, 12, 8, 15, 14, 7, 9]
var foodRating = new FoodRatings(...data[0])
for (let i = 1; i < opr.length; i++) {
  if (opr[i] === 'highestRated') {
    console.log(foodRating.highestRated(...data[i]))
  } else {
    foodRating.changeRating(...data[i])
  }
}

console.log(foodRating)
