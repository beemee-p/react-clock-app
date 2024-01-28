/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { minutesAtom, secondsAtom } from 'store/Time';

const Minutes = (): ReactElement => {
  const seconds = useRecoilValue(secondsAtom);
  const [minutes, setMinutes] = useRecoilState(minutesAtom);

  useEffect(() => {
    handleMinutes();
  }, [seconds]);

  function handleMinutes() {
    setMinutes(prevMin => {
      if (seconds === 0) {
        if (prevMin >= 59) {
          return 0;
        }
        return prevMin + 1;
      }

      return prevMin;
    });
  }
  return <div>Minutes : {minutes}</div>;
};

export default Minutes;
