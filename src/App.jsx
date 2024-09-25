import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import './App.css'
import { Header, Waitlist } from "./components";
import { Home } from './pages'

const Layout = () => {
  const [isActive, setisAct] = useState(true);

  const toggleActive = () => {
	  setisAct(!isActive);
  };

  return (
    <div>
      {/* {isActive && <Waitlist toggleActive={toggleActive} />} */}
      <Header />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        {/* <Route path="/about" element={<Shop />}></Route> */}
        {/* <Route path="/services" element={<About />}></Route> */}
        {/* <Route path="/insights" element={<Contact />}></Route> */}
        {/* <Route path="/contactus" element={<Journal />}></Route> */}
        {/* <Route path="/product/:_id" element={<ProductDetails />}></Route> */}
      </Route>
      {/* <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route> */}
    </Route>
  )
);


function App() {

  return (
    <div className="w-full">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
