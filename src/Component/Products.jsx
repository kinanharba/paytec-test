import React from "react";
import Papierrollen from "../Component/productImages/Papierrollen.png";
import Kasse from "../Component/productImages/Kasse.png";
import Papierrollen2 from "../Component/productImages/Papierrollen2.png";
import Pax from "../Component/productImages/Pax.png";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div class="producte">
        <img
          style={{
            width: "150px",
            height: "150px",
          }}
          src={Papierrollen2}
          alt=""
        />
        <img style={{ width: "150px", height: "150px" }} src={Kasse} alt="" />

        <a class="sonder-button" href="Registrieren">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="Registrieren"
          >
            <span>Sonderaktion</span>
            Papierrollen
          </Link>
        </a>

        <img
          id="last-img"
          style={{
            width: "150px",
            height: "150px",
          }}
          src={Pax}
          alt=""
        />
        <img
          id="thr-img"
          style={{ width: "102px", height: "100px" }}
          src={Papierrollen}
          alt=""
        />
      </div>
    </div>
  );
};

export default Products;
