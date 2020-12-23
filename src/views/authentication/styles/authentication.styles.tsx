import { StyleSheet } from 'react-native';

export const AuthenticationStyles = StyleSheet.create({
    container: { backgroundColor: '#5840FF', flex: 1 },
    topSection: {
        padding: 30,
    },
    title: {
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        marginBottom: 20,
    },
    subtitle: {
        marginTop: 20,
        marginBottom: -5,
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    backTitleText: {
        position: 'absolute',
        color: '#ffffff',
        opacity: 0.05,
        fontFamily: 'Montserrat-Bold',
        fontSize: 55,
    },
    backTitleText1: {
        top: '15%',
        left: '20%',
    },
    backTitleText2: {
        top: '65%',
        left: '24%',
    },
    bottomSection: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 50,
        paddingBottom: 30,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    forgotPassword: {
        alignSelf: 'center',
        marginTop: 20,
        color: '#5840FF',
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
    },
    bottomMessage: {
        alignSelf: 'center',
        color: '#5840FF',
        opacity: 0.5,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginRight: 5,
    },
    bottomMessageAccount: {
        color: '#5840FF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 12,
    },
});
