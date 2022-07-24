import { logInfo, logWarn } from './logger';

const IS_LOCAL = true;

export function perfMark(tag: string, show = false) {
  performance.mark(tag);
  if (show && IS_LOCAL) logWarn(`>>> latency mark for [ ${tag} ]`);
}

interface PerfMeasureOptions {
  fractions: number;
  startTag: string;
  endTag: string;
}

export function perfMeasure(
  tag: string,
  startTagOrOptions?: string | Partial<PerfMeasureOptions>,
  endTag?: string
) {
  let start = `${tag}-start`;
  let end = `${tag}-end`;
  let fractions = 2;

  if (!!startTagOrOptions) {
    if (typeof startTagOrOptions === 'string') start = startTagOrOptions;
    else if (typeof startTagOrOptions === 'object') {
      if (startTagOrOptions.startTag) start = startTagOrOptions.startTag;
      if (startTagOrOptions.endTag) end = startTagOrOptions.endTag;
      // eslint-disable-next-line max-len
      if (startTagOrOptions.fractions && typeof fractions === 'number') {
        fractions = 10 ** startTagOrOptions.fractions;
      }
    }
  }

  if (!(startTagOrOptions as PerfMeasureOptions)?.endTag && !endTag) {
    end = `${tag}-end`;
    perfMark(`${tag}-end`);
  }

  const p = performance.measure(
    tag,
    start ?? `${tag}-start`,
    end ?? `${tag}-end`
  );

  if (IS_LOCAL) {
    logInfo(
      `>>> latency for [ ${tag} ]: ${
        Math.round(p.duration * fractions) / fractions
      } ms`
    );
  }
}
