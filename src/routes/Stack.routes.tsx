import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Author from "../screens/Author";
import Book from "../screens/Book";
import { TabRoutes } from "./Tab.routes";

export function StackRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Screen name="root" component={TabRoutes} />
      <Screen name="book" component={Book} />
      <Screen name="author" component={Author} />
    </Navigator>
  );
}
