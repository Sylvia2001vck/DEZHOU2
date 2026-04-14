export type BufferedMetricsLoggerOptions = import("./lib/loggers").BufferedMetricsLoggerOptions;
/**
 * Configure the datadog-metrics library.
 *
 * Any settings used here will apply to the top-level metrics functions (e.g.
 * `increment()`, `gauge()`). If you need multiple separate configurations, use
 * the `BufferedMetricsLogger` class.
 * @param {BufferedMetricsLoggerOptions} [opts]
 */
export function init(opts?: BufferedMetricsLoggerOptions): void;
import { BufferedMetricsLogger } from "./lib/loggers";
import reporters = require("./lib/reporters");
export declare const flush: (onSuccess?: () => void, onError?: (error: Error) => void) => Promise<any>;
export declare const stop: (options?: {
    flush?: boolean;
}) => Promise<any>;
export declare const gauge: (key: string, value: number, tags?: string[], timestampInMillis?: number) => void;
export declare const increment: (key: string, value?: number, tags?: string[], timestampInMillis?: number) => void;
export declare const histogram: (key: string, value: number, tags?: string[], timestampInMillis?: number, options?: any) => void;
export declare const distribution: (key: string, value: number, tags?: string[], timestampInMillis?: number) => void;
export { BufferedMetricsLogger, reporters };
//# sourceMappingURL=index.d.ts.map