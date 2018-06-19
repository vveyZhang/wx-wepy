import wepy from 'wepy';
import { errorToast, networkToast } from './toast';
import 'wepy-async-function';
const codeMessage = {
  401: '登陆过期',
  403: '权限错误',
  404: '请求错误',
  500: '服务器错误'
};
export const request = (url, params) => {
  url = `https://ngrok.calohas.com/wx${url}`;
  return wepy
    .request({
      url: url,
      data: params,
      method: 'POST',
      dataType: 'json',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        cookie: wepy.getStorageSync('sessionid')
      }
    })
    .then(response => checkStatus(response))
    .then(data => judeResponse(data))
    .catch(error => {
      if (error.statusCode < 400) {
        return errorToast(error.message);
      }
      if (error.statusCode == 401) {
        return networkToast(codeMessage[401]);
      }
      if (error.statusCode == 403) {
        return networkToast(codeMessage[403]);
      }
      if (error.statusCode < 500) {
        return networkToast(codeMessage[404]);
      }
      networkToast(codeMessage[500]);
    });
};
function judeResponse(data) {
  if (data.error.error_code != 0) {
    const error = new Error();
    let messageString = data.error.ErrorMsg.split(',')[0];
    messageString = messageString.split(':')[1];
    error.message = messageString;
    error.statusCode = data.error.ErrorCode;
    throw error;
  }
  if (data.error.error_code == 0) return data;
}
function checkStatus(response) {
  if (response.header['Set-Cookie'])
    wepy.setStorageSync(
      'sessionid',
      response.header['Set-Cookie'].split(';')[0]
    );
  if (response.statusCode >= 200 && response.statusCode < 300) {
    return response.data;
  }
  const error = new Error(response.statusCode);
  error.response = response;
  error.statusCode = response.statusCode;
  throw error;
}

export function login(params) {
  const url = 'https://ngrok.calohas.com/wx/login';
  return wepy
    .request({
      url: url,
      data: params,
      method: 'POST',
      dataType: 'json',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => checkStatus(response))
    .then(data => judeResponse(data))
    .catch(error => {
      if (error.statusCode < 400) {
        return errorToast(error.message);
      }
      if (error.statusCode == 401) {
        return networkToast(codeMessage[401]);
      }
      if (error.statusCode == 403) {
        return networkToast(codeMessage[403]);
      }
      if (error.statusCode < 500) {
        return networkToast(codeMessage[404]);
      }
      networkToast(codeMessage[500]);
    });
}

export const captcha = params => {
 const url = `https://ngrok.calohas.com/captcha`;
  return wepy
    .request({
      url: url,
      data: params,
      method: 'POST',
      dataType: 'json',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        cookie: wepy.getStorageSync('sessionid')
      }
    })
    .then(response => checkStatus(response))
    .then(data => judeResponse(data))
    .catch(error => {
      if (error.statusCode < 400) {
        return errorToast(error.message);
      }
      if (error.statusCode == 401) {
        return networkToast(codeMessage[401]);
      }
      if (error.statusCode == 403) {
        return networkToast(codeMessage[403]);
      }
      if (error.statusCode < 500) {
        return networkToast(codeMessage[404]);
      }
      networkToast(codeMessage[500]);
    });
};
