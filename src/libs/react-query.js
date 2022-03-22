import {
  QueryClient,
  UseQueryOptions,
  UseMutationOptions,
  DefaultOptions,
} from "react-query";

const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
