import { Col } from "react-bootstrap"
import ProgressBar from 'react-bootstrap/ProgressBar';
import './index.css'

interface ElementSkillProps {
    icon: string;
    name: string;
    percent: number;
    level: number;
  }

const levels: { [key: number]: string } = {
  1: "Principiante",
  2: "Basico",
  3: "Intermedio",
  4: "Avanzado",
  5: "Experto"
}

const ElementSkill: React.FC<ElementSkillProps> = ({icon, name, percent, level}) => {
  return (
    <Col lg={4} className="mx-2 mb-2 skill-content">
        <div className="d-flex justify-content-center">
            <img src={icon} alt={name} className="img-fluid skill-logo"/>
        </div>
        <div className="d-flex justify-content-center">
            <p className="skill-name">{name}</p>
        </div>
        <div className="text-center">
            <ProgressBar now={percent}/>
            <span>Nivel: {levels[level]}</span>
        </div>
    </Col>
  )
}
export default ElementSkill