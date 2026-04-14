"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlakyTest = void 0;
/**
 * A flaky test object.
 */
class FlakyTest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FlakyTest.attributeTypeMap;
    }
}
exports.FlakyTest = FlakyTest;
/**
 * @ignore
 */
FlakyTest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FlakyTestAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "FlakyTestType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FlakyTest.js.map