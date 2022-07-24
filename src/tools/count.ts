import { logWarn } from './logger';

const counts: Record<string, number> = {};
// eslint-disable-next-line import/prefer-default-export
export function count(tag: string) {
  let newCount = 1;
  if (tag in counts) newCount = counts[tag] + 1;

  counts[tag] = newCount;

  logWarn(`>>> count for [ ${tag} ]: ${newCount}`);
}
