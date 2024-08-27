import { Pressable, Text} from "react-native"
import { Href, router } from "expo-router"

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
    <div>
      <div>
        {
          services.map((service: Test, index: number) => {
            return (
              <Pressable onPress={() => onCickService(service.href)} key={index}>
                <Text>Go to {service.name}</Text>
              </Pressable>
            )
          })
        }
      </div>
    </div>
  )
}