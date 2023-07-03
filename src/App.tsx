import Background from "./Components/Background/Background";
import Body from "./Components/Body/Body";
import Title from "./Components/Title/Title";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Background/>
        <div className="content">
          <Routes>
            <Route path="/holodex-app" element={<Body></Body>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
