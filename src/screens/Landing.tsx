import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAccount } from "wagmi";

export default function Landing() {
	const { isConnected } = useAccount();
	console.log(isConnected);
	return (
		<View style={styles.container}>
			<Text style={styles.heading_text}>Landing</Text>
			<Text style={styles.normal_text}>
				This is what shows before user connects their wallet
			</Text>
			<Button title="Connect Wallet" color="#1677FF" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#070707",
		justifyContent: "center",
		alignItems: "center",
	},
	heading_text: {
		color: "#eee",
		fontSize: 24,
	},
	normal_text: {
		color: "#ccc",
		fontSize: 16,
	},
});
