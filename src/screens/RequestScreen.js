import react from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native'
import { colors,parameters } from  '../global/styles'
export default function Requestscreen(){

    return (
        <View style={styles.container}>
<Text>RequestScreen</Text>    
    </View>
      )

}



const styles = StyleSheet.create({
container:{
    paddingTop:parameters.statusBarHeight
}


});
