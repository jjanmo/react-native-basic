# React Native(RN) Basic

> RN의 기본에 대해서 알아보자 😜

## 개괄 : 앱 개발 방법

`네이티브 앱 개발 :`

기본적으로 각각의 모바일 기기(모바일 OS)에 맞춰진 언어로 개발이 가능하다.

-   안드로이드 : **자바** / **코틀린**
-   iOS : **오브젝트-C** / **스위프트**

`크로스 플랫폼을 이용한 앱 개발`

`리액트 네이티브`는 자바스크립트를 사용하는 `크로스 플랫폼`으로서 <u>한가지의 언어로 안드로이드와 iOS에서 돌아가는 앱</u>을 모두 구현이 가능하다.

> 요즘에 급부상하고 있는 플러터(Flutter) 역시 크로스 플랫폼 앱 개발 프레임 워크로서 다트(Dart)언어를 사용한다. 👉🏻 [공식 사이트](https://flutter-ko.dev/)

## 리액트 네이티브의 작동 원리

> 리액트 네이티브는 자바스크립트 코드를 각각의 OS 플랫폼에 타겟팅해주는 역할을 한다.

![work-flow](image/workflow.png)

`Low level Explanation(기계적 관점에서의 설명):`

1. 리액트 네이티브에서 앱을 빌드할 때 **전체 로직**을 가지고 있는 `JS Bundle`을 생성된다.

2. JS Bundle을 앱에 로딩하는 것은 `JS Thread`에 의해서 실행된다.

3. 각각의 OS에서 앱을 실행하기 위해선 `Native Thread`가 필요하다. 하지만 Native Thread와 JS Thread는 직접 상호작용이 불가능하다.(Native Thread와 JS Thread는 `독립적`이다.)

4. 이를 가능하게 해주는 것이 리액트 네이티브이다. 리액트 네이티브는 `둘을 연결해주는 브릿지` 역할이다.

# Ref

<details>
<summary>React Native의 작동원리 관련</summary>

[잠깐…내가 만든 리액트 네이티브 앱이 시작하면 무슨일이 일어나는거지? — 리액트 네이티브 안을 들여다보기](https://medium.com/@kyo504/%EB%B2%88%EC%97%AD-%EC%9E%A0%EA%B9%90-%EB%82%B4%EA%B0%80-%EB%A7%8C%EB%93%A0-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EC%95%B1%EC%9D%B4-%EC%8B%9C%EC%9E%91%ED%95%98%EB%A9%B4-%EB%AC%B4%EC%8A%A8%EC%9D%BC%EC%9D%B4-%EC%9D%BC%EC%96%B4%EB%82%98%EB%8A%94%EA%B1%B0%EC%A7%80-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EC%95%88%EC%9D%84-%EB%93%A4%EC%97%AC%EB%8B%A4%EB%B3%B4%EA%B8%B0-2b4a9bce79a2)

[React Native 이론](https://evanjin.dev/development/react-native-%EC%B0%B8%EA%B3%A0%EC%82%AC%ED%95%AD%EB%93%A4/#react-native-%EC%9D%B4%EB%A1%A0)

[React Native는 어떻게 작동합니까?](http://www.devh.kr/2020/How-React-Native-Works/)

</details>
