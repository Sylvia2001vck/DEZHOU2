"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHierarchyLinkCreateRequest = void 0;
/**
 * Request to create a team hierarchy link
 */
class TeamHierarchyLinkCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamHierarchyLinkCreateRequest.attributeTypeMap;
    }
}
exports.TeamHierarchyLinkCreateRequest = TeamHierarchyLinkCreateRequest;
/**
 * @ignore
 */
TeamHierarchyLinkCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamHierarchyLinkCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamHierarchyLinkCreateRequest.js.map