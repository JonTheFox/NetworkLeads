import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import GlowingLoader from "./components/GlowingLoader/GlowingLoader.jsx";

const LayzShoppingList = lazy(() =>
	import(
		/* webpackChunkName: "ShoppingList" */ "./components/ShoppingList/ShoppingList.js"
	)
);

const baseRoute = "/";

const AppRoutes = (props) => {
	const { route } = props;
	const { location } = route;

	return (
		<React.Fragment>
			<Suspense fallback={<GlowingLoader />}>
				<Switch location={location}>
					<Route path={`${baseRoute}`}>
						<LayzShoppingList route={route} />
					</Route>
					<Redirect to={`${baseRoute} client-type-select`} />
				</Switch>
			</Suspense>
		</React.Fragment>
	);
};

export default AppRoutes;
