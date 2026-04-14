"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuiteCreateEdit = void 0;
class SuiteCreateEdit {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SuiteCreateEdit.attributeTypeMap;
    }
}
exports.SuiteCreateEdit = SuiteCreateEdit;
/**
 * @ignore
 */
SuiteCreateEdit.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SyntheticsSuite",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SyntheticsSuiteTypes",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SuiteCreateEdit.js.map