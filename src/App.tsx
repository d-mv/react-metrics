import classes from './App.module.scss';
import { Paragraph } from './Paragraph';
import { Profiler } from './Profiler';

export function App() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        Ullamco qui officia laborum minim exercitation aliquip occaecat.
      </header>
      <Profiler renderId='Paragraph'>
        <Paragraph />
      </Profiler>
    </div>
  );
}
