# React Native Navigation

> 라우팅 시스템인 리액트 네이티브 네비게비게이션에 대해서 배워야만 앱다운 앱을 만들수 있다. 그런데 쉽지 않았다. 😱

> 이 문서는 리액트 네이티브 네비게이션에 대해서 리액트 네이티브 입문자(?) 입장에서 정리한 것이다. 리액트 네이티브 네비게이션 자체가 너무 많은 내용들을 담고 필수적인 내용을 중심으로 여러가지 네비게이션 시스템을 구현하면서 필요한 부분들에 대해서 정리할 것이다.

> `React Native Navigation 5.x` 을 기준으로 한다.

<br />

## React Native Navigation의 종류

> 화면 전환의 방법에 따라서 아래와 같이 3가지로 구분된다.

### Stack Navigation : `react-native-stack`

> 4가지 기본개념

1. CreateStackNavigator
2. RouteConfigs
3. StackNavigationConfig
4. navigationOptions

> 설치 패키지

- react-native-gesture-handler : 모바일 환경이기 때문에 터치 인터페이스를 로드해주는 패키지
- react-navigation
- react-navigation-stack

>

### Tab Navigation : `react-navigation-tab`

> 3가지 tab library

1. createBottomTabNavigator : 화면 하단에 위치
2. createMaterialBottomTabNavigator : 화면 하단에 위치, 기존의 createBottomTabNavigator 보다 더 많은 스타일링 기능 구현 가능
3. createMaterialTopTabNavigator : 화면 상단에 위치

### Drawer Navigation
