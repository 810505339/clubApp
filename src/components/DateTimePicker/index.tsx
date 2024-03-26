import DateTimePicker, { AndroidNativeProps, IOSNativeProps, WindowsNativeProps } from '@react-native-community/datetimepicker';
import dayjs from 'dayjs'

const MyDateTimePicker = (props: IOSNativeProps | AndroidNativeProps | WindowsNativeProps) => {

  const maximumDate = dayjs(new Date()).add(180, 'day').toDate()

  return (<DateTimePicker  {...props} minimumDate={props?.minimumDate ?? new Date()} maximumDate={props?.maximumDate ?? maximumDate} />)
}

export default MyDateTimePicker
