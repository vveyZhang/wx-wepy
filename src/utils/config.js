export const payStatus = status => {
  switch (status) {
    case 'wait_pay':
      return '待付款';
    case 'wait_send':
      return '待发货';
    case 'wait_receive':
      return '已发货';
    case 'received':
      return '已收货';
    case 'appraised':
      return '已评价';
    case 'send_back':
      return '已退货';
    case 'pay_back':
      return '已退款';
    case 'canceled':
      return '已取消';
  }
};

export const articleStatus = status => {
  switch (status) {
    case 1:
      return '新闻';
    case 2:
      return '宝典';
  }
};


export const  phoneExp=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/