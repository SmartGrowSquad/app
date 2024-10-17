import { useEffect, useState } from "react";
import { Body16 } from "./StyledText";

interface TimerProps {
  duration: number;
  OnTimeExpire: () => void; 
}
export default function Timer({
  duration,
  OnTimeExpire,
}: TimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(duration);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 1) {
          OnTimeExpire(); // 시간이 끝났을 때 콜백 호출
          return duration; // 시간 리셋
        }
        return prevTime - 1; // 매초 1씩 감소
      });
    }, 1000); // 1초마다 실행

    return () => {
      clearInterval(countdownInterval); // 컴포넌트 언마운트 시 타이머 정리
    };
  }, [duration, OnTimeExpire]);

  return <Body16>남은 시간: {timeRemaining}초</Body16>;
}
