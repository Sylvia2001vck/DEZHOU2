"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfaceAttributes = void 0;
/**
 * The interface attributes
 */
class InterfaceAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return InterfaceAttributes.attributeTypeMap;
    }
}
exports.InterfaceAttributes = InterfaceAttributes;
/**
 * @ignore
 */
InterfaceAttributes.attributeTypeMap = {
    alias: {
        baseName: "alias",
        type: "string",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    index: {
        baseName: "index",
        type: "number",
        format: "int64",
    },
    ipAddresses: {
        baseName: "ip_addresses",
        type: "Array<string>",
    },
    macAddress: {
        baseName: "mac_address",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "InterfaceAttributesStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=InterfaceAttributes.js.map