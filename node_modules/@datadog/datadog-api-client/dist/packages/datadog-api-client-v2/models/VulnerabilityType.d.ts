/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The vulnerability type.
 */
export declare type VulnerabilityType = typeof ADMIN_CONSOLE_ACTIVE | typeof CODE_INJECTION | typeof COMMAND_INJECTION | typeof COMPONENT_WITH_KNOWN_VULNERABILITY | typeof DANGEROUS_WORKFLOWS | typeof DEFAULT_APP_DEPLOYED | typeof DEFAULT_HTML_ESCAPE_INVALID | typeof DIRECTORY_LISTING_LEAK | typeof EMAIL_HTML_INJECTION | typeof END_OF_LIFE | typeof HARDCODED_PASSWORD | typeof HARDCODED_SECRET | typeof HEADER_INJECTION | typeof HSTS_HEADER_MISSING | typeof INSECURE_AUTH_PROTOCOL | typeof INSECURE_COOKIE | typeof INSECURE_JSP_LAYOUT | typeof LDAP_INJECTION | typeof MALICIOUS_PACKAGE | typeof MANDATORY_REMEDIATION | typeof NO_HTTP_ONLY_COOKIE | typeof NO_SAME_SITE_COOKIE | typeof NO_SQL_MONGO_DB_INJECTION | typeof PATH_TRAVERSAL | typeof REFLECTION_INJECTION | typeof RISKY_LICENSE | typeof SESSION_REWRITING | typeof SESSION_TIMEOUT | typeof SQL_INJECTION | typeof SSRF | typeof STACK_TRACE_LEAK | typeof TRUST_BOUNDARY_VIOLATION | typeof UNMAINTAINED | typeof UNTRUSTED_DESERIALIZATION | typeof UNVALIDATED_REDIRECT | typeof VERB_TAMPERING | typeof WEAK_CIPHER | typeof WEAK_HASH | typeof WEAK_RANDOMNESS | typeof X_CONTENT_TYPE_HEADER_MISSING | typeof X_PATH_INJECTION | typeof XSS | UnparsedObject;
export declare const ADMIN_CONSOLE_ACTIVE = "AdminConsoleActive";
export declare const CODE_INJECTION = "CodeInjection";
export declare const COMMAND_INJECTION = "CommandInjection";
export declare const COMPONENT_WITH_KNOWN_VULNERABILITY = "ComponentWithKnownVulnerability";
export declare const DANGEROUS_WORKFLOWS = "DangerousWorkflows";
export declare const DEFAULT_APP_DEPLOYED = "DefaultAppDeployed";
export declare const DEFAULT_HTML_ESCAPE_INVALID = "DefaultHtmlEscapeInvalid";
export declare const DIRECTORY_LISTING_LEAK = "DirectoryListingLeak";
export declare const EMAIL_HTML_INJECTION = "EmailHtmlInjection";
export declare const END_OF_LIFE = "EndOfLife";
export declare const HARDCODED_PASSWORD = "HardcodedPassword";
export declare const HARDCODED_SECRET = "HardcodedSecret";
export declare const HEADER_INJECTION = "HeaderInjection";
export declare const HSTS_HEADER_MISSING = "HstsHeaderMissing";
export declare const INSECURE_AUTH_PROTOCOL = "InsecureAuthProtocol";
export declare const INSECURE_COOKIE = "InsecureCookie";
export declare const INSECURE_JSP_LAYOUT = "InsecureJspLayout";
export declare const LDAP_INJECTION = "LdapInjection";
export declare const MALICIOUS_PACKAGE = "MaliciousPackage";
export declare const MANDATORY_REMEDIATION = "MandatoryRemediation";
export declare const NO_HTTP_ONLY_COOKIE = "NoHttpOnlyCookie";
export declare const NO_SAME_SITE_COOKIE = "NoSameSiteCookie";
export declare const NO_SQL_MONGO_DB_INJECTION = "NoSqlMongoDbInjection";
export declare const PATH_TRAVERSAL = "PathTraversal";
export declare const REFLECTION_INJECTION = "ReflectionInjection";
export declare const RISKY_LICENSE = "RiskyLicense";
export declare const SESSION_REWRITING = "SessionRewriting";
export declare const SESSION_TIMEOUT = "SessionTimeout";
export declare const SQL_INJECTION = "SqlInjection";
export declare const SSRF = "Ssrf";
export declare const STACK_TRACE_LEAK = "StackTraceLeak";
export declare const TRUST_BOUNDARY_VIOLATION = "TrustBoundaryViolation";
export declare const UNMAINTAINED = "Unmaintained";
export declare const UNTRUSTED_DESERIALIZATION = "UntrustedDeserialization";
export declare const UNVALIDATED_REDIRECT = "UnvalidatedRedirect";
export declare const VERB_TAMPERING = "VerbTampering";
export declare const WEAK_CIPHER = "WeakCipher";
export declare const WEAK_HASH = "WeakHash";
export declare const WEAK_RANDOMNESS = "WeakRandomness";
export declare const X_CONTENT_TYPE_HEADER_MISSING = "XContentTypeHeaderMissing";
export declare const X_PATH_INJECTION = "XPathInjection";
export declare const XSS = "Xss";
