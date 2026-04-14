"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DegradationDataAttributesSource = void 0;
/**
 * The source of the degradation.
 */
class DegradationDataAttributesSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DegradationDataAttributesSource.attributeTypeMap;
    }
}
exports.DegradationDataAttributesSource = DegradationDataAttributesSource;
/**
 * @ignore
 */
DegradationDataAttributesSource.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    sourceId: {
        baseName: "source_id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DegradationDataAttributesSourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DegradationDataAttributesSource.js.map