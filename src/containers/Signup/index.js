import React from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/Input';
/**
* @author
* @function Signup
**/

const Signup = (props) => {
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First Name"
                                        placeholder=" Firstname"
                                        value=""
                                        type="text"
                                        onChange={() => { }}


                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="Lastname"
                                        value=""
                                        type="text"
                                        onChange={() => { }}


                                    />
                                </Col>
                            </Row>
                            <div style={{ height: '10px' }}></div>
                            <Input
                                label="Email"
                                placeholder=" E-mail"
                                value=""
                                type="email"
                                onChange={() => { }}


                            />
                            <div style={{ height: '10px' }}></div>
                            <Input
                                label="Password"
                                placeholder="Password"
                                value=""
                                type="password"
                                onChange={() => { }}


                            />
                            <div style={{ height: '10px' }}></div>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </Layout>
    )


}
export default Signup