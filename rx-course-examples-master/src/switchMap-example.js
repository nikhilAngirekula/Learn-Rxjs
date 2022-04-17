import { from, fromEvent, interval, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// const moves = fromEvent(canvas, 'mousemove'); // Mousemove is to move the mouse across the canvas.
// const down = fromEvent(canvas, 'mousedown'); // MouseDown is to click on mouse and drag it down.
// const up = fromEvent(canvas, 'mouseup'); // MouseUp is to when you let release the mouse click.

// function brush(coords) {
//   context.lineWidth = 5;
//   context.lineTo(coords.x, coords.y);
//   context.stroke();
// }

// down.pipe(tap((evt) => {
//   context.strokeStyle = "blue";
//   context.beginPath();
//   context.moveTo(evt.offsetX, evt.offsetY); 
// }), switchMap((evt) => moves.pipe(map((evt) => {
//   return {x: evt.offsetX, y: evt.offsetY}
// }), takeUntil(up)))).subscribe((coords) => {
//   brush(coords)
// })

const button = document.getElementById('submit');
const obs1 = fromEvent(button, 'click');
const obs2 = interval(1000);

obs1.pipe(switchMap((e) => {
  return obs2;
})).subscribe(r => {
  console.log(r);
})

