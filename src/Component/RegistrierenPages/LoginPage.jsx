import React from "react";

const LoginPage = () => {
  return (
    <div class="login-page">
      <div class="headline-text">
        <h1>Registrieren</h1>
        <select>
          <option value="">German</option>
        </select>
      </div>
      <div class="container">
        <div className="user-container">
          <div class="login-info">
            <h2>Standard Kontakt Information</h2>
            <div className="user-info">
              <label>
                <span>*</span> Vorname
              </label>
              <input type="text" />
            </div>
            <div className="user-info">
              <label>
                <span>*</span> Nachname
              </label>
              <input type="text" />
            </div>
            <div className="user-info">
              <label>
                <span>*</span> E-Mail
              </label>
              <input placeholder="ls.juenemann@pay-tec.de" type="email" />
            </div>
            <div className="user-info">
              <label>
                <span></span>
                Telefonnummer
              </label>
              <input type="text" />
            </div>
            <div className="user-info">
              <label>
                <span></span>
                Webseite
              </label>
              <input type="text" />
            </div>
            <div className="user-info">
              <label>
                <span></span>
                Position
              </label>
              <input type="text" />
            </div>
            <div className="user-info">
              <label>
                <span>*</span> Passwort
              </label>
              <input type="password" />
            </div>
            <div className="user-info">
              <label>
                <span></span>
                Passwort Wiederholung
              </label>
              <input type="text" />
            </div>
          </div>

          {/* ========================== */}
          <div class="login-info">
            <h2>Firmen Informationen</h2>
            <div className="user-info">
              <label>
                <span>*</span> Firma
              </label>
              <input type="name" />
            </div>
            <div className="user-info">
              <label>
                <span>*</span> Ansprechpartner
              </label>
              <input type="text" />
            </div>
            <div className="user-info">
              <label>
                <span>*</span> E-Vorwahl
              </label>
              <input type="text" />
            </div>
            <div className="user-info">
              <label>
                <span></span>
                <span>*</span> Telefonnummer
              </label>
              <input type="tel" />
            </div>
            <div className="user-info">
              <label>Land</label>
              <select disabled="false">
                <option value="">Germany</option>
              </select>
            </div>
            <div className="user-info">
              <label>
                <span></span>
                <span>*</span> Stadt
              </label>
              <input type="text" />
            </div>
            <div className="user-info">
              <label>
                <span>*</span> Adresse
              </label>
              <input type="text" />
            </div>
            <div className="user-info">
              <label>
                <span></span>
                <span>*</span> PLZ
              </label>
              <input type="text" />
            </div>
          </div>
        </div>

        <footer>
          <div>
            <input type="checkbox" />
            <p>
              Ich stimme den{" "}
              <span style={{ color: "#004cd9" }}>
                Geschäft- & Marketingbedingungen und Datenschutzbestimmen
              </span>{" "}
              zu.
            </p>
          </div>
          <div>
            <input type="checkbox" />
            <p>
              Ich möchte den kostenlosen Newsletter abonnieren und stimme den
              zu. <span style={{ color: "#004cd9" }}>Datenschutzbestimmen</span>{" "}
              zu.
            </p>
          </div>
          <div class="button-footer">
            <a href="">Registrieren</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
