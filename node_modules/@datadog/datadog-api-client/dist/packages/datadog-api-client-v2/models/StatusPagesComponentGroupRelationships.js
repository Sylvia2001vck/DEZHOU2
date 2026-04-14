"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentGroupRelationships = void 0;
/**
 * The relationships of a component group.
 */
class StatusPagesComponentGroupRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentGroupRelationships.attributeTypeMap;
    }
}
exports.StatusPagesComponentGroupRelationships = StatusPagesComponentGroupRelationships;
/**
 * @ignore
 */
StatusPagesComponentGroupRelationships.attributeTypeMap = {
    createdByUser: {
        baseName: "created_by_user",
        type: "StatusPagesComponentGroupRelationshipsCreatedByUser",
    },
    group: {
        baseName: "group",
        type: "StatusPagesComponentGroupRelationshipsGroup",
    },
    lastModifiedByUser: {
        baseName: "last_modified_by_user",
        type: "StatusPagesComponentGroupRelationshipsLastModifiedByUser",
    },
    statusPage: {
        baseName: "status_page",
        type: "StatusPagesComponentGroupRelationshipsStatusPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPagesComponentGroupRelationships.js.map