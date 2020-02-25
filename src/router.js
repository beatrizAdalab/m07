export const urlRouter = {

    buildURLSearch: (params) => {
        let options = ''
        const url = '/listClassifieds/'
        for (let [key, value] of Object.entries(params)) {
            options += value ? `${key}=${value}&` : ''
        }
        return `${url}:${options}`.slice(0, -1)
    },

    extractParamsUrlSearch: (url) => {
        const queries = url.substring(18)
        const arrayQueries = queries.split('&')
        let params = {
            name: '',
            price: '',
            venta: '',
            tag: ''
        }
        const keyParams = Object.keys(params)

        arrayQueries.map(item => {
            const key = item.split('=')[0]
            const value = item.split('=')[1]
            return keyParams.includes(key) ? params[key] = value : false
        })

        return params
    }
}
