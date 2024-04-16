import api from "./apiConfig.js"

//get all characters

export const getCharacters = async () => {
    try {
        const response = await api.get("/characters/");
        return response.data;
    }catch (error){
        throw error;
    }
}