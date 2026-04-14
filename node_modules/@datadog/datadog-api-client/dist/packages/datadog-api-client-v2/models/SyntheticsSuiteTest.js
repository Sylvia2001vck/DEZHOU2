"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsSuiteTest = void 0;
/**
 * Object containing details about a Synthetic test included in a Synthetic suite.
 */
class SyntheticsSuiteTest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsSuiteTest.attributeTypeMap;
    }
}
exports.SyntheticsSuiteTest = SyntheticsSuiteTest;
/**
 * @ignore
 */
SyntheticsSuiteTest.attributeTypeMap = {
    alertingCriticality: {
        baseName: "alerting_criticality",
        type: "SyntheticsSuiteTestAlertingCriticality",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsSuiteTest.js.map