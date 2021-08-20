import React from "react"

import { SafeAreaView, View, TouchableHighlight, ScrollView } from "react-native"
import { Text } from "react-native-elements"
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5"
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import IconAntDesign from "react-native-vector-icons/AntDesign"
import IconFeather from "react-native-vector-icons/Feather"

// importação de arquivo para estilização
import { style } from "../css/CssMapa/CssMapa"

export default ({ navigation }) => {
    return (
        <SafeAreaView style={style["Main"]}>

            <View style={style["SessionCenter"]}>

                {/* View de botões icons */}
                <View style={style["SessionIcons"]}>

                    <View style={style["SessionButtonsSearch"]}>
                        <TouchableHighlight>
                            <View style={{ borderBottomColor: "#7B68EE", borderBottomWidth: 3 }}>
                                <IconFontAwesome5 name="map-marked-alt" size={30} color="#7B68EE" />
                                <Text style={{ color: "#7B68EE", fontWeight: "bold" }}>Mapa</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight>
                            <View>
                                <IconMaterialCommunityIcons name="account-box-outline" size={30} />
                                <Text>Card</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={style["SessionButtonsExit"]}>
                        <TouchableHighlight>
                            <View>
                                <IconAntDesign name="search1" size={30} />
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight>
                            <View>
                                <IconFeather name="log-out" size={30} />
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>

                <View></View>

                <View></View>

                <View></View>

            </View>
        </SafeAreaView>
    )
}