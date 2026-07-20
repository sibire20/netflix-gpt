
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const PasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    

export const checkValidateForm = (email, password) => {
    const isValidEmail = EmailRegex.test(email);
    const isValidPassword = PasswordRegex.test(password);

    if(!isValidEmail) return { isValid: false, message: "Invalid email format" };
    if(!isValidPassword) return { isValid: false, message: "Password must be at least 8 characters long and contain at least one letter and one number" };
    return { isValid: true, message: "Form is valid" };
}