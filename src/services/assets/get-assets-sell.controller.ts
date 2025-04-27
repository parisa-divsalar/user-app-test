import { sendRequest } from "@/apis/request";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useQuery } from "@tanstack/react-query";





interface GetAssetsSellProps{};
interface GetAssetsSellError{};
interface GetAssetsSellResponse{};


function getAssetSellController(asset_id:string,token:string){

return sendRequest<GetAssetsSellResponse,GetAssetsSellError,GetAssetsSellProps>({
    method:'get',   
    url:`/assets/${asset_id}/sell_info`,
    params:{maxAssetUnits:35},
    config:{
        headers:{Authorization:token}
    }
});  

};

getAssetSellController.keyGen=()=>['asset-sell'];

export function useAssetsSell(asset_id:string){
    const  {token}=useUserInfo();
return useQuery({
    queryKey:getAssetSellController.keyGen(),
    queryFn:()=>getAssetSellController(asset_id,token),
    enabled:!!token,
})

};
