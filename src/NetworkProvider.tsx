import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useNetwork } from "@planetarium/chrono-sdk/hooks";
import { PropsWithChildren } from "react";
import { ConnectButton } from "./ConnectButton";


export function NetworkProvider({ children }: PropsWithChildren) {
    const {
		data,
		isLoading,
		isSuccess,
	} = useNetwork();

    if (isLoading) {
		return <>Loading...</>;
	}

    if (!isSuccess) {
		return <>Network is not loaded successful.</>;
	}

    const { network, isConnected } = data;

    if (!isConnected) {
        return <ConnectButton />
    }

    const client = new ApolloClient({
		uri: network.gqlEndpoint,
		cache: new InMemoryCache(),
	});

    return <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
}
