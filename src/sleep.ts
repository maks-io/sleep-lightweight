export const sleep = async (milliseconds: number): Promise<unknown> => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};
