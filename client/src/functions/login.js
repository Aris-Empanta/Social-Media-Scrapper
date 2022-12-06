export const sendCredentials = (axios) => {

    axios.post("http://localhost:5000/login/", { user: "aris"})
}