export function validateSupportInputs(supportEmail, setErrorEmail, supportMessage, setErrorMessage) {
    const regExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (Boolean(supportEmail) === false) {
        setErrorEmail("Please, enter email");
    } else
    if (!regExpEmail.test(String(supportEmail).toLowerCase())) {
        setErrorEmail("Enter email like a test@gmail.com");
    } else 
    if (!supportMessage) {
        setErrorMessage("Please write your message");
    } else {
        setErrorEmail("");
        setErrorMessage("");
        return true
    }
}