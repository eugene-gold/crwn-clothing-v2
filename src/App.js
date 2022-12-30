import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { lazy, useEffect, Suspense } from "react";
import { Spinner } from "./components/spinner/spinner.component";

const Home = lazy(() =>
  import("./routes/home/home.component").then(({ Home }) => ({ default: Home }))
);
const Authentication = lazy(() =>
  import("./routes/authentication/authentication.component").then(
    ({ Authentication }) => ({ default: Authentication })
  )
);
const Shop = lazy(() =>
  import("./shop/shop.component").then(({ Shop }) => ({ default: Shop }))
);

const Checkout = lazy(() =>
  import("./routes/checkout/checkout.component").then(({ Checkout }) => ({
    default: Checkout,
  }))
);

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component").then(({ Navigation }) => ({
    default: Navigation,
  }))
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
