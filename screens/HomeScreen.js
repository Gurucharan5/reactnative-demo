import React,{useRef,useEffect} from 'react'
import { Animated,StyleSheet, Text, View } from 'react-native'

const FadeInView =(props)=>{
    const fadeAnim = useRef(new Animated.Value(0)).current

    React.useEffect(()=>{
        Animated.timing(
            fadeAnim,
            {
                toValue:1,
                duration:10000,
            }
        ).start();

    }, [fadeAnim])

    return (
        <Animated.View
        style={{
            ...props.style,
            opacity: fadeAnim,
        }}
        >
            {props.children}
        </Animated.View>
    )
}


const HomeScreen = () => {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <FadeInView
            style={{width: 250, height:50}}
            >
                <Text
                style={{fontSize:40 , textAlign: 'center',margin:10}}
                >
                    HealthGuru
                </Text>
            </FadeInView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
