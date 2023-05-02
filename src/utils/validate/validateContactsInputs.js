export function validateContactsInputs(email, setErrorEmail) {
    const regExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (Boolean(email) === false) {
        setErrorEmail("Please, enter email");
    } else
    if (!regExpEmail.test(String(email).toLowerCase())) {
        setErrorEmail("Enter email like a test@gmail.com");
    } else {
        setErrorEmail("")
        return true
    }
}