"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInterfacesData = void 0;
/**
 * The interfaces list data
 */
class GetInterfacesData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetInterfacesData.attributeTypeMap;
    }
}
exports.GetInterfacesData = GetInterfacesData;
/**
 * @ignore
 */
GetInterfacesData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "InterfaceAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetInterfacesData.js.map