export function validateRegInputs(email, password, setErrorEmail, setErrorPassword) {
    const regExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regEpxPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{8,})$/;
    if (Boolean(email) === false) {
        setErrorEmail("Please, enter email");
    } else
    if (!regExpEmail.test(String(email).toLowerCase())) {
        setErrorEmail("Enter email like a test@gmail.com");
    } else
    if (Boolean(password) === false) {
        setErrorPassword("Please, enter password");
    } else
    if (!regEpxPassword.test(String(password))) {
        setErrorPassword("The password must contain at least 8 characters, including at least one number, one lowercase and one uppercase letter, and one special character");
    } else {
        setErrorEmail("")
        setErrorPassword("")
        return true
    }
}