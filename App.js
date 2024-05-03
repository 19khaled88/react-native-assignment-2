import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground, Image, Pressable, TouchableOpacity } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { useState } from 'react';


const RowView=({label,value})=>{
  return(
    <View 
     style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:6}}
    >
      <View>
        <Text style={{fontFamily:'Inter-Regular',color:'gray',fontSize:10,lineHeight:28,letterSpacing:2,textTransform:'uppercase'}}>
          {label}
        </Text>
      </View>
      <View>
        <Text style={{fontFamily:'Inter-Bold',color:'white',fontSize:20,lineHeight:24,letterSpacing:2,textAlign:'right'}}>
          {value}
        </Text>
      </View>
    </View>
  )
}

export default function App() {

  let [fontLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  const [showMore, setShowMore] = useState(false)

  if (!fontLoaded) {
    return (
      <ActivityIndicator />
    )
  }

  return (
    <ImageBackground
      source={require("./assets/jeremy-bishop-dvACrXUExLs-unsplash (1).png")}
      style={styles.imageBg}
    >
      {/*PARENT VIEW*/}
      <View style={styles.container}>
        {/*Upper portion of the screen*/}
        {
          !showMore && (
            <View style={styles.topView}>
              <View style={{ flex: 1 }}>
                <Text style={styles.topText}>
                  "The science of operations, as derived from mathematics more especially, is a
                  science of itself, and has its own abstract truth and value.
                  "
                </Text>
                <Text style={styles.bottomText}>
                  Ada Lovelace
                </Text>
              </View>

              <Image source={require('./assets/Combined Shape (1).png')} />
            </View>
          )
        }
        

        {/*Lower portion of the screen*/}
        <View style={styles.bottomView}>
        
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('./assets/Path.png')} style={{ width: 22.34, height: 24, top: 1 }} />
              <Text style={{ left: 8, textTransform: 'uppercase', color: 'white', fontFamily: 'Inter-Regular', fontSize: 15, lineHeight: 25, letterSpacing: 3 }}>
                good evening
              </Text>
            </View>
            <View style={{ flexDirection: 'row', top: 16 }}>
              <Text>
                <Text style={{ fontFamily: 'Inter-Bold', fontSize: 100, lineHeight: 100, color: 'white' }}>23:14</Text>
                <Text style={{ color: 'white', fontFamily: 'Inter-Regular', fontWeight: 300, height: 28 }}>BST</Text>
              </Text>
            </View>
            <View style={{ marginTop: 8 }}>
              <Text style={{ textTransform: 'uppercase', color: 'white', letterSpacing: 3, lineHeight: 28, fontFamily: 'Inter-Bold' }}>in london, uk</Text>
            </View>
          
            {/*Button*/}
            <TouchableOpacity
              onPress={() => {
                setShowMore(!showMore)
               }}
              style={{marginTop:50, flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', width: 115, height: 39, borderRadius: 50 }}
            >
                <Text style={{ fontFamily: 'Inter-Bold', fontSize: 12, lineHeight: 14, letterSpacing: 3.75, textTransform: 'uppercase', width: 57, left: 17,color:'gray' }}>
                  {showMore ? "LESS" : "MORE"}
                </Text>
              <Image 
              source={
                showMore 
                ? require('./assets/up-arrow.png')
                : require('./assets/down-arrow.png')

              } 
              style={{ left: 20, width: 32, height: 32 }} 
              />
            </TouchableOpacity>
        </View>

        
      </View>

      {/*conditional view*/}
      {
        showMore && (
          <View style={{backgroundColor:'#000000',opacity:0.8,paddingVertical:17,paddingHorizontal:26}}>
            <RowView label={'current timezone'} value={'Europe/London'}/>
              <RowView label={'day of the year'} value={'295'}/>
              <RowView label={'day of the week'} value={'5'}/>
            <RowView label={'week number'} value={'42'}/>
          </View>
        )
      }
      
        

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    justifyContent: 'space-between',
    
  },
  topView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 26,
  },
  textView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  topText: {
    fontFamily: 'Inter-Regular',
    color: 'white',
    fontSize: 12,
    lineHeight: 22
  },
  bottomText: {
    fontFamily: 'Inter-Bold',
    color: 'white',
    fontSize: 12,
    lineHeight: 22,
    marginTop: 8
  },
  topImage: {
    width: 16.67,
    height: 16.67
  },

  bottomView:{
   
    marginHorizontal: 26,
    marginBottom:36,
  },
  imageBg: {
    flex: 1
  }
});
