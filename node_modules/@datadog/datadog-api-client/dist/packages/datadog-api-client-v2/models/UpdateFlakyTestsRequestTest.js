"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlakyTestsRequestTest = void 0;
/**
 * Details of what tests to update and their new attributes.
 */
class UpdateFlakyTestsRequestTest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateFlakyTestsRequestTest.attributeTypeMap;
    }
}
exports.UpdateFlakyTestsRequestTest = UpdateFlakyTestsRequestTest;
/**
 * @ignore
 */
UpdateFlakyTestsRequestTest.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    newState: {
        baseName: "new_state",
        type: "UpdateFlakyTestsRequestTestNewState",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateFlakyTestsRequestTest.js.map