export class Aggregator {
    /**
     * Create an aggregator to group and buffer metric objects.
     * @param {string[]} defaultTags
     */
    constructor(defaultTags: string[]);
    buffer: Map<any, any>;
    defaultTags: string[];
    /** @protected */
    protected makeBufferKey(key: any, tags: any): string;
    addPoint(Type: any, key: any, value: any, tags: any, host: any, timestampInMillis: any, options: any): void;
    flush(): any[];
}
//# sourceMappingURL=aggregators.d.ts.map