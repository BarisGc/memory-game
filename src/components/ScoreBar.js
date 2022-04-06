import React from 'react'
import numeral from 'numeral';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// import { productSelectors }
//     from "../redux/productsSlice";

function ScoreBar() {
    // const productsPurchaseInfo = useSelector(productSelectors.selectAll)
    // const initialBudget = useSelector((state) => state.products.initialBudget);

    // let spendedBudget = productsPurchaseInfo.reduce(
    //     (previousValue, currentValue) => {
    //         return (previousValue + currentValue.purchasedValue)
    //     }, 0)

    // let currentBudget = initialBudget - spendedBudget
    // const currentBudgetFormatted = numeral(currentBudget).format('0,0.00');

    return (
        // .sticky-top will not work if it is inside any container. It must be the outside-most element inside <body>
        <Row >
            <Col>Points</Col>
        </Row>
    )
}

export default ScoreBar