"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricResponseUniqueness = void 0;
/**
 * The rule to count updatable events. Is only set if `event_type` is `session` or `view`.
 */
class RumMetricResponseUniqueness {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricResponseUniqueness.attributeTypeMap;
    }
}
exports.RumMetricResponseUniqueness = RumMetricResponseUniqueness;
/**
 * @ignore
 */
RumMetricResponseUniqueness.attributeTypeMap = {
    when: {
        baseName: "when",
        type: "RumMetricUniquenessWhen",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricResponseUniqueness.js.map