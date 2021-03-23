import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme)=> ({

	appBarColorDefault: {
		backgroundColor: '#FFFFEE',
		color: "#111111"
	},
})
);

function Header() {
	const classes = useStyles();


	return (
		<div classsName={classes.root}>
			<AppBar position="absolute" classes={{ colorPrimary: classes.appBarColorDefault }}>
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h5" classsName={classes.title}>
						Store Searcher
         		</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}


export default Header;
