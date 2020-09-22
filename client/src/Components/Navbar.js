import React, {useContext} from 'react';
import AuthContext from "../Contexts/AuthContext";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MenuAppBar() {
    const history = useHistory();
    const {user, handleLogout} = useContext(AuthContext);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const logout = () => {

        handleClose();
        handleLogout();
        history.push('/auth/login');
    };

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleStart = () => {
        history.push('/');
    };

    const handleLogin = () => {
        handleClose();
        history.push('/auth/login');
    };

    const handleRegister = () => {
        handleClose();
        history.push('/auth/register');
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} onclick={handleStart}>
                        UNIP - Fórum
                    </Typography>
                    <Button color="inherit" onClick={() => history.push('/category')}>
                        Fórum
                    </Button>
                    {user ?
                        (
                            <div>
                                <Button
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    {user.name}
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={logout}>Logout</MenuItem>
                                </Menu>
                            </div>
                        )
                        :
                        (
                            <div>
                                <Button
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    Conta
                                </Button>
                                <Button
                                    onClick={handleStart}
                                    color="inherit"
                                >
                                    Página Inicial
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleLogin}>Login</MenuItem>
                                    <MenuItem onClick={handleRegister}>Registrar</MenuItem>
                                </Menu>
                            </div>
                        )
                    }

                </Toolbar>
            </AppBar>
        </div>
    );
}

/*

import React, {useContext} from 'react';
import AuthContext from "../Contexts/AuthContext";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const history = useHistory();
  const {user, handleLogout} = useContext(AuthContext);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const logout = () => {


        handleClose();
        handleLogout();

  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {

        handleClose();
        history.push('/auth/login');


  }

  const handleRegister = () => {

    handleClose();
    history.push('auth/register');


  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Node React Forum
          </Typography>

            {user ?

                (
                

          <div>
              <Button
                onClick={handleMenu}
                color="inherit"
              >
                {user.name}
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>

                )

                :

                (

                    <div>
              <Button
                onClick={handleMenu}
                color="inherit"
              >
                {user.name}
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogin}>Login</MenuItem>
                <MenuItem onClick={handleRegister}>Registrar</MenuItem>
              </Menu>
            </div>

                )

            }

        </Toolbar>
      </AppBar>
    </div>
  );
}

*/