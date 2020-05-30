import { atom } from "recoil"

export const feedState = atom({
    key: 'feedState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });
