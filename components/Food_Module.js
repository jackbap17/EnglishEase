import React from "react";
import { Text, StyleSheet,View, Button, TouchableOpacity, Image } from "react-native";
const styles = StyleSheet.create({
    Title:
    {
        fontSize: 45,
        color: 'orange'
    },
    textButtons:
    {
        fontSize: 20,
        color: 'blue'
    },
    Title2:
    {
        fontSize: 35,
        color: 'orange'
    },
    
    pic:
    {
        height:50,
        width:100
    }
  })
const Food_Module = () =>{
const space ="\n\n\n\n\n\n"
const smallSpace="\n"
const solved ="?"

function solvedName (foodName, guess)
{
    if (guess == foodName)
    solved= guess;
}

return(






<View>
{/*******************************buttons*******************************************/}
    <Text style={styles.Title}>Food_Module!</Text>

    <TouchableOpacity>
        <Text style ={styles.textButtons}> Cookies </Text>
    </TouchableOpacity>

    <TouchableOpacity>
        <Text style ={styles.textButtons}> Pizza </Text>
    </TouchableOpacity>
    
    <TouchableOpacity>
        <Text style ={styles.textButtons}> Broccoli </Text>
    </TouchableOpacity>

{/* *************************Image buttons*************************** */}
    <View>
        
        <Text style={styles.Title2}>Match them!</Text>
        
        <TouchableOpacity >
        <Image 
        style ={styles.pic}
        source={require('../../assets/cookies.jpeg')}/>
         <Text style={styles.textButtons}>{solved}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Image 
        style ={styles.pic}
        source={require('../../assets/adaptive-icon.png')}/>
         <Text style={styles.textButtons}>{solved}</Text>
        </TouchableOpacity>


        <TouchableOpacity>
        <Image 
        style ={styles.pic}
        source={require('../../assets/favicon.png')}/>
        <Text style={styles.textButtons}>{solved}</Text>
        </TouchableOpacity>
        
    </View>

</View>

);
  
}














export default Food_Module;