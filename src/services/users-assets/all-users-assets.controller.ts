import { sendRequest } from "@/apis/request";
import { useUserInfo } from "@/hooks/useUserInfo";
import {useQuery} from '@tanstack/react-query';


export interface GetAllUserAssetsError{};
export interface GetAllUserAssetsProps{};
export interface GetAllUserAssetsResponse{
     status: string;
  status_code: number;
  message: string;
  has_error: boolean;
  meta: {
    page_size: number;
    page_num: number;
    total: number;
  };
  body:  null;
};

const {token,userId}=useUserInfo();

const GET_ALL_USER_ASSET_URL=`/users/${userId}/assets`;


function getAllUsersAssetsController(){
return sendRequest<GetAllUserAssetsResponse,GetAllUserAssetsError,GetAllUserAssetsProps>({
    method:'get',
    url:GET_ALL_USER_ASSET_URL,
    params:{
        page:1,
        limit:30
    },
  config:{
    headers:{
        Authorization:token
    }
  }
});
};

getAllUsersAssetsController.keyGen=()=>['all-users-assets'];


export function useAllUsersAssets(){
return useQuery({
    queryKey:getAllUsersAssetsController.keyGen(),
    queryFn:getAllUsersAssetsController,
    enabled:!!token,
});
};








