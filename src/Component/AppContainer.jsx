import NavBar from "./NavBar";
import ProductInfo from "./ProductInfo";
import BuchenBox from "./BuchenBox";
import Products from "./Products";

function AppContainer() {
  return (
    <div class="App">
      <NavBar />
      <h2>Hello Michael!</h2>
      <hr style={{ width: "100%", border: "1px solid #006daa" }} />
      <ProductInfo />
      <Products />
      <BuchenBox />
    </div>
  );
}

export default AppContainer;
