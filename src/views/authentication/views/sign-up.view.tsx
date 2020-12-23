import React from 'react';
import { View, Text } from 'react-native';
import { AuthRouteProps } from '../routes';
import { Ionicons } from '@expo/vector-icons';
import { AuthenticationStyles as styles } from '../styles/authentication.styles';
import { BaseButton, BaseTextInput } from '../../../components';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export const SignUpView = ({ navigation }: AuthRouteProps<'Sign Up'>) => (
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
            <Text style={styles.subtitle}>Hello There</Text>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={[styles.backTitleText, styles.backTitleText1]}>
                MADANI
            </Text>
            <Text style={[styles.backTitleText, styles.backTitleText2]}>
                VIDEOS
            </Text>
        </View>
        <View style={styles.bottomSection}>
            <ScrollView>
                <BaseTextInput label="Name" rules="required" />
                <BaseTextInput label="Email" rules="required" />
                <BaseTextInput label="Password" rules="required" />
                <BaseButton onPress={() => {}} text="CONTINUE" />
            </ScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 30,
                }}
            >
                <Text style={styles.bottomMessage}>
                    Already have an account?
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.replace('Sign In');
                    }}
                >
                    <Text style={styles.bottomMessageAccount}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);
