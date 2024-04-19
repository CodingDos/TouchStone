import api from "./apiConfig.js"

//get all characters

export const getAiResponse = async () => {
    try {
        const response = await api.get("");
        return response.data;
    }catch (error){
        throw error;
    }
}