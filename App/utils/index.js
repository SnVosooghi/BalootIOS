import React, { useState } from 'react';
const API_URL = 'https://clone.classino.com/api/';
import {Platform , Alert,AsyncStorage} from 'react-native';
import axios from 'axios';




export async function getDataUtility( props , url , splitFunction){
  var qwe;
  await axios.get(API_URL + url,
      {headers:{Accept:'application/json',Authorization:props.token,Release:'3',OS:'android'}}
  ).then(data=>{
    var response=data.data;
    if(response.middleware!=null){
      props.setMiddleware(response,props.navigation);
      props.navigation.navigate(response.page);
    }
    else{
      console.log('data successfully fetched.');
      if(splitFunction!=null){
        response=splitFunction(response);
      }
    }
    qwe=response;
  }).catch(error=>(
    qwe=error,
    error.request.status==401?
      (AsyncStorage.removeItem('userToken'),Alert.alert(
        'خطای اعتبارسنجی',
        'لطفا دوباره وارد شوید',
        [
          {text: 'باشه', onPress: () => props.navigation.navigate('Hello')},
        ],
        {cancelable: false},
      ))
      :Alert.alert(error))
  );
  return qwe;
}

export function navigateScreen(props,screenName,data){
  props.navigation.navigate(screenName,data);
}

export function isUserIndebted(props){
  console.log(props)
  if( parseInt(props.response.menu_meta_data.credit,10)<0 )
    return true;
  return false;
}
