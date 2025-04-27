import { sendRequest } from "@/apis/request";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useQuery } from "@tanstack/react-query";


interface Asset {
  asset_id: string;
  title: string;
  description: string;
  image_url: string;
  isin: string;
  persian_name: string;
  english_name: string;
  instrument_id: string;
  buy_side_fee_in_percent: number;
  buy_max_fee_in_rials: number;
  sell_side_fee_in_percent: number;
  sell_max_fee_in_rials: number;
}
interface GetAllAssetsResponse{
      status: string;
  status_code: number;
  message: string;
  has_error: boolean;
  meta: {
    page_size: number;
    page_num: number;
    total: number;
  };
  body: Asset[];
};

interface GetAllAssetError{};
interface GetAllAssetProps{};


function getAllAssetsController(token:string){
    return sendRequest<GetAllAssetsResponse,GetAllAssetError,GetAllAssetProps>({
        url:'/assets',
        method:'get',
        params:{page:1,limit:50},
         config:{
            headers:{
                Authorization:token
            }
         }

    });
};

getAllAssetsController.keyGen=()=>['get-all-assets'];


export function useGetAllAssets(){
  const {token}=useUserInfo();
    return useQuery({
        queryKey:getAllAssetsController.keyGen(),
        queryFn:()=>getAllAssetsController(token),
        enabled:!!token,
    });
}

