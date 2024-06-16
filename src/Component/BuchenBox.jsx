import { Link } from "react-router-dom";

const BuchenBox = () => {
  return (
    <div class="buchen-box">
      <div>
        <h2>
          Buche jetzt Deinen <br />
          online Termin
        </h2>

        <h5>
          Du möchtest nicht nur bei den Papierrollen profitieren?
          <br /> Dann lass Dich zu unseren Produkten beraten.
          <br /> Der Termin ist schnell und einfach vereinbart.
        </h5>
      </div>
      <div class="personal-foto">
        <img src="" alt="" />
      </div>
      <Link to="Registrieren">
        <a class="regist-button" href="Registrieren">
          jetzt registrieren
        </a>
      </Link>
    </div>
  );
};

export default BuchenBox;
