"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsCompute = void 0;
/**
 * The instructions for what to compute for this query.
 */
class EventsCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventsCompute.attributeTypeMap;
    }
}
exports.EventsCompute = EventsCompute;
/**
 * @ignore
 */
EventsCompute.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "EventsAggregation",
        required: true,
    },
    interval: {
        baseName: "interval",
        type: "number",
        format: "int64",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventsCompute.js.map