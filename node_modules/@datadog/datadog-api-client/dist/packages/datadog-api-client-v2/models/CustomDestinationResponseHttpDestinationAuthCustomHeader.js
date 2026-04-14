"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationResponseHttpDestinationAuthCustomHeader = void 0;
/**
 * Custom header access authentication.
 */
class CustomDestinationResponseHttpDestinationAuthCustomHeader {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationResponseHttpDestinationAuthCustomHeader.attributeTypeMap;
    }
}
exports.CustomDestinationResponseHttpDestinationAuthCustomHeader = CustomDestinationResponseHttpDestinationAuthCustomHeader;
/**
 * @ignore
 */
CustomDestinationResponseHttpDestinationAuthCustomHeader.attributeTypeMap = {
    headerName: {
        baseName: "header_name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomDestinationResponseHttpDestinationAuthCustomHeaderType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationResponseHttpDestinationAuthCustomHeader.js.map