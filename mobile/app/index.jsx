import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";
 

export default function Index() {
  const { user, token, checkAuth, logout } = useAuthStore();  

  useEffect(()=>{
    checkAuth()
  },[])
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello {user?.username}</Text>
      <Link href="/(auth)/signup">Singup</Link>
      <Link href="/(auth)">login</Link>

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
