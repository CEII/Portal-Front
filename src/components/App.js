import React from "react";
import {Switch, Route} from "react-router-dom";
import {IndexPage} from "../pages/IndexPage";

export const App=()=>{
	return (
		<Switch>
			<Route path={"/"} component={IndexPage}/>
		</Switch>
	);
};