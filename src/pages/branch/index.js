import React from "react";
import {Container, Card} from '../../component/wrapper';
import {PageName} from '../../component/typography';
import InputGroup from 'react-bootstrap/InputGroup';
import {DropdownButton, Dropdown, FormControl, Table, Tab} from 'react-bootstrap';
import Link from 'next/link';

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

    handleFilterChange(e) {
        this.setState({filter: e, filteredUsers: []});
    }

    initiateState = () => {
        this.state= {
            users: [
                {
                    firstName: 'Paul',
                    midName: 'M',
                    lastName: 'Fernandez',
                    role: 'cashier',
                    employeeId: '0001',
                    civilStatus: 'single',
                    birthdate: '01/18/1995',
                    email: 'paul.fernandez',
                    contactNo: '12312341245',
                    password: '12314'
                },
                {
                    firstName: 'randomguy',
                    midName: 'M',
                    lastName: 'guyrandom',
                    role: 'admin',
                    employeeId: '0001',
                    civilStatus: 'single',
                    birthdate: '01/18/1995',
                    email: 'paul.fernandez',
                    contactNo: '12312341245',
                    password: '12314'
                }
            ],
            filteredUsers: [],
            filter: "First Name"
        }
    }
 
    filterTable = (e) => {
        const filteredUsers = [];
        this.state.users.map((i, k) => {
            if(this.state.filter === "First Name") {
                if(i['firstName'].toLowerCase().includes(e.target.value)) {
                    filteredUsers.push(i);
                }
            }
        }); 

        console.log(filteredUsers);
        this.setState({filteredUsers});
    }

    renderUserRows = () => {

        const users = [];
        if(this.state.filteredUsers.length === 0) {
            this.state.users.map((i, k) =>{
                users.push(
                    <tr key={k}>
                        <td>{i.lastName}</td>
                        <td>{i.firstName}</td>
                        <td>{i.email}</td>
                        <td>{i.employeeId}</td>
                        <td><Link href={`/branch/user?id=${i.employeeId}`}><a>view</a></Link></td>
                    </tr>);
            })
        } else {
            this.state.filteredUsers.map((i, k) =>{
                users.push(
                    <tr key={k}>
                        <td>{i.lastName}</td>
                        <td>{i.firstName}</td>
                        <td>{i.email}</td>
                        <td>{i.employeeId}</td>
                        <td><Link href={`/branch/user?id=${i.employeeId}`}><a>view</a></Link></td>
                    </tr>);
            })
        } 

        return users;
    }

    render() {
        return(
            <Container>
                <PageName>Branch Management</PageName>
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
                                <th>Email</th>
                                <th>Employee ID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.renderUserRows()
                            }
                        </tbody>
                    </Table>
                </Card>
            </Container>
            )
    }
}