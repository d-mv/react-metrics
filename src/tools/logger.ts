export function logWarn(message: unknown, ...payload: unknown[]) {
  // eslint-disable-next-line no-console, max-len
  console.log(
    `%c${message}`,
    'color: sienna; background-color: bisque; padding: 3px 8px; border-radius: 4px;',
    ...payload
  );
}
export function logError(message: unknown, ...payload: unknown[]) {
  // eslint-disable-next-line no-console, max-len
  console.error(
    `%c${message}`,
    'color: red; background-color: pink; padding: 3px 8px; border-radius: 4px;',
    ...payload
  );
}
export function logInfo(message: unknown, ...payload: unknown[]) {
  // eslint-disable-next-line no-console, max-len
  console.info(
    `%c${message}`,
    'color: green; background-color: lightgreen; padding: 3px 8px; border-radius: 4px;',
    ...payload
  );
}
