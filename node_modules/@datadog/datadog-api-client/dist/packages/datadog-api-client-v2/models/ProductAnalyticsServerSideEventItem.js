"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsServerSideEventItem = void 0;
/**
 * A Product Analytics server-side event.
 */
class ProductAnalyticsServerSideEventItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsServerSideEventItem.attributeTypeMap;
    }
}
exports.ProductAnalyticsServerSideEventItem = ProductAnalyticsServerSideEventItem;
/**
 * @ignore
 */
ProductAnalyticsServerSideEventItem.attributeTypeMap = {
    account: {
        baseName: "account",
        type: "ProductAnalyticsServerSideEventItemAccount",
    },
    application: {
        baseName: "application",
        type: "ProductAnalyticsServerSideEventItemApplication",
        required: true,
    },
    event: {
        baseName: "event",
        type: "ProductAnalyticsServerSideEventItemEvent",
        required: true,
    },
    session: {
        baseName: "session",
        type: "ProductAnalyticsServerSideEventItemSession",
    },
    type: {
        baseName: "type",
        type: "ProductAnalyticsServerSideEventItemType",
        required: true,
    },
    usr: {
        baseName: "usr",
        type: "ProductAnalyticsServerSideEventItemUsr",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsServerSideEventItem.js.map