import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

export default function App() {
	const [permission, requestPermission] = Camera.useCameraPermissions();
	
	return (
		<View style={styles.container}>
			<Text>KOLA</Text>
			<Camera style={styles.camera} type={CameraType.front}></Camera>
			<TouchableOpacity
                onPress={() => console.log('Response = ')}
                style={styles.btnSection}>
                <Text style={styles.btnText}>Directly Launch Camera</Text>
            </TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	camera : {
		height: '100%',
		width: "100%",
	}
});
