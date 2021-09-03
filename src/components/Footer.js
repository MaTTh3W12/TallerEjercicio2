import React from 'react';
import { RefreshControlBase } from "react-native";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';

export default function Footer(props){
    const{calculate} = {props};

    return(
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>CALCULAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.SECONDARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent:'center'
    },

    button: {
        backgroundColor: colors.SECONDARY_COLOR,
        padding: 16,
        borderRadius: 20,
        width: '75%',
    },

    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.SECONDARY_COLOR_TEXT,
        textAlign: 'center',
    },
})