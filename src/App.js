import { BrowserRouter as BrowserRouter, Routes, Route} from 'react-router-dom';
import { React } from 'react';
import Home from './containers/Home';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;