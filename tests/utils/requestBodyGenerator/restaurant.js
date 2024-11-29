import restaurantRequestBody from '../../data/restaurant/create.json' assert { type: 'json' }
import { generateRandomString } from '../helpers.js'

export async function getCreateRestaurantRequestBody() {
    restaurantRequestBody.name = await generateRandomString()
    restaurantRequestBody.description = await generateRandomString()
    
    return restaurantRequestBody
}