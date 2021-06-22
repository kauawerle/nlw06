import React from "react";
import { View, Text } from "react-native";


import {Avatar} from "../Avatar/index";
import {styles} from './styles';


export function Profile() {
    return (
        <View style={styles.container}>

            <Avatar urlImage="https://github.com/kauawerle.png"></Avatar>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.usernames}>
                        Kauã
                    </Text>
                </View>

                <Text style={styles.message}>Hoje é dia de vitória</Text>
            </View>
        </View>
    )
}
