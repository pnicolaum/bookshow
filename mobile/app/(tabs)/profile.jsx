import { Text, View,TouchableOpacity } from 'react-native'
import { useAuthStore } from "../../store/authStore";

export default function Profile() {

  const {  logout } = useAuthStore();  

    return (
      <View>
        <Text> Profile page </Text>
        <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      </View>
      
    )
}
