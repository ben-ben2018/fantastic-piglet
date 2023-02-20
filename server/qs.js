function stringify(obj) {
    let last = ""
    for (let key in obj) {
        console.log(obj[key])
        if (typeof obj[key] == 'object') {
            let temp = stringify(obj[key])
            if (temp) {
                last += `[${key}]`
                last += temp + "&"
            }
        } else {
            if (obj[key]) {
                last += `[${key}]`
                last += `=${obj[key]}`
            }
        }
    }
    return last
}

export const qs2 = { stringify }