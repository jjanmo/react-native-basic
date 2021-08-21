# React Native에서 사용하는 명령어 정리

## JS Bundle을 생성하는 방법

### 1. Expo CLI

`장점 :`

- 개발환경의 구축이 용이하여 처음 시작하기가 좋다.
- Expo에서 제공해주는 모듈이 다양하다.

`단점 :`

- OS Layer와 직접적인 상호작용이 불가능하다.(자바, 코틀린, 스위프트,오브젝트C 로 추가작성 불가능)
- Expo에서 제공해주는 것만 사용이 가능하다는 점은 개발관점에서 자유도가 많이 떨어진다.

### 2. React Native CLI

`장점 :`

- Expo로는 접근이 불가능한 Native기능에 접근이 가능하다.
- Expo를 사용하는 것보다 자유도가 높다. - OS Layer와 직접적인 상호작용이 가능하다.

`단점 :`

- 초기 앱 개발 환경 설정 및 초기 셋팅과정에 시간이 많이 소요된다.

<br />

## 프로젝트 생성 및 Simulator 구동

### 프로젝트 생성 명령어

> [공식사이트 : Creating a new application part](https://reactnative.dev/docs/environment-setup)

- `react native init [--version 0.63:버전정보] [프로젝트명/위치]`

  or

- `npx react-native init [프로젝트명/위치]`

<br />

### iOS 시뮬레이터 구동

- `npm start`
- `react-native run-ios`
- `react-native run-ios --simulator="iPhone 8 Plus"`

  > 다른 기기에서 시뮬레이터를 실행시켜보고 싶을 때, 기기의 이름을 넣어주면 된다.

- 시뮬레이터 단축키

  - `command + r` : refresh

  - `command + d` : debug menu

  - 디버그 메뉴창에서 <u>enable fast fresh를 클릭</u>하면 수동적인 리로드 없이 작업한 내용이 바로 시뮬레이터에 반영된다. 반대로 <u>disable fast fresh를 클릭</u>하면 refrech를 해줘야 작업한 내용이 반영이 된다.

<br />

### Android 시뮬레이터 구동

- 시뮬레이터를 먼저 구동하고 App을 실행시킨다.(iOS의 경우는 App을 실행하면 시뮬레이터가 자동으로 실행된다.)
- `npm start`

- `react-native run-android`

- 시뮬레이터 단축키

  - `double r` : refresh

  - `command / ctrl + m` or `shake device` : debug menu

<br />
