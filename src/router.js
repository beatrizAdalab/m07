export const urlRouter = {

    searchStringToObject: (search) => {
        return search.substr(1)
            .split('&')
            .filter(param => param)
            .map(param => param.split('='))
            .reduce((accumulator, param) => {
                accumulator[param[0]] = param[1]
                return accumulator
            }, {})
    }  
}
