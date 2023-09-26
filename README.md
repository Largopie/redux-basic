# Vanilla Redux

Vanilla Redux와 React-Redux 학습 저장소


## Redux

- [] store: 데이터를 저장하는 곳
- [] createStore: reducer 요구
- [] reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨
- [] action: Redux에서 function을 부를 때 쓰는 두 번째 parameter 또는 argument로 reducer와 소통하기 위한 방법
- [] subscribe: store 안에 있는 변화 감지
    > ex) `store.subscribe(func)` store 내부의 변화를 감지하면 func 실행