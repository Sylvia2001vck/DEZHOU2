"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInterfacesResponse = void 0;
/**
 * The `GetInterfaces` operation's response.
 */
class GetInterfacesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetInterfacesResponse.attributeTypeMap;
    }
}
exports.GetInterfacesResponse = GetInterfacesResponse;
/**
 * @ignore
 */
GetInterfacesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<GetInterfacesData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetInterfacesResponse.js.map