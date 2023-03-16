import { toast } from "react-toastify";

const INIT_STATE = {
    carts: []
};

export const usereducer = (state = INIT_STATE, action) => {
 switch(action.type) {
    case "ADD_FAV":
        const FH = state.carts.findIndex((il) => il.id === action.payload.id);
        if (FH >= 0) {
            state.carts[FH].quantity += 1
        } else {
            const box = { ...action.payload, quantity: 1 }
            toast.success(`${action.payload.name} is added to favourites`, {
                position: 'top-right', pauseOnHover: false, closeOnClick: true, draggable: false,
            });
            return {
                ...state,
                carts: [...state.carts, box]
            }
        }

    case "DLT_FAV":
        const data = state.carts.filter((i) => i.id !== action.payload);
        return {
            ...state,
            carts: data
        }

    default:
        return state
    }
}

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const IID = state.carts.findIndex((itd) => itd.id === action.payload.id);
            if (IID >= 0) {
                state.carts[IID].quantity += 1
            } else {
                const temp = { ...action.payload, quantity: 1 }
                toast.success(`${action.payload.name} is added to cart`, {
                    position: 'top-right', pauseOnHover: false, closeOnClick: true, draggable: false,
                });
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case "REMOVE_CART":
            const data = state.carts.filter((i) => i.id !== action.payload);
            return {
                ...state,
                carts: data
            }

        case "DLT_ONE":
            const IID_decrement = state.carts.findIndex((itd) => itd.id === action.payload.id);

            if (state.carts[IID_decrement].quantity >= 1) {
                const delete_item = state.carts[IID_decrement].quantity -= 1
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[IID_decrement].quantity === 1) {
                const data = state.carts.filter((i) => i.id !== action.payload);
                return {
                    ...state,
                    carts: data
                }
            }
        
        case "RESET":
            const reset = state.carts = [];
            return {
                ...state,
                carts: reset
            }

        default:
            return state
    }
}