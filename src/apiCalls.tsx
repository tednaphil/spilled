const fetchTea = async () => {
    try {
        const response = await fetch('https://spilled-api.onrender.com/teas');
        if (!response.ok) {
            throw new Error('Failed to fetch tea data')
        }
        return await response.json();
    } catch (error: any) {
        throw error
    }
}

const fetchSingleTea = async (id: number) => {
    try {
        const response = await fetch(`https://spilled-api.onrender.com/teas/${id}`)
        if (!response.ok) {
            throw new Error("Couldn't find that tea!")
        }
        return await response.json()
    } catch (error: any) {
        throw error
    }
}

export { fetchTea, fetchSingleTea };