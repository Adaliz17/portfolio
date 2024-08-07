import { Carousel, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import "./index.css";
import React from "react";
import ts from "../../../assets/images/typescript.svg";
import { images } from "../../../assets/images/images";

interface ProjectComponentProps {
  name: string;
  description: string;
  images: string[];
  technologies: string[];
  git: string;
  liveUrl: string;
}

export const ProjectComponent: React.FC<ProjectComponentProps> = ({
  name,
  description,
  images,
  technologies,
  git,
  liveUrl,
}) => {

  const handleGithubClick = () => {
    window.open(`https://github.com/Adaliz17/${git}`, "_blank");
  };

  return (
    <div className="container-project m-5">
      <Row className="pt-2 d-flex justify-content-between align-items-center">
        <Col lg={8}>
          <h3 className="ms-2 title-project">{name}</h3>
        </Col>
        <Col lg={4} className="d-flex justify-content-end align-items-center">
          <button className="btn" disabled={git === ''} onClick={handleGithubClick}>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>{git === '' ? "Repositorio Privado" : "Show in Github"}</Tooltip>}
            >
              <i className="fa-brands fa-github icon-styles-project d-flex justify-content-center align-items-center"></i>
            </OverlayTrigger>
          </button>
          <button className="btn" onClick={handleGithubClick}>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Show in live</Tooltip>}
            >
              <i className="fa-solid fa-link icon-styles-project d-flex justify-content-center align-items-center"></i>
            </OverlayTrigger>
          </button>
        </Col>
        <Col lg={12}>
          <Carousel className="px-2" indicators={false}>
            {images.map((src, index) => (
              <Carousel.Item key={index} className="">
                <img
                  className="d-block carousel-img"
                  src={src}
                  alt={`Slide ${index}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col
          lg={12}
          className="d-flex justify-content-center align-items-center"
        >
          <div
            className="w-75 my-3"
            style={{ height: "1px", background: "#279af1" }}
          ></div>
        </Col>
        <Col lg={12}>
          <p className="description-text px-3">{description}</p>
        </Col>
        <Col className="d-flex justify-content-center">
        {technologies.map(tech => 
            technologyIcons[tech as Technology] && (
              <OverlayTrigger
                key={tech}
                placement="bottom"
                overlay={<Tooltip>{technologyIcons[tech as Technology].tooltip}</Tooltip>}
              >
                {technologyIcons[tech as Technology].icon}
              </OverlayTrigger>
            )
          )}
        </Col>
      </Row>
    </div>
  );
};

type Technology = 'react' | 'typescript' | 'git' | 'vue' | 'flutter' | 'html5' | 'css' | 'nestjs' | 'node' | 'postgresql' | 'angular';

const technologyIcons: Record<Technology, { icon: JSX.Element; tooltip: string }> = {
  react: {
    icon: <i className="fa-brands fa-react icon-styles-project d-flex justify-content-center align-items-center m-2"></i>,
    tooltip: "React"
  },
  typescript: {
    icon: <img src={ts} alt="typescript" className="icon-styles-project p-1 m-2" />,
    tooltip: "Typescript"
  },
  git: {
    icon: <i className="fa-brands fa-git icon-styles-project d-flex justify-content-center align-items-center m-2"></i>,
    tooltip: "Git"
  },
  vue: {
    icon: <i className="fa-brands fa-vuejs icon-styles-project d-flex justify-content-center align-items-center m-2"></i>,
    tooltip: "Vue.js"
  },
  flutter: {
    icon: <i className="fa-brands fa-flutter icon-styles-project d-flex justify-content-center align-items-center m-2"></i>,
    tooltip: "Flutter"
  },
  html5: {
    icon: <i className="fa-brands fa-html5 icon-styles-project d-flex justify-content-center align-items-center m-2"></i>,
    tooltip: "HTML5"
  },
  css: {
    icon: <i className="fa-brands fa-css3-alt icon-styles-project d-flex justify-content-center align-items-center m-2"></i>,
    tooltip: "CSS"
  },
  nestjs: {
    icon: <img src={images.nestjs} alt="nestjs" className="icon-styles-project p-1 m-2" />,
    tooltip: "NestJS"
  },
  node: {
    icon: <i className="fa-brands fa-node-js icon-styles-project d-flex justify-content-center align-items-center m-2"></i>,
    tooltip: "Node.js"
  },
  postgresql: {
    icon: <i className="fa-solid fa-database icon-styles-project d-flex justify-content-center align-items-center m-2"></i>,
    tooltip: "PostgreSQL"
  },
  angular: {
    icon: <i className="fa-brands fa-angular icon-styles-project d-flex justify-content-center align-items-center m-2"></i>,
    tooltip: "Angular"
  },
};