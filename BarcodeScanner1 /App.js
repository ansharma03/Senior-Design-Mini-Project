import React from 'react';
import {Component, useState} from 'react';
import { TouchableOpacity, Text, View, Alert, NavigatorIOS, SearchPage } from 'react-native';
import { RNCamera } from 'react-native-camera';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

class App extends Component {

  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = [];

    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
        flashMode: RNCamera.Constants.FlashMode.auto,
      },
    loggedIn: false,
    setloggedIn: false,
    userInfo: [],
    setuserInfo: [],
    };

  }
    

  onBarCodeRead(scanResult) {
    if (scanResult.data != null) {
    if (!this.barcodeCodes.includes(scanResult.data)) {
        
      this.barcodeCodes.push(scanResult.data);
        Alert.alert(scanResult.data,
                    [
                     {
                           text: 'OK',
                           onPress: () => console.log('OK Pressed')
                         },],
                    );
      console.warn('onBarCodeRead call');
    }
        
    }
    return;
  }

    
    
    signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setloggedIn(false);
          setuserInfo([]);
        } catch (error) {
          console.error(error);
        }
      };
    
  async takePicture() {
      if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.warn("pic taken");
            console.log(data.uri);
          }
  }

  pendingView() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgreen',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Waiting</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            defaultTouchToFocus
            flashMode={this.state.camera.flashMode}
            mirrorImage={false}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            onFocusChanged={() => {}}
            onZoomChanged={() => {}}
            androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                      }}
                      androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                      }}
            style={styles.preview}
            type={this.state.camera.type}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
        </View>
        <View style={[styles.bottom]}>
            <View style={styles.sectionContainer}>
            <GoogleSigninButton
                            style={{width: 192, height: 48}}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={() =>  {
            GoogleSignin.configure({
            scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
             webClientId:
                   '622886746227-vklkfm5373e14r98i96r7nk45q2somr6.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
             offlineAccess: true,
        });
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        function setloggedInState () {
            this.setState((state) => {return {setloggedIn: state.setloggedIn(true)}});
        }
        async function signIn() {
            try {
               await GoogleSignin.hasPlayServices();
                const {accessToken, idToken} = await GoogleSignin.signIn();
                this.setState((state) => {return {setloggedIn: state.setloggedIn(true)}});
             } catch (error) {
                 if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                       alert("You cancelled the sign in.");
                 } else if (error.code === statusCodes.IN_PROGRESS) {
                       alert("Google sign In operation is in process");
                 } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                       alert("Play Services not available");
                 } else {
                       alert("Something unknown went wrong with Google sign in. " + error.message);
                 }
             }
        }
        signIn()
        function onAuthStateChanged(user) {
            setuserInfoState(user);
            console.log(user);
            if (user) setloggedInState();
          }
    }}
                          />
            </View>
            <View style={styles.sectionContainer}>
                          {!this.state.loggedIn && <Text>You are currently logged out</Text>}
                          {this.state.loggedIn && (
                            <Button
                              onPress={this.signOut}
                              title="LogOut"
                              color="red"></Button>
                          )}
             </View>
    </View>
            
      </View>
            
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default App;
