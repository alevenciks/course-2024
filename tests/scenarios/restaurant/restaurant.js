import { createUser, loginUser, deleteUser } from '../../steps/user/user.js'
import { createRestaurant, deleteRestaurant, getRestaurant, updateRestaurant, deleteAlreadyDeletedRestaurant, negativeCreateRestaurant } from '../../steps/restaurant/restaurant.js'
import { generateTestData } from '../../utils/helpers.js'
import negativeCreateScenarios from '../../data/restaurant/create_negative.json' assert { type: 'json'}

before(async () => {
    await generateTestData()
    createUser()
    loginUser()
})

after(async () => {
    deleteUser()
})

it('Restaurant Test set', () => {
    describe(`CRUD Restaurant`, () => {
        createRestaurant()
        getRestaurant()
        updateRestaurant()
        getRestaurant()
        deleteRestaurant() 
    })

    describe(`Delete restaurant negative`, () => {
        createRestaurant()
        deleteRestaurant()
        deleteAlreadyDeletedRestaurant()
    })

    describe(`Create restaurant negative`, () => {
        for (const negativeScenario of negativeCreateScenarios) {
            negativeCreateRestaurant(negativeScenario.requestBody, negativeScenario.testCaseName, negativeScenario.messageValue)
        }
    })
})
