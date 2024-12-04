import mealRequestBody from '../../data/meal/create.json' assert { type: 'json' }
import { generateRandomString, generateRandomInteger } from '../helpers.js'
import { faker } from '@faker-js/faker'

export async function getCreateOrUpdateMealRequestBody() {
    mealRequestBody.name = faker.food.dish()
    mealRequestBody.description = faker.food.description()
    mealRequestBody.amount = faker.number.int({min: 1, max: 100})
    
    return mealRequestBody
}