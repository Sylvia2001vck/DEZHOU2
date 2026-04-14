"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetryStrategy = void 0;
/**
 * The definition of `RetryStrategy` object.
 */
class RetryStrategy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetryStrategy.attributeTypeMap;
    }
}
exports.RetryStrategy = RetryStrategy;
/**
 * @ignore
 */
RetryStrategy.attributeTypeMap = {
    kind: {
        baseName: "kind",
        type: "RetryStrategyKind",
        required: true,
    },
    linear: {
        baseName: "linear",
        type: "RetryStrategyLinear",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RetryStrategy.js.map