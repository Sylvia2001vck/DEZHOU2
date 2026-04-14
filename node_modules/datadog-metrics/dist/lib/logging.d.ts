/**
 * A prefixed instance of the `debug` logger. You can call this directly, or
 * call `extend()` on it to create a nested logger.
 * @type {debug.Debugger}
 */
export const logDebug: debug.Debugger;
/**
 * Logs a deprecation warning to stderr once. If this is called multiple times
 * with the same message, it will only log once.
 * @param {string} message Deprecation message to log.
 */
export function logDeprecation(message: string): void;
/**
 * Logs an error object or message to stderr. Unlike `logDebug()`, this will
 * always print output, so should only be used for significant failures users
 * *need* to know about.
 * @param {string|Error} error The error to log.
 */
export function logError(error: string | Error, ...extra: any[]): void;
//# sourceMappingURL=logging.d.ts.map