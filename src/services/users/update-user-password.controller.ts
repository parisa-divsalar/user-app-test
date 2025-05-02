import { sendRequest } from '@/apis/request';
import { useUserInfo } from '@/hooks/useUserInfo';
import { useMutation } from '@tanstack/react-query';

interface UpdateUserPasswordResponse {}
interface UpdateUserPasswordError {}
interface UpdateUserPasswordProps {
  current_password: string;
  new_password: string;
}

function updateUserPasswordController(
  token: string,
  userId: string,
  userPassword: UpdateUserPasswordProps,
) {
  return sendRequest<UpdateUserPasswordResponse, UpdateUserPasswordError, UpdateUserPasswordProps>({
    url: `/users/${userId}/userpassword`,
    method: 'put',
    body: userPassword,
    config: {
      headers: {
        Authorization: token,
      },
    },
  });
}

updateUserPasswordController.keyGen = () => ['update-user-password'];

export function useUpdateUserPassword() {
  const { token, userId } = useUserInfo();
  return useMutation({
    mutationKey: updateUserPasswordController.keyGen(),
    mutationFn: (userPassword: UpdateUserPasswordProps) =>
      updateUserPasswordController(token, userId, userPassword),
  });
}
