import React          from 'react';
import clsx           from 'clsx';
import TextField      from '@material-ui/core/TextField';
import FormControl    from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    const firaSansFont = 'Fira Sans, sans-serif';

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
        textFieldLabel: {
            color: '#152144'
        },
    };
});

const TextInput = props => {
    const classes = useStyles();

    const {
        id          = '',
        type        = 'text',
        name        = '',
        label       = 'Label',
        value       = '',
        variant     = 'outlined',
        onChange    = (() => {}),
        inputRef    = null,
        required    = false,
        placeholder = '',

        formControlProps = {
            className: '',
        },

        labelProps = {
            className: '',
        },

        inputProps      = {},
        InputProps      = {},
        FormHelperText  = {},
        InputLabelProps = {},
    } = props;

    return (
        <FormControl 
            variant="outlined" 
            className={clsx(classes.formControl, formControlProps.className || '')}
        >
            <label 
                htmlFor={id} 
                className={clsx(classes.inputLabel, labelProps.className || '')}
            >
                {label}
            </label>

            <TextField
                id={id}
                name={name}
                type={type}
                label={label}
                value={value}
                variant={variant}
                inputRef={inputRef}
                required={required}
                fullWidth={true}
                placeholder={placeholder}

                onChange={onChange}
                inputProps={{...inputProps}}
                FormHelperText={{...FormHelperText}}

                InputProps={{
                    classes: {
                        root: classes.inputField,
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
                
                onChange={() => {}}
            />
        </FormControl>
    );
};