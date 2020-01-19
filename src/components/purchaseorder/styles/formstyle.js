import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const form = StyleSheet.create({
	topbar:{
        height:110,
        backgroundColor:"#507df0",
        flexDirection:"row"
    },
    backcontainer:{
        width:70,
        height:110,
        paddingVertical:45,
        paddingHorizontal:25,
        alignContent:"center",
        alignSelf:"flex-start"
    },
    backimage:{
        width:18,
        height:18,
        resizeMode:"contain"
    },
    heading:{
        flex:1,
        color:"#fff",
        fontSize:18,
        fontWeight:"bold",
        alignSelf:"center",
        position:"absolute",
        width:"100%",
        textAlign:"center",
        zIndex:-1
	},
	nextbutton:{
		position:"absolute",
		flex:1,
		right:18,
		paddingHorizontal:10,
		alignSelf:"center",
		paddingVertical:10,
		textAlign:"center"
	},
	mainform: {
		flex: 1,
		width: Dimensions.get('window').width,
		alignSelf: 'center'
	},
	partnumber:{
		color:"#507DF0",
		fontSize:15,
		flex:1,
		height:20,
		marginRight:32,
		marginTop:10,
		marginLeft:"auto",
		fontWeight:"600"
	},
    editbutton:{
        backgroundColor:"#1CA49F",
        height:60,
        justifyContent:"center",
        alignItems:"center"
    },
    editbuttontext:{
        color:"#fff",
        fontSize:18
	},
	tabswitch:{
		backgroundColor:"#F6F7F9",
		height:65,
		width:Dimensions.get('window').width*0.85,
		alignSelf:"center",
		marginTop:10,
		flexDirection:"row"
	},
	tabtitleview:{
		flex:1,
		justifyContent:"center",
		alignItems:"center"
	},
	tabtitle:{
		fontSize:14
	},
	active:{
		borderBottomWidth:3,
		borderBottomColor:"#507DF0"
	},
	notactive:{
		borderBottomWidth:0
	},
	checkmaincontainer:{
		flex:1,
		width:Dimensions.get('window').width*0.85,
		alignSelf:"center",
		marginBottom:20
	},
	checkheading:{
		color:"#131d4a",
		fontSize:18,
		marginTop:20,
		fontWeight:"700"
	},
	checkboxcontainer:{
		flex:1,
		flexDirection:"row",
		height:40,
		paddingTop:5
	},
	checktext:{
		flex:1,
		color:"#131d4a",
		fontSize:12,
		paddingTop:10,
		height:35,
		marginLeft:10
	},
	rowback:{
		alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
		paddingLeft: 15,
		width:Dimensions.get('window').width*0.85,
		alignSelf:"center"
	},
	addissue:{
		position:'absolute',
		right:0
	}
});

export default form;
