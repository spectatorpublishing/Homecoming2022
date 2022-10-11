import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { React } from 'react';
import Home from "./components/Home"

const App = () => {

  return (
    <div>
      <Router>
      <Home/>
        <Routes>
            <Route exact path='/'/>
          </Routes>
      </Router>
      </div>
  );
}

export default App;