import { request } from '../../utils/requests.js'
import { getCreateUserRequestBody, getLoginRequestBody } from '../../utils/requestBodyGenerator/user.js'
import { config } from '../../../config.js'

export async function createUser() {
    it('Create user account', async function () {
        const requestBody = await getCreateUserRequestBody()

        const schema = {
            type: 'object',
            properties: {
              email: {type: 'string'},
              name: {type: 'string'},
              surname: {type: 'string'}
            },
            required: ['email', 'name', 'surname'],
            additionalProperties: false,
        }

        await request(this, 'POST', '/user', requestBody, false, 
            {
                statusCode : 201,
                expectedValues: [
                                    {path: 'email', value: requestBody.email},
                                    {path: 'name', value: requestBody.name},
                                    {path: 'surname', value: requestBody.surname},                                    
                                ],
                executionVariables: [
                                        {path: 'email', name: 'userEmail'}, 
                                    ],
                validateSchema: schema
            }
        )
    })
}

export async function loginUser() {
    it('Login user', async function () {
        const requestBody = await getLoginRequestBody()
        await request(this, 'POST', '/login', requestBody, false, 
            {
                statusCode : 200,
                expectedValues: [
                                    {path: 'message', value: 'Login successful'}                                   
                                ],
                executionVariables: [
                                        {path: 'token', name: 'userToken'}, 
                                    ]
            }
        )
    })
}

export async function deleteUser() {
    it('Delete user', async function () {
        await request(this, 'DELETE', '/user', undefined, true, 
            {
                statusCode : 200,
                expectedValues: [
                    {path: 'message', value: 'User and all associated restaurants and meals have been deleted.'}                                   
                ]
            }
        )
    })
}

export async function createUserWithoutParam(testName, paramToRemove, assertionMessage) {
    it(testName, async function () {
        const requestBody = await getCreateUserRequestBody()
        paramToRemove === 'password' ? delete requestBody.password : delete requestBody.email
    
        await request(this, 'POST', '/user', requestBody, false, 
            {
                statusCode : 400,
                expectedValues: [
                    {path: 'message', value: assertionMessage}
                ]
            }
        )
    })
}