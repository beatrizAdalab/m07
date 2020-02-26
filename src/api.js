const url = 'http://34.89.93.186:8080/apiv1/'

const fullURL = (url, params) => {
    let options = ''
    for (let [key, value] of Object.entries(params)) {
        options += value ? `${key}=${value}&` : ''
    }

    return `${url}?${options}`.slice(0, -1)
}


export const api = {

    register: async function (username, password) {
        try {
            const response = await fetch(`${url}register`, {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });
            const data = await response.json();
            console.log(data.success)
            return data.success
        } catch (error) { console.log(error) }
    },

    login: async function (username, password) {
        try {
            const response = await fetch(`${url}login`, {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });
            const data = await response.json();
            console.log(data)
            return data

        } catch (error) { console.log(error) }
    },

    getClassifieds: async function (params = {}) {
        try {
            params = this._extractParamsUrlSearch(params)
            params.price = params.price ? `1-${params.price}` : ''
            const urlSearch = fullURL(`${url}anuncios`, params)

            const response = await fetch(urlSearch, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });
            const data = await response.json();
            console.log("classifieds", data.results)
            return data.results
        } catch (error) { console.log(error) }
    },

    getTags: async function () {
        try {
            const response = await fetch(`${url}tags`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });
            const data = await response.json();
            console.log("tag", data.results)
            return data.results
        } catch (error) { console.log(error) }
    },

    getDetail: async function (id) {
        try {
            const response = await fetch(`${url}anuncios/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });
            const data = await response.json();
            console.log("detail", data.result)
            return data.result
        } catch (error) { console.log(error) }
    },

    editClassified: async function (id, params) {
        try {
            const response = await fetch(`${url}anuncios/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    params
                ),
                credentials: 'include',
            });
            const data = await response.json();
            console.log("edit", data)
            return data
        } catch (error) { console.log(error) }
    },

    newClassified: async function (params) {
        try {
            const response = await fetch(`${url}anuncios`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    params
                ),
                credentials: 'include',
            });
            const data = await response.json();
            console.log("edit", data)
            return data
        } catch (error) { console.log(error) }
    },

    _extractParamsUrlSearch: (search) => {
        let keys = ['name', 'price', 'venta', 'tag']

        return keys.reduce((accumulator, key) => {

            if (search.hasOwnProperty(key)) {
                accumulator[key] = search[key]
            }
            return accumulator
        }, {})
    },
}

