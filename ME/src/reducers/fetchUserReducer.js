const GET_USER = 'GET_USER';

const DEFAULT_STATE = {
    data: {},
}
export default (state = DEFAULT_STATE, action) =>{
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                data : action.payding
            }    
        default:
           return state;
    }
};