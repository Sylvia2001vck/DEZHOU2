"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentResponseMeta = void 0;
/**
 * The metadata object containing pagination metadata.
 */
class IncidentResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentResponseMeta.attributeTypeMap;
    }
}
exports.IncidentResponseMeta = IncidentResponseMeta;
/**
 * @ignore
 */
IncidentResponseMeta.attributeTypeMap = {
    pagination: {
        baseName: "pagination",
        type: "IncidentResponseMetaPagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentResponseMeta.js.map