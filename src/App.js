import React, {Component} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import Card from './Components/Card/Card';

class App extends Component {
    state = {
        cards: [
            {
                id: 0,
                name: 'one',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 1,
                name: 'two',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 2,
                name: 'three',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 3,
                name: 'four',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 4,
                name: 'five',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 5,
                name: 'six',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 6,
                name: 'seven',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 7,
                name: 'eight',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 8,
                name: 'nine',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 9,
                name: 'ten',
                status: Math.floor(Math.random() * 2)
            }
        ],
        value: ''
    };

    onInput = (event) => {
        const newName = event.target.value;
        this.setState({
            value: newName
        })
    };


    addNew = (event) => {
      event.preventDefault();
        const random = Math.floor(Math.random() * 2);
        this.setState(prevState =>({
            cards: [...prevState.cards, {id: (prevState.cards.length !== 0 ? prevState.cards[prevState.cards.length - 1].id + 1 : 0), name: prevState.value, status: random}],
            value: ''
        }))
    };

    deleteCard = (deleteIndex) => {
        const cards = this.state.cards.filter(card => card.id !== deleteIndex);
        this.setState({
            cards
        })

    };

    render() {
        return (
            <div className="App">
                <Container fluid>
                    <Row>
                        <Form>
                            <Form.Group controlId="newCard">
                                <Form.Label>Добавить новую карточку</Form.Label>
                                <Form.Control type="text" placeholder="Название карточки" onChange={this.onInput} value={this.state.value}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.addNew}>
                                Добавить
                            </Button>
                        </Form>
                    </Row>
                    <hr/>
                    <Row>
                            {  this.state.cards.map((card, index) => {
                                return(
                                    <Col key={index} lg={3} md={6} xs={12}>
                                        <Card
                                            id={card.id}
                                            name={card.name}
                                            status={card.status}
                                            deleteCard={() => this.deleteCard(card.id)}
                                        />
                                    </Col>
                                )
                            }) }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;