"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ruleset.ts
var ruleset_exports = {};
__export(ruleset_exports, {
  default: () => ruleset_default
});
module.exports = __toCommonJS(ruleset_exports);
var import_spectral_functions = require("@stoplight/spectral-functions");
var import_spectral_formats = require("@stoplight/spectral-formats");

// node_modules/@stoplight/types/dist/index.mjs
var HttpParamStyles;
(function(HttpParamStyles2) {
  HttpParamStyles2["Simple"] = "simple";
  HttpParamStyles2["Matrix"] = "matrix";
  HttpParamStyles2["Label"] = "label";
  HttpParamStyles2["Form"] = "form";
  HttpParamStyles2["CommaDelimited"] = "commaDelimited";
  HttpParamStyles2["SpaceDelimited"] = "spaceDelimited";
  HttpParamStyles2["PipeDelimited"] = "pipeDelimited";
  HttpParamStyles2["DeepObject"] = "deepObject";
})(HttpParamStyles || (HttpParamStyles = {}));
var DiagnosticSeverity;
(function(DiagnosticSeverity2) {
  DiagnosticSeverity2[DiagnosticSeverity2["Error"] = 0] = "Error";
  DiagnosticSeverity2[DiagnosticSeverity2["Warning"] = 1] = "Warning";
  DiagnosticSeverity2[DiagnosticSeverity2["Information"] = 2] = "Information";
  DiagnosticSeverity2[DiagnosticSeverity2["Hint"] = 3] = "Hint";
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
var NodeType;
(function(NodeType2) {
  NodeType2["Article"] = "article";
  NodeType2["HttpService"] = "http_service";
  NodeType2["HttpServer"] = "http_server";
  NodeType2["HttpOperation"] = "http_operation";
  NodeType2["Model"] = "model";
  NodeType2["Generic"] = "generic";
  NodeType2["Unknown"] = "unknown";
  NodeType2["TableOfContents"] = "table_of_contents";
  NodeType2["SpectralRuleset"] = "spectral_ruleset";
  NodeType2["Styleguide"] = "styleguide";
  NodeType2["Image"] = "image";
})(NodeType || (NodeType = {}));
var NodeFormat;
(function(NodeFormat2) {
  NodeFormat2["Json"] = "json";
  NodeFormat2["Markdown"] = "markdown";
  NodeFormat2["Yaml"] = "yaml";
  NodeFormat2["Javascript"] = "javascript";
  NodeFormat2["Apng"] = "apng";
  NodeFormat2["Avif"] = "avif";
  NodeFormat2["Bmp"] = "bmp";
  NodeFormat2["Gif"] = "gif";
  NodeFormat2["Jpeg"] = "jpeg";
  NodeFormat2["Png"] = "png";
  NodeFormat2["Svg"] = "svg";
  NodeFormat2["Webp"] = "webp";
})(NodeFormat || (NodeFormat = {}));

// src/ruleset.ts
var ruleset_default = {
  rules: {
    "no-http-basic": {
      description: "Consider a more secure alternative to HTTP Basic",
      message: "HTTP Basic is a pretty insecure way to pass credentials around, please consider an alternative.",
      given: "$.components.securitySchemes[*]",
      then: {
        field: "scheme",
        function: import_spectral_functions.pattern,
        functionOptions: {
          notMatch: "basic"
        }
      },
      severity: DiagnosticSeverity.Error
    },
    "hosts-https-only-oas2": {
      description: "ALL requests MUST go through `https` protocol only",
      type: "style",
      message: "Schemes MUST be https and no other protocol is allowed.",
      given: "$.schemes",
      then: {
        function: import_spectral_functions.schema,
        functionOptions: {
          schema: {
            type: "array",
            items: {
              type: "string",
              const: "https"
            }
          }
        }
      },
      severity: DiagnosticSeverity.Error,
      formats: [import_spectral_formats.oas2]
    },
    "hosts-https-only-oas3": {
      description: "ALL requests MUST go through https:// protocol only",
      message: "Servers MUST be https and no other protocol is allowed.",
      given: "$.servers..url",
      then: {
        function: import_spectral_functions.pattern,
        functionOptions: {
          match: "/^https:/"
        }
      },
      formats: [import_spectral_formats.oas3],
      severity: DiagnosticSeverity.Error
    },
    "no-file-extensions-in-paths": {
      description: "Paths must not include file extensions such as .json, .xml, .html and .txt",
      message: "Paths must not include file extensions such as .json, .xml, .html and .txt. Use the OpenAPI `content` keyword to tell consumers which Media Types are available.",
      given: "$.paths[*]~",
      then: {
        function: import_spectral_functions.pattern,
        functionOptions: {
          notMatch: ".(json|xml|html|txt)$"
        }
      },
      severity: DiagnosticSeverity.Error
    },
    "adv-security-schemes-defined": {
      description: "All APIs MUST have a security scheme defined.",
      message: "This API definition does not have any security scheme defined.",
      given: "$..components",
      then: {
        field: "securitySchemes",
        function: import_spectral_functions.truthy
      },
      formats: [import_spectral_formats.oas3],
      severity: DiagnosticSeverity.Error
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
module.exports = module.exports.default;
//# sourceMappingURL=ruleset.js.map