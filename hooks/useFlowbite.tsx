import {useEffect} from "react";
import {initFlowbite} from "flowbite";

const useFlowbite = () => {
  useEffect(() => {
    initFlowbite()
  }, []);
};

export default useFlowbite;
q
