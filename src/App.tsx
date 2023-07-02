import Background from "./Background";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Background/>
        <div className="content">
          <Routes>
            <Route path="/"/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
