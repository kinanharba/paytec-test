import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Component/NavBar";
import ProductInfo from "./Component/ProductInfo";
import BuchenBox from "./Component/BuchenBox";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2>Hello Michael!</h2>
      <hr style={{ width: "100%", border: "1px solid #006daa" }} />
      <ProductInfo />
      <BuchenBox />
    </div>
  );
}

export default App;
