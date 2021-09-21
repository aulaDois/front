import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import { FaPlus } from 'react-icons/fa';

import TableClass from "../components/table";

class UsersClass extends React.Component {
    render() {
        return (
            <Container>
                <Row className="my-5">
                    <Col>
                        <h1>Usuários</h1>
                    </Col>
                    <Col>
                        <Button variant="outline-primary"><FaPlus/> Usuário</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TableClass />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UsersClass;