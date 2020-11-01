import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';


export const Addtodo = ({ onSubmit }) => {

    const [value, setValue] = useState()

    const addTodoHandler = () => {
        value ? onSubmit(value) : Alert.alert('Input Cant Be Empty ...')
        setValue('')
    }


    return (
        <View style={styles.addtodo}>
            <TextInput
                style={styles.textinput}
                selectionColor={"#841584"}
                placeholder='Please add new Todo ...'
                value={value || ''}
                onChangeText={(text) => setValue(text)}
            />
            <Button
                title='Add Todo'
                color="#841584"
                onPress={addTodoHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    addtodo: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 30,
        paddingBottom: 20,
    },

    textinput: {
        width: '75%',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#841584',
        paddingLeft: 10,
        color: '#fff',
        fontSize: 17,
    }

})