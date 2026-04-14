"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesUser = void 0;
/**
 * The included Datadog user resource.
 */
class StatusPagesUser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesUser.attributeTypeMap;
    }
}
exports.StatusPagesUser = StatusPagesUser;
/**
 * @ignore
 */
StatusPagesUser.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "StatusPagesUserAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    type: {
        baseName: "type",
        type: "StatusPagesUserType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPagesUser.js.map