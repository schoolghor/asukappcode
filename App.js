import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Components/Home/Home'
import Schoolmain from './Components/Schoolmain/Schoolmain'
import Collagemain from './Components/Collagemain/Collagemain'
import Contact from './Components/Contact/Contact'
import Dhakas from './Components/School/Dhakas'
import Chattograms from './Components/School/Chattograms'
import Sylhets from './Components/School/Sylhets'
import Khulnas from './Components/School/Khulnas'
import Barishals from './Components/School/Barishals'
import Rajshahis from './Components/School/Rajshahis'
import Rangpurs from './Components/School/Rangpurs'
import Mymensinghs from './Components/School/Mymensinghs'
import Dhakac from './Components/Collage/Dhakac'
import Chattogramc from './Components/Collage/Chattogramc'
import Sylhetc from './Components/Collage/Sylhetc'
import Khulnac from './Components/Collage/Khulnac'
import Barishalc from './Components/Collage/Barishalc'
import Rajshahic from './Components/Collage/Rajshahic'
import Rangpurc from './Components/Collage/Rangpurc'
import Mymensinghc from './Components/Collage/Mymensinghc'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Schoolmain" component={Schoolmain} />
          <Stack.Screen name="Collagemain" component={Collagemain} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Dhakas" component={Dhakas} />
          <Stack.Screen name="Chattograms" component={Chattograms} />
          <Stack.Screen name="Sylhets" component={Sylhets} />
          <Stack.Screen name="Khulnas" component={Khulnas} />
          <Stack.Screen name="Barishals" component={Barishals} />
          <Stack.Screen name="Rajshahis" component={Rajshahis} />
          <Stack.Screen name="Rangpurs" component={Rangpurs} />
          <Stack.Screen name="Mymensinghs" component={Mymensinghs} />
          <Stack.Screen name="Dhakac" component={Dhakac} />
          <Stack.Screen name="Chattogramc" component={Chattogramc} />
          <Stack.Screen name="Sylhetc" component={Sylhetc} />
          <Stack.Screen name="Khulnac" component={Khulnac} />
          <Stack.Screen name="Barishalc" component={Barishalc} />
          <Stack.Screen name="Rajshahic" component={Rajshahic} />
          <Stack.Screen name="Rangpurc" component={Rangpurc} />
          <Stack.Screen name="Mymensinghc" component={Mymensinghc} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" backgroundColor="#ffffff" />
    </>
  )
}
