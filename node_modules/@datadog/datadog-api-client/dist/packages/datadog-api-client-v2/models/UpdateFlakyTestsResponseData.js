"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlakyTestsResponseData = void 0;
/**
 * Summary of the update operations. Tells whether a test succeeded or failed to be updated.
 */
class UpdateFlakyTestsResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateFlakyTestsResponseData.attributeTypeMap;
    }
}
exports.UpdateFlakyTestsResponseData = UpdateFlakyTestsResponseData;
/**
 * @ignore
 */
UpdateFlakyTestsResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UpdateFlakyTestsResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "UpdateFlakyTestsResponseDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateFlakyTestsResponseData.js.map