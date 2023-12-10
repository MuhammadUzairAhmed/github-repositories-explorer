import { Suspense, lazy } from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import { FetchingError } from "./components/error/FetchingError";
import Header from "./components/Header";
import Search from "./components/Search";
import Loading from "./components/Loading";

const Users = lazy(() => import("./components/Users"));

function App() {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={FetchingError}
        onError={() => console.log("Error happened!")}
      >
        <Header />
        <Search />
        <div className="mt-5" />
        <Suspense fallback={<Loading />}>
          <Users />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
