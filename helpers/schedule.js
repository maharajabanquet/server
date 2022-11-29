const schedule = require('node-schedule');
const logSymbols = require('log-symbols');
console.log(logSymbols.info, "Connecting schedule module...")
function scheduleJob(date) {
    console.log(logSymbols.success,`Schedule Job Added for ${date}`);
    const job =  schedule.scheduleJob(date, () => {
        console.log(logSymbols.success,"Schedule Job Done");
    })

    return job;
}
console.log(logSymbols.success, "schedule module connected")
// const date = new Date("2022-11-16T15:43:00.000Z+5:30");
module.exports = scheduleJob;