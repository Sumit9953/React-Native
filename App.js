// import { StatusBar } from "expo-status-bar";
import { StyleSheet , StatusBar, TouchableNativeFeedback, Text,TouchableWithoutFeedback,TouchableOpacity,TouchableHighlight, View, Image ,SafeAreaView, Button, Alert , Platform } from "react-native";

export default function App() {

    const handlePress = () => Alert.prompt("My title" , "my message" , (text) => console.log(text));
    // const handlePress = () => Alert.alert("My title" , "my message" , [
    //   {text: "Yes" , onPress: () => console.log("Yes")},
    //   {text: "No" , onPress: () => console.log("No")}
    // ]);
  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" title="Click me" onPress={handlePress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

{/* <Text numberOfLines={1} onPress={handlePress} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, deleniti laboriosam assumenda inventore laudantium adipisci optio hic fuga unde? Accusantium ipsam nam aperiam, sequi molestiae commodi facere ab laboriosam! Neque!</Text>
<Image source={require('./assets/favicon.png')} />
<TouchableOpacity onPress={handlePress}>
<Image blurRadius={10} fadeDuration={1000} source={{
  width: 200,
  height:200,
  uri : "https://picsum.photos/200/300"}} />
</TouchableOpacity>
only work on android or Backgroung color
<TouchableNativeFeedback>
  <View style={{width: 200,height:70, backgroundColor:"dodgerblue"}}></View>
</TouchableNativeFeedback> */}