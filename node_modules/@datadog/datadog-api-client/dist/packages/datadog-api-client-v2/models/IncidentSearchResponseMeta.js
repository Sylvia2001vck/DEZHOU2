"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentSearchResponseMeta = void 0;
/**
 * The metadata object containing pagination metadata.
 */
class IncidentSearchResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentSearchResponseMeta.attributeTypeMap;
    }
}
exports.IncidentSearchResponseMeta = IncidentSearchResponseMeta;
/**
 * @ignore
 */
IncidentSearchResponseMeta.attributeTypeMap = {
    pagination: {
        baseName: "pagination",
        type: "IncidentResponseMetaPagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentSearchResponseMeta.js.map