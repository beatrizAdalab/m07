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
            .reduce( (accumulator, param) => {     
                accumulator[param[0]] = param[1]
                return accumulator
            }, {}) 
        },

    extractParamsUrlSearch: (search) => {
        let keys = ['name', 'price', 'venta', 'tag']

        return keys.reduce((accumulator, key) => {

            if (search.hasOwnProperty(key)) {
                accumulator[key] = search[key]
            }
            return accumulator
        } , {})
    },

    getParamsSearchApi: (paramsUrl) => {
        console.log(paramsUrl)
        const name = paramsUrl.name ? paramsUrl.name : ''
        const venta = paramsUrl.venta ? paramsUrl.venta : ''
        const tag = paramsUrl.tag ? paramsUrl.tag : ''
        const price = paramsUrl.price ? `0-${paramsUrl.price}` : ''

        const params = {
            name,
            venta,
            tag,
            price
        }
        return params
    }

}
