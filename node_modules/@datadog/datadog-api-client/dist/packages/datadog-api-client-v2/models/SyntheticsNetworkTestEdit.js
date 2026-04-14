"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsNetworkTestEdit = void 0;
class SyntheticsNetworkTestEdit {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsNetworkTestEdit.attributeTypeMap;
    }
}
exports.SyntheticsNetworkTestEdit = SyntheticsNetworkTestEdit;
/**
 * @ignore
 */
SyntheticsNetworkTestEdit.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SyntheticsNetworkTest",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SyntheticsNetworkTestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsNetworkTestEdit.js.map