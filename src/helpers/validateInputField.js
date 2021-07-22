
/**
 * Validate email
 */
export function isEmailValid(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(String(email).toLowerCase());
}

/**
* Validate field on update
* 
* @see /src/components/Input/TextInput.js
*/
const validateInputField = props => (inputValue = '', e = {}) => {
    let   errorText  = '';
    const id         = props?.id       || '';
    const name       = props?.name     || id;
    const type       = props?.type     || 'text';
    const label      = props?.label    || 'Field';
    const validate   = props?.validate || {};
    
    const minlength  = validate?.minlength ?? props.minlength ?? 0;
    const maxlength  = validate?.maxlength ?? props.maxlength ?? 0;
    const required   = validate?.required  ?? props?.required ?? false;

    let value = e?.target?.value ?? inputValue;

    // Empty field error
    const getEmptyFieldErrorText = () => {
        if (required) {
            if (!value && !value?.length) {
                // Remove the semi-colon character from the input label.
                // Example => username: becomes -> username
                const _label = label.replace(':', '');
                return `${_label} cannot be empty.`;
            }
        }

        if (value?.length) {
            switch (type) {
                case 'email':
                    return isEmailValid(value) ? 
                        '' : (validate?.error?.invalid || `${label} is invalid.`);

                default:
                    return '';
            }
        }

        return '';
    };

    // Pluralize the character text
    const pluralizeCharacterText = len => len > 1 ? 'characters' : 'character';

    // Minlength field error
    const getMinLenFieldErrorText = () => {
        const characterText = pluralizeCharacterText(minlength);

        return (minlength && value?.length && value?.length < minlength) ? 
            `${label} minimum ${characterText} is ${minlength}.` : '';
    };

    // Maxlength field error
    const getMaxLenFieldErrorText = () => {
        const characterText = pluralizeCharacterText(maxlength);

        return (maxlength && value?.length && value?.length > maxlength) ? 
            `${label} maximum ${characterText} is ${maxlength}.` : '';
    };

    // Validate text field
    // Note: the error check will pass on since an empty string ('') is
    // evaluated as false in javascript
    errorText = (
        getEmptyFieldErrorText() 
        || 
        getMinLenFieldErrorText()
        ||
        getMaxLenFieldErrorText() 
    );
    
    return {[name]: errorText};
};

export default validateInputField;