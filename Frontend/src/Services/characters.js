import api from "./apiConfig.js"

//get all characters

export const getCharacters = async () => {
    try {
        const response = await api.get("/braille/");
        return response.data;
    }catch (error){
        throw error;
    }
}

export const getSpecificCharacter = async (info, category) => {
	try {
		const resp = await api.get(`/braille/${info}/${category}/`);
		return resp.data;
	} catch (error) {
		throw error;
	}
}

export const getCharacter = async (info) => {
	try {
		const resp = await api.get(`/braille/${info}/`);
		return resp.data;
	} catch (error) {
		throw error;
	}
}

export const getAlphabet = async () => {
	try {
		const resp = await api.get("/braille/?search=abc");
		return resp.data;
	} catch (error) {
		throw error;
	}
}

export const getNumbers = async () => {
	try {
		const resp = await api.get("/braille/?search=123");
		return resp.data;
	} catch (error) {
		throw error;
	}
}

export const getPunctuation = async () => {
	try {
		const resp = await api.get("/braille/?search=!?.");
		return resp.data;
	} catch (error) {
		throw error;
	}
}

export const getCombos = async () => {
	try {
		const resp = await api.get("/braille/?search=the");
		return resp.data;
	} catch (error) {
		throw error;
	}
}

export const getBySearch = async (search) => {
	try {
		const resp = await api.get(`/braille/?search=${search}`);
		return resp.data;
	} catch (error) {
		throw error;
	}
}

export const getWords = async () => {
	try {
		const resp = await api.get("/words/");
		return resp.data;
	} catch (error) {
		throw error;
	}
}

export const getWord = async (word) => {
	try {
		const resp = await api.get(`/words/${word}/`);
		return resp.data;
	} catch (error) {
		throw error;
	}
}

export const getPhrases = async () => {
	try {
		const resp = await api.get("/phrases/");
		return resp.data;
	} catch (error) {
		throw error;
	}
}

export const getPhraseById = async (id) => {
	try {
		const resp = await api.get(`/phrases/id/${id}/`);
		return resp.data;
	} catch (error) {
		throw error;
	}
}

export const getPhrase = async (phrase) => {
	try {
		const resp = await api.get(`/phrases/${phrase}/`);
		return resp.data;
	} catch (error) {
		throw error;
	}
}

export const getSignPhrases = async (phrase) => {
	try {
		const resp = await api.get(`/phrases/?search=Sgn`);
		return resp.data;
	} catch (error) {
		throw error;
	}
}

export const getTimePhrases = async (phrase) => {
	try {
		const resp = await api.get(`/phrases/?search=Tim`);
		return resp.data;
	} catch (error) {
		throw error;
	}
}

export const getDirectionPhrases = async (phrase) => {
	try {
		const resp = await api.get(`/phrases/?search=Dir`);
		return resp.data;
	} catch (error) {
		throw error;
	}
}

