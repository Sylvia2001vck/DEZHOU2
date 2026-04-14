"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentData = void 0;
class StatusPagesComponentData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentData.attributeTypeMap;
    }
}
exports.StatusPagesComponentData = StatusPagesComponentData;
/**
 * @ignore
 */
StatusPagesComponentData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "StatusPagesComponentDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    relationships: {
        baseName: "relationships",
        type: "StatusPagesComponentDataRelationships",
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
//# sourceMappingURL=StatusPagesComponentData.js.map