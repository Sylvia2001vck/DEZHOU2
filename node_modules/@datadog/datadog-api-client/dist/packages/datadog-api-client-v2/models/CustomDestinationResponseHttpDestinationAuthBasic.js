"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationResponseHttpDestinationAuthBasic = void 0;
/**
 * Basic access authentication.
 */
class CustomDestinationResponseHttpDestinationAuthBasic {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationResponseHttpDestinationAuthBasic.attributeTypeMap;
    }
}
exports.CustomDestinationResponseHttpDestinationAuthBasic = CustomDestinationResponseHttpDestinationAuthBasic;
/**
 * @ignore
 */
CustomDestinationResponseHttpDestinationAuthBasic.attributeTypeMap = {
    type: {
        baseName: "type",
        type: "CustomDestinationResponseHttpDestinationAuthBasicType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationResponseHttpDestinationAuthBasic.js.map