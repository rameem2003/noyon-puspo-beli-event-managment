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
import BookingDetails from "./components/screens/Admin/BookingDetails";
import AdminSettings from "./pages/AdminSettings";
import AdminProtectorRoute from "./routes/AdminProtectorRoute";

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
        <Route
          path="/admin"
          element={
            <AdminProtectorRoute>
              <AdminRootLayout />
            </AdminProtectorRoute>
          }
        >
          <Route
            path="/admin/home"
            element={
              <AdminProtectorRoute>
                <Admin />
              </AdminProtectorRoute>
            }
          />
          <Route
            path="/admin/bookings"
            element={
              <AdminProtectorRoute>
                <Bookings />
              </AdminProtectorRoute>
            }
          />
          <Route
            path="/admin/bookings/:id"
            element={
              <AdminProtectorRoute>
                <BookingDetails />
              </AdminProtectorRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <AdminProtectorRoute>
                <AdminSettings />
              </AdminProtectorRoute>
            }
          />
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
