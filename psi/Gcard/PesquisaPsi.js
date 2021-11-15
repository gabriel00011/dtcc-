import React, {PureComponent} from "react"
import { SafeAreaView, View, TouchableOpacity, Image, FlatList } from "react-native"
import { Text } from "react-native-elements"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import IconAntDesign from "react-native-vector-icons/AntDesign"

// importação de arquivo de estilização
import { style } from "../css/CssCard/CssPesquisa"

export default ({ navigation }, PureComponent) => {

    // _renderItem = ({item, index}) => {
    //     return
    // }
    return (

        // <FlatList
        //     style={Container}
        //     data={items}
        //     keyExtractor={{item, index} => index.toString()}
        //     renderItem={_renderItem}
        // />

        <SafeAreaView style={style["Main"]}>
        <View style={style["Container"]}>
            <TouchableOpacity style={style["Card"]}>
                <Image style={style["CardImage"]} source={{uri: ""}}/>
                <Text style={style["CardText"]}>Card</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
}