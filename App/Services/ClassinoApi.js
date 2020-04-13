// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// static token
const token="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIwN2E0MmI1ODUyYTI5ZmU2NDA5MmIxNWMxMjRjZmE5OTNmMzQ5ZTJiNGYyNTY1OTc2NDI3ODMzNzc3YmFhNGUxMWJkZTdhNmE4MmIyOTQ1In0.eyJhdWQiOiIyIiwianRpIjoiYjA3YTQyYjU4NTJhMjlmZTY0MDkyYjE1YzEyNGNmYTk5M2YzNDllMmI0ZjI1NjU5NzY0Mjc4MzM3NzdiYWE0ZTExYmRlN2E2YTgyYjI5NDUiLCJpYXQiOjE1ODYyMDEyNDQsIm5iZiI6MTU4NjIwMTI0NCwiZXhwIjoxNjE3NzM3MjQ0LCJzdWIiOiIyNDI0OCIsInNjb3BlcyI6W119.Ej0jPKqIxqgMTvqs23zIckzIXi-kpjIgfN8kH9NiHhOSHpNGqkCoVG2c6HOicqNMf3QXTc5qIc4tRw8bAeWhhvhnhykokH-zgrOL6li3wZL3EhrbEI0aXOHlb86Az3PKQh75ucW6mBJ-jF76G6lb4FQcW4jysOPQ_D2VpQ2QEfJ20WXQhJfyNG9gZYhkQanEIw-HiInSscKYOoAitRNHX9Y-8MyfXV-dhEGQ_USTMioYn23z8NsHBEkbolLNAZymyrOqyRvPcv6KVGPczfgrJ_Y9G0fSXcYY57VnN5-7HWIxcsEprt9z42YD940ibHqBLm2TPR-hP42-IR7a9Z3E-DBpVYfbQ1P5uEumg4c8kXDpjAS4XuXNlDecTyxCPK_Sd5mceYmoM32l5lrFkoaZNj35oWnM6xLXfyq80vpP-9BA1Sutqi-edo8NO_J4TWgkyUF0JlqNeie2wPS93WwHV8rpxh_CPnVpW086r7YR7V3oorzMsjmnLbZ5hTZr9ROEl8QJr0W5F2pxbo44l1ipI7EmvDow5RRv3FetslFlNuzdSViJc-UI4jjzSvB8j-Sb8VX9Te3IHTCSz5-9WEWQ7V1R20w2KduyXrmn1WCjg5Qbuj15r9lhob5DpwzBtYatW-dY3_Rib0buNgVSGjYfqZHlrsErGSJf9ZK-764A-6I";


// our "constructor"
const create = (baseURL = 'https://clone.classino.com/api') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      Accept:'application/json',Authorization:token,Release:'3',OS:'android'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getRequest = (getAddress) => api.get(getAddress)
  const postRequest = (postAddress, data) => api.post(postAddress, data)

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getRequest,
    postRequest
  }
}

// let's return back our create method as the default.
export default {
  create
}
