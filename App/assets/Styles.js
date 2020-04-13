const React = require("react-native");
const { Dimensions, Platform , StyleSheet} = React;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const DEVICE_WIDTH = Dimensions.get("window").width;

export default Styles=StyleSheet.create({
  text1:{
    fontSize:12,fontFamily:'IRANYekanMobileRegular'
  },
  text2:{
    fontSize:10,
    fontFamily:'IRANYekanMobileRegular'
  },
  headerImage:{
    position:'absolute',top:0,resizeMode:'contain',width:DEVICE_WIDTH,height:DEVICE_WIDTH,zIndex:1
  },
  scrollView:{
    top:.27*DEVICE_HEIGHT,zIndex:10,backgroundColor:'#EBEBEB'
  },
  courseTitle1:{
    fontFamily:'IRANYekanMobileExtraBold',fontSize:26,marginTop:10,textAlign:'center'
  },
  courseTitle2:{
    fontFamily:'IRANYekanMobileExtraBold',fontSize:26,textAlign:'center'
  },
  firstSpliter:{
    borderColor:'#F78337',borderBottomWidth:3,width:DEVICE_WIDTH/4,marginTop:15
  },
  flatListView:{
    width:.9*DEVICE_WIDTH
  },
  cardContainerStyle:{
    borderRadius:8,padding:5
  },
  flexRow:{
    flexDirection:'row'
  },
  cardImage:{
    right:0,alignSelf:'center',height:70,width:70
  },
  cardView:{
    flexDirection:'column',right:-10,width:DEVICE_WIDTH/2
  }
});
