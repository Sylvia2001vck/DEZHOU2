"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCaseReference = void 0;
/**
 * The case the issue is attached to.
 */
class IssueCaseReference {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueCaseReference.attributeTypeMap;
    }
}
exports.IssueCaseReference = IssueCaseReference;
/**
 * @ignore
 */
IssueCaseReference.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IssueCaseResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueCaseReference.js.map