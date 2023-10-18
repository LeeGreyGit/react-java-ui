import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Detail from "./components/detail/Detail";
import Todo from "./components/todo/Todo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
