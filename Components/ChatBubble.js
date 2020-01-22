import React, { ReactPropTypes} from 'react';
import { View,Text,StyleSheet} from 'react-native'

const Chatbubble = (props) => {
    <View>
        <Text>

        </Text>
    </View>
}

Chatbubble.props = {
    message: RectPropTypes.string.isrequired,
    isOwnMessage: RectPropTypes.bool.isrequired
}

const styles = StyleSheet.create({

    bubble: {
        width: 250,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    ownBubble:{
        backgroundColor: 'grey',
        alignSelf: 'flex-end'
    },
    messageText:{
        color: "grey"
    },
    ownMessageText{
        color: "white"
    }
});