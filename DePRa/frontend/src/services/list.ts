// import {  request  } from "umi";
//
// // GET接口
// export async function get_title(
//   params:API.AddUserParams,
//   options?:{ [key:string]:any },
// ){
//   return request<API.UserListResultData>('/api/titles',{
//     method:'GET',
//     // headers:{
//     //   'token':`${localStorage.getItem('token')}`
//     // }
//     skipErrorHandler:true,
//     params:{...params},
//     ...(options || {}),
//   });
// }
//
// // POST接口
// export async function addUser(
//   body:API.AddUserParams,
// ){
//   return request<API.UserListResultData>('/api/add_user',{
//     method:'POST',
//     headers:{
//       'token':`${localStorage.getItem('token')}`
//     },
//     data:body
//   });
// }
