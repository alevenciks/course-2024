import { Webhook, MessageBuilder } from 'discord-webhook-node'
import fs from 'fs'

const webHookURL = 'https://discord.com/api/webhooks/1314248807810076772/VtYFPtL0EhvRhr-8ZR7gil7-E0XYctqvASNqGR7P-2GUgUr35job95HGF1EPRvUO0A8h'
const webhook = new Webhook(webHookURL)

const reportFile = process.argv[2]

fs.readFile(reportFile, 'utf8', (err, data) => {
    if (err) {
        console.log('An error occured during report file reading', err)
    }

    const report = JSON.parse(data)
    const totalTests = report.stats.tests
    const passed = report.stats.passes
    const failed = report.stats.failures
    const pending = report.stats.pending
    const duration = (report.stats.duration / 1000).toFixed(2)

    const embed = new MessageBuilder()
        .setTitle('Test execution results')
        .addField('Total results', totalTests)
        .addField('Passed', passed)
        .addField('Failed', failed)
        .addField('Pending', pending)
        .addField('Duration', `${duration} seconds`)
        .setColor(failed === 0 ? '#66ff33' : '#ff3300')

    // webhook.send(embed).then(() => {
    //     console.log('Discord notification sent')
    // }).catch(err => {
    //     console.log('An error occured during webhook creation', err)
    // })
})