"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceAttributes = void 0;
/**
 * The device attributes
 */
class DeviceAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeviceAttributes.attributeTypeMap;
    }
}
exports.DeviceAttributes = DeviceAttributes;
/**
 * @ignore
 */
DeviceAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    deviceType: {
        baseName: "device_type",
        type: "string",
    },
    integration: {
        baseName: "integration",
        type: "string",
    },
    interfaceStatuses: {
        baseName: "interface_statuses",
        type: "DeviceAttributesInterfaceStatuses",
    },
    ipAddress: {
        baseName: "ip_address",
        type: "string",
    },
    location: {
        baseName: "location",
        type: "string",
    },
    model: {
        baseName: "model",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    osHostname: {
        baseName: "os_hostname",
        type: "string",
    },
    osName: {
        baseName: "os_name",
        type: "string",
    },
    osVersion: {
        baseName: "os_version",
        type: "string",
    },
    pingStatus: {
        baseName: "ping_status",
        type: "string",
    },
    productName: {
        baseName: "product_name",
        type: "string",
    },
    serialNumber: {
        baseName: "serial_number",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    subnet: {
        baseName: "subnet",
        type: "string",
    },
    sysObjectId: {
        baseName: "sys_object_id",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    vendor: {
        baseName: "vendor",
        type: "string",
    },
    version: {
        baseName: "version",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeviceAttributes.js.map