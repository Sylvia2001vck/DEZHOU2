"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlakyTestsResponseAttributes = void 0;
/**
 * Attributes for the update flaky test state response.
 */
class UpdateFlakyTestsResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateFlakyTestsResponseAttributes.attributeTypeMap;
    }
}
exports.UpdateFlakyTestsResponseAttributes = UpdateFlakyTestsResponseAttributes;
/**
 * @ignore
 */
UpdateFlakyTestsResponseAttributes.attributeTypeMap = {
    hasErrors: {
        baseName: "has_errors",
        type: "boolean",
        required: true,
    },
    results: {
        baseName: "results",
        type: "Array<UpdateFlakyTestsResponseResult>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateFlakyTestsResponseAttributes.js.map