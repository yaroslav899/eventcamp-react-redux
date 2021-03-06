import { validationRules } from './validationRules';

export const validationMethods = {
  isMandatory: (value) => {
    const result = {};

    result.success = !value ? false : true;

    return result;
  },
  isValidEmail: (value) => {
    const result = {};
    const { email: { regexp: regexpEmail } = {} } = validationRules;
    const isValid = regexpEmail.test(value);

    result.success = isValid;

    return result;
  },
  isValidPassword: (value) =>{
    const result = {};
    const { password: { regexp: regexpPassword } } = validationRules;
    const isValid = regexpPassword.test(value);

    result.success = !isValid ? false : true;

    return result;
  },
  isPasswordMatch: (value, duplicate) => {
    const result = {};
    const isValid = (value !== duplicate) ? false : true;

    result.success = !isValid ? false : true;

    return result;
  },
};
