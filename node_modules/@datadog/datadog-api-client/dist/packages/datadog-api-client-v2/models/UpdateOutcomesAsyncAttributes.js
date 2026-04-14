"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOutcomesAsyncAttributes = void 0;
/**
 * The JSON:API attributes for a batched set of scorecard outcomes.
 */
class UpdateOutcomesAsyncAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateOutcomesAsyncAttributes.attributeTypeMap;
    }
}
exports.UpdateOutcomesAsyncAttributes = UpdateOutcomesAsyncAttributes;
/**
 * @ignore
 */
UpdateOutcomesAsyncAttributes.attributeTypeMap = {
    results: {
        baseName: "results",
        type: "Array<UpdateOutcomesAsyncRequestItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateOutcomesAsyncAttributes.js.map