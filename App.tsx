import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BookProvider } from "./src/hooks/useBooks";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast, { SuccessToast } from "react-native-toast-message";

export default function App() {
  return (
    <BookProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="light" />
          <Routes />
          <Toast
            config={{
              success: (props) => (
                <SuccessToast
                  {...props}
                  style={{
                    backgroundColor: "#0A1D2C",
                    borderLeftColor: "green",
                  }}
                  text1Style={{ color: "white" }}
                  text2Style={{ color: "white" }}
                />
              ),
            }}
          />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </BookProvider>
  );
}
