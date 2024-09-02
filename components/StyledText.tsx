import { Text, TextProps } from './Themed';

export function DefaultText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Pretendard', fontSize: 16, color:'#333'}]} />;
}
export function Title24(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Pretendard-SemiBold', fontSize: 24, color:'#333' }]} />;
}
export function Title20(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Pretendard-Medium', fontSize: 20, color:'#333' }]} />;
}
export function Title16(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Pretendard-Medium', fontSize: 16, color:'#333' }]} />;
}
export function Body16(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Pretendard-Regular', fontSize: 16, color:'#333' }]} />;
}
export function Body14(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Pretendard-Regular', fontSize: 14 }]} />;
}
export function Caption(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Pretendard-Regular', fontSize: 16, color: "#b4b4b4"}]} />;
}