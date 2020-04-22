import React, { Component } from "react";
import { ActivityIndicator, View , Text, Image, Dimensions, StyleSheet, TouchableOpacity, FlatList, ScrollView, findNodeHandle} from "react-native";
import { Container, Content } from "native-base";
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import axios from 'axios';
import { connect } from 'react-redux';
import Orientation from 'react-native-orientation-locker';
import { BlurView } from "@react-native-community/blur";
import PickerBox from 'react-native-picker-box';
import update from 'react-addons-update';

//local imports
import GlobalScreen from './../../Components/GlobalScreen'
import ClassinoActions from '../../Redux/ClassinoRedux'
import BuyButton from './';

//assets
const orangeRectangular = require('../../../assets/LoginBackground.png');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const screenUrl='products/list';
const filterUrl='products/listFilters';
const postValues=[
  "course_id","lesson_id","grade_id"
]


class Courses extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedValue1: '',
      selectedValue2: '',
      selectedValue3: '',
      selectedValues: ['', '', ''],
      buttonLoad:[],
    }
    this.myRef=[null,null,null];
    this.getCourses();
    this.getData();
  }
  componentDidMount(){
    Orientation.lockToPortrait();
  }
  getCourses(){
    const filterList={"course_id":this.state.selectedValue3,
    "lesson_id":this.state.selectedValue1,
    "grade_id":this.state.selectedValue2};
    this.props.getCourses(screenUrl,filterList);
    {/* axios.post('https://clone.classino.com/api/products/list',
          {"course_id":this.state.selectedValue3,
          "lesson_id":this.state.selectedValue1,
          "grade_id":this.state.selectedValue2},
        {headers:
          {Accept:'application/json',
          Authorization:this.props.token,
          Release:'3',
          OS:'android'}}
      ).then(result=>{
        if(result.data.middleware!=null){
          this.props.setMiddleware(result.data,this.props.navigation);
          this.props.navigation.navigate(result.data.page);
        }
        else{
          console.log(result.data);
          loadable=[];
          for(let i=0;i<result.data.data.products_result.length;i++){
            tmp=''+result.data.data.products_result[i].price;
            for(let i=tmp.length-3;i>0;i=i-3){
              tmp1=tmp.substr(0,i);
              tmp2=tmp.substr(i,tmp.length);
              tmp3=tmp1+','+tmp2;
              tmp=tmp3;
            }
            result.data.data.products_result[i].price=tmp;
            loadable[i]=false;
          }
          this.setState({courseResponse:result.data});
          this.setState({loading2:false,buttonLoad:loadable,loading:(this.state.loading1 || this.state.loading2)});
        }
      })*/}
  }

  setFilter(value,searchBar,filterID){
    selected=0;
    for(let i=0;i<searchBar.length;i++){
      if(searchBar[i].label==value){
        selected=searchBar[i].value
      }
    }
    if(filterID==1){
      this.state.selectedValue1=selected;
    }
    if(filterID==2){
      this.state.selectedValue2=selected;
    }
    if(filterID==3){
      this.state.selectedValue3=selected;
    }
    this.getCourses();
  }
  getData(){
    this.props.getFiletrs(filterUrl);
  }

  addToCart(id,added,purchased,key){
    if(!added && !purchased){
      tmp=this.state.buttonLoad;
      tmp[key]=true;
      this.setState({buttonLoad:tmp});
      const apiUri="cart/"+id+"/addToCart";
      this.props.getAddToCard(apiUri);
    }

  }
  goToCourse(id,purchased,added){
    this.props.navigation.navigate("SingleCourse",{courseNo:id,purchased:purchased,added:added});
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }

  pickerBox(index){
    return(
      <React.Fragment>
        <PickerBox
          ref={ref => this.myref1 = ref}
          data={ this.props.filterData.lessons }
          onValueChange={(value) => (this.setState({selectedTextValue1:value}),this.setFilter(value,this.props.filterData.lessons,1))}
          selectedValue={ this.state.selectedValues[0] }
        />
        <PickerBox
          ref={ref => this.myref2 = ref}
          data={ this.props.filterData.grades }
          onValueChange={value => (this.setState({selectedTextValue2:value}),this.setFilter(value,this.props.filterData.grades,2))}
          selectedValue={ this.state.selectedValues[1] }
        />
        <PickerBox
          ref={ref => this.myref3 = ref}
          data={ this.props.filterData.courses }
          onValueChange={value => (this.setState({selectedTextValue3:value}),this.setFilter(value,this.props.filterData.courses,3))}
          selectedValue={ this.state.selectedValues[2] }
        />
      </React.Fragment>
    )
  }

  filterTab(){
    return(
      <View style={{marginTop:10,alignSelf:'center',zIndex:2,flexDirection:'row',width:.8*DEVICE_WIDTH}}>
        <View style={{flexDirection:'column',alignItems:'center'}}>
          <TouchableOpacity style={styles.searchButton} onPress={()=>this.myref1.openPicker()}>
            <Text style={styles.searchFilter}>{this.state.selectedValue1==''?'انتخاب درس':this.state.selectedTextValue1}</Text>
            <Icon containerStyle={{position:'absolute',right:0}} name='expand-more' color='#AAAAAA'/>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'column',alignItems:'center',paddingHorizontal:10}}>
          <TouchableOpacity style={styles.searchButton} onPress={()=>this.myref2.openPicker()}>
            <Text style={styles.searchFilter}>{this.state.selectedValue2==''?'انتخاب پایه':this.state.selectedTextValue2}</Text>
            <Icon containerStyle={{position:'absolute',right:0}} name='expand-more' color='#AAAAAA'/>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'column',alignItems:'center'}}>
        <TouchableOpacity style={styles.searchButton} onPress={()=>this.myref3.openPicker()}>
          <Text style={styles.searchFilter}>{this.state.selectedValue3==''?'دوره ها':this.state.selectedTextValue3}</Text>
          <Icon containerStyle={{position:'absolute',right:0}} name='expand-more' color='#AAAAAA'/>
        </TouchableOpacity>
        </View>
      </View>
    )
  }

  content(){
    return(
      <Container>
      {this.pickerBox()}
      <Content >
        <Image
          style={{top:0,width:DEVICE_WIDTH,height:DEVICE_HEIGHT,position:'absolute'}}
          source={orangeRectangular}
          ref={img => { this.backgroundImage = img }}
          onLoadEnd={this.imageLoaded.bind(this)} />
        <BlurView
          style={styles.absolute}
          blurType="xlight"
          blurAmount={50}
        />
        {this.filterTab()}
        <View style={{zIndex:1,marginTop:5,flex:1}}>
          <FlatList
            data={this.props.screenData.products_result}
            keyExtractor={(item, index) => item.key}
            removeClippedSubviews={true}
            shouldComponentUpdate={()=>
               {
                 return false
               }  }
            renderItem={({item})=>
              <Card containerStyle={styles.containerStyle}>
                <TouchableOpacity onPress={()=>this.goToCourse(item.id,item.user_has_purchased,item.added_to_cart)} style={{flexDirection:'row'}}>
                  <Image
                  style={{alignSelf:'center',height:DEVICE_WIDTH/8,width:DEVICE_WIDTH/8,marginLeft:4,borderRadius:4}}
                  resizeMode="contain"
                  source={{uri:item.img_mobile}}
                  />
                  <View style={{flexDirection:'column',left:14,width:.6*DEVICE_WIDTH}}>
                    <Text style={styles.text1}>{item.name}</Text>
                    <Text style={styles.text3}>قیمت:{item.price} ریال</Text>
                  </View>
                  { this.state.buttonLoad[item.key]?
                    <ActivityIndicator size="large" color="#0000ff" style={{position:'absolute',right:10,alignSelf:'center'}}/>:
                    <TouchableOpacity onPress={()=>this.addToCart(item.id,item.added_to_cart,item.user_has_purchased,item.key)} style={item.user_has_purchased?{position:'absolute',backgroundColor:'#F8793C',alignSelf:'center',right:10,justifyContent:'center',alignItems:'center',width:0,borderRadius:DEVICE_WIDTH/10,height:0}:item.added_to_cart?{position:'absolute',backgroundColor:'#FFFFFF',alignSelf:'center',right:10,justifyContent:'center',width:DEVICE_WIDTH/10,borderRadius:DEVICE_WIDTH/10,height:DEVICE_WIDTH/10,borderColor:'#007AFF',borderWidth:.5}:{position:'absolute',backgroundColor:'#306BF4',alignSelf:'center',right:10,justifyContent:'center',width:DEVICE_WIDTH/10,borderRadius:DEVICE_WIDTH/10,height:DEVICE_WIDTH/10}}>
                      <Icon name={item.added_to_cart?'done':'add-shopping-cart'} color={item.added_to_cart?'#007AFF':'white'}/>
                    </TouchableOpacity>
                   }
                </TouchableOpacity>
              </Card>}
          />
        </View>
      </Content>
      </Container>
    )
  }

  render() {
    return (
      <GlobalScreen navigation={this.props.navigation} props={{fetching:!(this.props.screenData && this.props.filterData)}}  title='میز مطالعه' page={'2'}>

        {this.props.screenData && this.props.filterData ?this.content():null}
      </GlobalScreen>
    );
  }
}

const styles=StyleSheet.create({
  containerStyle:{
    borderRadius:15,alignSelf:'center',justifyContent:'center',padding:10,width:.958*DEVICE_WIDTH,margin:5,backgroundColor:'white',
        shadowColor:'rgba(0,0,0,0.1)',
        shadowOffset:{height:1},
        shadowRadius: 5,
        shadowOpacity: 1,
  },
  text1:{
    fontSize:14,marginRight:10,marginTop:2,color:'#666464',
    fontFamily:"IRANYekanMobileFN",textAlign: 'left',fontWeight:'500',
    lineHeight: 20,
  },
  text3:{
    fontSize:12,marginRight:10,marginTop:2,color:'#0296F9',
    fontFamily:"IRANYekanMobileFN",textAlign: 'left',fontWeight:'500',
    lineHeight: 20,color:'#2D98DA'
  },
  clock:{
      alignSelf:'center',top:-DEVICE_HEIGHT/12.8
  },
  button1: {
  width:DEVICE_WIDTH/5,
  position:'absolute',right:-DEVICE_WIDTH/12,top:DEVICE_HEIGHT/23,
  alignItems: 'center',
  justifyContent:'center',
  backgroundColor: '#306BF4',
  padding:7,
  borderRadius:5,
  height:.042*DEVICE_HEIGHT,
},
  button2: {
  width:DEVICE_WIDTH/5,
  position:'absolute',right:-DEVICE_WIDTH/12,top:DEVICE_HEIGHT/23,
  alignItems: 'center',
  justifyContent:'center',
  backgroundColor: 'white',
  padding:7,
  borderRadius:5,
  height:.042*DEVICE_HEIGHT,
  },
  button3: {
  width:DEVICE_WIDTH/5,
  position:'absolute',right:-DEVICE_WIDTH/12,top:DEVICE_HEIGHT/23,
  alignItems: 'center',
  justifyContent:'center',
  backgroundColor: '#F8793C',
  padding:7,
  borderRadius:5,
  height:.042*DEVICE_HEIGHT,
  },
  checkboxStyle:{

    width:DEVICE_WIDTH/4,
    margin:0,
    left:5
  },
  searchFilter:{
    alignSelf:'center',
    fontFamily:'IRANYEKANMobileFN',
    fontSize:10,
    color:'#666464',
    position:'absolute',
    left:5
  },
  searchButton:{
    backgroundColor:'white',
    width:DEVICE_WIDTH/4,
    height:DEVICE_HEIGHT/26,
    justifyContent: 'center',
    borderRadius:10,
    borderColor:'#A6A7A9',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
function mapStateToProps(state) {
    const { data , fetching } = state.classino;
    const screenData=data[screenUrl];
    const filterData=data[filterUrl];
    return { screenData , filterData, fetching};
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCourses : (screenUrl, data) => dispatch(ClassinoActions.getRequest(screenUrl, data)),
    getFiletrs : ( filterUrl ) => dispatch(ClassinoActions.getRequest(filterUrl)),
    getAddToCard : ( addToCartUrl ) => dispatch(ClassinoActions.getRequest(addToCartUrl)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Courses);
