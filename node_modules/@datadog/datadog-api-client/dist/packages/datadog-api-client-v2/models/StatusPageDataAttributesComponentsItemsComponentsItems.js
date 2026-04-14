"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPageDataAttributesComponentsItemsComponentsItems = void 0;
class StatusPageDataAttributesComponentsItemsComponentsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPageDataAttributesComponentsItemsComponentsItems.attributeTypeMap;
    }
}
exports.StatusPageDataAttributesComponentsItemsComponentsItems = StatusPageDataAttributesComponentsItemsComponentsItems;
/**
 * @ignore
 */
StatusPageDataAttributesComponentsItemsComponentsItems.attributeTypeMap = {
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
//# sourceMappingURL=StatusPageDataAttributesComponentsItemsComponentsItems.js.map