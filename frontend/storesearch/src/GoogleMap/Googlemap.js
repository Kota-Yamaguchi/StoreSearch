
import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import Geocode from "react-geocode";




class GoogleMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: 140,
			lng: 35,
		}

	};

	componentDidUpdate(nextProps) {

		if (nextProps.adrress !== this.props.adrress) {
			Geocode.setLanguage("ja");
			Geocode.fromAddress(this.props.adrress).then(
				response => {
					var { lat, lng } = response.results[0].geometry.location;
					console.log(lat, lng);
					this.setState({
						lat: lat,
						lng: lng,
					})
				},
				error => {
					console.error(error);
				}
			);
		
			return true;
		} else {
			return false;
		}

	}

	componentDidMount() {
		Geocode.setApiKey("*************************");
		navigator.geolocation.getCurrentPosition((position) => {
			this.setState({
			  lat: position.coords.latitude,
			  lng: position.coords.longitude
			});
			console.log(position.coords);
		  },
		  (err) => {
			console.log(err);
		  })
		
		
	}
	render() {

		const containerStyle = {
			width: '50vw',
			height: '50vh',
			position: "relative"
		}

		return (

			<Map
				containerStyle={containerStyle}
				google={this.props.google}
				zoom={40}
				center={{ lat: this.state.lat, lng: this.state.lng }}
				initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
			>
				<Marker
					title={"目的地"}
					position={{ lat: this.state.lat, lng: this.state.lng }}
				/>
				<Marker
          title = { "目的地" }
          position = {{ lat: this.state.lat+1, lng: this.state.lng+1 }}
        />

				

			</Map>

		);
	}
}

export default GoogleApiWrapper({
	apiKey: ("*************************")
})(GoogleMap);