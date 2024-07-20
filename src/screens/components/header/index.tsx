import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import './index.css'

export const Header = () => {
    const [lang, setLang] = useState<string>('Español');
    const toogleLanguage = (value: string) => {
        setLang(value);
    }
  return (
    <>
    <Row
      className="d-flex justify-content-center header-bg mb-5"
    >
      <Col lg={6} className="my-3 ps-5">
        <h1 className="header-title"> Adaliz Frontend Dev</h1>
      </Col>
      <Col lg={6} className="my-3 d-flex justify-content-end align-items-center">
        <Button className="btn btn-primary">Download CV</Button>
        <button className="btn">Go to contact</button>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {lang}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#" onClick={() => toogleLanguage('Español')}>
                Español
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => toogleLanguage('English')}>
                English
              </a>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
    </>
  );
};
