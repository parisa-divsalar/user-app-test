import { sendRequest } from "@/apis/request";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useMutation } from "@tanstack/react-query";

interface Meta {
    page_size: number;
    page_num: number;
    total: number;
}

interface LoginSession {
    ip: string;
    device: string;
    os: string;
    browser: string;
    login_time: string;
    is_temporary: boolean;
}

interface Body {
    request_id: string | null;
    user_id: string;
    national_code: string;
    mobile: string;
    username: string;
    birth_day: string;
    birth_month: string;
    birth_year: string;
    temporary_user_step: string;
    login_sessions: LoginSession[];
}

interface UpdateUserStepResponse {
    status: string;
    status_code: number;
    message: string;
    has_error: boolean;
    meta: Meta;
    body: Body;
}

interface UpdateUserStepError{};
interface UpdateUserStepProps{};



function updateUserStepController(token:string,step:string,userId:string){
   return  sendRequest<UpdateUserStepResponse,UpdateUserStepError,UpdateUserStepProps>({
        url:`/users/${userId}/step`,
        method:'put',
        body:step,
        config:{
            headers:{
                Authorization:token,
            }
        },
    })
};




updateUserStepController.keyGen=(step:string)=>['update-user-step',step];

export function useUpdateStep(step:string){
    const {token,userId}=useUserInfo()
    return useMutation({
        mutationKey:updateUserStepController.keyGen(step),
        mutationFn:()=>updateUserStepController(token,userId,step),
    })
}


