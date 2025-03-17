import React from "react";
import "./App.css";

const RemoteButton = React.lazy(() => import("remote/Button"));

function App() {
  return (
    <div>
      <h1>Host Application</h1>
      <React.Suspense fallback="Loading Button...">
        <RemoteButton text="I'm a remote button" />
      </React.Suspense>
    </div>
  );
}

export default App;
