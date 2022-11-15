import { useState } from "react";
import { View, SafeAreaView, Text, FlatList, SafeAreaView } from "react-native";

import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />
        </SafeAreaView>
    )
}

export default Home;