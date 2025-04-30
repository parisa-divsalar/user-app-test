import { sendRequest } from "@/apis/request";
import { useUserInfo } from "@/hooks/useUserInfo"
import { useQuery } from "@tanstack/react-query";





interface GetAssetsBuyProps{};
interface GetAssetsBuyError{};
export interface AssetBuyValue {
    nav: number;
    last_price: number;
    fee: number;
    units_might_bought: number};
interface GetAssetsBuyResponse{
      status: "success" | "error";
  status_code: number;
  message: string;
  has_error: boolean;
  meta: {
    page_size: number;
    page_num: number;
    total: number;
  };
  body: AssetBuyValue
}

function getAssetsBuyController(asset_id:string,token:string){
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

export function useAssetsBuy(asset_id:string,option?:{enabled?:boolean}){
    const {token}=useUserInfo();
    return useQuery({
        queryKey:getAssetsBuyController.keyGen(),
        queryFn:()=>getAssetsBuyController(asset_id,token),
        enabled:!!token && (option?.enabled ?? true),
    });
};