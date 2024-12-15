import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./Layouts/Rootlayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicePage from "./pages/ServicePage";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import CheckoutPage from "./pages/CheckoutPage";
import Admin from "./pages/Admin";
import Adminlogin from "./pages/Adminlogin";
import Error from "./pages/Error";
import BridalSpecial from "./pages/BridalSpecial";
import RecentEvents from "./pages/RecentEvents";
import AdminRootLayout from "./Layouts/AdminRootLayout";
import Bookings from "./components/screens/Admin/Bookings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/events" element={<RecentEvents />} />
        <Route path="/bridalspecial" element={<BridalSpecial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<Error />} />
      </Route>

      <Route path="/admin">
        <Route path="/admin" element={<AdminRootLayout />}>
          <Route path="/admin/home" element={<Admin />} />
          <Route path="/admin/bookings" element={<Bookings />} />
        </Route>
        <Route path="/admin/login" element={<Adminlogin />} />
      </Route>
    </>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
