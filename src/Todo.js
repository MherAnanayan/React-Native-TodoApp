import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export const Todo = ({ todo, onRemove }) => {

    const [style, setStyle] = useState(styles.todobox)
    const [textstyle, setTextstyle] = useState(styles.todotext)

    const onTochedHandler = () => {
        style === styles.todobox ? setStyle(styles.todoboxtuched) : setStyle(styles.todobox)
        textstyle === styles.todotext ? setTextstyle(styles.todotexttuched) : setTextstyle(styles.todotext)
    }

    const longPressRemove = () => {
        onRemove(todo.id)
    }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onLongPress={longPressRemove}
            onPress={onTochedHandler}
        >
            <View style={style}>
                <Text style={textstyle}>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todobox: {
        justifyContent: 'center',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#841584',
        paddingLeft: 20,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        maxWidth: 1000
    },
    todoboxtuched: {
        justifyContent: 'center',
        height: 40,
        borderWidth: 2,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: 'green',
        paddingLeft: 20,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        maxWidth: 1000
    },
    todotext: {
        paddingLeft: 10,
        color: '#fff',
        fontSize: 17,
    },
    todotexttuched: {
        paddingLeft: 10,
        color: 'red',
        fontSize: 20,
    },


})