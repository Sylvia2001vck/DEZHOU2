"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPSTSServiceAccountUpdateRequestData = void 0;
/**
 * Data on your service account.
 */
class GCPSTSServiceAccountUpdateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPSTSServiceAccountUpdateRequestData.attributeTypeMap;
    }
}
exports.GCPSTSServiceAccountUpdateRequestData = GCPSTSServiceAccountUpdateRequestData;
/**
 * @ignore
 */
GCPSTSServiceAccountUpdateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GCPSTSServiceAccountAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "GCPServiceAccountType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPSTSServiceAccountUpdateRequestData.js.map