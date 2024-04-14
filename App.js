import { ScrollView, View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';


export default function App() {
  const styles = StyleSheet.create({
    main_scroll_view:{
      backgroundColor: "#468181"
    },
    main_view: {
      margin: 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container_item: {
      height: 200,
      width: Dimensions.get("window").width - 50,
      margin: 10,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "#ffffff"
    },
    title_container_item: {
      color: "#ffffff",
      fontSize: 20,
      textAlign: "center"
    }
  })

  return (
    <ScrollView style={styles.main_scroll_view}>
      <View style={styles.main_view}>
        <View style={styles.container_item}>
            <Text style={styles.title_container_item}>Title</Text>
            <TextInput>
            </TextInput>
        </View>
      </View>
    </ScrollView>
  );
}