// Hook
import {getErrorMessage} from '@src/utils/hooks';

// Type
import {
  GeneralError,
  HandleResponse,
  ResponseHookConfig,
  ResponseHookResult,
} from './types';

const useResponse = <T,>(
  options: ResponseHookConfig<T> = {},
): ResponseHookResult<T> => {
  const handleResponse = ({data, error}: HandleResponse<T>) => {
    if (data) {
      options.onSuccess?.({res: data});
    } else if (error) {
      const err: GeneralError = {
        ...error,
        message: getErrorMessage(error),
      };
      options.onError?.({err});
    }
  };

  return {handleResponse};
};

export default useResponse;
