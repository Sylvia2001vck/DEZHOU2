"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListConnectionsResponseDataAttributes = void 0;
class ListConnectionsResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListConnectionsResponseDataAttributes.attributeTypeMap;
    }
}
exports.ListConnectionsResponseDataAttributes = ListConnectionsResponseDataAttributes;
/**
 * @ignore
 */
ListConnectionsResponseDataAttributes.attributeTypeMap = {
    connections: {
        baseName: "connections",
        type: "Array<ListConnectionsResponseDataAttributesConnectionsItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListConnectionsResponseDataAttributes.js.map