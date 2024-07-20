import { Header } from '../components/header';
import { Col, Row } from 'react-bootstrap';
import { CardProfile } from '../components/card';
import MySkills from '../components/skills';

const HomeScreen = () => {

  return (
    <>
    <Header />
    <MySkills />
    <Row>
        <Col lg={6}>
            <CardProfile />
        </Col>
    </Row>
    </>
  );
};

export default HomeScreen