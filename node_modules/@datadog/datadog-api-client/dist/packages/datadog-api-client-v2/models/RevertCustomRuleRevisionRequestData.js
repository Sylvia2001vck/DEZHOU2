"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevertCustomRuleRevisionRequestData = void 0;
class RevertCustomRuleRevisionRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RevertCustomRuleRevisionRequestData.attributeTypeMap;
    }
}
exports.RevertCustomRuleRevisionRequestData = RevertCustomRuleRevisionRequestData;
/**
 * @ignore
 */
RevertCustomRuleRevisionRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RevertCustomRuleRevisionRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "RevertCustomRuleRevisionDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RevertCustomRuleRevisionRequestData.js.map