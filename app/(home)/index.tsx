import { Pressable, Text, View} from "react-native"
import { Href, router } from "expo-router"
import { Title24 } from "@/components/StyledText"

interface Test {
  name: string
  href: Href<string>
}
export default function HomeScreen() {
  const services: Test[] = [
    {
      name: 'near',
      href: '/near'
    },
    {
      name: 'online',
      href: '/online'
    },
    {
      name: 'pickup',
      href: '/pickup'
    },
    {
      name: 'available',
      href: '/available'
    },
  ]
  const onCickService = (name: Href<string> ) => {
    router.navigate(name);
  }
  return (
    <View>
      <View>
        {
          services.map((service: Test, index: number) => {
            return (
              <Pressable onPress={() => onCickService(service.href)} key={index}>
                <Title24> {service.name}로 가기</Title24>
              </Pressable>
            )
          })
        }
      </View>
    </View>
  )
}