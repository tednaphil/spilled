/*
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
*/

const fetchTea = async () => {
    try {
        const response = await fetch('https://boonakitea.cyclic.app/api/all');
        if(!response.ok) {
            throw new Error('failed to fetch tea data')
        }
        const fetchedData = await response.json();
        return fetchedData;
    } catch (error) {
        console.log('error',error)
    }
}

export { fetchTea };