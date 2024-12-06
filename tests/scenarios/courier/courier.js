import { createUser, loginUser, deleteUser } from '../../steps/user/user.js'
import { createCourier, deleteCourier } from '../../steps/courier/courier.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
    createUser()
    loginUser()
})

after(async () => {
    deleteUser()
})

it('Courier Test set', () => {
    describe(`CRUD Courier`, () => {
        createCourier()
        deleteCourier()
    })
})
