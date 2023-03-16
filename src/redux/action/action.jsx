export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

export const REMOVE = (id) => {
    return {
        type: "REMOVE_CART",
        payload: id
    }
}

export const DELETE = (itd) => {
    return {
        type: "DLT_ONE",
        payload: itd
    }
}

export const FAVADD = (xim) => {
    return {
        type: "ADD_FAV",
        payload: xim

    }
}

export const FAVDLT = (xom) => {
    return {
        type: "DLT_FAV",
        payload: xom
    }
}

export const RESET = (res) => {
    return {
        type: "RESET",
        payload: res
    }
}