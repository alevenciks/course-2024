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