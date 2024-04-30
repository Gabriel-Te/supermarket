import {Text, View, Image, StyleSheet} from 'react-native'

function Header() {

    const profileImg = require('../img/imgperfil.png')

    return(
        <View style={styles.containerHeader}>
            <Text style={styles.h1Header}>Mercado Legal</Text>
            <Image style={styles.imgHeader} source={profileImg} resizeMode='contain'></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#999',
        height: 10
    },
    h1Header: {
        flexDirection: 'row',
        fontSize: 24,
        justifyContent: 'flex-start',
        marginLeft: 10,
        height: 100,
        marginTop: 45,
    },
    imgHeader: {
        flexDirection: 'row',
        width: 45,
        height: 45,
        justifyContent: 'flex-end',
        marginRight: 10,
        marginTop: 45,
    }
})


export default Header