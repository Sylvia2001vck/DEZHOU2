"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentGroupAttributes = void 0;
/**
 * The attributes of a component group.
 */
class StatusPagesComponentGroupAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentGroupAttributes.attributeTypeMap;
    }
}
exports.StatusPagesComponentGroupAttributes = StatusPagesComponentGroupAttributes;
/**
 * @ignore
 */
StatusPagesComponentGroupAttributes.attributeTypeMap = {
    components: {
        baseName: "components",
        type: "Array<StatusPagesComponentGroupAttributesComponentsItems>",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    position: {
        baseName: "position",
        type: "number",
        format: "int64",
    },
    status: {
        baseName: "status",
        type: "StatusPagesComponentDataAttributesStatus",
    },
    type: {
        baseName: "type",
        type: "CreateComponentRequestDataAttributesType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPagesComponentGroupAttributes.js.map