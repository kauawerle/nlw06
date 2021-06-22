import React from "react";
import {
    View,
    Text,
    Image,
    StatusBar
} from 'react-native';


import { ButtonIcon } from '../../components/button-icon/index';
import IllustrationImg from '../../assets/illustration.png';

import { styles } from './style';

export function SignIn() {



    return (
        <View style={styles.container}>
            
            <Image
                source={IllustrationImg}
                style={styles.img}
                resizeMode="stretch"
            />

            <View style={styles.content}>

                <Text style={styles.title}>
                    Conecte-se {`\n`}
                    e organize suas {`\n`}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{`\n`}
                    favoritos com seus amigos{`\n`}
                </Text>

                <ButtonIcon
                    title="Entrar com Discord"
                    activeOpacity={0.8}
                />
            </View>
        </View>
    )
}
