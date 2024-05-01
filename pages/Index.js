import {Text, View, Image, StyleSheet, FlatList} from 'react-native'
import H1 from '../components/H1'
import ProductItem from '../components/ProductItem'

function Index() {

    const dataProducts = [
        {
            id: 1,
            name: 'mango',
            image:'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-mango.jpg'
        },
        {
            id: 2,
            name: 'grapes',
            image: 'https://www.fourwindsgrowers.com/cdn/shop/products/blackmonukka_1024x1024.jpg?v=1538780984'
        },
        {
            id: 3,
            name: 'banana',
            image: 'https://cdn.shoppub.io/cdn-cgi/image/w=600,h=600,q=80,f=auto/cenourao/media/uploads/produtos/foto/67dc8df0dbe6file.png'
        }

    ]

    const renderProduct = ({item}) => (
        <ProductItem name={item.name} image={item.image}/>
    )

    return(
        <View style={styles.containerIndex}>
            <H1>Produtos</H1>
            
            <View style={styles.list}>
            <FlatList
            data={dataProducts}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString() }
            />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerIndex: {
        flex: 8,
        
    },
    list: {
        backgroundColor: '#000',
        justifyContent: 'center',
    }
})


export default Index