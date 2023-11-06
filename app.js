import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

export default function App() {
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [cameraMode, setCameraMode] = useState(true);
	const [uri, setUri] = useState('https://reactnative.dev/img/tiny_logo.png');

    if (!permission) {
        return <View />;
    }

	takePicture = () => {
		if (this.camera) {
			this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
		}
	 };
  
	onPictureSaved = photo => {
		setUri(photo.uri);
		console.log(photo.uri);
	} 

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text>We need your permission to show the camera</Text>
                <TouchableOpacity onPress={requestPermission} style={styles.btnSection}>
                    <Text style={styles.btnText}>Grant Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }

	return (
		<View style={styles.container}>
			<Camera style={styles.camera} type={CameraType.back} ref={(ref) => { this.camera = ref }} ></Camera>
			<TouchableOpacity onPress={() => takePicture()} style={styles.btnSection}>
                <Text style={styles.btnText}>Directly Launch Camera</Text>
            </TouchableOpacity>
			<Image style={styles.stretch} source={{ uri: uri, }} ref={(ref) => { this.preview = ref }} />
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
		height: 'fit-content',
		width: "100%",
		aspectRatio: "3/4",
		objectFit: 'cover',
	},
	stretch: {
		width: 200,
		height: 200,
		aspectRatio: "3/4",
		resizeMode: 'stretch',
		objectFit: "cover",
	},
});
