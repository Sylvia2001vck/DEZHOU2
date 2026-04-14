/** Base class for all metric types. */
export class Metric {
    /**
     * Create a new metric object. Metric objects model each unique metric name
     * and tag combination, keep track of each relevant data point, and
     * calculate any derivative metrics (e.g. averages, percentiles, etc.).
     * @param {string} key
     * @param {string[]} [tags]
     * @param {string} [host]
     */
    constructor(key: string, tags?: string[], host?: string);
    key: string;
    tags: string[];
    host: string;
    addPoint(): any;
    flush(): any;
    /** @protected */
    protected posixTimestamp(timestampInMillis: any): number;
    /** @protected */
    protected updateTimestamp(timestampInMillis: any): void;
    timestamp: number;
    /** @protected */
    protected serializeMetric(value: any, type: any, key: any): {
        metric: any;
        points: any[][];
        type: any;
        host: string;
        tags: string[];
    };
}
export class Gauge extends Metric {
    value: number;
    addPoint(val: any, timestampInMillis: any): void;
    flush(): {
        metric: any;
        points: any[][];
        type: any;
        host: string;
        tags: string[];
    }[];
}
export class Counter extends Metric {
    value: number;
    addPoint(val: any, timestampInMillis: any): void;
    flush(): {
        metric: any;
        points: any[][];
        type: any;
        host: string;
        tags: string[];
    }[];
}
export class Histogram extends Metric {
    /**
     * Sample a histogram value. Histograms will produce metrics that
     * describe the distribution of the recorded values, namely the minimum,
     * maximum, average, count and the 75th, 85th, 95th and 99th percentiles.
     * Optionally, specify a list of *tags* to associate with the metric.
     * @param {string} key
     * @param {string[]} [tags]
     * @param {string} [host]
     */
    constructor(key: string, tags?: string[], host?: string, options?: {});
    min: number;
    max: number;
    sum: number;
    count: number;
    samples: any[];
    aggregates: any;
    percentiles: any;
    addPoint(val: any, timestampInMillis: any): void;
    flush(): {
        metric: any;
        points: any[][];
        type: any;
        host: string;
        tags: string[];
    }[];
    average(): number;
    median(sortedSamples: any): any;
}
export class Distribution extends Metric {
    points: any[];
    addPoint(val: any, timestampInMillis: any): void;
    flush(): {
        metric: any;
        points: any;
        type: any;
        host: string;
        tags: string[];
    }[];
    serializeMetric(points: any, type: any, key: any): {
        metric: any;
        points: any;
        type: any;
        host: string;
        tags: string[];
    };
}
//# sourceMappingURL=metrics.d.ts.map