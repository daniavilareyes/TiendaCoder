import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div className='container container-fluid'>
            <div className='row'>
                {products.map (art => <Item key={art.id} {...art} /> )}
            </div>
        </div>
    )
}

export default ItemList