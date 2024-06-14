import { useConnect } from "@planetarium/chrono-sdk/hooks";

export function ConnectButton() {
    const { connectAsync, isPending } = useConnect();

    return <button onClick={() => connectAsync()} disabled={isPending}>
      Connect
    </button>
}
