import Contador from './Contador';

const ItemDetail = ({ item }) => {

    const onAdd = (contador) => {
        console.log('Soy un onAdd y el contador es:', contador);
    }

    return (
        <>
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
        </>
    )
}

export default ItemDetail;