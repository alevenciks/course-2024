import { createUser, loginUser, deleteUser, createUserWithoutParam } from '../../steps/user/user.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

it('User Test set', () => {
    describe(`CRUD User`, () => {
        createUser()
        loginUser()
        deleteUser()
    })

    describe(`Negative user scenarios`, () => {
        createUserWithoutParam('Create user without password', 'password', 'Password not provided')
        createUserWithoutParam('Create user without email', 'email', 'User validation failed: email: Path `email` is required.')
    })
})
