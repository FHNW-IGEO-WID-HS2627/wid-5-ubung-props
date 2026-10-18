import { useState } from "react";
import logo from "./geoharvester.png";
import data from "./data/tableData"; // Data is Array mit Objekten als Elementen
import "./App.css";

function App() {
  const [suchbegriff, setSuchbegriff] = useState("");
  const [serviceTypAuswahl, setServiceTypAuswahl] = useState("");
  const [kantonAuswahl, setKantonAuswahl] = useState("");
  console.log("Suchbegriff:", suchbegriff);
  console.log("ServiceTyp:", serviceTypAuswahl);
  console.log("Kanton:", kantonAuswahl);

  // Erzeugt eine Liste aller im Datensatz vorkommenden Kantone für das Auswahlmenü
  const kantone = [...new Set(data.map((item) => item.Kanton))];

  return (
    <div className="App">
      <header className="App-header">
        <img style={{ height: 40 }} src={logo} alt="logo" />
        <div id="HeaderText">Ein Katalog für Schweizer Geodienste</div>
        <div>
          <input
            placeholder="Suche"
            value={suchbegriff}
            onChange={(e) => setSuchbegriff(e.target.value)}
          />
          <select
            name="services"
            id="services"
            value={serviceTypAuswahl}
            onChange={(e) => setServiceTypAuswahl(e.target.value)}
          >
            <option value="">Alle</option>
            <option value="WMS">WMS </option>
            <option value="WMTS">WMTS </option>
            <option value="WFS">WFS</option>
          </select>
          <select
            name="cantons"
            id="cantons"
            value={kantonAuswahl}
            onChange={(e) => setKantonAuswahl(e.target.value)}
          >
            <option value="">Alle</option>
            {kantone.map((kanton, index) => (
              <option value={kanton} key={index}>
                {kanton}
              </option>
            ))}
          </select>
        </div>
      </header>
      {/* Tabelle Start */}
      <div className="TableWrapper">
        <table border="1" cellPadding="4">
          <thead id="TableHeader">
            <tr>
              <td>Kanton</td>
              <td>Titel</td>
              <td>Beschreibung</td>
              <td>ServiceTyp</td>
              <td>Score</td>
            </tr>
          </thead>
          <tbody id="TableBody">
            <tr>
              <td>KT_AR</td>
              <td>Übersichtsplan 1:10000 (ÜP10) Kt</td>
              <td>
                Ehemaliger kantonaler Übersichtsplan 1:10‘000 (ÜP10) des Kantons
                St.Gallen und angrenzender Gebiete. Die Karte zeigt einen Scan
                des in insgesamt 69 einzelnen Kartenblättern erstellten ÜP10.
                Die Nachführung ist bis Ende 2006 erfolgt, anschliessend
                Ablösung durch den aus der amtlichen Vermessung erzeugten
                Übersichtsplan 1:5‘000 (ÜP5).
              </td>
              <td>WMS</td>
              <td>50</td>
            </tr>
            <tr>
              <td>KT_BE</td>
              <td>Gebäudehöhe</td>
              <td>
                Diese Ebene enthält alle Gebäude im Kanton Bern gemäss amtlicher
                Vermessung. Die Informationen zur Gebäudehöhe stammen aus der
                Analyse von LiDAR-Daten, welche durch den Kanton Bern zwischen
                2011 und 2014 akquiriert wurden. Von den 426-723 AV-Gebäuden
                sind für 383-423 (90%) eine Höheninformation verfügbar. Bei den
                10% ohne Angaben handelt es sich um Gebäude welche nach 2014
                erstellt wurden oder es sind keine Höhegaben aus den LiDAR-Daten
                ableitbar. Das kann aufgrund von Datenlücken, falsch klassierten
                Punkten oder durch die Überlagerung mit Vegetation (Gebäude im
                Wald, am Waldrand) der Fall sein.
              </td>
              <td>WMS</td>
              <td>50</td>
            </tr>
            <tr>
              <td>KT_ZG</td>
              <td>Kanton ZG</td>
              <td>
                Geologisches Aufschlussarchiv. Metadaten der geologischen
                Aufschlüsse im Archiv des Amts für Umwelt.
              </td>
              <td>WMS</td>
              <td>75</td>
            </tr>
            <tr>
              <td>KT_UR</td>
              <td>Postglaziale Gletschervorstösse</td>
              <td></td>
              <td>WFS</td>
              <td>25</td>
            </tr>
            <tr>
              <td>KT_UR</td>
              <td>Spätglaziale Moränen und Gletscherstadien</td>
              <td></td>
              <td>WFS</td>
              <td>25</td>
            </tr>
            <tr>
              <td>KT_ZH</td>
              <td>Eisenbahn swissTLM3D</td>
              <td>
                swissTLM3D Eisenbahn enthält die Gleisachsen der Normal- und
                Schmalspurbahnen sowie der Kleinbahnen. Bei mehrspurigen Anlagen
                oder in Bahnhofszonen sind immer sämtliche Gleise erfasst.
                swissTLM3D Eisenbahn ist Bestandteil des Datensatzes swissTLM3D.
                Mit seiner hohen Genauigkeit und dem Einbezug der dritten
                Dimension ist swissTLM3D der umfassendste 3D-Vektordatensatz der
                Schweiz.
              </td>
              <td>WMTS</td>
              <td>75</td>
            </tr>
            <tr>
              <td>KT_GR</td>
              <td>Seilbahnen swissTLM3D</td>
              <td>
                swissTLM3D übrige Bahnen beinhaltet verschiedene Seilbahnarten
                sowie andere mechanische Transportsysteme. Es ist Bestandteil
                des Datensatzes swissTLM3D. Mit seiner hohen Genauigkeit und dem
                Einbezug der dritten Dimension ist swissTLM3D der umfassendste
                3D-Vektordatensatz der Schweiz. Im Geoportal des Bundes werden
                die Objekte der Ebene -übrige Bahnen- entsprechend der
                ausgewählten Zoomstufe schrittweise dargestellt.
              </td>
              <td>WMTS</td>
              <td>75</td>
            </tr>
            <tr>
              <td>KT_FR</td>
              <td>Anlagen VECTOR25</td>
              <td>
                Die Ebene Anlagen (Abkürzung anl) umfasst die Objektarten
                Bahnhofareal, Flughafenareal und Flughafenbahnhof-areal.
              </td>
              <td>WMTS</td>
              <td>75</td>
            </tr>
            <tr>
              <td>KT_VD</td>
              <td>Gefährdungskarte Oberflächenabfluss</td>
              <td>
                Die in der Gefährdungskarte Oberflächenabfluss dargestellten
                Überschwemmungsgebiete wurden über das gesamte Gebiet der
                Schweiz und von Liechtenstein mit einer einheitlichen Methode
                erstellt. Sie beruhen auf einer Modellierung ohne Verifizierung
                oder Plausibilisierung im Gelände. Sie kennzeichnen diejenigen
                Gebiete, die bei seltenen bis sehr seltenen Ereignissen
                potenziell betroffen sind. Sie geben eine grobe Gesamtübersicht
                über die Gefährdung durch Oberflächenabfluss. Sie kennzeichnen
                nicht die Gebiete, die durch Überschwemmung aus Fliessgewässern
                betroffen sind und berücksichtigen keine Schutzbauten oder
                Strassenunterführungen oder Durchlässe in Bahndämmen (so
                erscheinen bspw. SBB-Dämme im DTM als durchgehender Damm ohne
                Durchlass). Diese Karte erlaubt eine Grobaschätzung über die
                Gefährdung durch Oberflächenabfluss, sofern keine detaillierte
                Gefahrenkarte vorhanden ist.
              </td>
              <td>WMTS</td>
              <td>75</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Tabelle Ende */}
      {/* Footer Start */}
      <footer>
        <button id="ResetButton" onClick={() => console.log("Aufgabe 3.1")}>
          Reset
        </button>
      </footer>
      {/* Footer Ende */}
    </div>
  );
}

export default App;
