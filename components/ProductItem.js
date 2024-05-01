import {Text, View, Image, StyleSheet,} from 'react-native'

function ProductItem(props) {


    return(
        <View style={styles.productFrame}>
            <Image style={styles.productImage} source={{uri : props.image}}></Image>
            <Text style={styles.productName}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    productFrame: {
        display: 'flex',
        backgroundColor: '#aaa',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        margin: 10,
        padding: 10
    },
    productImage: {
        width: 160,
        height: 120,
        resizeMode: 'cover'
    },
    productName: {
        color: '#777',
        fontSize: 30
    }
})

export default ProductItem