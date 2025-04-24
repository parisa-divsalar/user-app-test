import { sendRequest } from "@/apis/request"
import { useUserInfo } from "@/hooks/useUserInfo";
import { CreateOrderData } from "@/type/user-order";
import { useMutation } from "@tanstack/react-query";


const {token,userId}= useUserInfo();
const CREATE_ORDER_URL=`/users/${userId}/orders`;
 type CreateOrderProps=CreateOrderData;
 interface CreateOrderError{};
 interface CreateOrderResponse{};

function  createOrderController(body:CreateOrderProps){
return sendRequest<CreateOrderResponse,CreateOrderError,CreateOrderProps>({
    url:CREATE_ORDER_URL,
    method:'post',
    body:body,
    config:{
        headers:{
            Authorization:token
        },
    },
});

};

createOrderController.keyGen=()=>['create-order'];


export function useCreateOrder(){
    return useMutation({
        mutationKey:createOrderController.keyGen(),
        mutationFn:(body:CreateOrderProps)=>createOrderController(body)
    });
}
