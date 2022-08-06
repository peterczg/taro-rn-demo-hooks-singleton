import { Text, View } from "@tarojs/components";
import Taro, { useReady } from "@tarojs/taro";
import "./index.less";

function Child() {
  Taro.useReady(() => {
    console.log("=====child ready=====");
  });

  return <Text>child</Text>;
}

export default function Index() {
  useReady(() => {
    console.log("=====page ready=====");
  });

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      onClick={() => {
        Taro.navigateTo({
          url: "/pages/index/index?path=666&name=peter" + Math.random()
        });
      }}
    >
      <Text>Hello world Taro RN!</Text>
      <Child />
    </View>
  );
}
