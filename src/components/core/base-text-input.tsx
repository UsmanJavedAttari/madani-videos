import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TextInputProps,
} from 'react-native';

interface BaseTextInputProps extends TextInputProps {
    label: string;
    rules?: string;
}

export const BaseTextInput: React.FC<BaseTextInputProps> = ({
    label,
    rules,
    ...props
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
                {rules?.includes('required') ? '*' : ''}
            </Text>
            <TextInput
                style={styles.textInput}
                selectionColor="#a093ff"
                {...props}
            />
            {false ? (
                <Text style={styles.message}>Error Text here</Text>
            ) : undefined}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    label: {
        textTransform: 'uppercase',
        color: '#5840FF',
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
    },
    textInput: {
        padding: 10,
        height: 50,
        borderWidth: 1,
        borderColor: 'transparent',
        color: '#424242',
        borderRadius: 12,
        backgroundColor: '#F3F3F3',
    },
    message: {
        color: 'red',
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        marginLeft: 3,
    },
});
