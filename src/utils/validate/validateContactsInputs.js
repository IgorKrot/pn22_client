export function validateContactsInputs(contactsEmail, setErrorEmail, contactsMessage, setErrorMessage) {
    const regExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (Boolean(contactsEmail) === false) {
        setErrorEmail("Please, enter email");
    } else
    if (!regExpEmail.test(String(contactsEmail).toLowerCase())) {
        setErrorEmail("Enter email like a test@gmail.com");
    } else 
    if (!contactsMessage) {
        setErrorMessage("Please write your message");
    } else {
        setErrorEmail("");
        setErrorMessage("");
        return true
    }
}