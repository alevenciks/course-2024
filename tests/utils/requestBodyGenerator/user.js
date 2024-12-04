import accountRequestBody from '../../data/user/create_account.json' assert { type: 'json' }
import loginRequestBody from '../../data/user/login.json' assert { type: 'json' }
import { config } from '../../../config.js'
import { generateRandomEmail, generateRandomPassword } from '../helpers.js'
import { faker } from '@faker-js/faker'

export async function getCreateUserRequestBody() {
    accountRequestBody.name = config[global.env].name
    accountRequestBody.surname = config[global.env].surname
    accountRequestBody.password = await generateRandomPassword()
    accountRequestBody.email = faker.internet.email()
    
    return accountRequestBody
}

export async function getLoginRequestBody() {
    loginRequestBody.email = global.executionVariables['userEmail']
    loginRequestBody.password = global.executionVariables['userPassword']
    
    return loginRequestBody
}