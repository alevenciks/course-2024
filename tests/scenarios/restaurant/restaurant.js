import { createUser, loginUser, deleteUser } from '../../steps/user/user.js'
import { createRestaurant, deleteRestaurant, getRestaurant } from '../../steps/restaurant/restaurant.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

it('Restaurant Test set', () => {
    describe(`CRUD Restaurant`, () => {
        createUser()
        loginUser()
        createRestaurant()
        getRestaurant()
        deleteRestaurant()
        deleteUser()
    })
})
