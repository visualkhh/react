import {QueryClient, QueryClientProvider, useQuery} from 'react-query'

// export const queryClient = new QueryClient()

export const getClient = (() => {
    let client: QueryClient | undefined;
    return () => {
        if (!client) {
            client = new QueryClient({
                defaultOptions: {
                    queries: {
                        cacheTime: 1000 * 60 * 60 * 24,
                        staleTime: 1000 * 60
                    }
                }
            })
        }
        return client
    }
})();

export const QueryKeys = {
    PRODUCTS: 'products',
}