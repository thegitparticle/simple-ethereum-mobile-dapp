import "./shims";
import "@ethersproject/shims";
import "react-native-get-random-values";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "@walletconnect/react-native-compat";
import { configureChains, createClient, goerli, WagmiConfig } from "wagmi";
import Main from "./src/screens/Main";
import {
	EthereumClient,
	modalConnectors,
	walletConnectProvider,
} from "@web3modal/ethereum";

const chains = [goerli];

// Wagmi client
const { provider } = configureChains(chains, [
	walletConnectProvider({ projectId: "<YOUR_PROJECT_ID>" }),
]);

const wagmiClient = createClient({
	autoConnect: true,
	connectors: modalConnectors({ appName: "simpleEthMobileDapp", chains }),
	provider,
});

export default function App() {
	return (
		<WagmiConfig client={wagmiClient}>
			<Main />
			<StatusBar style="auto" />
		</WagmiConfig>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
