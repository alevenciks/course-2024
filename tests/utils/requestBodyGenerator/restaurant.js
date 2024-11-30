import restaurantRequestBody from '../../data/restaurant/create.json' assert { type: 'json' }
import { generateRandomString } from '../helpers.js'

export async function getCreateOrUpdateRestaurantRequestBody() {
    restaurantRequestBody.name = await generateRandomString(6)
    restaurantRequestBody.description = await generateRandomString(14)
    
    return restaurantRequestBody
}