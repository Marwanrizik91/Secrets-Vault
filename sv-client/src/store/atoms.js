import { atom } from "recoil"
import staticFeeds from '../staticFeeds.json'


const feedState = atom({
    key: 'feedState', // unique ID (with respect to other atoms/selectors)
    default: staticFeeds, // default value (aka initial value)
  });