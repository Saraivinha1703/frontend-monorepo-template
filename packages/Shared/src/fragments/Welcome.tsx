import React from 'react'
import {View, Text} from '@expo-monorepo/shared/src/lib/nativewind'
import {Test} from '@expo-monorepo/shared/src/components'
import { TextProps } from 'react-native';

export function Welcome(props: TextProps){
    return (
        <View>
            <Text className='text-pastel-green-400 font-bold' {...props}>Welcome :)</Text>
            <Test />
        </View>
    );
}