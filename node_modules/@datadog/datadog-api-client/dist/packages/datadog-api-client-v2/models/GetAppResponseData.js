"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAppResponseData = void 0;
/**
 * The data object containing the app definition.
 */
class GetAppResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetAppResponseData.attributeTypeMap;
    }
}
exports.GetAppResponseData = GetAppResponseData;
/**
 * @ignore
 */
GetAppResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GetAppResponseDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    type: {
        baseName: "type",
        type: "AppDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetAppResponseData.js.map