"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlakyTestsRequestData = void 0;
/**
 * The JSON:API data for updating flaky test states.
 */
class UpdateFlakyTestsRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateFlakyTestsRequestData.attributeTypeMap;
    }
}
exports.UpdateFlakyTestsRequestData = UpdateFlakyTestsRequestData;
/**
 * @ignore
 */
UpdateFlakyTestsRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UpdateFlakyTestsRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "UpdateFlakyTestsRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateFlakyTestsRequestData.js.map