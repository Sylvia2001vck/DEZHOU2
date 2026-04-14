"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricUniqueness = void 0;
/**
 * The rule to count updatable events. Is only set if `event_type` is `sessions` or `views`.
 */
class RumMetricUniqueness {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricUniqueness.attributeTypeMap;
    }
}
exports.RumMetricUniqueness = RumMetricUniqueness;
/**
 * @ignore
 */
RumMetricUniqueness.attributeTypeMap = {
    when: {
        baseName: "when",
        type: "RumMetricUniquenessWhen",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricUniqueness.js.map