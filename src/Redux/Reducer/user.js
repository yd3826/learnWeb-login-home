const initialState ={
    username:'React-Redux',
    nickname:'',
    id:null,
};

const UserReducer = (state=initialState,action)=>{
    switch (action.type)
    {
        case 'SET_USERINFO':
            return{...state,
                username:action.payload.username,
                id:action.payload.id,
                nickname: action.payload.nickname
            };
        case 'CHANGE_USERNAME':
            return{...state,username:action.payload};
        default:
            return state;
    }
};

export default UserReducer;