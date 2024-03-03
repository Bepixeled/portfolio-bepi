import React from "react";

function Impressum() {
  return (
    <div className="text-center text-rich_black-800 space-y-2">
      <h1 className="text-xl font-semibold">Impressum</h1>

      <p>
        Christina Gregor
        <br />
        Weidetorstr. 16
        <br />
        30655 Hannover
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 1525 9689400
        <br />
        E-Mail: <a href={`mailto:${"christina"}@${"bepixeled.dev"}`}>{"christina"}@{"bepixeled.dev"}</a>
      </p>

    
    </div>
  );
}

export default Impressum;
