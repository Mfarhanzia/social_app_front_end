export const emailValidate = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.trim());
};

export const passwordValidate = (pwd) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    const isValid = new RegExp(regex).test(pwd.trim());

    return isValid;
};

export const validate = (key, val) => {
    if (key.toLowerCase() === "email") {
        return emailValidate(val);
    } else if (key.toLowerCase() === "password") {
        return passwordValidate(val);
    } else if (key.toLowerCase() === "url") {
        validateUrl(val);
    }
};