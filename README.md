## **개요**

- react-clock-app 은 리액트 기반 시계 어플리케이션입니다.
- 실제 시간 / 분 / 초를 표기하며, 아날로그 시계 ui 로 표현이 됩니다.
- 시계에 마우스 오버시 현재 시간이 텍스트로 표기되어 보여집니다. 


## **기술스택**

- recoil 을 사용하여 시분초 등의 전역변수 상태 관리를 하게 됩니다.
- styled-component 를 사용하여 다이나믹한 ui를 css in js로 표현합니다.

## **State**

- hours : 시간을 나타내는 state / 최대 24
- minutes : 분을 나타내는 state / 최대 60
- seconds : 초을 나타내는 state / 최대 60

## **컴포넌트 구조**

  - Clock
    - func: 마우스 오버시 툴팁 보여주는 함수
    
    - Tooltip (공통 컴포넌트 / 텍스트를 받아 보여줌)
      - props: title(툴팁내용)
      
    - Hours (시간을 보여주는 컴포넌트)
      - state: hour, minutes
      - func1: 아날로그에서 12이상일 경우 % 12 로 나머지를 보여줘야 하는 함수
      - func2: 각도 계산 함수 / 25분마다 시간 사이 간격이 1/4 씩 움직일 것
      
    - Minutes
      - state: minutes, seconds 
      - func1: 60분 -> 0분로 바뀔 때 +1 시간이 올라가며 / 60분이 되면 다시 0분으로 초기화
      - func2: 각도 계산 함수 (공통)
      
    - Seconds
      - state: minutes, seconds 
      - func1: 60초 -> 0초로 바뀔 때 +1 분이 올라가며 / 60초가 되면 다시 0초로 초기화
      - func2: 각도 계산 함수 (공통)
     
## 여느날의 작업기록

**1/28**
- 사실 useContext 로 진행할까도 싶었다. 그 이유는 context api도 전역 상태 관리가 꽤나 수월했고, 부모 - 자식 - 형제 간의 긴밀한 정보 전달이 이루어지는 컴포넌트 단까지는 useContext 로 관리하는 게 리덕스같은 덩치 큰 녀석 혹은 라이브러리를 설치해 사용하는 것보다 편하기 때문이었다. 
- 그렇지만 경험해본적이 없는 recoil 을 사용해보기로 했다. 리코일을 선택한 이유는 다음과 같다. 리코일은 atom 을 구독하여 useState 처럼 상태관리가 즉각 실행되어 간편하고 리액트(?)스럽다. 물론 프로젝트 범위가 커진다면 atom 을 너도나도 구독할 수 있기 때문에 주의하여야 하겠지만 현재 만드는 프로젝트는 간단한 구조를 가지고 있으므로 적합하다고 판단되었다.

   
