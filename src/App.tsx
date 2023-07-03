import Background from "./Components/Background/Background";
import Body from "./Components/Body/Body";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Background/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Body></Body>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
