"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestResponse = void 0;
/**
 * Response object for a change request.
 */
class ChangeRequestResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestResponse.attributeTypeMap;
    }
}
exports.ChangeRequestResponse = ChangeRequestResponse;
/**
 * @ignore
 */
ChangeRequestResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ChangeRequestResponseData",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<ChangeRequestIncludedItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestResponse.js.map