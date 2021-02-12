import { useState, useEffect } from "react";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
export default function Main(props) {
  const isKontakt = props.isKontakt;
  const [name, setName] = useState("");
  const [nameP, setNameP] = useState("");
  const [surName, setSurName] = useState("");
  const [surNameP, setSurNameP] = useState("");
  const [email, setEmail] = useState("");
  const [emailP, setEmailP] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [serviceNameP, setServiceNameP] = useState("");
  useEffect(() => {
    if (name !== "") {
      setNameP(name);
    } else {
      setNameP("");
    }
    if (surName !== "") {
      setSurNameP(surName);
    } else {
      setSurNameP("");
    }
    if (email !== "") {
      setEmailP(email.toLowerCase());
    } else {
      setEmailP("");
    }
    if (serviceName !== "") {
      setServiceNameP("Usługa: " + serviceName);
    } else {
      setServiceNameP("");
    }
  }, [name, surName, email, serviceName]);
  return (
    <>
      <div>
        <h2>Kim jesteśmy?</h2>
        <p>Jesteśmy firmą z wieloletnim doświadczeniem w zakresie IT</p>
      </div>
      <div>
        {isKontakt ? (
          <>
            <h3>Formularz kontaktowy</h3>
            <form>
              <table>
                <tbody>
                  <tr>
                    <td>Imię: </td>
                    <td>
                      <input
                        pattern="[a-zA-Z]*"
                        type="text"
                        onInput={(e) => setName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Nazwisko: </td>
                    <td>
                      <input
                        pattern="[a-zA-Z]*"
                        type="text"
                        onInput={(e) => setSurName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>E-mail: </td>
                    <td>
                      <input
                        type="email"
                        onInput={(e) => setEmail(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Usługa: </td>
                    <td>
                      <select
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                      >
                        <option value=""></option>
                        <option value="naprawa komputera">
                          naprawa komputera
                        </option>
                        <option value="odzyskiwanie danych">
                          odzyskiwanie danych
                        </option>
                        <option value="problemy z oprogramowaniem">
                          problemy z oprogramowaniem
                        </option>
                        <option value="konfiguracja sieci LAN">
                          konfiguracja sieci LAN
                        </option>
                        <option value="inne">inne</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <input type="checkbox" defaultChecked />
                      <label>Wyślij kopię wiadomości</label>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <input
                        id="reset"
                        type="reset"
                        value="Resetuj"
                        onClick={() => {
                          setName("");
                          setSurName("");
                          setEmail("");
                          setServiceName("");
                        }}
                      />
                      <Tooltip
                        title="Nie trzeba naciskać prześlij, aby tekst magicznie się pojawił pod spodem!"
                        position="right"
                        trigger="click"
                        arrow="true"
                        inertia="true"
                      >
                        <button type="button" id="send">
                          Prześlij
                        </button>
                      </Tooltip>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <div>
              {nameP + " " + surNameP}
              <br />
              {emailP}
              <br />
              {serviceNameP}
            </div>
          </>
        ) : (
          <>
            <h2>Co robimy?</h2>
            <ul>
              <li>
                <p>naprawiamy komputery stacjonarne i laptopy</p>
              </li>
              <li>
                <p>odzyskujemy dane</p>
              </li>
              <li>
                <p>usuwamy problemy z oprogramowaniem</p>
              </li>
              <li>
                <p>konfigurujemy sieci LAN</p>
              </li>
              <li>
                <p>i wiele więcej</p>
              </li>
            </ul>
          </>
        )}
      </div>
      <div>
        <h2>Co nas cechuje?</h2>
        <p>Doświadczenie, niezawodność, konkurencyjne ceny</p>
      </div>
    </>
  );
}
