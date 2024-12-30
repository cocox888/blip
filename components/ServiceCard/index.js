import { Image, View, Text } from "react-native";
import styles from "./customStyles";
import { TouchableOpacity } from "react-native";
import Animated, { BounceIn, BounceOut } from "react-native-reanimated";

export default function ServiceCard({ name, imgUrl, isFavorite = false, backColor = "white", delay=0}) {
    return (
        <TouchableOpacity>
            <Animated.View style={[styles.container, { backgroundColor: backColor }]}
            entering={BounceIn.duration(900).delay(delay)} exiting={BounceOut}>
                <Image source={imgUrl} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{name}</Text>
                </View>
                {
                    isFavorite ? (
                        <View  style={styles.favorite}>
                            <Image source={require('../../assets/images/favorite.png')}
                               ></Image>
                        </View>
                    ) : (<View></View>)
                }
            </Animated.View>
        </TouchableOpacity>
    )
}
