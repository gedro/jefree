import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import logo from '../../public/jefree-logo-transparent.png';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: 'white',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    marginRight: '3rem',
    cursor: 'pointer',
    unicodeBidi: 'isolate',
    fontFamily: 'Montserrat',
    fontSize: '1.2rem',
  },
  logo: {
    position: 'absolute',
    top: '100%',
    transform: 'translateY(-30%)',
  }
}));

export default function HeaderBar({ appContext, onAppContextChanged }) {
  const classes = useStyles();

  const onClick = () => {
    if (appContext && appContext.isSignedIn && appContext.onSignOut) {
      appContext.onSignOut();
    }
  };

  return (
    <React.Fragment>
      <header>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Link to='/'>
              <img src={logo} alt="logo" width={260} height={262} className={classes.logo} />
            </Link>
            <div className={classes.menu}>
              <Link to='/contact' className={classes.link}>
                Contact
              </Link>
              <Link to='/about' className={classes.link}>
                About
              </Link>
              <Button
                color={appContext?.isSignedIn ? 'secondary' : 'primary'}
                variant="contained"
                className={classes.link}
                component={Link}
                to={appContext?.isSignedIn ? '/login?logout=true' : '/auth/signin'}
                onClick={onClick}
              >
                {appContext?.isSignedIn ? 'Logout' : 'Login'}
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </header>
    </React.Fragment>
  );
};