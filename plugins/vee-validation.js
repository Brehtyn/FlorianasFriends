import { extend } from "vee-validate";
import { required, alpha, alpha_spaces, email, min } from "vee-validate/dist/rules";

extend("required", {
    validate(value) {
        return {
            required: true,
            valid: ['', null, undefined].indexOf(value) === -1
        };
    },
    computesRequired: true,
    ...required,
    message: "This field is required"
});

extend("alpha", {
    ...alpha,
    message: "This field must only contain alphabetic characters"
});

extend("alpha_spaces", {
    ...alpha_spaces,
    message: "This field must only contain alphabetic characters & spaces."
});

extend('min', {
    validate(value, { length }) {
      return value.length >= length;
    },
    params: ['length'],
    message: 'The {_field_} field must have at least {length} characters'
  });

extend("email", {
    ...email,
    message: "This field must contain a valid email address."
});