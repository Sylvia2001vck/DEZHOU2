"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretRuleData = void 0;
class SecretRuleData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecretRuleData.attributeTypeMap;
    }
}
exports.SecretRuleData = SecretRuleData;
/**
 * @ignore
 */
SecretRuleData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecretRuleDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SecretRuleDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecretRuleData.js.map