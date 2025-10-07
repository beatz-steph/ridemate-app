import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Image } from 'expo-image';
import { useRef, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { cn } from '@/lib/utils';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


const intro1 = require('@/assets/onboarding/intro-1.png');

const intro2 = require('@/assets/onboarding/intro-2.png');


const pages = [
  {
    backgroundColor: '#fff',
    image: (
      <Image
        source={intro1}
        contentFit="contain"
        style={{ width: '100%', aspectRatio: "1" }}
      />
    ),
    title: 'Ride smarter, together',
    subtitle: 'Join a community that makes campus movement simple and safe',
  },
  {
    backgroundColor: '#fff',
    image: (
      <Image
        source={intro2}
        contentFit="contain"
        style={{ width: '100%', aspectRatio: "1" }}
      />
    ),
    title: 'Your journey starts here',
    subtitle: 'Fast sign-up, easy rides, and a trusted campus network.',
  },
]


export default function Introduction() {
  const pagerViewRef = useRef<PagerView>(null);
  const [current_page, set_current_page] = useState(0);

  const router = useRouter();



  const current_page_cta: Record<number, { text: string, onPress: () => void }> = {
    0: {
      text: 'Next',
      onPress: () => {
        pagerViewRef.current?.setPage(1);
      }
    },
    1: {
      text: 'Get Started',
      onPress: () => {
        router.replace('/onboarding/role-selection');
      }
    },

  }



  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1'>
        <PagerView ref={pagerViewRef} style={{ flex: 1 }} initialPage={0} onPageSelected={(e) => set_current_page(e.nativeEvent.position)}>
          {pages.map((page, index) => <View className='flex-1 justify-between items-center' key={`${page.title}-${index}`}>
            <View className='flex-1 items-center justify-center' >
              {page.image}
            </View>
            <View className=' justify-center items-center px-5 gap-5'>
              <Text className='text-center text-[30px] font-medium text-black'>{page.title}</Text>
              <Text className='text-center text-[20px] font-light text-black'>{page.subtitle}</Text>
            </View>

          </View>)}


        </PagerView>
        <View className='mx-5 mt-5'>
          <FlatList className='mx-auto w-fit mb-10 gap-1 flex' horizontal data={pages} renderItem={({ item, index }) => <View className={cn('h-1.5 rounded-full mx-0.5', index === current_page ? 'bg-main-100 w-5' : "bg-main-40 w-1.5")} />} />
          <Button size="4xl" onPress={current_page_cta[current_page].onPress}>
            <Text>{current_page_cta[current_page].text}</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    flexDirection: 'row',
    gap: 1.5,

  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});