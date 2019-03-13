import React from "react";
import {Container, Card} from '../../component/wrapper';
import {CardName, PageNameSub} from '../../component/typography';
import InputGroup from 'react-bootstrap/InputGroup';
import {FormGroup, FormControl, Row, Col, FormLabel} from 'react-bootstrap';
import Camera from 'react-html5-camera-photo';
import models from '../../database/model';

export default class App extends React.Component {

    static async getInitialProps(ctx) {
        let title = "BRANCH"
        let subLink = [{
            path: '/branch',
            label: 'View All'
        },
        {
            path: '/branch/user',
            label: 'Add New User'        
        }];

        console.log(ctx.asPath);

        return {path: ctx.asPath, title, subLink};
    }

    constructor() {
        super();
        this.initiateState();
    }

    initiateState() {
        this.state = {
            action: 'new',
            user: {
                firstName: '',
                midName: '',
                lastName: '',
                role: '',
                employeeId: '',
                civilStatus: '',
                birthdate: '',
                email: '',
                contactNo: '',
                password: ''
            }
        }
    }

    handleOnFormChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        let user = this.state.user;

        user[name] = value;

        this.setState({user});
    }

    handleSave = event => {
        let user = new models.UserModel({
            ...this.state.user
        });

        // user.save().then((doc) => {
        //     console.log(doc);
        // }, (err) => {
        //     console.log(err);
        // });
    }
 
    render() {
        return(
            <Container>
                <Card>
                    <Card.Head>
                        <Row>
                            <Col lg={3}></Col>
                            <Col lg={9}>
                                <Row>
                                    <Col lg={8}>
                                        <CardName>{this.state.action === 'new' ? 'Add New User' : `${this.state.user.firstName} ${this.state.user.lastName}`}</CardName>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Head>
                    <Card.Body>
                        <Row>
                            <Col lg={3}>
                                <img src="https://png.icons8.com/color/200/000000/user.png" />
                                <video id="capture-id" autoPlay={true}></video>
                            </Col>
                            <Col lg={9}>
                                <PageNameSub>User Information</PageNameSub>
                                <Row>
                                    <Col lg={4}>
                                        <FormGroup>
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl type="text" name="firstName" value={this.state.firstName} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={4}>
                                        <FormGroup>
                                            <FormLabel>Middle Name</FormLabel>
                                            <FormControl type="text" name="midName" value={this.state.midName} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={4}>
                                        <FormGroup>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl type="text" name="lastName" value={this.state.lastName} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Role</FormLabel>
                                            <FormControl as="select" name="role" value={this.state.role} onChange={this.handleOnFormChange}>
                                                <option>Admin</option>
                                                <option>Cashier</option>
                                                <option>Collector</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Employee Id</FormLabel>
                                            <FormControl type="text" name="employeeId" value={this.state.employeeId} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Birthday</FormLabel>
                                            <FormControl type="text" name="birthdate" value={this.state.employeeId} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Civil Status</FormLabel>
                                            <FormControl as="select" name="civilStatus" value={this.state.civilStatus} onChange={this.handleOnFormChange}>
                                                <option>Single</option>
                                                <option>Married</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Contact No</FormLabel>
                                            <FormControl type="text" name="contactNo" value={this.state.contactNo} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl type="text" name="email" value={this.state.email} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <PageNameSub>Password</PageNameSub>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl type="password" name="password" value={this.state.password} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl type="password"></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <Col lg={4}><button onClick={this.handleSave}>Save</button></Col>
                    </Card.Footer>
                </Card>
            </Container>
            )
    }
}