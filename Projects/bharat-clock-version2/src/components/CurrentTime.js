import { useEffect, useState } from "react";
let CurrentTime = () => {
  // let time = new Date();

  //taking initial value new Date() in state....
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    //taking method and time...
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      //how to cancel setInterval...
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
