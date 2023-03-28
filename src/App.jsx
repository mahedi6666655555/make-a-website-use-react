import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <>
        <div>
          <Header></Header>
          <Banner></Banner>
          <Main></Main>
        </div>
      </>
    </div>
  );
}

export default App;
