import React, { useEffect, useState } from "react";

function Cart({ state, dispatch }) {
    const { cart } = state;
    const [total, settotal] = useState(0);

    function changeQty(id, qty) {
        dispatch({
            type: "change_cart_qty",
            payload: { id, qty }
        })
    }

    useEffect(() => {
        settotal(cart.reduce((acc, curr) => acc += Number(curr.price) * curr.qty, 0))
    }, [cart])
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ececec',
                width: '20%',
                margin: 3,
            }}>
            <b style={{ alignSelf: 'center', fontsize: 30 }}>Cart</b>
            <b style={{ alignSelf: 'center' }}>{total}</b>
            {cart.length > 0 ?
                cart.map((c) =>
                    <div key={c.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            margin: 5,
                            padding: 3,
                            border: '1px solid gray'
                        }}>
                        <div style={{ display: 'flex', gap: 10 }}>
                            <img src={c.thumbnail} style={{ objectFit: 'cover', width: 70 }} />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                <b>{c.title}</b>
                                <b>${c.price}</b>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <button onClick={() => changeQty(c.id, c.qty - 1)}>-</button>
                            <span>{c.qty}</span>
                            <button onClick={() => changeQty(c.id, c.qty + 1)}>+</button>
                        </div>
                    </div>
                )
                :
                <p style={{ alignSelf: 'center' }}>Cart is empty</p>
            }
        </div>
    )
}

export default Cart