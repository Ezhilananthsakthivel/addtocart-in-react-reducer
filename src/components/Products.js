import React from "react";

function Products({ state, dispatch }) {
    const { products, cart } = state;
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    width: '80%'
                }}>
                {products.map(p => {
                    return (
                        <div key={p.id}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                border: '2px solid gray',
                                width: '30%',
                                margin: 10,
                                padding: 5,
                                gap: 10
                            }}>
                            <img src={p.thumbnail} style={{ height: 200, objectFit: 'cover' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}><b>{p.title}</b><b>${p.price}</b></div>
                            {
                                cart.some(prod => prod.id == p.id) ?
                                    <button style={{
                                        border: 0,
                                        padding: 5,
                                        borderRedius: 10,
                                        backgroundColor: 'red',
                                        color: 'white'
                                    }}
                                        onClick={() => {
                                            dispatch({
                                                type: 'remove_from_cart',
                                                payload: {
                                                    id: p.id
                                                }
                                            })
                                        }}>Remove from cart</button> :
                                    <button style={{
                                        border: 0,
                                        padding: 5,
                                        borderRedius: 10,
                                        backgroundColor: 'green',
                                        color: 'white'
                                    }} onClick={() => {
                                        dispatch({
                                            type: 'add_to_cart',
                                            payload: {
                                                id: p.id,
                                                title: p.title,
                                                thumbnail: p.thumbnail,
                                                qty: 1,
                                                price: p.price
                                            }
                                        })
                                    }} >Add to cart</button>
                            }
                        </div>)
                })}
            </div>
        </>
    )
}

export default Products