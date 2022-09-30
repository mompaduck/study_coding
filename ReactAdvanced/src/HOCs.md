# React Higher-Order Components (HOCs)

https://www.robinwieruch.de/react-higher-order-components/

[https://share2learn.tistory.com/99]

### React에서 Higher-order Component(HOC)는 고차 함수 확장 기능을 도입해 Component들의 기능을 조합해 새로운 Component를 구현할 수 있도록 하는 디자인 패턴이다. HOC를 사용하면 반복적인 코드를 재사용하여 기능 구현을 편리하게 할 수 있고, 이를 응용해 웹서비스의 전체적인 틀을 제작할수도 있다.

1. 개요
   클래스의 상속은 개발에 있어 많은 편의를 제공한다.

그러나 상속 관계가 깊어지면서 전체적인 상황을 헨들링하기가 어려워진다.

이러한 상속관계 간의 종속성을 없애고 직관적인 기능 구현을 위해 데코레이터 패턴이 도입된다.

함수형 언어에서의 대표적인 데코레이터 패턴이 바로 고차 함수다.

HOC는 이러한 고차 함수를 활용한 기법이다.

어떤 Component를 제작할 때, 이미 기존 Component의 기능을 도입하고 추가적인 기능을 부여하고 싶다면 HOC 활용을 고려해볼 수 있다.

2. 사용
   HOC는 함수의 인자로 Component를 전달하고, 필요한 기능을 구현한 후, 새로운 Component를 반환하는 구조로 이루어진다. 원본 Component를 변경하지 않고 조합하여 사용하기 때문에 재사용성이 우수하다.

주로 아예 새로운 기능의 Component를 만들 때 사용하기보다는, 여러 Component들이 지니는 공통의 기능을 하나의 Component로 묶어줄 때 유용하게 사용할 수 있다.

따라서, 로딩 화면, 반복적으로 등장하는 버튼 등의 기능을 구현하기 위해 HOC 도입을 고려해볼 수 있다.

3. 주의
   HOC 사용 시 주의할 점들이 존재한다.

예를 들어, 서로 다른 HOC가 동명의 props를 사용하다면 충돌이 발생할 우려가 있다.

또한 정적메서드 호출을 설정해야하거나, Typescript 사용 시 타입 정의가 까다로운 등의 문제도 존재할 수 있다.

더 자세히 알아보기

https://ko.reactjs.org/docs/higher-order-components.html
