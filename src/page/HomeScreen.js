import React from 'react';
import './HomeScreen.css';
import logo from '../images/logo.svg';
import heroImage from '../images/hero-image.png';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import LanguageIcon from '@material-ui/icons/Language';
import GetAppIcon from '@material-ui/icons/GetApp';

import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => {
    
    return {
        root: {
            flexGrow: 1,
            marginTop: '45px',

            [theme.breakpoints.down('sm')]: {
                marginTop: '20px',
            },
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'left',
            color: theme.palette.text.secondary,
            boxShadow: 'none',
        },
        paperOverlay: {
            padding: 0,
            marginTop: '-45px',
            overflow: 'hidden',
            // background: 'linear-gradient(59.63deg, rgba(207, 170, 143, 0.702) 7.65%, rgba(205, 161, 64, 0) 85.58%, rgba(205, 160, 57, 0) 92.35%)',
            // opacity: 0.6,
            // transform: 'matrix(0.97, -0.24, 0.25, 0.97, 0, 0)',
        },
        alignCenter: {
            textAlign: 'center',
        },
        alignLeft: {
            textAlign: 'left',
        },
        alignRight: {
            textAlign: 'right',
        },
        logoWrapper: {
            textAlign: 'left',
            marginBottom: '50px',
        },
        logo: {
            marginLeft: '80px',

            [theme.breakpoints.down('sm')]: {
                marginLeft: '40px',
            },
            [theme.breakpoints.down('xs')]: {
                marginLeft: '15px',
            },
        },
        tagline: {
            padding: '0px',
            height: 'auto',
            width: 'auto',
            maxWidth: '500px',
            marginLeft: '80px',
            fontSize: '42px',
            lineHeight: "60px",
            textAlign: 'left',
            fontWeight: 500,
            color: '#002058',
            fontFamily: 'Fira Sans, sans-serif',

            [theme.breakpoints.down('md')]: {
                fontSize: '30px',
                lineHeight: "45px",
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: '32px',
                lineHeight: "48px",
                marginLeft: '40px',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '28px',
                lineHeight: "44px",
                marginLeft: '15px',
            }
        },
        description: {
            color: '#002058a6',
            fontFamily: 'Fira Sans, sans-serif',
            fontSize: '16px',
            lineHeight: '165%',
            display: 'flex',
            marginTop: '25px',
            marginBottom: '50px',
        },
        getStartedBtn: {
            width: '180px',
            height: '50px',
            borderRadius: '2px',
            marginLeft: '80px',
            backgroundColor: '#FFD873',
            color: '#041942',
            fontFamily: 'Fira Sans, sans-serif',
            fontWeight: 'bold',
            fontSize: '16px',
            textTransform: 'capitalize',

            '&:hover': {
                backgroundColor: '#FFD873',
            },

            [theme.breakpoints.down('sm')]: {
                marginLeft: '40px',
            },
            [theme.breakpoints.down('xs')]: {
                marginLeft: '15px',
            },
        },
        heroImage: {
            // backgroundImage: 'url(Gradient-Overlay.svg)',
            // backgroundImage: 'url(hero-image.png)',
            // clipPath: 'url(Gradient-Overlay.svg)',
            // mask: 'url(Gradient-Overlay.svg) no-repeat',
            // maskImage: 'url(Gradient-Overlay.png)',
            top: '-50px',
            // width: '915px',
            width: '100%',
            height: '812px',
            display: 'block',
            objectFit: 'cover',
            // borderRadius: '100% 0 100% 100%',
            // transform: 'matrix(0.97, -0.24, 0.25, 0.97, 0, 0)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            clipPath: 'ellipse(700px 500px at 705px 200px)',

            [theme.breakpoints.down('sm')]: {
                position: 'absolute',
                opacity: 0.12,
            }
        },
        navButtons: {
            position: 'absolute',
            top: '50px',
            right: '180px',
        },
        loginBtn: {
            background: 'transparent',
            boxShadow: 'none',
            color: '#fff',
            justifyContent: 'flex-end',
            marginRight: '-50px',

            '&:hover': {
                background: 'transparent',
                boxShadow: 'none',
            }
        },
        productEvaluation: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '20px 30px',
            maxWidth: '75%',
            height: 'auto',
            margin: '0px auto',

            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                marginTop: '180px',
                maxWidth: '80%',
            },
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column',
                flexWrap: 'nowrap',
                marginTop: '180px',
                maxWidth: 'initial',
            },
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 180,

            [theme.breakpoints.down('sm')]: {
                marginBottom: '20px',
            }
        },
        formcontrolFluid: {
            [theme.breakpoints.down('sm')]: {
                width: '300px',
            },
            [theme.breakpoints.down('xs')]: {
                width: '200px',
                minWidth: '200px',
                minWidth: '100% !important',
            },
        },
        textFieldLabel: {
            [theme.breakpoints.down('xs')]: {
                textAlign: 'left',
                marginTop: '0px !important',
            }
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        investBtn: {
            background: '#10C06D',
            color: '#fff',
            marginLeft: '0px',

            '&:hover': {
                background: '#10C06D',
                color: '#fff',
            },

            [theme.breakpoints.down('sm')]: {
                height: '58px',
            },
        },
        productInput: {
            border: '3px solid #E3E6EA',
            background: '#F5F5F5',
            borderRadius: '4px',
        },
        selectInputLabel: {
            marginTop: '5px !important',
        },
        guidelineGridContainer: {
            alignItems: 'center',
            placeContent: 'center',
            marginTop: '50px',
        },
        guideline: {
            fontWeight: 500,
            fontSize: '40px',
            lineHeight: '48px',
            textAlign: 'center',
            margin: '0px auto',

            [theme.breakpoints.down('sm')]: {
                maxWidth: '94%',
            }
        },
        guidelineStepTitle: {
            color: '#002058',
            fontSize: '25px',
            fontWeight: 900,
            lineHeight: '30px',
            marginTop: '50px',
            marginBottom: '20px',
        },
        guidelineStepDescription: {
            minHeight: '70px',
            textAlign: 'center',
            margin: '0px auto',
            fontSize: '14px',
            color: '#B3B3B3',
        },
        guideLineStepDescriptionFlex: {
            display: 'flex',
            justifyContent: 'center',
        },
        guidelineIcon: {
            background: '#fff',
            width: '100px',
            height: '80px',

            borderRadius: '8px',
            boxShadow: '0px 3px 6px 2px #ddd',
            color: '#F9A825',
        },
        footer: {
            background: '#152144',
            minHeight: '706px',
            width: '100%',
            padding: 0,
            paddingTop: '200px',
            justifyContent: 'center',
            alignItems: 'center',

            [theme.breakpoints.down('sm')]: {
               paddingBottom: '100px',
            }
        },
        channelHeadingGrid: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        paperChannel: {
            background: 'transparent',
        },
        paperChannelItem: {
            [theme.breakpoints.down('xs')]: {
                textAlign: 'center',
                margin: '0px auto',
            }
        },
        paperChannelItemAlignLeft: {
            [theme.breakpoints.only('sm')]: {
                textAlign: 'left',
            },
        },
        paperChannelItemAlignRight: {
            [theme.breakpoints.only('sm')]: {
                textAlign: 'right',
            },
        },
        channelTitle: {
            maxWidth: '230px',
            color: '#fff',
            textAlign: 'right',
            fontSize: '54px',
            fontWeight: 400,
            margin: '0px 0px 0px auto',
            lineHeight: 1.2,

            [theme.breakpoints.down('sm')]: {
                fontSize: '44px',
            },
            [theme.breakpoints.down('xs')]: {
                maxWidth: 'initial',
                textAlign: 'center',
                margin: '0px auto 0px auto',
            }
        },
        channelInfo: {
            margin: '23px 0px 0px 0px',
            textAlign: 'left',
            maxWidth: '220px',
            lineHeight: 1.8,
            fontWeight: 400,
            fontSize: '15px',

            [theme.breakpoints.down('xs')]: {
                minHeight: '20px',
                maxWidth: 'initial',
                textAlign: 'center',
                margin: '-20px auto 0px auto',
                lineHeight: 1.5,
            }
        },
        channelIconWrapper: {
            [theme.breakpoints.down('sm')]: {
                width: '120px',
                background: 'transparent',
                textAlign: 'center',
                margin: '0px 0px 0px auto',
            },
            [theme.breakpoints.down('xs')]: {
                margin: '0px auto 0px auto',
            }
        },
        channelIconWrapperAlignLeft: {
            [theme.breakpoints.down('sm')]: {
                margin: '0px auto 0px 0px',
            },
            [theme.breakpoints.down('xs')]: {
                margin: '0px auto 0px auto',
            }
        },
        channelIcon: {
            background: 'rgb(255 255 255 / 10%)',
            color: '#ffffffb5',
            opacity: 1,
            width: '50px',
            height: '50px',
            fontSize: '40px',
            padding: '10px',
            borderRadius: '100%',
            marginBottom: '10px',
        },
        channelListGrid: {
            // maxWidth: '800px',
            // margin: '80px auto 0px auto',

            [theme.breakpoints.down('md')]: {
                fontSize: '30px',
            },
        },
        channelSource: {
            [theme.breakpoints.down('xs')]: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '5px',
                marginBottom: '40px',
            }
        },
        downloadLabel: {
            display: 'inline-block',
            maxWidth: '100px',
            lineHeight: 1.2,
            textAlign: 'left',
            color: '#fff',
            fontSize: '16px',
            marginLeft: '10px',

            [theme.breakpoints.down('sm')]: {
                marginLeft: '5px',
            },
            [theme.breakpoints.down('xs')]: {
                maxWidth: 'initial',
            }
        },
        channelSourceDownloadIcon: {
            color: '#fff',
        },
        contactInfo: {
            color: '#fff',
            marginBottom: '15px',
            textAlign: 'left',
        },
        contactUsPaper: {
            background: '#F9A825',
            width: '200px',
            height: 'auto',
            minHeight: '170px',
            borderRadius: '20px',
            padding: '40px 5px 20px 40px',
        },
        drawline: {
            content: '" "',
            display: 'block',
            width: '1px',
            height: '100px',
            background: '#fff',
        }
    };
  });
  
const HomeScreen = () => {
    const classes = useStyles();

    return (
        <div className="homeScreen">
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={5}>
                        <Paper className={classes.paper}>
                            <div className={classes.logoWrapper}>
                                <img className={classes.logo} alt="logo" src={logo} />
                            </div>

                            <Typography component="h1" className={classes.tagline}>
                                Our Mission is to Empower your Financial  Freedom
                            </Typography>

                            <Typography component="p" className={clsx(classes.tagline, classes.description)}>
                                We help make dreams happen. Come to us with your dreams 
                                of a better future and we will make it happen.
                            </Typography>

                            <Button className={classes.getStartedBtn} variant="contained">Get started now</Button>
                        </Paper>
                    </Grid>
                    <Grid item item xs={12} sm={12} md={7}>
                        <Paper className={clsx(classes.paper, classes.alignCenter, classes.paperOverlay)}>
                            <img className={classes.heroImage} alt="banner" src={heroImage} />

                            <Hidden smDown>
                                <div className={classes.navButtons}>
                                    <Button className={clsx(classes.getStartedBtn, classes.loginBtn)} variant="contained">Login</Button>
                                    <Button className={classes.getStartedBtn} variant="contained">Signup</Button>
                                </div>
                            </Hidden>

                        </Paper>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={{ marginTop: '-113px' }}>
                    <Grid item sm zeroMinWidth style={{ margin: '0px auto' }}>
                        <Paper className={clsx(classes.paper, classes.alignCenter, classes.productEvaluation)}>
                            <FormControl variant="outlined" className={clsx(classes.formControl, classes.formcontrolFluid)}>
                                <InputLabel className={classes.selectInputLabel} htmlFor="outlined-age-native-simple">
                                    Select Product
                                </InputLabel>
                                <Select
                                className={classes.productInput}
                                native
                                value={''}
                                onChange={() => {}}
                                label="Select Product"
                                inputProps={{
                                    name: 'product',
                                    id: 'outlined-age-native-simple',
                                }}
                                >
                                    <option aria-label="None" value="" />
                                </Select>
                            </FormControl>

                            <TextField 
                                className={clsx(classes.productInput, classes.formControl, classes.formcontrolFluid)}
                                style={{minWidth: '280px'}} 
                                id="outlined-search" 
                                label="How much do want to invest?" 
                                type="text" 
                                variant="outlined" 
                                InputLabelProps={{
                                    classes: {
                                        root: classes.textFieldLabel
                                    }
                                }}
                            />

                            <FormControl variant="outlined" className={clsx(classes.formControl, classes.formcontrolFluid)}>
                                <InputLabel className={classes.selectInputLabel} htmlFor="outlined-age-native-simple">
                                    For how long?
                                </InputLabel>
                                <Select
                                className={classes.productInput}
                                native
                                value={''}
                                onChange={() => {}}
                                label="For how long?"
                                inputProps={{
                                    name: 'product',
                                    id: 'outlined-age-native-simple',
                                }}
                                >
                                    <option aria-label="None" value="" />
                                </Select>
                            </FormControl>

                            <Button className={clsx(classes.getStartedBtn, classes.investBtn, classes.formControl, classes.formcontrolFluid)} variant="contained">
                                Calculate
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={{ marginTop: '220px' }}>
                    <Grid item sm>
                        <Typography component="h3" className={clsx(classes.tagline, classes.guideline)}>
                            Your guide to financial wellness
                        </Typography>
                    </Grid>
                </Grid>

                <Container maxWidth="md" style={{marginBottom: '150px'}}>
                    <Grid className={classes.guidelineGridContainer} container spacing={0}>
                        <Grid item xs={12} sm={12} md={4}>
                            <Paper className={clsx(classes.paper, classes.alignCenter)}>
                                <AddPhotoAlternateIcon className={classes.guidelineIcon} />
                                <Typography component="h3" className={clsx(classes.tagline, classes.guideline, classes.guidelineStepTitle)}>
                                    Invest for growth
                                </Typography>
                                <Typography component="p" className={clsx(classes.tagline, classes.description, classes.guidelineStepDescription, classes.guideLineStepDescriptionFlex)}>
                                    Invest with us and see your wealth grow
                                </Typography>                            
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Paper className={clsx(classes.paper, classes.alignCenter)}>
                                <AddPhotoAlternateIcon className={classes.guidelineIcon} />
                                <Typography component="h3" className={clsx(classes.tagline, classes.guideline, classes.guidelineStepTitle)}>
                                    Think of the rainy day
                                </Typography>
                                <Typography component="p" className={clsx(classes.tagline, classes.description, classes.guidelineStepDescription, classes.guideLineStepDescriptionFlex)}>                                
                                    Get ready for the rainy day. Invest today in our growth instrument.
                                </Typography>                            
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Paper className={clsx(classes.paper, classes.alignCenter)}>
                                <AddPhotoAlternateIcon className={classes.guidelineIcon} />
                                <Typography component="h3" className={clsx(classes.tagline, classes.guideline, classes.guidelineStepTitle)}>
                                    Grow your knowledge
                                </Typography>
                                <Typography component="p" className={clsx(classes.tagline, classes.description, classes.guidelineStepDescription, classes.guideLineStepDescriptionFlex)}>
                                    Learn how to get more from your money with easy-to-understand articles and videos from financial experts.
                                </Typography>                            
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>

                {/* Footer */}
                <Container className={classes.footer} maxWidth="xl">                    
                    <Grid className={classes.channelHeadingGrid} container spacing={0}>
                        <Grid item xs={12} sm={6}>
                            <Paper className={clsx(classes.paper, classes.alignCenter, classes.paperChannel)}>
                                <Typography component="h2" className={clsx(classes.tagline, classes.guideline, classes.channelTitle)}>
                                    Our Channels
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={clsx(classes.paper, classes.alignCenter, classes.paperChannel)}>
                                <Typography component="p" className={clsx(classes.tagline, classes.guidelineStepDescription, classes.channelInfo)}>
                                    Get access to sfs life using any of the following plaforms
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Container maxWidth="md" style={{marginTop: '50px'}}>
                        <Grid className={classes.channelListGrid} container spacing={0}>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Paper className={clsx(classes.paper, classes.alignCenter, classes.paperChannel, classes.paperChannelItemAlignRight, classes.paperChannelItem)}>
                                    <div className={classes.channelIconWrapper}>
                                        <AndroidIcon className={classes.channelIcon} />
                                    </div>

                                    <Typography component="p" className={clsx(classes.tagline, classes.guidelineStepDescription, classes.channelSource, classes.paperChannelItemAlignRight, classes.paperChannelItem)}>
                                        <GetAppIcon className={classes.channelSourceDownloadIcon} />
                                        <span className={classes.downloadLabel}>Download on Play Store</span>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Paper className={clsx(classes.paper, classes.alignCenter, classes.paperChannel, classes.paperChannelItemAlignLeft, classes.paperChannelItem)}>
                                    <div className={clsx(classes.channelIconWrapper, classes.channelIconWrapperAlignLeft)}>
                                        <AppleIcon className={classes.channelIcon} />
                                    </div>

                                    <Typography component="p" className={clsx(classes.tagline, classes.guidelineStepDescription, classes.channelSource, classes.paperChannelItemAlignLeft)}>
                                        <GetAppIcon className={classes.channelSourceDownloadIcon} />
                                        <span className={classes.downloadLabel}>Download on Apple Store</span>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Paper className={clsx(classes.paper, classes.alignCenter, classes.paperChannel, classes.paperChannelItemAlignRight, classes.paperChannelItem)}>
                                    
                                    <div className={classes.channelIconWrapper}>
                                        <LanguageIcon className={classes.channelIcon} />
                                    </div>

                                    <Typography component="p" className={clsx(classes.tagline, classes.guidelineStepDescription, classes.channelSource, classes.paperChannelItemAlignRight)}>
                                        <span className={classes.downloadLabel} style={{marginLeft: '30px'}}>
                                            Get Stared Online
                                        </span>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <Paper className={clsx(classes.paper, classes.alignCenter, classes.paperChannel, classes.paperChannelItemAlignLeft, classes.paperChannelItem, classes.contactUsPaper)}>
                                    <Typography component="p" className={classes.contactInfo}>
                                        Contact us for more information
                                    </Typography>
                                    <Typography component="p" className={classes.contactInfo}>
                                        <strong>info@sfsnigeria.com</strong>
                                    </Typography>
                                    <Typography component="p" className={classes.contactInfo}>                                        
                                        <strong>098-793 079-383</strong>
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </div>
        </div>        
    );
}

export default HomeScreen;