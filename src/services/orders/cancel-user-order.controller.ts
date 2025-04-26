import { sendRequest } from "@/apis/request";
import { useUserInfo } from "@/hooks/useUserInfo"
import {  useMutation } from "@tanstack/react-query";


const {userId,token}=useUserInfo();

const CANCEL_USER_URL=`/users/${userId}/orders`;
interface CancelUserOrderProps{};
interface CancelUserOrderResponse{};
interface CancelUserOrderError{};


function cancelUserOrderController(order_id:string){
return sendRequest<CancelUserOrderResponse,CancelUserOrderError,CancelUserOrderProps>({
    url:CANCEL_USER_URL+'/'+order_id,
    method:'delete',
    config:{
        headers:{
            Authorization:token,
        }
    }
});
};

cancelUserOrderController.keyGen=()=>['delete-user-order'];



export function useCancelOrder(){
    return useMutation({
        mutationKey:cancelUserOrderController.keyGen(),
        mutationFn:(order_id:string)=>cancelUserOrderController(order_id),
    });
};


