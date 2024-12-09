import { createUser, loginUser, deleteUser } from '../../steps/user/user.js'
import { createRestaurant, deleteRestaurant, getRestaurant, updateRestaurant, deleteAlreadyDeletedRestaurant, negativeCreateRestaurant } from '../../steps/restaurant/restaurant.js'
import { generateTestData, readCSVFile } from '../../utils/helpers.js'
import negativeCreateScenarios from '../../data/restaurant/create_negative.json' assert { type: 'json'}

before(async () => {
    await generateTestData()
    createUser()
    loginUser()
})

after(async () => {
    deleteUser()
})

it('Restaurant Test set', async () => {
    const testData = await readCSVFile('tests/data/restaurant/create.csv')
    for (const scenario of testData) {
        describe(`CRUD Restaurant`, () => {
            createRestaurant(scenario)
            // getRestaurant()
            // updateRestaurant()
            // getRestaurant()
            deleteRestaurant() 
        })
    }

    describe.skip(`Delete restaurant negative`, () => {
        createRestaurant()
        deleteRestaurant()
        deleteAlreadyDeletedRestaurant()
    })

    describe.skip(`Create restaurant negative`, () => {
        for (const negativeScenario of negativeCreateScenarios) {
            negativeCreateRestaurant(negativeScenario.requestBody, negativeScenario.testCaseName, negativeScenario.messageValue)
        }
    })
})
