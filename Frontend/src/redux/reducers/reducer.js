const INIT_STATE = {
    carts: [],
    countvalue:0,
};

 const cartreducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                carts:[...state.carts,action.payload],
                countvalue:state.countvalue + action.payload.count,
            }
        case 'REMOVE':
            return {
                carts:state.carts.filter((val,index)=>{
                    return (index !== action.payload)
                }),
                countvalue:state.countvalue - Number(action.count),

                
            }
    
        default:
            return state;
    }
}

export default cartreducer;