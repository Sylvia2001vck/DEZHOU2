"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationHttpDestinationAuthCustomHeader = void 0;
/**
 * Custom header access authentication.
 */
class CustomDestinationHttpDestinationAuthCustomHeader {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationHttpDestinationAuthCustomHeader.attributeTypeMap;
    }
}
exports.CustomDestinationHttpDestinationAuthCustomHeader = CustomDestinationHttpDestinationAuthCustomHeader;
/**
 * @ignore
 */
CustomDestinationHttpDestinationAuthCustomHeader.attributeTypeMap = {
    headerName: {
        baseName: "header_name",
        type: "string",
        required: true,
    },
    headerValue: {
        baseName: "header_value",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomDestinationHttpDestinationAuthCustomHeaderType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationHttpDestinationAuthCustomHeader.js.map