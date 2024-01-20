import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    // Text,
    useColorScheme,
    View,
    Button,
} from 'react-native';

import { Card, Text, Divider, Badge } from '@rneui/themed';

import CSS from '../assets/css';


const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <Card>

                <View style={{ flexDirection: 'row', marginBottom: 5 }}>

                    <Text style={{ width: '50%' }}>
                        Payment Status:
                    </Text>

                    <Text style={{ width: '50%' }}>
                        <Badge value="Paid" status="success" />
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>

                    <Text style={{ width: '50%' }}>
                        Payment Due:
                    </Text>

                    <Text style={{ width: '50%', fontWeight: 'bold' }}>
                        01-02-2024
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>

                    <Text style={{ width: '50%' }}>
                        Pay Amount:
                    </Text>

                    <Text style={{ width: '50%', fontWeight: 'bold' }}>
                        2000 Rs
                    </Text>
                </View>

                <Button
                    title="Pay Now"
                    onPress={() => navigation.navigate('List')}
                />

            </Card>



            <Card>
                <Text h4 style={{ textAlign: 'center' }}>This Month Report</Text>
                {/* <hr/> */}
                <Divider style={{ marginBottom: 5 }} />

                <View style={{ flexDirection: 'row', marginBottom: 5 }}>

                    <Text style={{ width: '50%' }}>
                        Rupon Sarkar:
                    </Text>

                    <Text style={{ width: '50%' }}>
                        <Badge value="Paid" status="success" />
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>

                    <Text style={{ width: '50%' }}>
                        Rupon Sarkar:
                    </Text>

                    <Text style={{ width: '50%' }}>
                        <Badge value="Pending" status="error" />
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>

                    <Text style={{ width: '50%' }}>
                        Rupon Sarkar:
                    </Text>

                    <Text style={{ width: '50%' }}>
                        <Badge value="Pending" status="error" />
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>

                    <Text style={{ width: '50%' }}>
                        Rupon Sarkar:
                    </Text>

                    <Text style={{ width: '50%' }}>
                        <Badge value="Pending" status="error" />
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>

                    <Text style={{ width: '50%' }}>
                        Rupon Sarkar:
                    </Text>

                    <Text style={{ width: '50%' }}>
                        <Badge value="Pending" status="error" />
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>

                    <Text style={{ width: '50%' }}>
                        Rupon Sarkar:
                    </Text>

                    <Text style={{ width: '50%' }}>
                        <Badge value="Pending" status="error" />
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>

                    <Text style={{ width: '50%' }}>
                        Rupon Sarkar:
                    </Text>

                    <Text style={{ width: '50%' }}>
                        <Badge value="Pending" status="error" />
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>

                    <Text style={{ width: '50%' }}>
                        Rupon Sarkar:
                    </Text>

                    <Text style={{ width: '50%' }}>
                        <Badge value="Pending" status="error" />
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 5 }}>

                    <Text style={{ width: '50%' }}>
                        Payment Due:
                    </Text>

                    <Text style={{ width: '50%' }}>
                        01-02-2024
                    </Text>
                </View>

                <Button
                    title="View all Details"
                    onPress={() => navigation.navigate('List')}
                />

            </Card>

            <Card>

                <View style={{ flexWrap: 'wrap', flexDirection: 'row', }}>


                    <View style={[{ width: '50%', padding: 3, }, CSS.border ]}>
                        <Text style={[CSS.textCenter, CSS.fontBold]}>This Month</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'gray', padding: 5 }}>
                            <View style={CSS.round}>
                                <Text style={{ fontWeight: 'bold' }}>752000 /-</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[{ width: '50%', padding: 3, }, CSS.border ]}>
                        <Text style={[CSS.textCenter, CSS.fontBold]}>Last Month</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'gray', padding: 5 }}>
                            <View style={CSS.round}>
                                <Text style={{ fontWeight: 'bold' }}>752000 /-</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[{ width: '50%', padding: 3, }, CSS.border ]}>
                        <Text style={[CSS.textCenter, CSS.fontBold]}>Total</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'gray', padding: 5 }}>
                            <View style={CSS.round}>
                                <Text style={{ fontWeight: 'bold' }}>752000 /-</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[{ width: '50%', padding: 3, }, CSS.border ]}>
                        <Text style={[CSS.textCenter, CSS.fontBold]}>Target</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'gray', padding: 5 }}>
                            <View style={CSS.round}>
                                <Text style={{ fontWeight: 'bold' }}>752000 /-</Text>
                            </View>
                        </View>
                    </View>

                   


                </View>
            </Card>


        </ScrollView>
    )
}

export default Home;