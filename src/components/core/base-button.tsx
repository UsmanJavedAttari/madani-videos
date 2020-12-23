import React from 'react';
import {
    Dimensions,
    StyleProp,
    StyleSheet,
    Text,
    View,
    ViewStyle,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface BaseButtonProps {
    style?: StyleProp<ViewStyle>;
    onPress(): void;
    text?: string;
    type?: 'primary' | 'secondary';
    outlined?: boolean;
    small?: boolean;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
    children,
    onPress,
    text,
    type,
    outlined,
    style,
    small,
}) => {
    const buttonStyles: Array<StyleProp<object>> = [styles.button, style];
    const textStyles: Array<StyleProp<object>> = [styles.text];
    if (!type) {
        buttonStyles.push(styles.primaryButton);
        textStyles.push(styles.whiteText);
    } else if (type === 'primary') {
        if (outlined === true) {
            buttonStyles.push(styles.outlinedPrimaryButton);
            textStyles.push(styles.primaryText);
        } else {
            buttonStyles.push(styles.primaryButton);
            textStyles.push(styles.whiteText);
        }
    } else if (type === 'secondary') {
        if (outlined === true) {
            buttonStyles.push(styles.outlinedSecondaryButton);
            textStyles.push(styles.whiteText);
        } else {
            buttonStyles.push(styles.secondaryButton);
            textStyles.push(styles.primaryText);
        }
    }

    if (small) {
        buttonStyles.push({ height: 30, padding: 10 });
        textStyles.push({ fontSize: 10 });
    } else {
        buttonStyles.push({ width: screen.width - 58, height: 50 });
    }

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            {!!children ? (
                children
            ) : (
                <View style={styles.textView}>
                    <Text style={textStyles}>{text}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
    },
    primaryButton: {
        borderColor: 'transparent',
        borderWidth: 1,
        backgroundColor: '#5840FF',
    },
    outlinedPrimaryButton: {
        borderColor: '#5840FF',
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    secondaryButton: {
        borderColor: 'transparent',
        borderWidth: 1,
        backgroundColor: 'white',
    },
    outlinedSecondaryButton: {
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    textView: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },
    primaryText: {
        color: '#5840FF',
    },
    whiteText: {
        color: '#fff',
    },
});
