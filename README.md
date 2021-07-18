Wanted Pre-onboarding 사전과제

# Nav 만들기 입니다.

구현 완료 된 항목은

- 탐색란에 mouseOver시 메뉴가 확장
- 반응형 구현
  입니다.

사용된 라이브러리는

- styled-components
- styled-reset
- react-fontawesome
  입니다.

각각의 라이브러리를 선택한 이유는

- styled-components

  - css를 사용하기 위해 사용하였습니다. scss를 사용하지 않고 styled components를 사용한 이유는
    스타일링을 위해 많은 className을 사용하지 않고, 필요한 부분에만 className을 붙이는것이 좋다 생각하였기 때문입니다.
    state, 혹은 props를 이용하여 동적 스타일링이 가능한것도 메리트라 생각하였습니다.

- styled-reset

  - styled-components를 사용하면서 함께 reset을 사용하기 위해서 사용 하였습니다.
    따로 파일을 만들지 않고, globalStyle에서 간편하게 사용할 수 있어 좋다 생각하였습니다.

- react-fontawesome

  - fontawesome에서 다양한 아이콘들을 가져오기 위해 사용 하였습니다.
    필요한 여러 svg를 다운로드 해서 사용하는것이 아니라 컴포넌트화 시켜서 사용 할 수 있고, 필요할때 import를 해서
    간편하게 추가가 가능한면에서 좋다 생각하였습니다.
