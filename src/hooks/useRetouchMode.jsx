import { useState } from "react";

const useRetouchMode = () => {
  const [status, setStatus] = useState(false);

  const retouchModeOn = () => {
    setStatus(true);
  };

  const retouchModeOff = () => {
    setStatus(false);
  };

  return { retouchMode: status, retouchModeOn, retouchModeOff };
};

export default useRetouchMode;
