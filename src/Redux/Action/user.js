export const setUserInfo=(username,id,nickname)=>{
    return{
        type:'SET_USERINFO',
        payload:{
            username,
            nickname,
            id,
        },
    };
};
export const changeUsername=(username)=>{
    return{
        type:'CHANGE_USERNAME',
        payload:username
    };
};