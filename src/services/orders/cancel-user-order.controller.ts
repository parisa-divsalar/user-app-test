import { sendRequest } from '@/apis/request';
import { useUserInfo } from '@/hooks/useUserInfo';
import { useMutation } from '@tanstack/react-query';

interface CancelUserOrderProps {}
interface CancelUserOrderResponse {}
interface CancelUserOrderError {}

function cancelUserOrderController(order_id: string, token: string, userId: string) {
  return sendRequest<CancelUserOrderResponse, CancelUserOrderError, CancelUserOrderProps>({
    url: `/users/${userId}/orders` + '/' + order_id,
    method: 'delete',
    config: {
      headers: {
        Authorization: token,
      },
    },
  });
}

cancelUserOrderController.keyGen = () => ['delete-user-order'];

export function useCancelOrder() {
  const { userId, token } = useUserInfo();
  return useMutation({
    mutationKey: cancelUserOrderController.keyGen(),
    mutationFn: (order_id: string) => cancelUserOrderController(order_id, token, userId),
  });
}
