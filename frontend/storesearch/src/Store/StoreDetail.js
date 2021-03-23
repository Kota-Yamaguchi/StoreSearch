import React, { useState } from "react";
import { makeStyles,} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import getPlaces from "./PlacesApi.js";
import TextFild from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IndicateMap from '../GoogleMap/Googlemap.js';
import Header from "../util/Header.js";

const useStyles = makeStyles((theme) => ({
	Box: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "120vh",
		widtgh: "100vw",
		backgroundColor: "#FFFFFF",
	},
	SearchCard: {
		height: "100vh",
		width: "50vw",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "5vw"

	},
	TextFild: {
		width: "20vw",
	}

})
)


function StoreDetail() {
	const classes = useStyles();
	var [storeName, setStoreName] = useState("");
	var [storeInfo, setStoreInfo] = useState("");



	const onNameChange = (e) => {
		setStoreName(e.target.value)
	}

	const onNameClick = (e) => {
		getPlaces(storeName, setStoreInfo);
		console.log(storeInfo);
	}


	return (
		<Box className={classes.Box}>
			<Header />
			<Card>
				<CardHeader />
				<CardContent className={classes.SearchCard}>
					<Typography>
						お店検索: <TextFild className={classes.TextFild} onChange={onNameChange} variant="outlined" label="お店の名前を入力してください" />
					</Typography>
					<Button onClick={onNameClick} variant="contained" color="primary"> get INFO </Button>
					{storeInfo &&
						<div>
							<Card>
								<CardHeader title={storeInfo["name"]} />
								<CardContent>
									<Typography> 住所: {storeInfo["formatted_address"]} </Typography>
								</CardContent>
								<img src={storeInfo.photos[0].getUrl({ 'maxWidth': 500, 'maxHeight': 500 })} alt="image" />
							</Card>
						</div>
					}
					<div id="map"></div>
					<Card>
						<IndicateMap adrress={storeInfo["formatted_address"]} />
					</Card>
				</CardContent>
			</Card>

		</Box>

	);
}



export default StoreDetail;
