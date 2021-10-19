import moment from 'src/libs/moment';
import { DATE_TIME_HOUR } from 'src/constants/app';

export const formatDate = (
  day: string | null,
  format: string = DATE_TIME_HOUR,
  defaultValue: string = '-',
) => {
  if (!day) return defaultValue;

  if (moment(day).isValid()) {
    return moment(day).format(format);
  }

  return defaultValue;
};

export const formatPrice = (
  num: number | string,
  precision: number = 2,
  defaultValue: string = '-',
) => {
  if (!num) return defaultValue;

  if (typeof num !== 'number') {
    num = Number(num);
  }

  return (
    num.toLocaleString('ko-KR', { maximumFractionDigits: precision }) + '원'
  );
};

export const formatCount = (
  num?: number | null,
  prefix: string = '회',
  defaultValue: string = '-',
) => {
  if (typeof num === 'number') return num.toLocaleString() + prefix;

  return defaultValue;
};
