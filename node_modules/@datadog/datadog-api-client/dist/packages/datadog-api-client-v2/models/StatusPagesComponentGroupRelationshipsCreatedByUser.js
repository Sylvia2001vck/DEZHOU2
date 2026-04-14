"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentGroupRelationshipsCreatedByUser = void 0;
/**
 * The Datadog user who created the component group.
 */
class StatusPagesComponentGroupRelationshipsCreatedByUser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentGroupRelationshipsCreatedByUser.attributeTypeMap;
    }
}
exports.StatusPagesComponentGroupRelationshipsCreatedByUser = StatusPagesComponentGroupRelationshipsCreatedByUser;
/**
 * @ignore
 */
StatusPagesComponentGroupRelationshipsCreatedByUser.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "StatusPagesComponentGroupRelationshipsCreatedByUserData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPagesComponentGroupRelationshipsCreatedByUser.js.map