import React from 'react';
import { View, Text } from 'react-native';
import { AuthRouteProps } from '../routes';
import { Ionicons } from '@expo/vector-icons';
import { AuthenticationStyles as styles } from '../styles/authentication.styles';
import { BaseButton, BaseTextInput } from '../../../components';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export const SignInView = ({ navigation }: AuthRouteProps<'Sign In'>) => (
    <View style={styles.container}>
        <View style={styles.topSection}>
            <Ionicons
                name="md-arrow-back"
                size={32}
                color="white"
                onPress={() => {
                    navigation.goBack();
                }}
            />
            <Text style={styles.subtitle}>Welcome Back</Text>
            <Text style={styles.title}>Sign In</Text>
            <Text style={[styles.backTitleText, styles.backTitleText1]}>
                MADANI
            </Text>
            <Text style={[styles.backTitleText, styles.backTitleText2]}>
                VIDEOS
            </Text>
        </View>
        <View style={styles.bottomSection}>
            <ScrollView>
                <BaseTextInput
                    label="Email"
                    rules="required"
                    keyboardType="email-address"
                />
                <BaseTextInput
                    label="Password"
                    rules="required"
                    keyboardType="visible-password"
                    secureTextEntry
                />
                <BaseButton onPress={() => {}} text="CONTINUE" />
                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
            </ScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 30,
                }}
            >
                <Text style={styles.bottomMessage}>Don't have an account?</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.replace('Sign Up');
                    }}
                >
                    <Text style={styles.bottomMessageAccount}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);
