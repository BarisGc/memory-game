import React from 'react'

import { Row, Card } from 'react-bootstrap'

function Header() {

    return (
        <Row className='mt-5 justify-content-center '>
            <Card className='HeaderCard pt-3 d-flex align-items-center justify-content-center w-75 '>
                <Card.Body className='d-flex flex-column justify-content-center align-items-center w-100'>
                    <Card.Title as="h1" className='headerCardTitle text-center'>Memory Card Game</Card.Title>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default Header
