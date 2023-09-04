import { useDispatch } from "react-redux";
import { addFilter } from "redux/actions";

export const Filter = () => {
  const dispatch = useDispatch()
  return <input name="filter" onChange={(event)=>dispatch(addFilter(event.target.value))} />;
};
