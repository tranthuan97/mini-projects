import { useContext } from "react";
import Context from "./Context";

export const useContextApi = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
}


