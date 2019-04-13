import React from "react";
import {Container, Card} from '../../component/wrapper';
import {CardName, PageNameSub} from '../../component/typography';
import InputGroup from 'react-bootstrap/InputGroup';
import {FormGroup, FormControl, Row, Col, FormLabel} from 'react-bootstrap';
import Camera from 'react-html5-camera-photo';
// import {insertUser} from '../../database/models/user';

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

        return {path: ctx.asPath, title, subLink, query: ctx.query};
    }

    constructor() {
        super();
        this.initiateState();
    }

    getUserView() {
        if(this.props.query.id) {
            console.log(this.props.query.id);
            let id = this.props.query.id;
            fetch(`/api/user?id=${id}`).then(data => {
                data.json().then(d => {
                    console.log(d[0]);
                    this.setState({user:d[0]});
                    this.setState({action: 'update'});
                });
            })
        }
    }

    componentDidMount() {
        this.getUserView();
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
        console.log(value);
        user[name] = value;

        this.setState({user});
        console.log(this.state.user);
    }

    handleSave = event => {
        alert('saving...');
        let user = {...this.state.user};

        console.log('inserting user');
        fetch('/api/user', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          }).then((res) => {
              alert('saved!');
              console.log('logging result');
              console.log(res.json());
          })
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
                                            <FormControl type="text" name="firstName" value={this.state.user.firstName} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={4}>
                                        <FormGroup>
                                            <FormLabel>Middle Name</FormLabel>
                                            <FormControl type="text" name="midName" value={this.state.user.midName} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={4}>
                                        <FormGroup>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl type="text" name="lastName" value={this.state.user.lastName} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Role</FormLabel>
                                            <FormControl as="select" name="role" value={this.state.user.role} onChange={this.handleOnFormChange}>
                                                <option value="">-</option>                                                
                                                <option value="admin">Admin</option>
                                                <option value="cashier">Cashier</option>
                                                <option value="collector">Collector</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Employee Id</FormLabel>
                                            <FormControl type="text" name="employeeId" value={this.state.user.employeeId} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Birthday</FormLabel>
                                            <FormControl type="text" name="birthdate" value={this.state.user.birthdate} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Civil Status</FormLabel>
                                            <FormControl as="select" name="civilStatus" value={this.state.user.civilStatus} onChange={this.handleOnFormChange}>
                                                <option value="">-</option>                                                                                                
                                                <option value="single">Single</option>
                                                <option value="married">Married</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Contact No</FormLabel>
                                            <FormControl type="text" name="contactNo" value={this.state.user.contactNo} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl type="text" name="email" value={this.state.user.email} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <PageNameSub>Password</PageNameSub>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl type="password" name="password" value={this.state.user.password} onChange={this.handleOnFormChange}></FormControl>
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