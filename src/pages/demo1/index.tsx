import { useEffect } from 'react';
import { Text, View } from '@tarojs/components';

import { AtButton, AtNavBar } from 'taro-ui';
import { useRouter } from '@/hooks';
import { add } from '@/service/demo';

definePageConfig({
  navigationBarTitleText: 'demo1',
  navigationBarBackgroundColor: '#f00',
});

export default function Demo1() {
  const { goTo } = useRouter();

  useEffect(() => {
    add().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <View className="p-4">
      <AtNavBar color="#0" leftText="返回">
        <View>Taro UI</View>
      </AtNavBar>
      12321
      <AtButton
        type="primary"
        onClick={() => goTo('/packageA/pages/apple/index', { id: '123' })}
      >
        apple
      </AtButton>
      <Text className="p-8 text-primary">000</Text>
      <View className="text-2xl text-center my-3">font-size</View>
      <View className="text-xs">text-xs</View>
      <View className="text-sm">text-sm</View>
      <View className="text-base">text-base</View>
      <View className="text-lg">text-lg</View>
      <View className="text-40">text-40</View>
      <View className="text-xl">text-xl</View>
      <View className="text-2xl">text-2xl</View>
      <View className="text-3xl">text-3xl</View>
      <View className="text-4xl">text-4xl</View>
      <View className="text-5xl">text-5xl</View>
      <View className="text-6xl">text-6xl</View>
      <View className="text-7xl">text-7xl</View>
      <View className="text-8xl">text-8xl</View>
      <View className="text-8xl">text-8xl</View>
      <View className="text-8xl">text-8xl</View>
    </View>
  );
}
