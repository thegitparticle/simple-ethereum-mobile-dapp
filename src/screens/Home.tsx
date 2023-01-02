import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.heading_text}>Home</Text>
			<Text style={styles.normal_text}>
				This is what shows after user connects their wallet
			</Text>
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
