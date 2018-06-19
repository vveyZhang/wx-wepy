import wepy from 'wepy';
const errorIcon = '/asset/error.png';
const successIcon = '/asset/success.png';
const warningIcon = '/asset/warning.png';
const networkIcon = '/asset/network.png';
// import successIcon from '../asset/success.png';
// import warningIcon from '../asset/warning.png';
// import networkIcon from '../asset/network.png';

function toast(title, image, time = 1500) {
  wepy.showToast({
    title: title,
    image: image,
    duration: time,
    mask: true
  });
}

export const errorToast = (title, time) => {
  toast(title, errorIcon, time);
};
export const successToast = (title, time) => {
  toast(title, successIcon, time);
};
export const warningToast = (title, time) => {
  toast(title, warningIcon, time);
};
export const networkToast = (title, time) => {
  toast(title, networkIcon, time);
};

export const noIconToast = (title, time = 1500) => {
  wepy.showToast({
    title: title,
    icon: 'none',
    duration: time,
    mask: true
  });
};

export const loading = () => wepy.showLoading();

export const hideLoading = () => wepy.hideLoading();
