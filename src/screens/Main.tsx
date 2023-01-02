import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Landing from "./Landing";

export default function Main() {
	return (
		<View style={styles.container}>
			<Landing />
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
