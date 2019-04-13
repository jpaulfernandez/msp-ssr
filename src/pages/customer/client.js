import React from "react";
import {Container, Card} from '../../component/wrapper';
import {CardName, PageNameSub} from '../../component/typography';
import InputGroup from 'react-bootstrap/InputGroup';
import {FormGroup, FormControl, Row, Col, FormLabel} from 'react-bootstrap';

export default class App extends React.Component {

    static async getInitialProps(ctx) {
        let title = "CUSTOMER"
        let subLink = [{
            path: '/customer',
            label: 'View All'
        },
        {
            path: '/customer/client',
            label: 'Add New Client'        
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
            fetch(`/api/client?id=${id}`).then(data => {
                data.json().then(d => {
                    console.log(d[0]);
                    this.setState({client:d[0]});
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
            client: {
                customerId : '',
                firstName: '',
                lastName: '',
                midName: '',
                addressLine1: '',
                addressLine2: '',
                city: '',
                province: '',
                birthday: '',
                civilStatus: '',
                dateCreated: '',
                spouseFirstName: '',
                spouseLastName: '',
                spouseMidName: '',
                businessName: '',
                businessIndustry: '',
                businessAddress: '',
                businessCity: '',
                businessProvince: '',
                businessNotes: '',
                digitalSignature: '',
                files: '',
                profile: '',
                status: ''        
            }
        }
    }

    handleOnFormChange = event => {

        let name = event.target.name;
        let value = event.target.value;
        let client = this.state.client;
        console.log(value);
        client[name] = value;

        this.setState({client});
    }

    handleSave = event => {
        alert('saving...');
        let client = {...this.state.client};

        console.log('inserting user');
        fetch('/api/client', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(client)
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
                                        <CardName>{this.state.action === 'new' ? 'Add New Client' : `${this.state.client.firstName} ${this.state.client.lastName}`}</CardName>
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
                                <PageNameSub>Client Information</PageNameSub>
                                <Row>
                                    <Col lg={4}>
                                        <FormGroup>
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl type="text" name="firstName" value={this.state.client.firstName} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={4}>
                                        <FormGroup>
                                            <FormLabel>Middle Name</FormLabel>
                                            <FormControl type="text" name="midName" value={this.state.client.midName} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={4}>
                                        <FormGroup>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl type="text" name="lastName" value={this.state.client.lastName} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <FormLabel>Address Line 1</FormLabel>
                                            <FormControl type="text" name="addressLine1" value={this.state.client.addressLine1} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <FormLabel>Address Line 2</FormLabel>
                                            <FormControl type="text" name="addressLine2" value={this.state.client.addressLine1} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>City / Municipality</FormLabel>
                                            <FormControl type="text" name="city" value={this.state.client.city} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Province</FormLabel>
                                            <FormControl type="text" name="province" value={this.state.client.province} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Birthday</FormLabel>
                                            <FormControl type="text" name="birthday" value={this.state.client.birthday} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Civil Status</FormLabel>
                                            <FormControl as="select" name="civilStatus" value={this.state.client.civilStatus} onChange={this.handleOnFormChange}>
                                                <option value="">-</option>                                                                                                
                                                <option value="single">Single</option>
                                                <option value="married">Married</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <PageNameSub>Spouse Information</PageNameSub>
                                <Row>
                                    <Col lg={4}>
                                        <FormGroup>
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl type="text" name="spouseFirstName" value={this.state.client.spouseFirstName} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={4}>
                                        <FormGroup>
                                            <FormLabel>Middle Name</FormLabel>
                                            <FormControl type="text" name="spouseMidName" value={this.state.client.spouseMidName} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={4}>
                                        <FormGroup>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl type="text" name="spouseLastName" value={this.state.client.spouseLastName} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <PageNameSub>Business Information</PageNameSub>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Business Name</FormLabel>
                                            <FormControl type="text" name="businessName" value={this.state.client.businessName} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Business Industry</FormLabel>
                                            <FormControl type="text" name="businessIndustry" value={this.state.client.businessIndustry} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <FormLabel>Business Address</FormLabel>
                                            <FormControl type="text" name="businessAddress" value={this.state.client.businessAddress} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>City / Municipality</FormLabel>
                                            <FormControl type="text" name="businessCity" value={this.state.client.businessName} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormGroup>
                                            <FormLabel>Province</FormLabel>
                                            <FormControl type="text" name="businessProvince" value={this.state.client.businessIndustry} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}> 
                                        <PageNameSub>Digital Documents</PageNameSub>
                                    </Col>
                                    <Col lg={6}> 
                                        <PageNameSub>Digital Signature</PageNameSub>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}> 
                                        <FormGroup>
                                            <FormControl type="file" name="files" value={this.state.client.files} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}> 
                                        <FormGroup>
                                            <FormControl type="file" name="digitalSignature" value={this.state.client.digitalSignature} onChange={this.handleOnFormChange}></FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}> 
                                        <FormGroup>
                                            <FormLabel>Notes</FormLabel>
                                            <FormControl as="textarea" name="businessNotes" value={this.state.client.businessNotes} onChange={this.handleOnFormChange}></FormControl>
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