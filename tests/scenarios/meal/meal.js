import { createUser, loginUser, deleteUser } from '../../steps/user/user.js'
import { createRestaurant, deleteRestaurant } from '../../steps/restaurant/restaurant.js'
import { createMeal, deleteMeal, getMeals, updateMeal } from '../../steps/meal/meal.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
    createUser()
    loginUser()
    createRestaurant()
})

after(async () => {
    deleteRestaurant() 
    deleteUser()
})

it('Meal Test set', () => {
    describe(`CRUD Meal`, () => {
        createMeal()
        getMeals()
        updateMeal()
        getMeals()
        deleteMeal()
    })
})
