"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransform = void 0;
/**
 * A data transformer, which is custom JavaScript code that executes and transforms data when its inputs change.
 */
class DataTransform {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DataTransform.attributeTypeMap;
    }
}
exports.DataTransform = DataTransform;
/**
 * @ignore
 */
DataTransform.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    properties: {
        baseName: "properties",
        type: "DataTransformProperties",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DataTransformType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DataTransform.js.map