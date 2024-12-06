import { request } from '../../utils/requests.js'
import { getCreateOrUpdateCourierRequestBody } from '../../utils/requestBodyGenerator/courier.js'

export async function createCourier() {
    it('Create courier', async function () {
        const requestBody = await getCreateOrUpdateCourierRequestBody()
        await request(this, 'POST', '/couriers', requestBody, true, 
            {
                statusCode : 201,
                expectedValues: [
                    { path: 'name', value: requestBody.name },
                    { path: 'surname', value: requestBody.surname },
                    { path: 'phoneNumber', value: requestBody.phoneNumber },
                    { path: 'transport', value: requestBody.transport },
                    { path: 'status', value: 'available' }
                ],
                expectedFields: ['_id'],
                executionVariables: [
                                        { path: '_id', name: 'courierId' },
                                        { path: 'name', name: 'courierName' },
                                        { path: 'surname', name: 'courierSurname' },
                                        { path: 'phoneNumber', name: 'courierPhone' },
                                        { path: 'status', name: 'courierStatus' }
                                    ]
            }
        )
    })
}

export async function deleteCourier() {
    it('Delete courier', async function () {
        await request(this, 'DELETE', `/couriers/${global.executionVariables['courierId']}`, undefined, true, 
            {
                statusCode : 200,
                expectedValues: [
                    { path: 'message', value: 'Courier successfully removed' }
                ]
            }
        )
    })
}