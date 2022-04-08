import { useEffect, useState, useMemo, useLayoutEffect } from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { toggleCards, calculatePoints } from '../redux/memoryCardsSlice'
import { Row, Col, Card, ListGroup } from 'react-bootstrap'

function CardList() {
    const dispatch = useDispatch();
    //states
    const [previousSelection, setPreviousSelection] = useState(null);
    const [isClickable, setIsClickable] = useState(true)
    let initialPoints = useSelector((state) => state.memoryCards.points);

    const [points, setPoints] = useState(0)
    console.log("cardlistpoints", points)
    console.log("previousSelection", previousSelection)
    const cards = useSelector((state) => state.memoryCards.items);

    console.log("cards", cards)

    const handleToggleCards = (card) => {
        const pairOfCard = cards.find((pairedCard) => pairedCard.pairedCardId === card.id);
        if ((card.isOpen && pairOfCard.isOpen) || card.id === previousSelection) {
            return
        }
        // const isFirstFlip = cards.every((card) => card.isOpen === false);
        if (previousSelection === null) {
            dispatch(toggleCards({ id: card.id }))
            setPreviousSelection(card.id)
        }
        else {
            dispatch(toggleCards({ id: card.id }))
            setIsClickable(false)
            setTimeout(() => {
                console.log("pairOfCard.isOpen", pairOfCard.isOpen)
                console.log("card.isOpen", card.isOpen)
                if (!pairOfCard.isOpen) {
                    dispatch(toggleCards({ id: card.id }))
                    dispatch(toggleCards({ id: previousSelection }))
                    setPoints(points - 10)
                } else {
                    setPoints(points + 50)
                }

                setPreviousSelection(null)
                setIsClickable(true)
            }, 0.5 * 1000);
        }

    }
    useEffect(() => {
        dispatch(calculatePoints({ points: points }))
    }, [points])

    useEffect(() => {
        let isGameCompleted = cards.every((card) => (card.isOpen === true))
        if (isGameCompleted) {
            setPoints(0)
        }
    }, [])



    return (
        <>
            <Row xs={2} md={4} className="g-1 memoryCards mb-3 justify-content-center">
                {cards.map((card) => (
                    <Col key={card.id} className='flip-card'>
                        <Card className={`position-relative flip-card-inner ${card.isOpen ? 'active' : 'notActive'}`}>
                            <div className={`flip-card-front `}>
                                <Card.Img variant="top" src={'/Images/png/questionmark.png'} className='mx-auto mt-2' />
                                <Card.Body className='p-1 '>
                                    <div className={`cardFlipper stretched-link`} name={`${card.id}`} onClick={isClickable ? () => handleToggleCards(card) : undefined}>
                                        <Card.Title className="memoryCardsTitle ">Click To Flip</Card.Title>
                                    </div>
                                </Card.Body>
                            </div>
                            <div className={`flip-card-back `}>
                                <Card.Img variant="top" src={card.imageUrl} className='mx-auto mt-2' />
                                <Card.Body className='p-1'>
                                    <div className={`cardFlipper stretched-link`} name={`${card.id}`}
                                        onClick={isClickable ? () => handleToggleCards(card) : undefined}>
                                        <Card.Title className="memoryCardsTitle ">{card.name}</Card.Title>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                ))
                }
            </Row >
        </>
    )
}

export default CardList