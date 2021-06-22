import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image } from "react-native";

import { styles } from './styles';
import { theme } from "../../global/styles/theme";

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    const { secondary50, secondary70 } = theme.color;

    return (
        <View>
            <LinearGradient
                style={styles.container}
                colors={[secondary50, secondary70]}
            >
                <Image
                    source={{ uri: urlImage }}
                    style={styles.avatar}
                />
            </LinearGradient>
        </View>
    )
}
