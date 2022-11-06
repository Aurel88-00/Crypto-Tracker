import { lazy } from "react";
import { RouteInterface } from "./shared/models/interfaces/route-interface.interface";

const CoinsTable = lazy(() => import('./shared/components/CoinsTable/index'))

const getRoutes = (): Array<RouteInterface> => [
   {
    path: "/",
    element: <CoinsTable />,
   }
 
];

export default getRoutes;
