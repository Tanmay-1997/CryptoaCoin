import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image,
    FlatList,
    LogBox,
    SafeAreaView
} from 'react-native';

import { PriceAlert } from "../components";
import { TransactionHistory } from "../components";

import { dummyData, COLORS, SIZES, icons, FONTS, images } from '../constants';

const Home = ({ navigation }) => {

    const [trending, setTrending] = React.useState(dummyData.trendingCurrencies)
    const [transactionHistory, setTransactionHistory] = React.useState
        (dummyData.transactionHistory)

    React.useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested',
            'Encountered two children with the same key'])

    }, [])

    function renderHeader() {

        const renderItem = ({ item, index }) => (
            <TouchableOpacity
                style={{
                    width: 175,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    marginLeft: index == 0 ? SIZES.padding : 0,
                    marginRight: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: COLORS.white
                }}
                onPress={() => navigation.navigate("CryptoDetail", { currency: item })}
            >
                {/*currency*/}
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image
                            source={item.image}
                            resizeMode="cover"
                            style={{
                                marginTop: 5,
                                width: 25,
                                height: 25
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: SIZES.base }}>
                        <Text style={{ ...FONTS.h2 }}>
                            {item.currency}
                        </Text>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                            {item.code}
                        </Text>
                    </View>

                </View>
                {/*value */}
                <View style={{ marginTop: SIZES.radius }}>
                    <Text style={{ ...FONTS.h2 }}>
                        ${item.amount}
                    </Text>
                    <Text style={{ fontWeight: 'bold', color: item.type == "I" ? COLORS.green : COLORS.red, ...FONTS.h3 }}>
                        {item.changes}
                    </Text>
                </View>

            </TouchableOpacity>
        )
        return (
            <View
                style={{
                    width: "100%",
                    height: 290,
                    ...styles.shadow
                }}
            >
                <ImageBackground
                    source={images.banner}
                    resizeMode='cover'
                    style={{
                        flex: 1,
                        alignItems: 'center'
                    }}
                >
                    {/* header section*/}
                    <View style={{
                        marginTop: SIZES.padding * 2,
                        width: "100%",
                        alignItems: 'flex-end',
                        paddingHorizontal: SIZES.padding
                    }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 35,
                                height: 35,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() =>console.log('bell')}
                        >
                            <Image
                                source={icons.notification_white}
                                resizeMode="contain"
                                style={{ flex: 1 }}
                            />
                        </TouchableOpacity>

                    </View>
                    {/* balance */}
                    <View
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Text style={{
                            color: COLORS.white, ...FONTS.
                                h3
                        }}>Your Portfolio Balance</Text>
                        <Text style={{
                            marginTop: SIZES.base, color:
                                COLORS.white, ...FONTS.h1
                        }}>${dummyData.
                            portfolio.balance}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body5, fontWeight: 'bold' }}>{dummyData.portfolio.changes} Last 24 hours</Text>

                    </View>
                    {/* trending */}
                    <View
                        style={{
                            position: 'absolute',
                            bottom: '-30%'
                        }}
                    >
                        <Text style={{
                            marginLeft: SIZES.padding,
                            color: COLORS.white, ...FONTS.h2
                        }}>Trending</Text>
                        <FlatList
                            contentContainerStyle={{ marginTop: SIZES.base }}
                            data={trending}
                            renderItem={renderItem}
                            keyExtractor={item => '${item.id}'}
                            horizontal
                            showsHorizontalScrollIndicator={false}


                        />
                    </View>

                </ImageBackground>

            </View>
        )

    }

    function renderAlert() {
        return (
            <PriceAlert />
        )
    }

    function renderNotice() {
        return (
            <View
                style={{
                    marginTop: 15,
                    marginHorizontal: 18,
                    padding: 20,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.secondary,
                    ...styles.shadow
                }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h3, fontWeight: "bold" }}>
                    Investing Safety
                </Text>
                <Text style={{
                    marginTop: SIZES.base, color: COLORS.
                        white, ...FONTS.body4, lineHeight: 15
                }}>It's very
                    difficult to time an investment, when the
                    market is volatile. Learn How to use dollar cost
                    averaging to your advantag.</Text>

                <TouchableOpacity style={{
                    marginTop: 5
                }}
                    onPress={() => console.log("learn more")}
                >
                    <Text style={{ textDecorationLine: "underline", color: COLORS.green, ...FONTS.h3 }}>
                        Learn More</Text>
                </TouchableOpacity>

            </View>
        )
    }

    function renderTransactionHistory() {
        return (
            <TransactionHistory
                customContainerStyle={{ ...styles.shadow }}
                history={transactionHistory}
            />
        )
    }
    return (

        <ScrollView>
            <View style={{ flex: 1, paddingBottom: 130 }}>
                {renderHeader()}
                {renderAlert()}
                {renderNotice()}
                {renderTransactionHistory()}
            </View>
        </ScrollView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Home;