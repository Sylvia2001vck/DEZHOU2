"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretRuleArray = void 0;
class SecretRuleArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecretRuleArray.attributeTypeMap;
    }
}
exports.SecretRuleArray = SecretRuleArray;
/**
 * @ignore
 */
SecretRuleArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SecretRuleData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecretRuleArray.js.map