import React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { BaseButton, Center } from '../../../components';
import { AccountRouteProps } from '../routes';

export const VideosView = ({}: AccountRouteProps<'Videos'>) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View
                style={{
                    backgroundColor: '#5840ff',
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    borderBottomLeftRadius: 60,
                    borderBottomRightRadius: 60,
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        fontFamily: 'Montserrat-Bold',
                        color: 'white',
                    }}
                >
                    Madani Videos
                </Text>
                <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                    {['All', 'Bayanaat', 'Naats', 'Statuses'].map((x, idx) => (
                        <BaseButton
                            onPress={() => {}}
                            small
                            text={x}
                            outlined={idx !== 0}
                            type="secondary"
                            style={[
                                { marginHorizontal: 5 },
                                ...(idx === 0 ? [{ marginLeft: 0 }] : []),
                            ]}
                        />
                    ))}
                </View>
                <View style={{ height: 70 }} />
            </View>
            <ScrollView style={{ paddingHorizontal: 30, marginTop: -70 }}>
                {new Array(40).fill(1).map((x) => (
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={{ marginBottom: 20 }}
                    >
                        <Center
                            style={{
                                borderRadius: 20,
                                height: 150,
                                width: 300,
                                backgroundColor: 'skyblue',
                            }}
                        >
                            <Image
                                source={require('./../../../../assets/images/video-play-icon.png')}
                            />
                        </Center>
                        <Text>
                            Lorem ipsum is a placeholder text used to...
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};
