export const CartReducer = (state, action) => {

    switch (action.type) {
        case 'add_products':
            return { ...state, products: action.payload }
        case 'add_to_cart':
            return { ...state, cart: [...state.cart, { ...action.payload }] }
        case 'remove_from_cart':
            return { ...state, cart: state.cart.filter(c => c.id != action.payload.id) }
        case 'change_cart_qty':
            return { ...state, cart: state.cart.filter(c => c.id === action.payload.id ?  (c.qty = action.payload.qty) : c.qty) }
    }
}