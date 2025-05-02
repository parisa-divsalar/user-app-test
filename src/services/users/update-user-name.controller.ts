import { sendRequest } from '@/apis/request';
import { useUserInfo } from '@/hooks/useUserInfo';
import { useMutation } from '@tanstack/react-query';

interface UpdateUserNameResponse {}
interface UpdateUserNameError {}
interface UpdateUserNameProps {}

function updateUserNameController(userId: string, userName: string, token: string) {
  return sendRequest<UpdateUserNameResponse, UpdateUserNameError, UpdateUserNameProps>({
    url: `/users/${userId}/username`,
    method: 'put',
    body: { userName },
    config: {
      headers: {
        Authorization: token,
      },
    },
  });
}

updateUserNameController.keyGen = () => ['update-user-name'];

export function useUpdateUserName() {
  const { token, userId } = useUserInfo();
  return useMutation({
    mutationKey: updateUserNameController.keyGen(),
    mutationFn: (userName: string) => updateUserNameController(token, userId, userName),
  });
}
