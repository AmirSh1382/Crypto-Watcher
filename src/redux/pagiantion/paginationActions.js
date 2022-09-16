const SET_CONFIGS = coins => {
    return {type: "SET_CONFIGS", payload: coins}
}

const NEXT_PAGE = () => {
    return {type: "NEXT_PAGE"}
}

const PREV_PAGE = () => {
    return {type: "PREV_PAGE"}
}

const SET_PAGE = page => {
    return {type: "SET_PAGE", payload: page}
}

export { SET_CONFIGS, NEXT_PAGE, PREV_PAGE, SET_PAGE }