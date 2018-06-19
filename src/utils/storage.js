import wepy from 'wepy';
import { errorToast } from './toast';
export function setStorage(key, value) {
  wepy.setStorage({
    key: key,
    data: value
  });
}

export function getStorage(key) {
  const data = wepy.getStorageSync(key);
  if (!data) return [];
  return data;
}

export function removeStorage(key) {
   wepy.removeStorage({ key });
}
