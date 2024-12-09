import csv from 'csv-parser'
import fs from 'fs'

export async function generateTestData() {
    const env = process.env.npm_config_env || 'STG'
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

export async function getCourierTransport() {
    const transports = ['car', 'bicycle', 'scooter']
    const index = Math.floor(Math.random() * transports.length)

    return transports[index]
}

export async function readCSVFile(filePath) {
    return new Promise((resolve, reject) => {
            const result = []

            fs.createReadStream(filePath).pipe(csv())
                .on('data', (data) => result.push(data))
                .on('end', () => resolve(result))
                .on('error', (err) => reject(err))
        }
    )
}