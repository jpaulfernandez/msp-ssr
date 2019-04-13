import React from "react";
import {Container, Card} from '../../component/wrapper';
import {PageName} from '../../component/typography';
import InputGroup from 'react-bootstrap/InputGroup';
import {DropdownButton, Dropdown, FormControl, Table, Tab} from 'react-bootstrap';
import Link from 'next/link';

export default class App extends React.Component {
    static async getInitialProps(ctx) {
        let title = "CUSTOMER"
        let subLink = [{
            path: '/customer',
            label: 'View All'
        },
        {
            path: '/customer/client',
            label: 'Add New Customer'        
        }];

        return {path: ctx.asPath, title, subLink};
    }

    constructor() {
        super();
        this.state = {
            filter: 'First Name'
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.initiateState();
    }

    componentDidMount() {
        this.getAllUsers();
    }

    handleFilterChange(e) {
        this.setState({filter: e, filteredClients: []});
    }

    getAllUsers = () => {
        fetch('/api/client').then((data) => {
            data.json().then( clients => {
                this.setState({clients})
            })
        })
    }

    filterTable = (e) => {
        const filteredClients = [];
        this.state.clients.map((i, k) => {
            if(this.state.filter === "First Name") {
                if(i['firstName'].toLowerCase().includes(e.target.value)) {
                    filteredClients.push(i);
                }
            } else if(this.state.filter === "Last Name") {
                if(i['lastName'].toLowerCase().includes(e.target.value)) {
                    filteredClients.push(i);
                }
            }
        }); 

        console.log(filteredClients);
        this.setState({filteredClients});
    }

    initiateState = () => {
        this.state= {
            clients: [],
            filteredClients: [],
            filter: "First Name"
        }
    }

    renderClientRows = () => {

        const clients = [];
        if(this.state.filteredClients.length === 0) {
            this.state.clients.map((i, k) =>{
                clients.push(
                    <tr key={k}>
                        <td>{i.lastName}</td>
                        <td>{i.firstName}</td>
                        <td>{`${i.addressLine1} ${i.addressLine2}, ${i.city}, ${i.province}`}</td>
                        <td>{i.status}</td>
                        <td><Link href={`/customer/client?id=${i.id}`}><a>view</a></Link></td>
                    </tr>);
            })
        } else {
            this.state.filteredClients.map((i, k) =>{
                clients.push(
                    <tr key={k}>
                        <td>{i.lastName}</td>
                        <td>{i.firstName}</td>
                        <td>{i.address}</td>
                        <td>{i.status}</td>
                        <td><Link href={{ pathname: '/customer/client', query: { userId: i.id }}}><a>view</a></Link></td>
                    </tr>);
            })
        } 

        return clients;
    }

    render() {
        return(
            <Container>
                <PageName>Customer Management</PageName>
                <Card>
                    <InputGroup className="mb-3">
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={`Filter by ${this.state.filter}`}
                        id="input-group-dropdown-1"
                        onSelect = {this.handleFilterChange}
                        >
                            <Dropdown.Item href="#" eventKey="First Name">Filter by First Name</Dropdown.Item>
                            <Dropdown.Item href="#" eventKey="Last Name">Filter by Last Name</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" onChange={this.filterTable} />
                    </InputGroup>
                    <Table>
                        <thead>
                            <tr>
                                <th>Last Names</th>
                                <th>First Names</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.renderClientRows()
                            }
                        </tbody>
                    </Table>
                </Card>
            </Container>)
    }
}