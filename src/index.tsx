import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

// Pages
import DiscoverPage from "./Pages/DiscoverPage";
import HomePage from "./Pages/HomePage";
import ConsultPage from "./Pages/ConsultPage";
import SpacesPage from "./Pages/SpacesPage";
import MyRoutinePage from "./Pages/MyRoutinePage";

// Components
import RouterWrapper from "./Components/RouterWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouterWrapper>
        <HomePage />
      </RouterWrapper>
    ),
  },
  {
    path: "discover",
    element: (
      <RouterWrapper>
        <DiscoverPage />
      </RouterWrapper>
    ),
  },
  {
    path: "consult",
    element: (
      <RouterWrapper>
        <ConsultPage />
      </RouterWrapper>
    ),
  },
  {
    path: "spaces",
    element: (
      <RouterWrapper>
        <SpacesPage />
      </RouterWrapper>
    ),
  },
  {
    path: "myRoutine",
    element: (
      <RouterWrapper>
        <MyRoutinePage />
      </RouterWrapper>
    ),
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
