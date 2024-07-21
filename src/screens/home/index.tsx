import { Header } from '../components/header';
import { Col, Row } from 'react-bootstrap';
import { CardProfile } from '../components/card';
import MySkills from '../components/skills';
import ContactMe from '../components/contact';

const HomeScreen = () => {

  return (
    <>
    <Header />
    <MySkills />
    <Row className='d-flex align-items-center'>
        <Col lg={6}>
            <CardProfile />
        </Col>
        <Col lg={5}>
            <ContactMe />
        </Col>
    </Row>
    </>
  );
};

export default HomeScreen