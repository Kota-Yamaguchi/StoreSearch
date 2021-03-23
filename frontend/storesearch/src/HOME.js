import React from 'react';
import STOREDETAILS from './Store/StoreDetail.js';

import {BrowserRouter,Switch, Route } from 'react-router-dom';

function HOME(){
	return(
	<React.Fragment>
	<BrowserRouter>
		<Switch>
			 {/* Route exact path="/" component={Intro} /> */}
			 <Route path='/storedetail' component={STOREDETAILS} />
			
			
		</Switch>
	</BrowserRouter>
	</React.Fragment>
	);
}

export default HOME;
