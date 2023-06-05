import "./App.css";

import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "./Logo/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path={routes.emails.path}
        element={<Navigate to={`${routes.emails.path}/inbox`} />}
      />
      <Route
        path={routes.invalid.path}
        element={<Navigate to={`${routes.emails.path}/inbox`} />}
      />
      <Route path={routes.main.path} element={<routes.main.element />}>
        <Route path={routes.view.path} element={<routes.view.element />} />
        <Route
          path={`${routes.emails.path}/:type`}
          element={<routes.emails.element />}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
