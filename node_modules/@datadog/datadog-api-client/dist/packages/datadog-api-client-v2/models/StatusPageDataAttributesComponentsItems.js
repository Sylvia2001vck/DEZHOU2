"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPageDataAttributesComponentsItems = void 0;
class StatusPageDataAttributesComponentsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPageDataAttributesComponentsItems.attributeTypeMap;
    }
}
exports.StatusPageDataAttributesComponentsItems = StatusPageDataAttributesComponentsItems;
/**
 * @ignore
 */
StatusPageDataAttributesComponentsItems.attributeTypeMap = {
    components: {
        baseName: "components",
        type: "Array<StatusPageDataAttributesComponentsItemsComponentsItems>",
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
//# sourceMappingURL=StatusPageDataAttributesComponentsItems.js.map