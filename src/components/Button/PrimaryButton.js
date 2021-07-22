import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    primaryBtnStyle: {
        width: '180px',
        height: '50px',
        borderRadius: '2px',
        marginLeft: '0px',
        backgroundColor: '#FFD873',
        color: '#041942',
        fontFamily: 'Fira Sans, sans-serif',
        fontWeight: 'bold',
        fontSize: '16px',
        textTransform: 'capitalize',

        '&:hover': {
            backgroundColor: '#FFD873',
        }
    },
    link: {
        textDecoration: 'none',
    }
}));

const PrimaryButton = props => {
    const classes = useStyles();

    const MakePrimaryButton = () => (
        <Button 
            className={clsx(classes.primaryBtnStyle, props?.className || '')} variant="contained"
            onClick={props?.onClick || (() => {})}
        >
            {props?.label || 'Button'}
        </Button>
    );

    return props?.linkTo ? 
        <Link to={props.linkTo} className={classes.link}>
            <MakePrimaryButton />
        </Link> 
        : 
        <MakePrimaryButton />;
}

export default PrimaryButton;