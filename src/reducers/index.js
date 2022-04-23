import { plusMinus } from "./plusminus";
import {combineReducers} from "redux";

const rootReducers = combineReducers({
    jogbiyog : plusMinus
})
export default rootReducers