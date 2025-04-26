interface UserInfo{
    userId:string,
    token:string
}

const getToken=localStorage.getItem('token');
const getUserId=localStorage.getItem('user_id');
export function useUserInfo():UserInfo{
    
    return {
        userId:getUserId!,
        token: `Bearer ${getToken}`}}