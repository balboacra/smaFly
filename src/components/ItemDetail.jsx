import Contador from './Contador';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ item }) => {

    const onAdd = (contador) => {
        console.log('Soy un onAdd y el contador es:', contador);
    }

    return (
        <Card className="text-center">
            <Card.Header>{item.brand}</Card.Header>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Img variant="top" src={item.img} />
                <Card.Text>
                    {item.description}
                </Card.Text>
                <div>
                    <Contador stock={5} initial={1} onAdd={onAdd} />
                </div>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button variant="secondary">Volver</Button>
            </Card.Footer>
        </Card>
    )
}

export default ItemDetail;

{/* <>
<div className="col-12 mb-2 col-md-4">
    <div id='card' className="card border border-dark shadow">
        <img src={item.img} className="card-img-top img-thumbnail shadow" alt="" />
        <div className="card-body text-center">
            <p className="text-muted display-6"><strong>{item.brand}</strong></p>
            <h4 className='display-6 my-2'>{item.name}</h4>
            <p className='my-2'>${item.price}.-</p>
            <h5>{item.description}</h5>
            <h5>{item.category}</h5>
            <div>
                <Contador stock={5} initial={1} onAdd={onAdd} />
            </div>
        </div>
    </div>
</div>
</> */}