//import Component AppRoutes
import AppRoutes from "./Routers/AppRoutes";

//import Component Token Provider
import ComponentTokenProvider from "./Contexts/TokenProvider";

export default function App() {
  return (
    <>
      <ComponentTokenProvider>
        <AppRoutes />
      </ComponentTokenProvider>
    </>
  );
}
