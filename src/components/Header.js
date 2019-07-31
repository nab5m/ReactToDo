import React, { Component } from 'react';
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: '1.5rem'
    },
    appBar: {
        color: "white",
        backgroundColor: "#20BDFF",
        // linear-gradient(to right, rgb(84, 51, 255), rgb(32, 189, 255), rgb(165, 254, 203))",
    },
    navButton: {
        fontWeight: 900,
    }
});

class Header extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="sticky" className={classes.appBar}>
                    <Toolbar>
                        <IconButton href="#" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            ToDo
                        </Typography>
                        <Button href="#" color="inherit" className={classes.navButton}>로그인</Button>
                        <Button href="#" color="inherit" className={classes.navButton}>회원가입</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);