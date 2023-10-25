import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
	const [darkMode, setDarkMode] = useState(false);

	function handleToggleMode() {
		setDarkMode(!darkMode);
	}

	return (
		<View style={darkMode ? styles.style1 : styles.style2}>
			{darkMode ? (
				<Image
					style={{ width: 100, height: 100 }}
					source={require('./assets/sun.png')}
				/>
			) : (
				<Image
					style={{ width: 100, height: 100 }}
					source={require('./assets/moon.png')}
				/>
			)}

			<Button
				onPress={handleToggleMode}
				title={darkMode ? 'Passer au mode Nuit' : 'Passer au mode Jour'}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	style1: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	style2: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
