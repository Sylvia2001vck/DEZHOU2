"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentGroupAttributesComponentsItems = void 0;
class StatusPagesComponentGroupAttributesComponentsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentGroupAttributesComponentsItems.attributeTypeMap;
    }
}
exports.StatusPagesComponentGroupAttributesComponentsItems = StatusPagesComponentGroupAttributesComponentsItems;
/**
 * @ignore
 */
StatusPagesComponentGroupAttributesComponentsItems.attributeTypeMap = {
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
//# sourceMappingURL=StatusPagesComponentGroupAttributesComponentsItems.js.map