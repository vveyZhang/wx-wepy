import moment from 'moment';

export const formatTime = time => {
  if (!time || time == '0001-01-01T00:00:00Z') return '';
  return moment(time).format('YYYY-MM-DD  HH:SS:DD');
};

export const formatDay = time => {
  if (!time || time == '0001-01-01T00:00:00Z') return '';
  return moment(time).format('YYYY-MM-DD');
};
