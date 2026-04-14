/**
 * Represents an authorization failure response from the Datadog API, usually
 * because of an invalid API key.
 *
 * @property {'DATADOG_AUTHORIZATION_ERROR'} code
 * @property {number} status
 */
export class AuthorizationError extends Error {
    /**
     * Create an `AuthorizationError`.
     * @param {string} message
     * @param {object} [options]
     * @param {Error} [options.cause]
     */
    constructor(message: string, options?: {
        cause?: Error;
    });
    code: string;
    status: number;
}
//# sourceMappingURL=errors.d.ts.map