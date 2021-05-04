import React from 'react'
import { StyleSheet, Text, View ,ActivityIndicator,Button,TouchableOpacity} from 'react-native'

const DemoScreen = ({navigation}) => {

    const onFlatlist=()=>{
        navigation.navigate('Flat');
    }

    const onModel=()=>{
        navigation.navigate('Model');
    }
    const onTab = () =>{

        navigation.navigate('Tab');
    }
    const onDrawer=()=>{
        navigation.navigate('Drawer');
    }

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large"/>
            <Text>Welcome To Demo</Text>
            <TouchableOpacity style={styles.button} onPress={onFlatlist}>
                <Text>
                    Flatlist
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={onModel}>
                <Text>
                   Model
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={onTab}>
                <Text>
                    Tab
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={onDrawer}>
                <Text>
                    Drawer
                </Text>
            </TouchableOpacity>

           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    button: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
    }
})

export default DemoScreen


