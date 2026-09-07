import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { Col, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <>
        <Header></Header>
        <Row className='d-flex justify-content-evenly m-5'>
            <Col>
                <CardPizza
                    name="Napolitana"
                    price={(5950).toLocaleString('es-CL')}
                    ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                    img="https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emElMjBuYXBvbGV0YW5hfGVufDB8fDB8fHww"
                />
            </Col>
            <Col>
                <CardPizza
                    name="Española"
                    price={(6950).toLocaleString('es-CL')}
                    ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQjx4oD8CwzwH8qS7M_rhTtpdK5f4L_BE-Q&s"
                />
            </Col>
            <Col>
                <CardPizza
                    name="Pepperoni"
                    price={(8950).toLocaleString('es-CL')}
                    ingredients={["mozzarella", "pepperoni", "orégano"]}
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0-HmskFIOzX-o3_DTZdgLshMNluWvZpwAw&s"
                />
            </Col>
        </Row>
        
    </>
  )
}

export default Home