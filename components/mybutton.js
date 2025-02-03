import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function MyButton({
    title,          // button text
    onPress,        // action on press button
    type,           // 1, 2, 3, 4 o 5
    buttonStyle,    // Style for the pressable container
    textStyle,      // Style for the Text element
}) {


    switch (type) {
        case 1:

            return (
                <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
                    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
                </Pressable>
            );

        case 2:
            return (
                <Pressable
                    onPress={onPress}
                    style={({ pressed }) => ([
                        styles.buttonGeneric,
                        pressed ? styles.buttonPressed : styles.buttonNoPressed
                    ])}
                >
                    <Text style={[styles.buttonText, textStyle]}>Press Me</Text>
                </Pressable>
            );

        case 3:

            return (
                <Pressable
                    onPress={onPress}
                    style={({ pressed }) => ([
                        styles.buttonGeneric,
                        pressed ? styles.buttonPressed : styles.buttonNoPressed
                    ])}
                >
                    <LinearGradient
                        colors={['#007BFF', '#0052D4']} // Blue gradient
                        style={styles.gradient}
                    >
                        <Text style={styles.text}>Press Me</Text>
                    </LinearGradient>
                </Pressable>
            );

        default:
            break;
    }

};

const styles = StyleSheet.create({
    button: {
        width: 200,
        backgroundColor: '#007BFF',
        padding: 15,
        paddingTop: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6, // For Android
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonGeneric: {
        padding: 15,
        borderRadius: 10,
        width: 200,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6, // For Android
        alignItems: 'center'
    },
    buttonNoPressed: {
        backgroundColor: '#007BFF',
        transform: [{ scale: 1 }],
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
    },
    buttonPressed: {
        backgroundColor: '#0052D4',
        transform: [{ scale: 0.95 }], // Shrinking effect
        shadowOffset: { width: 0, height: 2 }, // Smaller shadow when pressed
        shadowOpacity: 0.2,
    },
    gradient: {
        width: '100%',
        alignItems: 'center',
    },
});