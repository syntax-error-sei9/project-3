const inialState ={
    cities: [],
    topCities: [],
    intrests: [],
    countries: [],
}
const rootReducer = (state=inialState, action) => {
    switch (action.type) {
        case "SET_TOP_CITIES":
           return{
               ...state,
               topCities:action.value
           }
        default:
            return state
        case "SET_CITIES":
            return{...state,cities: action.value}
        default:
            return state;
    }
}
export default rootReducer;