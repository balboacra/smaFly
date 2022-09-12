import { Link } from 'react-router-dom';
import Contador from './Contador';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Product = ({ name, price, img, brand, id }) => {
    const onAdd = (contador) => {
        console.log('Soy un onAdd y el contador es:', contador);
    }
    return (
            <Card style={{ width: '18rem' }} className='text-center m-5'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a {brand} card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Link to={`/itemDetail/${id}`}>
                        <Button variant="dark" className="rounded-0">Ver detalles</Button>
                    </Link>
                    <div>
                        <Contador stock={5} initial={1} onAdd={onAdd} />
                    </div>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Precio: ${price}.-</small>
                </Card.Footer>
            </Card>
    )
}
