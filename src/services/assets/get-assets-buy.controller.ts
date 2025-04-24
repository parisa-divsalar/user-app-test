import { sendRequest } from "@/apis/request";
import { useUserInfo } from "@/hooks/useUserInfo"
import { useQuery } from "@tanstack/react-query";


const {token}=useUserInfo();


interface GetAssetsBuyProps{};
interface GetAssetsBuyError{};
interface GetAssetsBuyResponse{};

function getAssetsBuyController(asset_id:string){
return sendRequest<GetAssetsBuyResponse,GetAssetsBuyError,GetAssetsBuyProps>({
    url:`/assets/${asset_id}/buy_info`,
    method:'get',
    params:{maxBudget:1000000},
    config:{
        headers:{
            Authorization:token,
        },
    },

});
};

getAssetsBuyController.keyGen=()=>['assets-buy'];

export function useAssetsBuy(asset_id:string){
    return useQuery({
        queryKey:getAssetsBuyController.keyGen(),
        queryFn:()=>getAssetsBuyController(asset_id),
        enabled:!!token,
    });
};