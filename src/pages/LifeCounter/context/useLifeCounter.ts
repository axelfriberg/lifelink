import { useContext } from "react";
import {
  LifeCounterContext,
  LifeCounterContextType,
} from "./LifeCounterContext";

export function useLifeCounter(): LifeCounterContextType {
  return useContext(LifeCounterContext);
}
