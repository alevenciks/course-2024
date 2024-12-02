import mealRequestBody from '../../data/meal/create.json' assert { type: 'json' }
import { generateRandomString, generateRandomInteger } from '../helpers.js'

export async function getCreateOrUpdateMealRequestBody() {
    mealRequestBody.name = await generateRandomString(6)
    mealRequestBody.description = await generateRandomString(14)
    mealRequestBody.amount = await generateRandomInteger(2)
    
    return mealRequestBody
}