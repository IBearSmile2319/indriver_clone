import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Pc from '../../assets/Pc.svg'
import SplashScreen from 'react-native-splash-screen'
const App = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <View>
            <Text>Apps</Text>
            <View>

                <Pc />
            </View>
        </View>
    )
}

export default App