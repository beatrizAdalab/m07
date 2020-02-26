export const urlRouter = {

    buildURLSearch: (params) => {
        let options = ''
        const url = '/listClassifieds/'
        for (let [key, value] of Object.entries(params)) {
            options += value ? `${key}=${value}&` : ''
        }
        return `${url}:${options}`.slice(0, -1)
    },


    searchStringToObject: (search) => {
        return search.substr(1)
            .split('&')
            .filter(param => param)
            .map(param => param.split('='))
            .reduce((accumulator, param) => {
                accumulator[param[0]] = param[1]
                return accumulator
            }, {})
    },

   


    buildObjectFilter: (search) => {

        let keys = ['name', 'price', 'venta', 'tag']

        const ObjectKey = keys.reduce((accumulator, key) => {

            if (search.hasOwnProperty(key)) {
                accumulator[key] = search[key]
            } else {
                accumulator[key] = ''
            }
            return accumulator
        }, {})

        return ObjectKey
    },
}
