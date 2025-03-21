export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

export const validatePhoneNumber = (phone) => {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
};

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return passwordRegex.test(password);
};

export const validateRequiredFields = (fields) => {
    return fields.every((field) => field.trim() !== "");
};

export const validateSignupForm = ({ email, username, userNickname, phoneNumber, password, confirmPassword }) => {
    if (!validateRequiredFields([email, username, userNickname, phoneNumber, password, confirmPassword])) {
        return "모든 필드를 입력해주세요.";
    }

    if (!validateEmail(email)) {
        return "유효한 이메일을 입력해주세요.";
    }

    if (!validatePhoneNumber(phoneNumber)) {
        return "전화번호 형식이 잘못되었습니다.\n\n010-XXXX-XXXX 형식으로 입력해주세요.";
    }

    if (!validatePassword(password)) {
        return "비밀번호는 8자 이상 20자 이하이며, \n\n영문자, 숫자, 특수문자를 포함해야 합니다.";
    }

    if (password !== confirmPassword) {
        return "비밀번호가 일치하지 않습니다.";
    }

    return null;
};