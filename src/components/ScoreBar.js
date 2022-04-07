import React from 'react'
import numeral from 'numeral';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// import { productSelectors }
//     from "../redux/productsSlice";

function ScoreBar() {
    const points = useSelector((state) => state.memoryCards.points);

    // const currentBudgetFormatted = numeral(currentBudget).format('0,0.00');

    return (
        // .sticky-top will not work if it is inside any container. It must be the outside-most element inside <body>
        <Row className='scoreBar justify-content-center align-items-center mt-0 mb-2 py-2 h-100 '>
            <Col className='score text-end '>Playing</Col>
            <Col className='score text-center'>{points} Points</Col>
            <Col className='score text-start '>New Game</Col>
        </Row>
    )
}

export default ScoreBar