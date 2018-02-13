import _ from 'underscore';

const sketch = (p) => {
  window.p5 = p;
  p.setup = () => {
    p.background(0, 0, 100);

    let canvas = p.createCanvas(1000, 1000);
    canvas.parent('sketch');
  }

  p.draw = () => {
    p.noLoop();

    p.rect(10, 10, 100, 100)
  }
}

export default sketch;
