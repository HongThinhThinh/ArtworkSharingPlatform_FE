import { RouterProvider } from "react-router-dom";
import { router } from "./config/router";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { StateProvider } from "./Context/StateProvider";
import { useEffect } from "react";
import { requestPermission } from "./config/firebase";

AOS.init({
  // initialise with other settings
  duration: 1000,
});
function App() {
  useEffect(() => {
    const getKey = async () => {
      const key = await requestPermission();
      console.log(key);
    };
    getKey();
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StateProvider>
            <RouterProvider router={router} />
          </StateProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
