import { Link } from 'react-router-dom';
import Contador from './Contador';

export const Product = ({ name, price, img, brand, id }) => {
    const onAdd = (contador) => {
        console.log('Soy un onAdd y el contador es:', contador);
    }
    return (
        <div className="col-12 mb-2 col-md-4">
            <Link to={`/itemDetail/${id}`}>
                <div id='card' className="card border border-dark shadow">
                    <img src={img} className="card-img-top img-thumbnail shadow" alt="" />
                    <div className="card-body text-center">
                        <p className="text-muted display-6"><strong>{brand}</strong></p>
                        <h4 className='display-6 my-2'>{name}</h4>
                        <p className='my-2'>${price}.-</p>
                        <div>
                            <Contador stock={5} initial={1} onAdd={onAdd} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
