import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'


const viewstyle = StyleSheet.create({
    topbar:{
        height:200,
        backgroundColor:"#507df0",
        flexDirection:"row"
    },
    backcontainer:{
        width:70,
        height:200,
        paddingVertical:45,
        paddingHorizontal:25,
        alignContent:"center"
    },
    backimage:{
        width:20,
        height:20,
        resizeMode:"contain"
    },
    heading:{
        flex:1,
        color:"#fff",
        fontSize:20,
        marginTop:45
    },
    card:{
        borderRadius:10,
        marginTop:30,
        width:Dimensions.get('window').width*0.8,
        alignSelf:"center",
        backgroundColor:"#fff",
        shadowColor:"#000",
        shadowOffset:{width:0,height:3},
        shadowOpacity:0.8,
        elevation:3,
        marginBottom:100
    },
    cardheadingcontainer:{
        flex:1,
        height:70,
        justifyContent:"center",
        alignItems:"center",
        borderBottomColor:"#507df0",
        borderBottomWidth:2
    },
    cardheading:{
        color:"#507df0",
        fontSize:20,
        fontWeight:"700"
    },
    cardData:{
        flex:1,
        height:80,
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10
    },
    cardData1:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    cardDataheading:{
        color:"#131d4a",
        fontWeight:"700",
        fontSize:15,
        width:111,
    },
    cardDatavalue:{
        color:"#1CA49F",
        fontSize:15,
        width:111,
        marginTop:5
    },
    cardData2:{
        flex:1.4,
        flexDirection:"row"
    }
})
export default viewstyle