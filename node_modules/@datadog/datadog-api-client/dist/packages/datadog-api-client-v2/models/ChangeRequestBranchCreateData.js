"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestBranchCreateData = void 0;
/**
 * Data object to create a change request branch.
 */
class ChangeRequestBranchCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestBranchCreateData.attributeTypeMap;
    }
}
exports.ChangeRequestBranchCreateData = ChangeRequestBranchCreateData;
/**
 * @ignore
 */
ChangeRequestBranchCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ChangeRequestBranchCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ChangeRequestBranchResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestBranchCreateData.js.map