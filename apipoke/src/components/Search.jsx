import {Form, Container, Col, Row} from 'react-bootstrap'

const Search = () => {

    return (

            <Form>
                <Row>
                    <Form.Group>
                        <Form.Label>
                            Nombre popkemon
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Busca pokemon"
                            name="nombre"
                        ></Form.Control>
                    </Form.Group>
                </Row>
            </Form>

    )
}

export default Search