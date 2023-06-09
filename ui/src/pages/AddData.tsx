import { MouseEventHandler } from 'react';
import Input from '../Input';
import Country from '../Country';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type Props = {
    update: boolean,
    onClickCountry: MouseEventHandler,
    onClickState: MouseEventHandler
}

function AddData({ update, onClickCountry, onClickState }: Props) {
    return (
        <Container>
            <h1 className="text-center pt-2 pb-3">Add Data</h1>
            <h2>Add a country</h2>
            <Row className="pb-5 d-flex align-items-center">
                <Col className="p-2" xs={7} sm={4} md={3} lg={2}>
                    <Input name="code" id="code-country" />
                </Col>
                <Col className="p-2" xs={7} sm={6} md={5} lg={4}>
                    <Input name="name" id="name-country" />
                </Col>
                <Col className="p-2" xs={7} sm={2} lg={1}>
                    <Button variant="primary" as="input" type="submit" onClick={onClickCountry} />
                </Col>
            </Row>

            <h2>Add a state</h2>
            <Row className="pb-5 d-flex align-items-center">
                <Col className="p-2" xs={7} sm={4} md={3} lg={2}>
                    <Input name="code" id="code-state" />
                </Col>
                <Col className="p-2" xs={7} sm={6} md={5} lg={4}>
                    <Input name="name" id="name-state" />
                </Col>
                <Col className="p-2" xs={7} sm={10} md={4} lg={4}>
                    <Country
                        id="countries-state"
                        update={update}
                        value="id"
                    />
                </Col>

                <Col className="p-2" xs={7} sm={2} md={1}>
                    <Button variant="primary" as="input" type="submit" onClick={onClickState} />
                </Col>
            </Row>
        </Container>
    );
}

export default AddData;