import React from "react";

import {View, Text, useColorScheme, StyleSheet} from 'react-native';



function HW(): JSX.Element{
    const isDarkMode = useColorScheme() ;
    return (
        <View style={styles.cointainer}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Amit Kumar</Text>
        </View>
    )
};




const styles = StyleSheet.create({
    cointainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: '#ffffff',
    },
    darkText: {
        color: '#000000',
    }

})






export default HW;



