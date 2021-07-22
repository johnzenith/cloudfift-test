import React          from 'react';
import clsx           from 'clsx';
import Typography     from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => {
    const firaSansFont = 'Fira Sans, sans-serif';

    return {
        pageTitle: {
            fontFamily: firaSansFont,
            fontWeight: 'bold',
            fontSize: '38px',
            lineHeight: '130%',
            display: 'flex',
            alignItems: 'flex-end',
            color: '#002058',
            marginBottom: '5px',
        },
        pageInstruction: {
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '140%',
            opacity: .4,
            marginBottom: '34px',
            maxWidth: '269px',
        },
    };
});

const PageTitle = ({
    label                = 'Page Title',
    className: elemClass = '',

    pageDescription = {
        label:     'Page Description',
        className: '',
    }
}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography component="h2" className={clsx(classes.pageTitle, elemClass || '')}>
                {label}
            </Typography>

            <Typography 
                component="p" 
                className={clsx(classes.pageTitle, classes.pageInstruction, pageDescription?.className || '')}
            >
                {pageDescription?.label || 'Description'}
            </Typography>
        </React.Fragment>
    );
}

export default PageTitle;