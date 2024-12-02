import { request } from '../../utils/requests.js'
import { getCreateOrUpdateMealRequestBody } from '../../utils/requestBodyGenerator/meal.js'

export async function createMeal() {
    it('Create meal', async function () {
        const requestBody = await getCreateOrUpdateMealRequestBody()
        await request(this, 'POST', `/restaurants/${global.executionVariables['restaurantId']}/meals`, requestBody, true, 
            {
                statusCode : 201,
                expectedValues: [
                    { path: 'name', value: requestBody.name },
                    { path: 'description', value: requestBody.description },
                    { path: 'amount', value: requestBody.amount },
                    { path: 'restaurant', value: global.executionVariables['restaurantId'] },
                ],
                expectedFields: ['_id'],
                executionVariables: [
                                        { path: '_id', name: 'mealId' },
                                        { path: 'name', name: 'mealName' },
                                        { path: 'description', name: 'mealDescription' },
                                        { path: 'amount', name: 'mealAmount' }
                                    ]
            }
        )
    })
}

export async function updateMeal() {
    it('Update meal', async function () {
        const requestBody = await getCreateOrUpdateMealRequestBody()
        await request(this, 'PATCH', `/restaurants/${global.executionVariables['restaurantId']}/meals/${global.executionVariables['mealId']}`, requestBody, true, 
            {
                statusCode : 200,
                expectedValues: [
                    { path: 'name', value: requestBody.name },
                    { path: 'description', value: requestBody.description },
                    { path: 'amount', value: requestBody.amount },
                    { path: 'restaurant', value: global.executionVariables['restaurantId'] },
                    { path: '_id', value: global.executionVariables['mealId'] },
                ],
                executionVariables: [
                                        { path: 'name', name: 'mealName' },
                                        { path: 'description', name: 'mealDescription' },
                                        { path: 'amount', name: 'mealAmount' }
                                    ]
            }
        )
    })
}

export async function getMeals() {
    it('Get meals', async function () {
        await request(this, 'GET', `/restaurants/${global.executionVariables['restaurantId']}/meals`, undefined, true, 
            {
                statusCode : 200,
                expectedValuesInArrayOfObjects: {
                    fields: [
                        { path: 'restaurant', value: global.executionVariables['restaurantId'] },
                        { path: '_id', value: global.executionVariables['mealId'] }
                    ],
                    key: '_id',
                    value: global.executionVariables['mealId']
                }
            }
        )
    })
}

export async function deleteMeal() {
    it('Delete meal', async function () {
        await request(this, 'DELETE', `/restaurants/${global.executionVariables['restaurantId']}/meals/${global.executionVariables['mealId']}`, undefined, true, 
            {
                statusCode : 200,
                expectedValues: [
                    { path: 'message', value: 'Meal removed' }
                ]
            }
        )
    })
}