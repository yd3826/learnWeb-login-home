const initialState ={
    IsLog:false,
};

const LogReducer = (state=initialState,action)=>{
    switch (action.type)
    {
        case 'LOG_IN':
            return{...state,
                IsLog: true
            };
        case 'LOG_OUT':
            return{...state,
            IsLog: false};
        default:
            return state;
    }
};

export default LogReducer;