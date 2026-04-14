"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentGroup = void 0;
/**
 * The included component group resource.
 */
class StatusPagesComponentGroup {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentGroup.attributeTypeMap;
    }
}
exports.StatusPagesComponentGroup = StatusPagesComponentGroup;
/**
 * @ignore
 */
StatusPagesComponentGroup.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "StatusPagesComponentGroupAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    relationships: {
        baseName: "relationships",
        type: "StatusPagesComponentGroupRelationships",
    },
    type: {
        baseName: "type",
        type: "StatusPagesComponentGroupType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPagesComponentGroup.js.map