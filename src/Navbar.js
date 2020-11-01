import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.navtext}>Todo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        marginTop: 20,
        width: '100%',
        height: 70,
        backgroundColor: '#822bcf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navtext: {
        fontSize: 30,
        color: '#fff',
        marginTop: 8,
    }
})

