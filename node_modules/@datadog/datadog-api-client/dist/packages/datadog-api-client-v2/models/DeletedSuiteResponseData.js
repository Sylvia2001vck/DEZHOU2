"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedSuiteResponseData = void 0;
class DeletedSuiteResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeletedSuiteResponseData.attributeTypeMap;
    }
}
exports.DeletedSuiteResponseData = DeletedSuiteResponseData;
/**
 * @ignore
 */
DeletedSuiteResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DeletedSuiteResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SyntheticsSuiteTypes",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeletedSuiteResponseData.js.map