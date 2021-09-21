import React, { useEffect } from "react";
import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";

import UserService from "../services/users";

function TableClass() {
    const [ users, setUsers ] = useState([]);

    function list() {
        UserService.list().then((result) => {
            console.log(result.data)
            setUsers(result.data)
        });
    }

    const lista = users.map((user) =>
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.updated_at}</td>
        </tr>
    );

    useEffect(() => {
        list();
    }, []);

    return (
        <Row>
            <Col>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Atualizado</th>
                        </tr>
                    </thead>
                    <tbody>
                        { lista }
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default TableClass;