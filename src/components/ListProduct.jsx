import React, { useContext } from 'react'
import { cartContext } from '../App';

function ListProduct() {
    const products = [
        { id: 1, productName: "SP1", image: "https://m.yodycdn.com/fit-in/filters:format(webp)/products/smn5074-tra-3.jpg" },
        { id: 2, productName: "SP2", image: "https://m.yodycdn.com/fit-in/filters:format(webp)/products/smn5210-hog-20.jpg" },
        { id: 3, productName: "SP3", image: "https://m.yodycdn.com/fit-in/filters:format(webp)/products/vdn6270-tra-8.jpg" }
    ];
    const { addToCart } = useContext(cartContext);
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {products.map((item) => {
                        return (<div className="col-lg-4" key={item.id}>
                            <div className="card">
                                <img className="card-img-top" src={item.image} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">{item.productName}</h4>
                                    <p className="card-text">Text</p>
                                </div>
                                <button className='btn btn-success' onClick={addToCart}>Add Cart</button>
                            </div>
                        </div>)
                    })}


                </div>
            </div>

        </>
    )
}

export default ListProduct