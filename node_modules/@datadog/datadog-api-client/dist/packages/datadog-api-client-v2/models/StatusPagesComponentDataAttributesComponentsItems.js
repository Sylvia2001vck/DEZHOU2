"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentDataAttributesComponentsItems = void 0;
class StatusPagesComponentDataAttributesComponentsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentDataAttributesComponentsItems.attributeTypeMap;
    }
}
exports.StatusPagesComponentDataAttributesComponentsItems = StatusPagesComponentDataAttributesComponentsItems;
/**
 * @ignore
 */
StatusPagesComponentDataAttributesComponentsItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
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
        type: "StatusPagesComponentGroupAttributesComponentsItemsStatus",
    },
    type: {
        baseName: "type",
        type: "StatusPagesComponentGroupAttributesComponentsItemsType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPagesComponentDataAttributesComponentsItems.js.map