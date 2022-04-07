import { useEffect, useMemo, useLayoutEffect } from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { toggleCards } from '../redux/memoryCardsSlice'
import { Row, Col, Card, ListGroup } from 'react-bootstrap'

function CardList() {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.memoryCards.items);

    console.log("cards", cards)


    // useEffect(() => {
    //     //preloading image
    //     cards.forEach((card) => {
    //         const img = new Image();
    //         img.src = card.imageUrl;
    //     });
    // }, [cards]);

    return (
        <>
            <Row xs={2} md={4} className="g-1 memoryCards mb-3">
                {cards.map((card) => (
                    <Col key={card.id} >
                        <Card className='position-relative '>
                            <Card.Img variant="top" src={card.isOpen === true ? card.imageUrl : '/Images/png/questionmark.png'} className='mx-auto mt-2' />
                            <Card.Body className='p-1'>
                                <div className='cardFlipper stretched-link' onClick={() => dispatch(toggleCards({ id: card.id }))}>
                                    <Card.Title className="memoryCardsTitle ">{card.isOpen === true ? card.name : 'Click To Flip'}</Card.Title>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default CardList