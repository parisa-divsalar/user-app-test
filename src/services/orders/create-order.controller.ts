import { sendRequest } from '@/apis/request';
import { useUserInfo } from '@/hooks/useUserInfo';
import {
  CreateOrderData as CreateOrderProps,
  OrderResponse as CreateOrderResponse,
} from '@/type/user-order';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface CreateOrderError {}
function createOrderController(body: CreateOrderProps, userId: string, token: string) {
  return sendRequest<CreateOrderResponse, CreateOrderError, CreateOrderProps>({
    url: `/users/${userId}/orders`,
    method: 'post',
    body: body,
    config: {
      headers: {
        Authorization: token,
      },
    },
  });
}

createOrderController.keyGen = () => ['create-order'];

export function useCreateOrder() {
  const { token, userId } = useUserInfo();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: createOrderController.keyGen(),
    mutationFn: (body: CreateOrderProps) => createOrderController(body, userId, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-orders'] });
    },
  });
}
