import {Text, View, Image, StyleSheet} from 'react-native'
import H1 from '../components/H1'

function Index() {

    const profileImg = require('../img/imgperfil.png')

    return(
        <View style={styles.containerIndex}>
            <H1>Produtos</H1>
        </View>
    )
}

const styles = StyleSheet.create({
    containerIndex: {
        flex: 8
    }
})


export default Index