import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import { Roots } from "./layouts/root";

// pages
import { Homepage } from "./pages/Home";
import { About } from "./pages/About/About";
import { Skills } from "./pages/Skill";
import { Resumes } from "./pages/Resume";
import { Portfolio } from "./pages/Portfolio";
import NotFound from "./pages/404";
import Certification from "./pages/Certificate";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Roots />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="resume" element={<Resumes />} />
      <Route path="certificate" element={<Certification />} />
      <Route path="skill" element={<Skills />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
