import { sendRequest } from '@/apis/request';
import { useUserInfo } from '@/hooks/useUserInfo';
import { OrderResponse as GetAllUserOrderResponse } from '@/type/user-order';
import { useQuery } from '@tanstack/react-query';

interface GetAllUserOrderProps {
  token: string;
  userId: string;
}

interface GetAllUserOrderError {}

function getAllUserOrders({ token, userId }: GetAllUserOrderProps) {
  const GET_ALL_USER_ORDERS_URL = `/users/${userId}/orders`;
  return sendRequest<GetAllUserOrderResponse, GetAllUserOrderError, GetAllUserOrderProps>({
    url: GET_ALL_USER_ORDERS_URL,
    method: 'get',
    params: {
      page: 1,
      limit: 30,
    },
    config: {
      headers: {
        Authorization: token,
      },
    },
  });
}

getAllUserOrders.keyGen = () => ['user-orders'];

export function useGetAllUserOrders() {
  const { token, userId } = useUserInfo();
  return useQuery({
    queryKey: getAllUserOrders.keyGen(),
    queryFn: () => getAllUserOrders({ token, userId }),
    enabled: !!token && !!userId,
  });
}
