function fetchTea() {
    return fetch('https://boonakitea.cyclic.app/api/all')
        .then(response => {
            if(!response.ok) {
                throw new Error('There was an issue getting teas.')
            }
            return response.json()
        })
        .then(data => {
            return data
        })
}

export { fetchTea };