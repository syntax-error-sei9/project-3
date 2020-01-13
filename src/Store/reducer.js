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
        case "SET_CITIES":
            return{
                ...state,
                cities: action.value
            }
            case "GET_COUNTRIES":
                return{
                    ...state,
                    countries: action.value
                }
        case "Add_intrest":
        return {
            ...state,
            intrests: action.value
        }
        default:
            return state;
   
    }
}
export default rootReducer;