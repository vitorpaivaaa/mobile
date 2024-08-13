import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TabOneScreen() {
  return (
    
    <View style={{flex:1}}>
<ScrollView>
      <View style={{flexDirection:"row", padding:25, backgroundColor:"#CCEBF6" , height:130}}>
      <AntDesign name="arrowleft" size={40} color="black" style={{paddingLeft:10}} />
      <Text style={{paddingTop:5, paddingLeft:20, fontSize:20}}>Notificações</Text>
      </View>
     <View style={style.formContainer}>
      <View >
       <View style={{paddingLeft:40, paddingTop:10, flexDirection:"row" , height:200, flexGrow:1, elevation:100, width:200,}} >
        <Image source={require("@/assets/images/minicat.png")}></Image>
        <View style={{flexDirection:"column"}}>
        <Text style={{fontSize:16, paddingLeft:15, paddingTop:30, color:"#01377D", fontWeight:"bold"}}>Falo de tal</Text>
        <Text style={{paddingTop:5,  width:155, paddingLeft:15, color:"#4F4747", fontWeight:"200"  }}>demonstrou interesse por neneco</Text>
        <Text style={{paddingLeft:15, paddingTop:10, color:"#7FD349", fontSize:16, textAlign:"center"}}>ver mais</Text>
        </View>
        </View>
     
      </View>
      <View >
       <View style={{paddingLeft:40, paddingTop:10, flexDirection:"row" , height:200, flexGrow:1, elevation:100, width:200,}} >
        <Image source={require("@/assets/images/pincher.png")}></Image>
        <View style={{flexDirection:"column"}}>
        <Text style={{fontSize:16, paddingLeft:15, paddingTop:30, color:"#01377D", fontWeight:"bold"}}>Falo de tal</Text>
        <Text style={{paddingTop:5,  width:155, paddingLeft:15, color:"#4F4747", fontWeight:"200"  }}>demonstrou interesse por neneco</Text>
        <Text style={{paddingLeft:15, paddingTop:10, color:"#7FD349", fontSize:16, textAlign:"center"}}>ver mais</Text>
        </View>
        </View>
     
      </View>
      <View >
       <View style={{paddingLeft:40, paddingTop:10, flexDirection:"row" , height:200, flexGrow:1, elevation:100, width:200,}} >
        <Image source={require("@/assets/images/cat.png")}></Image>
        <View style={{flexDirection:"column"}}>
        <Text style={{fontSize:16, paddingLeft:15, paddingTop:30, color:"#01377D", fontWeight:"bold"}}>Falo de tal</Text>
        <Text style={{paddingTop:5,  width:155, paddingLeft:15, color:"#4F4747", fontWeight:"200"  }}>demonstrou interesse por neneco</Text>
        <Text style={{paddingLeft:15, paddingTop:10, color:"#7FD349", fontSize:16, textAlign:"center"}}>ver mais</Text>
        </View>
        </View>
     
      </View>
      <View >
       <View style={{paddingLeft:40, paddingTop:10, flexDirection:"row" , height:200, flexGrow:1, elevation:100, width:200,}} >
        <Image source={require("@/assets/images/golden.png")}></Image>
        <View style={{flexDirection:"column"}}>
        <Text style={{fontSize:16, paddingLeft:15, paddingTop:30, color:"#01377D", fontWeight:"bold"}}>Falo de tal</Text>
        <Text style={{paddingTop:5,  width:155, paddingLeft:15, color:"#4F4747", fontWeight:"200"  }}>demonstrou interesse por neneco</Text>
        <Text style={{paddingLeft:15, paddingTop:10, color:"#7FD349", fontSize:16, textAlign:"center"}}>ver mais</Text>
        </View>
        </View>
     
      </View>
     </View>


     </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
formContainer:{
    backgroundColor: "#fff",
    borderRadius:80,
    paddingTop:50,
    paddingLeft:30,
    paddingRight:30,
    margin:-30,
    width:470,
    flexGrow:1,
    justifyContent:'center',
    elevation:20,
    

}
})

