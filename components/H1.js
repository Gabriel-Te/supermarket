import {Text, View, Image, StyleSheet} from 'react-native'

function H1(props) {
    return(

            <Text style={styles.H1style}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    H1style: {
        color: '#aaa',
        fontSize: 30
    }
})

export default H1