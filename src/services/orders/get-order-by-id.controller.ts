import { sendRequest } from "@/apis/request";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useQuery } from "@tanstack/react-query";

interface  GetOrderByIdResponse {
    status: "success";
    status_code: number;
    message: string;
    has_error: boolean;
    meta: {
        page_size: number;
        page_num: number;
        total: number;
    };
    body: {
        order_id: string;
        asset_id: string;
        asset_isin: string;
        side: "buy" | "sell";
        state: "created" | "pending" | "completed" | "canceled"; 
        final_volume: number | null;
        final_price: number | null;
        available_budget: number;
        available_units: number | null;
        created_at: string; 
        created_at_unix: number;
    };
};

interface GetOrderByIdProps{};
interface GetOrderByIdError{};





function getOrderByIdController(userId:string,orderId:string,token:string){
    return sendRequest<GetOrderByIdResponse,GetOrderByIdError,GetOrderByIdProps>({
        url:`/users/${userId}/orders/${orderId}`,
        method:'get',
        config:{
            headers:{
                Authorization:token
            }
        }
    });
};


 getOrderByIdController.keyGen=(orderId:string)=>['get-order',orderId];

export function useGetOrderById(orderId:string){
   const {token,userId}=useUserInfo();
    return useQuery({
        queryKey:getOrderByIdController.keyGen(orderId),
        queryFn:()=>getOrderByIdController(userId,orderId,token),
        enabled:!!token &&  !!orderId
    })
}