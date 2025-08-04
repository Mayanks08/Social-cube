import { useMutation, useQueryClient } from '@tanstack/react-query';

import { login } from '../lib/api.js';

const useLogin = () => {
     const queryClient = useQueryClient();
  const { mutate,
        isPending,
        error} = useMutation({
    mutationFn:login,
    onSuccess:()=>
      queryClient.invalidateQueries({queryKey:["authUser"]})
  });
  return{error:error,loginMutation:mutate,isPending}

}

export default useLogin;