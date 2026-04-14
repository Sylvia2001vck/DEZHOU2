"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
/**
 * Used to handle errors in an action.
 */
class ErrorHandler {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ErrorHandler.attributeTypeMap;
    }
}
exports.ErrorHandler = ErrorHandler;
/**
 * @ignore
 */
ErrorHandler.attributeTypeMap = {
    fallbackStepName: {
        baseName: "fallbackStepName",
        type: "string",
        required: true,
    },
    retryStrategy: {
        baseName: "retryStrategy",
        type: "RetryStrategy",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ErrorHandler.js.map