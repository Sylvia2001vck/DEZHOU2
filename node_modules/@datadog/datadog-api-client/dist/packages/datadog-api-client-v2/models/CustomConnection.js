"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomConnection = void 0;
/**
 * A custom connection used by an app.
 */
class CustomConnection {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomConnection.attributeTypeMap;
    }
}
exports.CustomConnection = CustomConnection;
/**
 * @ignore
 */
CustomConnection.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomConnectionAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    type: {
        baseName: "type",
        type: "CustomConnectionType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomConnection.js.map