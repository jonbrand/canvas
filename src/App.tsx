import './App.css';
import { Canvas } from "./Components/Canvas/Canvas";

function App() {
  return (
    <Canvas 
      width={window.innerWidth} 
      height={window.innerHeight} 
    />
  );
}

export default App;
