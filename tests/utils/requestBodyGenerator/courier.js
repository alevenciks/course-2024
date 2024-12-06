import courierRequestBody from '../../data/courier/create.json' assert { type: 'json' }
import { getCourierTransport } from '../helpers.js'
import { faker } from '@faker-js/faker'

export async function getCreateOrUpdateCourierRequestBody() {
    courierRequestBody.name = faker.person.firstName()
    courierRequestBody.surname = faker.person.lastName()
    courierRequestBody.phoneNumber = faker.phone.number()
    courierRequestBody.transport = await getCourierTransport()
    
    return courierRequestBody
}