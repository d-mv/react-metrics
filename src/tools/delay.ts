export async function delay(millis: number): Promise<boolean> {
  if (typeof millis === 'undefined' || millis === null)
    throw new Error('Delay > missing argument');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, millis);
  });
}
