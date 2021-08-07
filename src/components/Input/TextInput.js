import React          from 'react';
import './TextInput.css';
import clsx           from 'clsx';
import TextField      from '@material-ui/core/TextField';
import FormControl    from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

// Helpers
import validateInputField from '../../helpers/validateInputField';

// Config (constant)
import { FONT_FAMILY } from '../../config/constants';

const useStyles = makeStyles((theme) => {
    const firaSansFont = FONT_FAMILY.firaSans;

    return {
        formControl: {
            marginBottom: '29px',
            width: '100%',
            maxWidth: '520px',
        },
        inputLabel: {
            fontFamily: firaSansFont,
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '17px',
            display: 'flex',
            alignItems: 'flex-end',
            color: '#041942',
            opacity: .3,
            marginBottom: '9px',
        },
        inputField: {
            background: 'rgba(207, 216, 234, 0.3)',
            minWidth: '200px',
            height: '65px',
            border: '1px solid #CFD8EA',
            borderRadius: '2px',
            color: '#152144',
            fontFamily: firaSansFont,
            fontSize: '18px !important',
            lineHeight: '22px',
            textTransform: 'capitalize',
            boxShadow: 'none',

            '&:hover': {
                border: '1px solid #152144',
            }
        },
        inputFocused: {
            color: '#152144',
            border: '1px solid #152144',
            boxShadow: 'none',
        },
        passwordInput: {
            letterSpacing: '5px',
            fontWeight: 'bold',
        },
        textFieldLabel: {
            color: '#152144'
        },
    };
});

const TextInput = props => {
    const classes = useStyles();

    const {
        id               = '',
        type             = 'text',
        name             = '',
        label            = 'Label',
        error            = null,
        value            = null,
        variant          = 'outlined',
        onChange         = null,
        inputRef         = null,
        required         = false,
        helperText       = null,
        placeholder      = '',
        defaultValue     = '',
        errorDisplay     = true,
        labelPlaceholder = '',

        // Validation props
        // validate = {
        //     minlength: 0,
        //     maxlength: -1,
        //     error: {
        //         invalid:   '', // invalid error text
        //     }
        // },

        formControlProps = {
            className: '',
        },

        labelProps = {
            className: '',
        },

        inputProps = {
            autoComplete: 'on',
        },

        InputProps      = {},
        InputLabelProps = {},
    } = props;

    const _value    = (null !== value) ? value : defaultValue;
    const _label    = defaultValue     ? ''    : (labelPlaceholder || label);
    const fieldName = name || id;

    const [fieldLabel, setFieldLabel] = React.useState(_label);
    const [fieldError, setFieldError] = React.useState({});
    const [fieldValue, setFieldValue] = React.useState(_value);

    const _error = (null !== error ) ? error : fieldError?.error;

    const getInputValue = React.useCallback(() => {
        let elem;

        if (inputRef && inputRef?.current) {
            elem = inputRef.current;
        } else {
            elem = document.getElementById(id);
        }

        return elem?.value;
    }, [inputRef, id]);

    const handleErrors = React.useCallback((value, e = {}) => {
        const validateField = validateInputField(props)(value, e);
        const errorText     = validateField[fieldName] || '';

        setFieldError({
            msg:   errorText,
            error: errorText?.length ? true : false,
        });
    }, [fieldName, props]);

    const handleChange = e => {
        const value = e.target.value;

        if (onChange) {
            onChange(value, e);
        } else {
            setFieldValue(value);
        }

        if (errorDisplay) {
            handleErrors(value, e);
        } else {
            if (_error) {
                setFieldError({}); // Clear error
            }
        }
    };

    const handleClick = e => {
        setFieldLabel('');
    };

    const handleBlur = e => {
        const _label = e.target.value.length ? '' : (labelPlaceholder || label);
        setFieldLabel(_label);
    };

    const handleInputLabelDisplayOnMount = React.useCallback(() => {
        const value = getInputValue();
        if (value?.length) {
            // inputRef.current.click(); // this will work as well
            setFieldLabel('');
        }
    }, [getInputValue]);

    const handleErrorDisplayOnMount = React.useCallback(() => {
        if (errorDisplay) {
            const value = getInputValue();
            handleErrors(value);
        }
    }, [getInputValue, handleErrors, errorDisplay]);

    React.useEffect(() => {
        // On component first mount, if the field is auto-filled,
        // let's clear the placeholder label
        setTimeout(function () {
            handleInputLabelDisplayOnMount();
        }, 500);
    }, [handleInputLabelDisplayOnMount]);

    /**
     * When error display is disabled on page load,
     * the {errorDisplay} prop can be used to toggle it's display.
     */
    React.useEffect(() => {
        handleErrorDisplayOnMount();
    }, [handleErrorDisplayOnMount]);

    return (
        <FormControl 
            variant="outlined" 
            className={clsx(classes.formControl, formControlProps.className || '')}
        >
            <label 
                htmlFor={id} 
                className={clsx(classes.inputLabel, labelProps.className || '')}
            >
                {label || labelPlaceholder}
            </label>

            <TextField
                id={id}
                name={fieldName}
                type={type}
                label={fieldLabel}
                value={fieldValue}
                error={_error}
                variant={variant}
                inputRef={inputRef}
                required={required}
                fullWidth={true}
                helperText={(null !== helperText) ? helperText : fieldError?.msg}
                placeholder={placeholder}

                onChange={handleChange}

                inputProps={{
                    onBlur: handleBlur,
                    onClick: handleClick,
                    ...inputProps
                }}

                InputProps={{
                    classes: {
                        root: clsx(classes.inputField, {[classes.passwordInput]: type === 'password'}),
                        focused: classes.inputFocused,
                        // input: classes.inputField,
                    },
                    ...InputProps
                }}

                InputLabelProps={{
                    shrink: false,
                    classes: {
                        root: classes.textFieldLabel
                    },
                    ...InputLabelProps
                }}
            />
        </FormControl>
    );
};

export default TextInput;