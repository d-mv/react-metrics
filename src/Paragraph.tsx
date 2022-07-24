import { useEffect } from 'react';

import { perfMark, perfMeasure, delay, count } from './tools';
import classes from './Paragraph.module.scss';

async function test() {
  perfMark('Paragraph-start');
  await delay(2000);
  perfMeasure('Paragraph');
}

export function Paragraph() {
  useEffect(() => {
    count('Paragraph');
    test();
  }, []);

  return (
    <p className={classes.paragraph}>
      Quis velit voluptate magna eiusmod non ex ea incididunt in excepteur ex
      consectetur Lorem. Esse est amet aliquip et Lorem quis. Irure eu et et
      ipsum ea est irure aliquip minim nisi sunt. Est mollit ea aliqua fugiat
      enim sit id. Lorem do dolore veniam dolore aliqua officia est ad esse
      ullamco.
    </p>
  );
}
