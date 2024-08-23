import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import localePtBr from 'date-fns/locale/pt-BR';

export default function distanceToNow(dateTime: number | Date) {
  return formatDistanceToNowStrict(dateTime, {
    addSuffix: true,
    locale: localePtBr
  });
}
