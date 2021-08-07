import React          from 'react';
import clsx           from 'clsx';
import Typography     from '@material-ui/core/Typography';
import Paper          from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Constants
import { FONT_FAMILY } from '../../../config/constants';

const firaSansFont = FONT_FAMILY.firaSans;

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '90%',
        maxWidth: '289px',
        height: '137px',
        padding: '27px 25px',
        background: '#F9A825',
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: '5px',

        [theme.breakpoints.down('md')]: {
            width: '100%',
        }
    },
    label: {
        fontFamily: firaSansFont,
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '17px',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        marginBottom: '8px',
    },
    amount: {
        fontFamily: firaSansFont,
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '29px',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        marginBottom: '15px',
    },
    description: {
        fontSize: '12px',
        lineHeight: '14px',
        textTransform: 'capitalize',
    }
}));

const Card = props => {
    const classes = useStyles();
    
    return (
        <Paper className={clsx(classes.paper, props?.classes?.paper || '')}>
            <Typography component="h5" className={clsx(classes.label, props?.classes?.label || '')}>
                {props?.label}
            </Typography>
            <Typography component="h3" className={clsx(classes.amount, props?.classes?.amount || '')}>
                {props?.amount}
            </Typography>

            {props?.description && 
                <Typography 
                    component="h3" 
                    className={clsx(classes.amount, classes.description, props?.classes?.description || '')}
                >
                    {props?.description}
                </Typography>
            }
        </Paper>
    );
};

export default Card;