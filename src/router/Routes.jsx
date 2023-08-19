import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/register" component={Register} />
    </Routes>
  );
};

export default Router;
