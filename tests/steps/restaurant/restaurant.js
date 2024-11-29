import { request } from '../../utils/requests.js'
import { getCreateRestaurantRequestBody } from '../../utils/requestBodyGenerator/restaurant.js'

export async function createRestaurant() {
    it('Create restaurant', async function () {
        const requestBody = await getCreateRestaurantRequestBody()
        await request(this, 'POST', '/restaurants', requestBody, true, 
            {
                statusCode : 201,
                expectedValues: [
                    { path: 'name', value: requestBody.name },
                    { path: 'description', value: requestBody.description },
                ],
                expectedFields: ['user', 'meals', 'created', '__v', '_id'],
                executionVariables: [
                                        { path: '_id', name: 'restaurantId' },
                                        { path: 'name', name: 'restaurantName' },
                                        { path: 'description', name: 'restaurantDescription' }
                                    ]
            }
        )
    })
}

export async function getRestaurant() {
    it('Get restaurant', async function () {
        await request(this, 'GET', `/restaurants/${global.executionVariables['restaurantId']}`, undefined, true, 
            {
                statusCode : 200,
                expectedValues: [
                    { path: 'name', value: global.executionVariables['restaurantName'] },
                    { path: 'description', value: global.executionVariables['restaurantDescription'] },
                    { path: '_id', value: global.executionVariables['restaurantId'] }
                ],
                expectedFields: ['user']
            }
        )
    })
}

export async function deleteRestaurant() {
    it('Delete restaurant', async function () {
        await request(this, 'DELETE', `/restaurants/${global.executionVariables['restaurantId']}`, undefined, true, 
            {
                statusCode : 200,
                expectedValues: [
                    { path: 'message', value: 'Restaurant removed' }
                ]
            }
        )
    })
}