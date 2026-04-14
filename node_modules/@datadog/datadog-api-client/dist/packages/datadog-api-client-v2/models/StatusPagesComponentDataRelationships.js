"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentDataRelationships = void 0;
/**
 * The relationships of a component.
 */
class StatusPagesComponentDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentDataRelationships.attributeTypeMap;
    }
}
exports.StatusPagesComponentDataRelationships = StatusPagesComponentDataRelationships;
/**
 * @ignore
 */
StatusPagesComponentDataRelationships.attributeTypeMap = {
    createdByUser: {
        baseName: "created_by_user",
        type: "StatusPagesComponentDataRelationshipsCreatedByUser",
    },
    group: {
        baseName: "group",
        type: "StatusPagesComponentDataRelationshipsGroup",
    },
    lastModifiedByUser: {
        baseName: "last_modified_by_user",
        type: "StatusPagesComponentDataRelationshipsLastModifiedByUser",
    },
    statusPage: {
        baseName: "status_page",
        type: "StatusPagesComponentDataRelationshipsStatusPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPagesComponentDataRelationships.js.map