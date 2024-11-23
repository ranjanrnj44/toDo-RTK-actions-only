import { RootState, AppDispatch } from "./store";
import { useSelector, useDispatch } from "react-redux";

// Defining typed version on RootState and AppDispatch so that we can reduce some boiler plate
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
