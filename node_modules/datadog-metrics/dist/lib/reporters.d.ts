export type DatadogReporterOptions = {
    /**
     * Datadog API key.
     */
    apiKey?: string;
    /**
     * DEPRECATED! This option does nothing.
     */
    appKey?: string;
    /**
     * The Datadog "site" to send metrics to.
     */
    site?: string;
    /**
     * Retry failed requests up to this many times.
     */
    retries?: number;
    /**
     * Delay before retries. Subsequent retries
     * wait this long multiplied by 2^(retry count).
     */
    retryBackoff?: number;
};
/**
 * A Reporter that throws away metrics instead of sending them to Datadog. This
 * is useful for disabling metrics in your application and for tests.
 */
export class NullReporter {
    report(_series: any): Promise<void>;
}
/**
 * Create a reporter that sends metrics to Datadog's API.
 */
export class DatadogReporter {
    /**
     * Create a reporter that sends metrics to Datadog's API.
     * @param {DatadogReporterOptions} [options]
     */
    constructor(options?: DatadogReporterOptions);
    site: string;
    /**
     * Send an array of serialized metrics to Datadog.
     * @param {any[]} series
     * @returns {Promise}
     */
    report(series: any[]): Promise<any>;
}
/**
 * @deprecated Please use `DatadogReporter` instead.
 */
export class DataDogReporter extends DatadogReporter {
    /**
     * Create a reporter that sends metrics to Datadog's API.
     * @deprecated
     * @param {string} [apiKey]
     * @param {string} [appKey]
     * @param {string} [site]
     */
    constructor(apiKey?: string, appKey?: string, site?: string);
}
//# sourceMappingURL=reporters.d.ts.map