
const fetchTea = async () => {
    try {
        const response = await fetch('https://boonakitea.cyclic.app/api/all');
        if (!response.ok) {
            throw new Error('failed to fetch tea data')
        }
        return await response.json();
    } catch (error) {
        // console.log('error', error)
        console.log('error code', error)

    }
}

const fetchSingleTea = async (slug: string) => {
    try {
        const response = await fetch(`https://boonakitea.cyclic.app/api/teas/${slug}`)
        if (!response.ok) {
            throw new Error("Couldn't find that tea!")
        }
        // console.log(response.json())
        return await response.json()
    } catch (error) {
        throw error
    }
}

export { fetchTea, fetchSingleTea };