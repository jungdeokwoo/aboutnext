import S from "./styles.module.scss";
import Box1 from "@/components/Zustand/Box1/page";
import Box2 from "@/components/Zustand/Box2/page";
import Box3 from "@/components/Zustand/Box3/page";
import Box4 from "@/components/Zustand/Box4/page";

const Zustand = () => {
  return (
    <div>
      <div className={S.zustandDsc}>
        <p>zustand 관련</p>
        <p>store 폴더 내 zustand 폴더 그 하위에 index.ts 파일을 생성하였고</p>
        <p>
          해당 파일 내에서 useZustandStore 를 생성하여 값을 전역으로 관리할 수
          있도록 하였습니다.
        </p>
        <p className={S.strong}>
          useZustandStore 에는 first,second,third,forth 변수들 (초기값 0),
          그리고 그 변수들의 값을 1씩 증가시키거나 감소시키는 핸들러가 있습니다.
        </p>
      </div>
      <div className={S.zustandExp}>
        <p className={S.title}>실습</p>
        각각의 박스는 컴포넌트로 나누어져 있고, 각각의 컴포넌트에서 zustand를
        이용하여 전역변수를 가져오고 있습니다.
        <br />
        <br />
        각각의 박스는 렌더링이 이루어질때마다 font, border 색상이 랜덤하게
        변경됩니다.
        <div className={S.boxWrapper}>
          <Box1 />
          <Box2 />
          <Box3 />
          <Box4 />
        </div>
      </div>
      <div className={S.zustandDsc}>
        <p>1번 박스는 2번 박스와 3번 박스의 zustandStore 값을 공유하고 있다</p>
        <p>2번박스와 3번박스는 값을 공유하고 있지 않는 상황이다</p>
        <p>
          1번 박스에서 값이 변경되면 1번박스의 색상이 변경된다 (리렌더링 됨)
        </p>
        <p>
          1번 박스와 공유되는 값이 있는 박스(2번또는 3번) 박스의 색상도 같이
          변경된다.
        </p>
        <p>
          그 외의 박스는 색상이 변경되지 않는것을 보면, 같은 전역값을 공유하는
          컴포넌트끼리만 값이 변경되었을때 리렌더링이 되고있다.
        </p>
        <p>
          3번 박스의 forth 값은 1번박스에서 공유하고 있지 않지만, 3번박스의
          forth 값이 변경될때마다 1번박스도 같이 색상이 변경된다
        </p>
        <p>
          2,3번 박스에서 store 값을 가져오는 방식은 구조분해할당을 통해 하나씩
          별개로 지정을 해주고, shallow라는 equalityFn을
          설정해주었지만,1번박스는 객체 자체를 반환하여, 해당객체 내의 값이
          변경되면 무조건 리렌더링이 이루어진다.
        </p>
      </div>
    </div>
  );
};

export default Zustand;
