import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import mcs from '../assets/js/mcs';
import mcs_config from '../assets/js/oracle_mobile_cloud_config';

class AuthScreen extends Component {
    loginHandler =  async () =>{
        try {
            const loginresposne = await mcs.mobileBackend.authorization.authenticate("Irish.user", "Wipro@1234");
            console.log('loginresposne',loginresposne);
        } catch (error) {
            console.error('GOT ERROR WHILE LOGIN',error);
        }
    };

    render() {
        mcs.init(mcs_config);
        console.log('mcs_Config',mcs_config);
        return (
            <View style={styles.container}>
                <Text>Auth Screen</Text>
                <Button title={"Login"} onPress={this.loginHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });

export default AuthScreen;