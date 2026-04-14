"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAIncidentObject = void 0;
/**
 * A DORA incident event.
 */
class DORAIncidentObject {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAIncidentObject.attributeTypeMap;
    }
}
exports.DORAIncidentObject = DORAIncidentObject;
/**
 * @ignore
 */
DORAIncidentObject.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DORAIncidentObjectAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DORAFailureType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORAIncidentObject.js.map