"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPSTSDelegateAccountResponse = void 0;
/**
 * Your delegate service account response data.
 */
class GCPSTSDelegateAccountResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPSTSDelegateAccountResponse.attributeTypeMap;
    }
}
exports.GCPSTSDelegateAccountResponse = GCPSTSDelegateAccountResponse;
/**
 * @ignore
 */
GCPSTSDelegateAccountResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GCPSTSDelegateAccount",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPSTSDelegateAccountResponse.js.map