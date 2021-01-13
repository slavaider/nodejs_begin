const console_To_JSON = (process) => {
    const temp = {}
    for (let i = 2; i < process.argv.length; i++) {
        const item = process.argv[i].split('=')
        temp[item[0]] = item[1] ? item[1] : true
    }
    return temp
}

const json = console_To_JSON(process)
console.log(json)
