
test.repeats = async (
  times: number,
  name: string,
  fn?: jest.ProvidesCallback,
  timeout?: number,
) => {
  await Promise.all(
    Array(times)
      .fill(undefined)
      .map((_, i) => {
        console.info(`Running test ${i} ${name}`);
        return test(name, fn, timeout);
      }),
  );
};
