import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { updateTime } from "../clockSlice";

export const useCurrentTime = (): string => {
  const dispatch = useDispatch();
  useEffect(() => {
    const intervalId = setInterval(() => dispatch(updateTime()), 1000);
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return useSelector((state: RootState) => state.clock.currentTime);
};
