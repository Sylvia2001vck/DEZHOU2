import { FakeOptions } from './core/core';
/**
 * Generate a collection from a custom generators functions
 *
 * @category util
 *
 *
 * @example
 *
 * toCollection(() => {
 *   return { data: randNumber(); }
 * }, { length: 10 })
 *
 */
export declare function toCollection<Collection, Options extends FakeOptions = {
    length: number;
}>(generator: () => Collection, options?: Options): Collection[];
