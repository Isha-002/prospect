import { lazy } from "react";

const MyComponent = lazy(() => import("./components/explore/Animals"));

import("./components/explore/Animals");

export default MyComponent;
