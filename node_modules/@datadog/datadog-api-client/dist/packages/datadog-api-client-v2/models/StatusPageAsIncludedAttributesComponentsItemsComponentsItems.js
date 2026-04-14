"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPageAsIncludedAttributesComponentsItemsComponentsItems = void 0;
class StatusPageAsIncludedAttributesComponentsItemsComponentsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPageAsIncludedAttributesComponentsItemsComponentsItems.attributeTypeMap;
    }
}
exports.StatusPageAsIncludedAttributesComponentsItemsComponentsItems = StatusPageAsIncludedAttributesComponentsItemsComponentsItems;
/**
 * @ignore
 */
StatusPageAsIncludedAttributesComponentsItemsComponentsItems.attributeTypeMap = {
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
//# sourceMappingURL=StatusPageAsIncludedAttributesComponentsItemsComponentsItems.js.map