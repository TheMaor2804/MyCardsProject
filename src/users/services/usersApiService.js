import axios from "axios";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";

export const login = async (userLogin) => {
    try {
        const response = await axios.post(`${apiUrl}/login`, userLogin);
        const data = response.data
        return data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data);
        }
        else throw new Error(error.message);
    }
}

export const signup = async (normalizedUser) => {
    try {
        const response = await axios.post(apiUrl, normalizedUser);
        const data = response.data
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
