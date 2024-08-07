import { Header } from "../components/header";
import { Col, Row } from "react-bootstrap";
import { CardProfile } from "../components/card";
import MySkills from "../components/skills";
import ContactMe from "../components/contact";
import "./index.css";
import { ProjectComponent } from "../components/projects";
import { portfolioInfo } from "../../repositories/data";

const HomeScreen = () => {
  return (
    <div className="bg-portfolio">
      <Header />
      <MySkills />
      <Row className="d-flex justify-content-between">
        <Col xs={12} sm={12} md={6} lg={3} className="d-flex">
          {portfolioInfo.map((portfolio, index) => (
            <ProjectComponent
              key={index}
              name={portfolio.title}
              images={portfolio.images}
              description={portfolio.description}
              technologies={portfolio.technologies}
              git={portfolio.git}
              liveUrl={""}
            />
          ))}
        </Col>
      </Row>
      <Row className="d-flex align-items-center">
        <Col lg={6}>
          <CardProfile />
        </Col>
        <Col lg={5}>
          <ContactMe />
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
