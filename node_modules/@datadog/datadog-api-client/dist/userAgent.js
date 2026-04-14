"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAgent = void 0;
const version_1 = require("./version");
if (typeof process !== 'undefined' && process.release && process.release.name === 'node') {
    exports.userAgent = `datadog-api-client-typescript/${version_1.version} (node ${process.versions.node}; os ${process.platform}; arch ${process.arch})`;
}
else if (typeof window !== "undefined" && typeof window.document !== "undefined") {
    // we don't set user-agent headers in browsers
}
else {
    exports.userAgent = `datadog-api-client-typescript/${version_1.version} (runtime unknown)`;
}
//# sourceMappingURL=userAgent.js.map