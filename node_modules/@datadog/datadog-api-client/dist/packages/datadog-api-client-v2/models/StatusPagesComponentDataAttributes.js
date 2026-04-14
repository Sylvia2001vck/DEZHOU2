"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentDataAttributes = void 0;
/**
 * The attributes of a component.
 */
class StatusPagesComponentDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentDataAttributes.attributeTypeMap;
    }
}
exports.StatusPagesComponentDataAttributes = StatusPagesComponentDataAttributes;
/**
 * @ignore
 */
StatusPagesComponentDataAttributes.attributeTypeMap = {
    components: {
        baseName: "components",
        type: "Array<StatusPagesComponentDataAttributesComponentsItems>",
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
//# sourceMappingURL=StatusPagesComponentDataAttributes.js.map