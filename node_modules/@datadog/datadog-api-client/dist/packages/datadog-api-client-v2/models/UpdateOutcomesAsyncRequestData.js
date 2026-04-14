"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOutcomesAsyncRequestData = void 0;
/**
 * Scorecard outcomes batch request data.
 */
class UpdateOutcomesAsyncRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateOutcomesAsyncRequestData.attributeTypeMap;
    }
}
exports.UpdateOutcomesAsyncRequestData = UpdateOutcomesAsyncRequestData;
/**
 * @ignore
 */
UpdateOutcomesAsyncRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UpdateOutcomesAsyncAttributes",
    },
    type: {
        baseName: "type",
        type: "UpdateOutcomesAsyncType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateOutcomesAsyncRequestData.js.map