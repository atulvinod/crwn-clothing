import { Routes, Route } from "react-router-dom";
import * as routes from "./routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<routes.Navigation />}>
        <Route index element={<routes.Home />} />
        <Route path="auth" element={<routes.Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
