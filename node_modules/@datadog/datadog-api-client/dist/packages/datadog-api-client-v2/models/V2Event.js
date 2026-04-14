"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V2Event = void 0;
/**
 * An event object.
 */
class V2Event {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return V2Event.attributeTypeMap;
    }
}
exports.V2Event = V2Event;
/**
 * @ignore
 */
V2Event.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "V2EventAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=V2Event.js.map