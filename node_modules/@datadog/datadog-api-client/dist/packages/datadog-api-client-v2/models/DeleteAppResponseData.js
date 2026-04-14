"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAppResponseData = void 0;
/**
 * The definition of `DeleteAppResponseData` object.
 */
class DeleteAppResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeleteAppResponseData.attributeTypeMap;
    }
}
exports.DeleteAppResponseData = DeleteAppResponseData;
/**
 * @ignore
 */
DeleteAppResponseData.attributeTypeMap = {
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
//# sourceMappingURL=DeleteAppResponseData.js.map