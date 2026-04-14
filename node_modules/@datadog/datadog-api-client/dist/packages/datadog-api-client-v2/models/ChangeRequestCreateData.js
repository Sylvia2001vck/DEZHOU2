"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestCreateData = void 0;
/**
 * Data object to create a change request.
 */
class ChangeRequestCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestCreateData.attributeTypeMap;
    }
}
exports.ChangeRequestCreateData = ChangeRequestCreateData;
/**
 * @ignore
 */
ChangeRequestCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ChangeRequestCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ChangeRequestResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestCreateData.js.map