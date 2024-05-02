import {Text, View, Image, StyleSheet,TouchableHighlight} from 'react-native'

function ProductItem(props) {


    return(
        <TouchableHighlight onPress={() => {}}>
        <View style={styles.productFrame}>
                <Image style={styles.productImage} source={{uri : props.image}}></Image>
            <View style={styles.infoProductControl}>
                <Text style={styles.productName}>{props.name}</Text>
                <Text style= {styles.productPrice}>R${props.price}</Text>
            </View>
        </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    productFrame: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#aaa',
        alignItems: 'center',
        width: 350,
        margin: 10,
        padding: 10,
    },
    productImage: {
        width: 160,
        height: 120,
        resizeMode: 'cover',
    },
    productName: {
        color: '#000',
        fontSize: 30,
    },
    productPrice: {
        color: '#000',
        fontSize: 20,
    },
    infoProductControl: {
        marginLeft: 6,
        alignItems: 'baseline',
        height: 120
    }
})

export default ProductItem