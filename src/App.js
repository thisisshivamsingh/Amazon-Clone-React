import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
import { useDispatch } from "react-redux";
import { auth } from "./utils/firebase";
import { setuser } from "./redux/actions";
// import SingleProduct from "./pages/SingleProduct/SingleProduct";
// import Checkout from "./pages/Checkout/Checkout";
// import Payment from "./pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Loading from "./components/Loading/Loading";
// import Orders from "./pages/Orders/Orders";

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Payment = lazy(() => import("./pages/Payment/Payment"));
const Orders = lazy(() => import("./pages/Orders/Orders"));
const SingleProduct = lazy(() => import("./pages/SingleProduct/SingleProduct"));

const promise = loadStripe(
  "pk_test_51LdAF7SJC6JDEwwj9c1Fo8emroePnBzhQ6c79C4waGBjsIQXYE2Uw4SnO04fMLcPA5MXPrf1sMXfsPWGrzwLPwkA00zQukrEBh"
);

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setuser(authUser));
      } else {
        dispatch(setuser(null));
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Suspense fallback={<Loading />}>
                  <Header />
                  <Orders />
                </Suspense>
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Suspense fallback={<Loading />}>
                  <Header />
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                </Suspense>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Suspense fallback={<Loading />}>
                  <Header />
                  <Checkout />
                </Suspense>
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Suspense fallback={<Loading />}>
                  <Header />
                  <SingleProduct />
                </Suspense>
              </>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Loading />}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Suspense fallback={<Loading />}>
                  <Header />
                  <Home />
                </Suspense>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
