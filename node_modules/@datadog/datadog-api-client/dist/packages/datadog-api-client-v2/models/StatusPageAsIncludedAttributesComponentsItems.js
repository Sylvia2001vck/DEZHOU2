"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPageAsIncludedAttributesComponentsItems = void 0;
class StatusPageAsIncludedAttributesComponentsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPageAsIncludedAttributesComponentsItems.attributeTypeMap;
    }
}
exports.StatusPageAsIncludedAttributesComponentsItems = StatusPageAsIncludedAttributesComponentsItems;
/**
 * @ignore
 */
StatusPageAsIncludedAttributesComponentsItems.attributeTypeMap = {
    components: {
        baseName: "components",
        type: "Array<StatusPageAsIncludedAttributesComponentsItemsComponentsItems>",
    },
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
        type: "CreateComponentRequestDataAttributesType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPageAsIncludedAttributesComponentsItems.js.map