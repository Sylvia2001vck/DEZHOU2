"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConfigWriteRequest = void 0;
/**
 * A request to update an Org Config.
 */
class OrgConfigWriteRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConfigWriteRequest.attributeTypeMap;
    }
}
exports.OrgConfigWriteRequest = OrgConfigWriteRequest;
/**
 * @ignore
 */
OrgConfigWriteRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OrgConfigWrite",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConfigWriteRequest.js.map