import { add, animate } from "./helpers";
import { fromEvent, interval } from "rxjs";
import { 
    exhaustMap, 
    switchMap, 
    mergeMap,
    map,
    take
} from "rxjs/operators";

// Projects each source value to an Observable which is merged
// in the output Observable only if the previous projected
// Observable has completed.

const startButton = document.getElementById("start");
const startClicked = fromEvent(startButton, "click");
const circle = document.getElementById("circle");

startClicked
    .pipe(
        mergeMap(
            () => {
                return animate(5000)
            }
        )
    ).subscribe(
        (t) => {
            circle.style.marginLeft = `${t*450}px`
        }
    )