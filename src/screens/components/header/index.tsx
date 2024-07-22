import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./index.css";

export const Header = () => {
  const [lang, setLang] = useState<string>("Español");
  const [scroll, setScroll] = useState<boolean>(false);
  const toogleLanguage = (value: string) => {
    setLang(value);
  };

  const handleScrollToContact = () => {
    const contactElement = document.getElementById("contactMe");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScroll(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scroll ? (
        <Row className="d-flex justify-content-center sticky-top compact-header">
          <Col
            lg={12}
            className="my-3 d-flex justify-content-center align-items-center"
          >
            <button className="btn mx-3">
            <i className="fa-solid fa-user icon-styles"></i>
            </button>
            <button className="btn mx-3">
              <i className="fa-solid fa-file-arrow-down icon-styles"></i>
            </button>
            <button className="btn mx-3" onClick={handleScrollToContact}>
              <i className="fa-solid fa-paper-plane icon-styles"></i>
            </button>
            <div className="dropdown mx-3">
              <button
                className="btn dropdown-toggle"
                type="button"
                aria-expanded="false"
              >
                <i className="fa-solid fa-language icon-styles"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => toogleLanguage("Español")}
                  >
                    Español
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => toogleLanguage("English")}
                  >
                    English
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      ) : (
        <Row
          className={`d-flex justify-content-center sticky-top ${
            scroll ? "compact-header" : "header-bg"
          }`}
        >
          <Col lg={6} className="my-3 ps-5">
            <h1>Adaliz Frontend Dev</h1>
          </Col>
          <Col
            lg={6}
            className="my-3 d-flex justify-content-end align-items-center"
          >
            <Button className="btn btn-primary">Download CV</Button>

            <button className="btn" onClick={handleScrollToContact}>
              Go to contact
            </button>

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
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => toogleLanguage("Español")}
                  >
                    Español
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => toogleLanguage("English")}
                  >
                    English
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};
