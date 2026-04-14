"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMEvent = void 0;
/**
 * Object description of a RUM event after being processed and stored by Datadog.
 */
class RUMEvent {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMEvent.attributeTypeMap;
    }
}
exports.RUMEvent = RUMEvent;
/**
 * @ignore
 */
RUMEvent.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RUMEventAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "RUMEventType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMEvent.js.map