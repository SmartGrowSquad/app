import DefaultHeader, { DefaultHeaderProps } from "./DefaultHeader";
import { Image, StyleSheet } from "react-native";

export default function HomeHeader() {
  const headerProps: DefaultHeaderProps = {
    left: <Image source={ require("../../assets/images/ugh_logo_3x.png") } style={styles.logo}/>,
    right: "sidebar",
    backgroundColor: "#F4F5FB"
  }
  return DefaultHeader(headerProps);
}

const styles = StyleSheet.create({
  logo: {
    width: 24,
    height: 24,
  }
 });