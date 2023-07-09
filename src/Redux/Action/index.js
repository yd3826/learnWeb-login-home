export const login=(username,id,nickname)=>{
    return{
        type:'LOG_IN',
    };
};
export const logout=(username)=>{
    return{
        type:'LOG_OUT',
    };
};