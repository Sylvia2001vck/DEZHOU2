"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentGroupRelationshipsGroup = void 0;
/**
 * The group the component group belongs to.
 */
class StatusPagesComponentGroupRelationshipsGroup {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentGroupRelationshipsGroup.attributeTypeMap;
    }
}
exports.StatusPagesComponentGroupRelationshipsGroup = StatusPagesComponentGroupRelationshipsGroup;
/**
 * @ignore
 */
StatusPagesComponentGroupRelationshipsGroup.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "StatusPagesComponentGroupRelationshipsGroupData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPagesComponentGroupRelationshipsGroup.js.map