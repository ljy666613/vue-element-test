// import axios from 'axios'
// import router from "@/router";
//
// const request = axios.create({
//     //baseUrl:'/api'
//     timeout: 5000,
//     // headers: { "Authorization": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzA1NDgxNjEsImlhdCI6MTY2NDU0ODIyMSwidWlkIjoxMn0.V32v_BUknBmeYDrX5xe6zIszXz_V5UDtLwW_rbBouU5xVY8jh7woES_8CfuyhttgxG5vl8ulHCnuM0DYJKXOT_FPEzQr-Bgh_zFrbE5YuwQFtVugMX3l43ZFNqNgtqSESM2gOyMPi0AwbIBUXbWTdIfjsLvimRQpk_N3xDKRRjiKHuBYzwM0BnxvZcSe0zZsrRdvUsfAUPW8jdyMvcYg8pZLUy3YU1Ff_fsiLVVTYQswskuTZEzAuJ0qNY_vVMSNXbGhkaxCGbx4G-3kLvhpaV5kOua1m7hGXV2BVE1aBkOWqPbcd5hWE3kI6u0qu7FEHL9SW5y1ssAuCYbsFl8W0g" }
//
// })
//
// // request 拦截器
// // 可以自请求发送前对请求做一些处理
// // 比如统一加token，对请求参数统一加密
// request.interceptors.request.use(config => {
//     config.headers['Content-Type'] = 'application/json;charset=utf-8';
//
//     config.headers['Authorization'] = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzA1NDgxNjEsImlhdCI6MTY2NDU0ODIyMSwidWlkIjoxMn0.V32v_BUknBmeYDrX5xe6zIszXz_V5UDtLwW_rbBouU5xVY8jh7woES_8CfuyhttgxG5vl8ulHCnuM0DYJKXOT_FPEzQr-Bgh_zFrbE5YuwQFtVugMX3l43ZFNqNgtqSESM2gOyMPi0AwbIBUXbWTdIfjsLvimRQpk_N3xDKRRjiKHuBYzwM0BnxvZcSe0zZsrRdvUsfAUPW8jdyMvcYg8pZLUy3YU1Ff_fsiLVVTYQswskuTZEzAuJ0qNY_vVMSNXbGhkaxCGbx4G-3kLvhpaV5kOua1m7hGXV2BVE1aBkOWqPbcd5hWE3kI6u0qu7FEHL9SW5y1ssAuCYbsFl8W0g";  // 设置请求头
//     // config.headers['token'] = user.token;  // 设置请求头
//     //取出sessionStorage里面的用户信息
//     let userJson = sessionStorage.getItem("user");
//     if (!userJson){
//         router.push("/login");
//     }
//     return config
// }, error => {
//     return Promise.reject(error)
// });
//
// // response 拦截器
// // 可以在接口响应后统一处理结果
// request.interceptors.response.use(
//     response => {
//         let res = response.data;
//         // 如果是返回的文件
//         if (response.config.responseType === 'blob') {
//             return res
//         }
//         // 兼容服务端返回的字符串数据
//         if (typeof res === 'string') {
//             res = res ? JSON.parse(res) : res
//         }
//         return res;
//     },
//     error => {
//         console.log('err' + error) // for debug
//         return Promise.reject(error)
//     }
// )
//
//
// export default request
//
