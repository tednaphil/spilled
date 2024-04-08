
const fetchTea = async () => {
    try {
        const response = await fetch('https://boonakitea.cyclic.app/api/all');
        if (!response.ok) {
            throw new Error('failed to fetch tea data')
        }
        return await response.json();
    } catch (error: any) {
        // console.log('error', error)
        // console.log('error code', error.status)
        console.log(error.message)
        // return error.message
        // throw Error('Server error')
    }
}

const fetchSingleTea = async (tea: string) => {
    try {
        const response = await fetch(`https://boonakitea.cyclic.app/api/teas/${tea}`)
        if (!response.ok) {
            throw new Error("Couldn't find that tea!")
        }
        return await response.json()
    } catch (error: any) {
        throw error
    }
}

export { fetchTea, fetchSingleTea };