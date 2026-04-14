"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAssetMonitorRelationship = void 0;
/**
 * An object of type `monitor` that can be referenced in the `included` data.
 */
class MetricAssetMonitorRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAssetMonitorRelationship.attributeTypeMap;
    }
}
exports.MetricAssetMonitorRelationship = MetricAssetMonitorRelationship;
/**
 * @ignore
 */
MetricAssetMonitorRelationship.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MetricMonitorType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricAssetMonitorRelationship.js.map