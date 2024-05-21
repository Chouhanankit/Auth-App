import axios from "axios"
const API_URL = "/api/user"
export const Register = async (formData) => {
    const response = await axios.post(API_URL + "/register", formData)
    console.log(response)
}

export const authService = {
    Register,
}
