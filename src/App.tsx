import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import UserList from "./components/user/UserList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-list" element={<UserList />} />
      </Routes>
    </Router>
  );
};

export default App;
