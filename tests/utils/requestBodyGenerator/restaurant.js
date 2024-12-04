import restaurantRequestBody from '../../data/restaurant/create.json' assert { type: 'json' }
import { generateRandomString } from '../helpers.js'
import { faker } from '@faker-js/faker'

export async function getCreateOrUpdateRestaurantRequestBody() {
    restaurantRequestBody.name = faker.company.name()
    restaurantRequestBody.description = faker.food.ethnicCategory()
    
    return restaurantRequestBody
}