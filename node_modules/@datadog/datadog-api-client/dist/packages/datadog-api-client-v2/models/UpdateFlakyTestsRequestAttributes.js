"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlakyTestsRequestAttributes = void 0;
/**
 * Attributes for updating flaky test states.
 */
class UpdateFlakyTestsRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateFlakyTestsRequestAttributes.attributeTypeMap;
    }
}
exports.UpdateFlakyTestsRequestAttributes = UpdateFlakyTestsRequestAttributes;
/**
 * @ignore
 */
UpdateFlakyTestsRequestAttributes.attributeTypeMap = {
    tests: {
        baseName: "tests",
        type: "Array<UpdateFlakyTestsRequestTest>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateFlakyTestsRequestAttributes.js.map