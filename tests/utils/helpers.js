export async function generateTestData() {
    setEnvironment(process.argv.slice(process.argv.length - 1)[0])
}

function setEnvironment(env) {
    global.env = env
}

export async function generateRandomEmail() {
    return `${Math.random().toString(36).substring(2,11)}@domain.com`
}

export async function generateRandomPassword() {
    const password = Math.random().toString(36).substring(2,11)
    global.executionVariables['userPassword'] = password
    return password
}

export async function generateRandomString(size = 12) {
    let randomString = ''

    while (randomString.length < size) {
       randomString += Math.random().toString(36).substring(2)
    }

    return randomString.substring(0, size)
}

export async function generateRandomInteger(size = 5) {
    let generatedInteger = ''
    const digits = '0123456789'

    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length)
        generatedInteger += digits[randomIndex]
    }

    return parseInt(generatedInteger, 10)
}