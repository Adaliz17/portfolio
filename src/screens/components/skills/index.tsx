import ElementSkill from "./components/elementSkill";
import "./index.css";
import { Col, Row } from "react-bootstrap";
import { images } from "../../../assets/images/images";

const MySkills = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <h1 className="skill-title">My Skills</h1>
      </div>
      <Row className="my-5">
        <Col lg={{ span: 6, offset: 3 }} className="d-flex justify-content-center align-items-end">
          <ElementSkill
            icon={images.react}
            name="React"
            percent={90}
            level={4}
          />
          <ElementSkill
            icon={images.javascript}
            name="Javascript"
            percent={90}
            level={4}
          />
          <ElementSkill
            icon={images.typescript}
            name="Typescript"
            percent={70}
            level={3}
          />
        </Col>
        <Col lg={{ span: 6, offset: 3 }} className="d-flex justify-content-center align-items-end">
          <ElementSkill
            icon={images.html}
            name="HTML 5"
            percent={95}
            level={4}
          />
          <ElementSkill icon={images.css} name="CSS 3" percent={90} level={4} />
          <ElementSkill
            icon={images.react_native}
            name="React Native"
            percent={80}
            level={4}
          />
        </Col>
        <Col lg={{ span: 6, offset: 3 }} className="d-flex justify-content-center align-items-end">
          <ElementSkill
            icon={images.flutter}
            name="Flutter"
            percent={60}
            level={3}
          />
          <ElementSkill icon={images.vue} name="Vue 3" percent={40} level={2} />
          <ElementSkill
            icon={images.angular}
            name="Angular"
            percent={50}
            level={2}
          />
        </Col>
        <Col lg={{ span: 6, offset: 3 }} className="d-flex justify-content-center align-items-end">
          <ElementSkill
            icon={images.node}
            name="Node JS"
            percent={60}
            level={3}
          />
          <ElementSkill
            icon={images.nestjs}
            name="NestJS"
            percent={50}
            level={3}
          />
          <ElementSkill
            icon={images.git}
            name="Git"
            percent={60}
            level={3}
          />
        </Col>
        <Col lg={{ span: 6, offset: 3 }} className="d-flex justify-content-center align-items-end">
          <ElementSkill
            icon={images.postgreSQL}
            name="PostgreSQL"
            percent={60}
            level={3}
          />
        </Col>
      </Row>
    </>
  );
};

export default MySkills;
