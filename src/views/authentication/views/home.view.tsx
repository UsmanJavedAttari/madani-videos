import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Center, BaseButton } from '../../../components';
import { AuthRouteProps } from '../routes';

export const HomeView = ({ navigation }: AuthRouteProps<'Home'>) => {
    return (
        <View style={styles.container}>
            <Center style={styles.topSection}>
                <Text style={styles.title}>MADANI</Text>
                <Text style={styles.title}>VIDEOS</Text>
                <Text style={styles.subtitle}>See more. Do more.</Text>
                <Image
                    style={styles.logo}
                    source={require('../../../../assets/images/logo.png')}
                />
            </Center>
            <Center style={styles.bottomSection}>
                <BaseButton
                    onPress={() => {
                        navigation.push('Sign In');
                    }}
                    type="secondary"
                    outlined
                    text="Sign In"
                    style={{ marginBottom: 20 }}
                />
                <BaseButton
                    onPress={() => {
                        navigation.push('Sign Up');
                    }}
                    type="secondary"
                    text="Sign Up"
                />
            </Center>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { backgroundColor: '#5840FF', display: 'flex', flex: 2 },
    topSection: {
        flex: 2,
    },
    title: {
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        fontSize: 55,
    },
    subtitle: {
        color: '#C4C4C4',
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
    },
    logo: {
        position: 'absolute',
        resizeMode: 'contain',
        aspectRatio: 1,
    },
    bottomSection: {
        flex: 1,
    },
});
