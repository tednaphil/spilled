const fetchTea = async () => {
  try {
    const response = await fetch("https://spilled-api.onrender.com/teas");
    if (!response.ok) {
      throw new Error("Failed to fetch tea data");
    }
    return await response.json();
  } catch (error: any) {
    throw error;
  }
};

const fetchSingleTea = async (id: number) => {
  try {
    const response = await fetch(`https://spilled-api.onrender.com/teas/${id}`);
    if (!response.ok) {
      throw new Error("Couldn't find that tea!");
    }
    return await response.json();
  } catch (error: any) {
    throw error;
  }
};

const postUser = async (username: string) => {
    try {
        const response = await fetch("https://spilled-api.onrender.com/users",
            {
                method: "POST",
                body: JSON.stringify({user: {
                    username: "Tony"
                    }
                })
            }
        );
        if(!response.ok) {
            throw new Error("Couldn't create user");
        }
        console.log(response.json())
        // return await response.json()
    } catch (error: unknown) {
        throw error
    }

};

const postFav = async (userId: number, teaId: number) => {

};

const deleteFav = async (favId: number) => {

};

export { fetchTea, fetchSingleTea, postUser };
