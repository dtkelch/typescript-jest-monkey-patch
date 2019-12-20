/// <reference types="jest" />

declare namespace jest {
  interface It {
    repeats: (
      times: number,
      name: string,
      fn?: ProvidesCallback,
      timeout?: number,
    ) => void;
  }
}
