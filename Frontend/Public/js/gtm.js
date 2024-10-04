// Copyright 2012 Google Inc. All rights reserved.

(function (w, g) {
  w[g] = w[g] || {};
  w[g].e = function (s) {
    return eval(s);
  };
})(window, "google_tag_manager");

(function () {
  var data = {
    resource: {
      version: "190",

      macros: [
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventCategory",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventAction",
        },
        { function: "__e" },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__remm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 6],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_defaultValue: "false",
          vtp_ignoreCase: true,
          vtp_map: ["list", ["map", "key", "ResetPassword", "value", "true"]],
        },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "webvisitid" },
        { function: "__r" },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "pageType",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "userCountry",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "pageLanguage",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "operator",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "productType",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "experimentName_0",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "experimentVariant_0",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "experimentName_1",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "experimentVariant_1",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "mainSiteSubdomain",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "clickUrl",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "clickText",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "sectionId",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "mode",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var a=window.location.search,b="";a=new URLSearchParams(a);a.has("tags")\u0026\u0026(b=a.get("tags"));a=/(g_sr|bi_sr|asa_sr|tw_sr|yn_sr|fb_sr|xandr_sr|amazon_sr|applens_sr)/;return a.test(b)})();',
          ],
        },
        { function: "__f", vtp_component: "URL" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          convert_undefined_to: "000000",
          vtp_component: "QUERY",
          vtp_queryKey: "id",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "instrument_name",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "section_name",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "typeOfWidget",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "clickType",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "InstrumentCategory",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "InstrumentSymbol",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "subTabName",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "0",
          vtp_name: "vwo_exp_variant_string",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "0",
          vtp_name: "vwo_uuid",
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "countryPopup",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "dialogType",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "false",
          vtp_name: "isExternalCmpActive",
        },
        { function: "__f" },
        { function: "__e" },
        { function: "__aev", vtp_varType: "CLASSES" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventLabel",
        },
        {
          function: "__u",
          vtp_stripWww: true,
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 6],
          vtp_name: "customPagePath",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "language",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "urlCountry",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "false",
          vtp_name: "IsInAppView",
        },
        {
          function: "__gas",
          vtp_cookieDomain: "auto",
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_fieldsToSet: [
            "list",
            ["map", "fieldName", "allowLinker", "value", "true"],
            ["map", "fieldName", "page", "value", ["macro", 48]],
          ],
          vtp_useHashAutoLink: false,
          vtp_autoLinkDomains:
            "plus500.com/zh/,plus500.se,plus500.si,plus500.sk,plus500.ro,plus500.pt,plus500.pl,plus500.no,plus500.nl,plus500.com.mt,plus500.com.my,plus500.lv,plus500.lt,plus500.it,plus500.is,plus500.hu,plus500.hr,plus500.co.il,plus500.fr,plus500.re,plus500.mq,plus500.lu,plus500.gp,plus500.gf,plus500.fi,plus500.ee,plus500.es,plus500.cl,plus500.co.za,plus500.com.sg,plus500.co.nz,plus500.ie,plus500.co.uk,plus500.com.au,plus500.gr,plus500.com.cy,plus500.de,plus500.li,plus500.at,plus500.dk,plus500.cz,plus500.bg,plus500.com/ar,plus500.com,app.plus500.com",
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_dimension: [
            "list",
            ["map", "index", "7", "dimension", ["macro", 49]],
            ["map", "index", "8", "dimension", ["macro", 50]],
            ["map", "index", "9", "dimension", ["macro", 51]],
          ],
          vtp_enableEcommerce: false,
          vtp_trackingId: "UA-7008980-19",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableGA4Schema: true,
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 4], 8, 16],
            ';a=a.closest("[data-tab-id]");return a.dataset.tabId})();',
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "instrumentType",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "instrumentName",
        },
        { function: "__uv" },
        {
          function: "__gtcs",
          vtp_configSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "server_container_url",
              "parameterValue",
              "https://server-side-tagging-6hznhch7oa-uc.a.run.app/",
            ],
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "OnetrustActiveGroups",
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        { function: "__aev", vtp_varType: "TEXT" },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        { function: "__aev", vtp_varType: "TEXT" },
        {
          function: "__v",
          vtp_name: "gtm.videoProvider",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.videoUrl", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.videoTitle",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoDuration",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoPercent",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoVisible",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoStatus",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoCurrentTime",
          vtp_dataLayerVersion: 1,
        },
      ],
      tags: [
        {
          function: "__googtag",
          priority: 9999,
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-X6GLD6K91S",
          vtp_configSettingsTable: [
            "list",
            ["map", "parameter", "page_type", "parameterValue", ["macro", 11]],
            [
              "map",
              "parameter",
              "user_country",
              "parameterValue",
              ["macro", 12],
            ],
            [
              "map",
              "parameter",
              "page_language",
              "parameterValue",
              ["macro", 13],
            ],
            ["map", "parameter", "operator", "parameterValue", ["macro", 14]],
            [
              "map",
              "parameter",
              "product_type",
              "parameterValue",
              ["macro", 15],
            ],
            [
              "map",
              "parameter",
              "experimentName_0",
              "parameterValue",
              ["macro", 16],
            ],
            [
              "map",
              "parameter",
              "experimentVariant_0",
              "parameterValue",
              ["macro", 17],
            ],
            ["map", "parameter", "send_page_view", "parameterValue", "false"],
            [
              "map",
              "parameter",
              "experimentName_1",
              "parameterValue",
              ["macro", 18],
            ],
            [
              "map",
              "parameter",
              "experimentVariant_1",
              "parameterValue",
              ["macro", 19],
            ],
            [
              "map",
              "parameter",
              "cookie_flags",
              "parameterValue",
              "samesite=none;secure",
            ],
            [
              "map",
              "parameter",
              "mainSiteSubdomain",
              "parameterValue",
              ["macro", 20],
            ],
          ],
          tag_id: 160,
        },
        { function: "__paused", vtp_originalTagType: "sp", tag_id: 2 },
        { function: "__cl", tag_id: 54 },
        { function: "__paused", vtp_originalTagType: "awct", tag_id: 124 },
        { function: "__paused", vtp_originalTagType: "awct", tag_id: 127 },
        {
          function: "__flc",
          metadata: ["map"],
          vtp_customVariable: [
            "list",
            ["map", "key", "u1", "value", ["macro", 8]],
          ],
          vtp_enableConversionLinker: true,
          vtp_enhancedUserData: false,
          vtp_groupTag: "visit",
          vtp_useImageTag: false,
          vtp_activityTag: "sitev0",
          vtp_ordinalType: "UNIQUE",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "8307440",
          vtp_ordinalUnique: "1",
          vtp_number: ["macro", 9],
          vtp_url: ["macro", 10],
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          vtp_enableMatchIdVariable: true,
          tag_id: 139,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "click_url", "parameterValue", ["macro", 21]],
            ["map", "parameter", "click_text", "parameterValue", ["macro", 22]],
            ["map", "parameter", "section_id", "parameterValue", ["macro", 23]],
            ["map", "parameter", "mode", "parameterValue", ["macro", 24]],
          ],
          vtp_eventName: "cta_click",
          vtp_measurementIdOverride: "G-X6GLD6K91S",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 182,
        },
        { function: "__paused", vtp_originalTagType: "gaawe", tag_id: 188 },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "page_type", "parameterValue", ["macro", 11]],
            [
              "map",
              "parameter",
              "user_country",
              "parameterValue",
              ["macro", 12],
            ],
            [
              "map",
              "parameter",
              "page_language",
              "parameterValue",
              ["macro", 13],
            ],
            ["map", "parameter", "operator", "parameterValue", ["macro", 14]],
            [
              "map",
              "parameter",
              "product_type",
              "parameterValue",
              ["macro", 15],
            ],
            [
              "map",
              "parameter",
              "campaign_source",
              "parameterValue",
              ["macro", 28],
            ],
            [
              "map",
              "parameter",
              "campaign_medium",
              "parameterValue",
              "affiliate",
            ],
          ],
          vtp_eventName: "page_view",
          vtp_measurementIdOverride: "G-X6GLD6K91S",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 189,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "click_text", "parameterValue", ["macro", 22]],
            [
              "map",
              "parameter",
              "instrument_name",
              "parameterValue",
              ["macro", 29],
            ],
            [
              "map",
              "parameter",
              "section_name",
              "parameterValue",
              ["macro", 30],
            ],
            [
              "map",
              "parameter",
              "type_of_widget",
              "parameterValue",
              ["macro", 31],
            ],
            [
              "map",
              "parameter",
              "click_type",
              "parameterValue",
              ["template", "{{", ["macro", 32]],
            ],
            [
              "map",
              "parameter",
              "Instrument_category",
              "parameterValue",
              ["macro", 33],
            ],
            [
              "map",
              "parameter",
              "Instrument_symbol",
              "parameterValue",
              ["macro", 34],
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "widget_interactions",
          vtp_measurementIdOverride: "G-X6GLD6K91S",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 200,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "click_url", "parameterValue", ["macro", 21]],
            ["map", "parameter", "click_text", "parameterValue", ["macro", 22]],
          ],
          vtp_eventName: "video_grid_click",
          vtp_measurementIdOverride: "G-X6GLD6K91S",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 202,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "click_url", "parameterValue", ["macro", 21]],
            ["map", "parameter", "click_text", "parameterValue", ["macro", 22]],
            [
              "map",
              "parameter",
              "sub_tab_name",
              "parameterValue",
              ["macro", 35],
            ],
          ],
          vtp_eventName: "menu_click",
          vtp_measurementIdOverride: "G-X6GLD6K91S",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 205,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "click_url", "parameterValue", ["macro", 21]],
            ["map", "parameter", "click_text", "parameterValue", ["macro", 22]],
          ],
          vtp_eventName: "button_click",
          vtp_measurementIdOverride: "G-X6GLD6K91S",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 207,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "exp_variant_string",
              "parameterValue",
              ["macro", 36],
            ],
          ],
          vtp_eventName: "experience_impression",
          vtp_measurementIdOverride: "G-X6GLD6K91S",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 212,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "vwo_uuid", "parameterValue", ["macro", 37]],
          ],
          vtp_eventName: "VWO",
          vtp_measurementIdOverride: "G-X6GLD6K91S",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 213,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 215 },
        { function: "__paused", vtp_originalTagType: "awct", tag_id: 217 },
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-X6GLD6K91S",
          vtp_configSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "page_location",
              "parameterValue",
              "reset_password",
            ],
            ["map", "parameter", "send_page_view", "parameterValue", "true"],
          ],
          tag_id: 222,
        },
        { function: "__paused", vtp_originalTagType: "awct", tag_id: 224 },
        { function: "__paused", vtp_originalTagType: "awct", tag_id: 225 },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 228 },
        {
          function: "__cvt_64439_231",
          metadata: ["map"],
          once_per_load: true,
          vtp_addRevenue: false,
          vtp_accountId: "1216744",
          vtp_addItemUrl: false,
          vtp_addOther: false,
          vtp_pixelType: "page_view",
          vtp_addCurrency: false,
          tag_id: 230,
        },
        { function: "__paused", vtp_originalTagType: "gaawe", tag_id: 233 },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventName: "unsub_approve",
          vtp_measurementIdOverride: "G-X6GLD6K91S",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 235,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventName: "unsub_cancel",
          vtp_measurementIdOverride: "G-X6GLD6K91S",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 236,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "countryPopup",
              "parameterValue",
              ["macro", 40],
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "notAllowedCountryVisitorPopupShown",
          vtp_measurementIdOverride: "G-X6GLD6K91S",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 239,
        },
        { function: "__paused", vtp_originalTagType: "gaawe", tag_id: 242 },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "server_container_url",
              "parameterValue",
              "https://analytics.plus500.com",
            ],
          ],
          vtp_eventName: "page_view",
          vtp_measurementIdOverride: "G-X6GLD6K91S",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 244,
        },
        {
          function: "__cvt_64439_231",
          metadata: ["map"],
          once_per_event: true,
          vtp_addRevenue: false,
          vtp_accountId: "1216744",
          vtp_addItemUrl: false,
          vtp_eventName: "custom",
          vtp_addOther: false,
          vtp_pixelType: "event",
          vtp_customEventName: "ButtonClick_VolatilityLP",
          vtp_addCurrency: false,
          tag_id: 246,
        },
        { function: "__paused", vtp_originalTagType: "gaawe", tag_id: 252 },
        { function: "__paused", vtp_originalTagType: "gaawe", tag_id: 254 },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "dialogType", "parameterValue", ["macro", 41]],
            ["map", "parameter", "clickType", "parameterValue", ["macro", 32]],
            [
              "map",
              "parameter",
              "server_container_url",
              "parameterValue",
              "https://analytics.plus500.com",
            ],
            [
              "map",
              "parameter",
              "mainSiteSubdomain",
              "parameterValue",
              ["macro", 20],
            ],
          ],
          vtp_eventName: "cookies",
          vtp_measurementIdOverride: "G-X6GLD6K91S",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 255,
        },
        { function: "__cl", tag_id: 269 },
        { function: "__cl", tag_id: 270 },
        { function: "__cl", tag_id: 271 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "64439_75",
          tag_id: 272,
        },
        { function: "__cl", tag_id: 273 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "64439_90",
          tag_id: 274,
        },
        { function: "__cl", tag_id: 275 },
        {
          function: "__ytl",
          vtp_progressThresholdsPercent: "25,50,100",
          vtp_captureComplete: true,
          vtp_captureStart: true,
          vtp_fixMissingApi: true,
          vtp_triggerStartOption: "CONTAINER_LOAD",
          vtp_radioButtonGroup1: "PERCENTAGE",
          vtp_capturePause: true,
          vtp_captureProgress: true,
          vtp_uniqueTriggerId: "64439_92",
          vtp_enableTriggerStartOption: true,
          tag_id: 276,
        },
        { function: "__cl", tag_id: 277 },
        { function: "__cl", tag_id: 278 },
        { function: "__cl", tag_id: 279 },
        { function: "__cl", tag_id: 280 },
        { function: "__cl", tag_id: 281 },
        { function: "__cl", tag_id: 282 },
        { function: "__cl", tag_id: 283 },
        { function: "__cl", tag_id: 284 },
        {
          function: "__evl",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: false,
          vtp_elementSelector: ".products-introduction-section",
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "CSS",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "64439_150",
          tag_id: 285,
        },
        { function: "__cl", tag_id: 286 },
        { function: "__cl", tag_id: 287 },
        { function: "__cl", tag_id: 288 },
        { function: "__cl", tag_id: 289 },
        { function: "__cl", tag_id: 290 },
        { function: "__cl", tag_id: 291 },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cimg src="https://trc.taboola.com/1216744/log/3/unip?en=page_view\u0026amp;item-url=',
            ["escape", ["macro", 27], 12],
            "\u0026amp;ref=",
            ["escape", ["macro", 26], 12],
            '" width="0" height="0" style="display:none"\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 245,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/javascript" src="https://cdn.cookielaw.org/consent/01905982-e90c-7422-bbf4-5c631363a9b6/OtAutoBlock.js"\u003E\u003C/script\u003E\n\u003Cscript src="https://cdn.cookielaw.org/consent/01905982-e90c-7422-bbf4-5c631363a9b6/otSDKStub.js" data-document-language="true" type="text/javascript" charset="UTF-8" data-domain-script="01905982-e90c-7422-bbf4-5c631363a9b6"\u003E\u003C/script\u003E\n\u003Cscript type="text/javascript"\u003Efunction OptanonWrapper(){var a=document.querySelector("#onetrust-pc-btn-handler"),b=document.createElement("a");a\u0026\u0026(b.id=a.id,b.href="help/cookiepolicy",b.textContent=a.textContent,a.parentNode.replaceChild(b,a));window.location.href.indexOf("cookiepolicy")!==-1\u0026\u0026document.querySelector("#onetrust-pc-btn-handler").remove();a=document.querySelector("#close-pc-btn-handler");a.addEventListener("click",function(c){c=c.currentTarget.closest("#onetrust-pc-sdk");c.addEventListener("transitionstart",function(){document.body.style.paddingInlineEnd=\n""})})};\u003C/script\u003E\n',
          vtp_supportDocumentWrite: true,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          vtp_usePostscribe: true,
          tag_id: 268,
        },
      ],
      predicates: [
        {
          function: "_eq",
          arg0: ["macro", 0],
          arg1: "MarketingCookiesConsent",
        },
        { function: "_eq", arg0: ["macro", 1], arg1: "Accept" },
        { function: "_eq", arg0: ["macro", 2], arg1: "GAevent" },
        { function: "_re", arg0: ["macro", 3], arg1: ".*" },
        { function: "_eq", arg0: ["macro", 2], arg1: "gtm.js" },
        { function: "_css", arg0: ["macro", 4], arg1: "[data-start-trading]" },
        { function: "_eq", arg0: ["macro", 2], arg1: "gtm.linkClick" },
        {
          function: "_re",
          arg0: ["macro", 5],
          arg1: "(^$|((^|,)64439_75($|,)))",
        },
        { function: "_cn", arg0: ["macro", 7], arg1: "false" },
        { function: "_eq", arg0: ["macro", 2], arg1: "CTA" },
        { function: "_eq", arg0: ["macro", 25], arg1: "false" },
        { function: "_cn", arg0: ["macro", 26], arg1: "plus500" },
        {
          function: "_cn",
          arg0: ["macro", 27],
          arg1: "Help/TermsAndAgreements",
        },
        { function: "_eq", arg0: ["macro", 2], arg1: "widgetInteractions" },
        { function: "_eq", arg0: ["macro", 2], arg1: "videoGridClick" },
        { function: "_eq", arg0: ["macro", 2], arg1: "menuClick" },
        { function: "_eq", arg0: ["macro", 2], arg1: "buttonClick" },
        { function: "_eq", arg0: ["macro", 2], arg1: "vwo-data-push-ga4" },
        { function: "_eq", arg0: ["macro", 2], arg1: "vwo-id-push-ga4" },
        {
          function: "_re",
          arg0: ["macro", 38],
          arg1: ".*ResetPassword.*",
          ignore_case: true,
        },
        { function: "_cn", arg0: ["macro", 7], arg1: "true" },
        { function: "_eq", arg0: ["macro", 2], arg1: "cookies" },
        { function: "_cn", arg0: ["macro", 39], arg1: "approveButton" },
        {
          function: "_re",
          arg0: ["macro", 6],
          arg1: ".*unsubscribe$",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 2], arg1: "gtm.click" },
        { function: "_cn", arg0: ["macro", 39], arg1: "cancel-button" },
        {
          function: "_eq",
          arg0: ["macro", 2],
          arg1: "notAllowedCountryVisitorPopupShown",
        },
        { function: "_eq", arg0: ["macro", 42], arg1: "true" },
      ],
      rules: [
        [
          ["if", 0, 1, 2],
          ["add", 1],
        ],
        [
          ["if", 3, 4],
          ["add", 2, 21],
        ],
        [
          ["if", 5, 6, 7],
          ["add", 3, 4],
        ],
        [
          ["if", 4, 8],
          ["add", 5, 0, 7, 16, 18, 19, 20, 29],
        ],
        [
          ["if", 9],
          ["add", 6, 26, 28],
        ],
        [
          ["if", 4, 8, 10],
          ["unless", 11],
          ["add", 8, 30],
          ["block", 7],
        ],
        [
          ["if", 13],
          ["add", 9],
        ],
        [
          ["if", 14],
          ["add", 10],
        ],
        [
          ["if", 15],
          ["add", 11],
        ],
        [
          ["if", 16],
          ["add", 12],
        ],
        [
          ["if", 17],
          ["add", 13],
        ],
        [
          ["if", 18],
          ["add", 14],
        ],
        [
          ["if", 4],
          ["unless", 19],
          ["add", 15],
        ],
        [
          ["if", 4, 20],
          ["add", 17],
        ],
        [
          ["if", 21],
          ["add", 22, 31],
        ],
        [
          ["if", 22, 23, 24],
          ["add", 23],
        ],
        [
          ["if", 23, 24, 25],
          ["add", 24],
        ],
        [
          ["if", 26],
          ["add", 25],
        ],
        [
          ["if", 4],
          [
            "add",
            27,
            55,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
          ],
        ],
        [
          ["if", 4, 27],
          ["add", 56],
        ],
        [
          ["if", 4, 12],
          ["block", 7],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__cvt_64439_231",
        [46, "a"],
        [52, "b", ["require", "createQueue"]],
        [52, "c", ["require", "injectScript"]],
        [52, "d", ["require", "copyFromWindow"]],
        [52, "e", ["require", "makeTableMap"]],
        [52, "f", ["require", "logToConsole"]],
        [52, "g", ["require", "encodeUriComponent"]],
        [52, "h", ["b", "__tfa_pixel_init"]],
        [52, "i", ["d", "__tfa_pixel_init"]],
        [52, "j", ["b", "_tfa"]],
        [52, "k", [17, [15, "a"], "accountId"]],
        [52, "l", [17, [15, "a"], "pixelType"]],
        [
          52,
          "m",
          [
            39,
            [20, [17, [15, "a"], "eventName"], "custom"],
            [17, [15, "a"], "customEventName"],
            [17, [15, "a"], "eventName"],
          ],
        ],
        [
          52,
          "n",
          [
            39,
            [17, [15, "a"], "otherParams"],
            ["e", [17, [15, "a"], "otherParams"], "name", "value"],
            [8],
          ],
        ],
        [52, "o", [8, "notify", "event", "id", [15, "k"]]],
        [
          22,
          [17, [15, "a"], "itemUrl"],
          [46, [43, [15, "o"], "item-url", [17, [15, "a"], "itemUrl"]]],
        ],
        [
          22,
          [17, [15, "a"], "revenue"],
          [46, [43, [15, "o"], "revenue", [17, [15, "a"], "revenue"]]],
        ],
        [
          22,
          [17, [15, "a"], "currency"],
          [46, [43, [15, "o"], "currency", [17, [15, "a"], "currency"]]],
        ],
        [
          55,
          "p",
          [15, "n"],
          [46, [43, [15, "o"], [15, "p"], [16, [15, "n"], [15, "p"]]]],
        ],
        [
          22,
          [20, [2, [15, "i"], "indexOf", [7, [15, "k"]]], [27, 1]],
          [
            46,
            [
              53,
              [
                52,
                "p",
                [8, "notify", "event", "id", [15, "k"], "name", "page_view"],
              ],
              [
                22,
                [17, [15, "a"], "itemUrl"],
                [46, [43, [15, "p"], "item-url", [17, [15, "a"], "itemUrl"]]],
              ],
              ["j", [15, "p"]],
              ["h", [15, "k"]],
            ],
          ],
        ],
        [
          22,
          [20, [15, "l"], "event"],
          [46, [43, [15, "o"], "name", [15, "m"]], ["j", [15, "o"]]],
        ],
        [
          "c",
          [
            0,
            [0, "https://cdn.taboola.com/libtrc/unip/", ["g", [15, "k"]]],
            "/tfa.js",
          ],
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
          "_tfa_script",
        ],
      ],
      [
        50,
        "__cl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnClick"]],
        ["b"],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__evl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnElementVisibility"]],
        [52, "c", ["require", "makeNumber"]],
        [
          52,
          "d",
          [
            8,
            "selectorType",
            [17, [15, "a"], "selectorType"],
            "id",
            [17, [15, "a"], "elementId"],
            "selector",
            [17, [15, "a"], "elementSelector"],
            "useDomChangeListener",
            [28, [28, [17, [15, "a"], "useDomChangeListener"]]],
            "onScreenRatio",
            ["c", [17, [15, "a"], "onScreenRatio"]],
            "firingFrequency",
            [17, [15, "a"], "firingFrequency"],
          ],
        ],
        [
          22,
          [17, [15, "a"], "useOnScreenDuration"],
          [
            46,
            [
              43,
              [15, "d"],
              "onScreenDuration",
              ["c", [17, [15, "a"], "onScreenDuration"]],
            ],
          ],
        ],
        ["b", [15, "d"], [17, [15, "a"], "uniqueTriggerId"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__gtcs",
        [46, "a"],
        [52, "b", ["require", "makeTableMap"]],
        [
          36,
          [
            30,
            [
              "b",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
      ],
      [
        50,
        "__jsm",
        [46, "a"],
        [52, "b", ["require", "internal.executeJavascriptString"]],
        [22, [20, [17, [15, "a"], "javascript"], [44]], [46, [36]]],
        [36, ["b", [17, [15, "a"], "javascript"]]],
      ],
      [
        50,
        "__lcl",
        [46, "a"],
        [52, "b", ["require", "makeInteger"]],
        [52, "c", ["require", "makeString"]],
        [52, "d", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "e", [8]],
        [
          22,
          [17, [15, "a"], "waitForTags"],
          [
            46,
            [43, [15, "e"], "waitForTags", true],
            [
              43,
              [15, "e"],
              "waitForTagsTimeout",
              ["b", [17, [15, "a"], "waitForTagsTimeout"]],
            ],
          ],
        ],
        [
          22,
          [17, [15, "a"], "checkValidation"],
          [46, [43, [15, "e"], "checkValidation", true]],
        ],
        [52, "f", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
        ["d", [15, "e"], [15, "f"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [50, "__paused", [46, "a"], [2, [15, "a"], "gtmOnFailure", [7]]],
      [
        50,
        "__r",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "generateRandom"]],
            [
              "$0",
              [30, [17, [15, "a"], "min"], 0],
              [30, [17, [15, "a"], "max"], 2.147483647e9],
            ],
          ],
        ],
      ],
      [50, "__uv", [46, "a"], [36, [44]]],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_direct_google_requests",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __e: { 2: true, 4: true },
      __googtag: { 1: 10 },
      __r: { 2: true },
      __uv: { 2: true },
    },
    blob: { 1: "190" },
    permissions: {
      __cvt_64439_231: {
        access_globals: {
          keys: [
            { key: "_tfa", read: true, write: true, execute: false },
            {
              key: "__tfa_pixel_init",
              read: true,
              write: true,
              execute: false,
            },
          ],
        },
        inject_script: { urls: ["https://cdn.taboola.com/libtrc/unip/*"] },
        logging: { environments: "debug" },
      },
      __cl: { detect_click_events: {} },
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __evl: { detect_element_visibility_events: {} },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
      __gtcs: {},
      __jsm: { unsafe_run_arbitrary_javascript: {} },
      __lcl: { detect_link_click_events: { allowWaitForTags: true } },
      __paused: {},
      __r: {},
      __uv: {},
    },

    sandboxed_scripts: ["__cvt_64439_231"],

    security_groups: {
      customScripts: ["__jsm"],
      google: ["__cl", "__e", "__evl", "__googtag", "__gtcs", "__r", "__uv"],
    },
  };

  var productSettings = {
    10792777011: { preAutoPii: true },
    "AW-1034633855": { preAutoPii: true },
    "AW-346613882": { preAutoPii: true },
    "AW-794785275": { preAutoPii: true },
    "AW-982740592": { preAutoPii: true },
  };

  try {
    (function () {
      /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
      var C = this || self,
        D = function (n, u) {
          var w = n.split("."),
            q = C;
          w[0] in q ||
            typeof q.execScript == "undefined" ||
            q.execScript("var " + w[0]);
          for (var r; w.length && (r = w.shift()); )
            w.length || u === void 0
              ? (q = q[r] && q[r] !== Object.prototype[r] ? q[r] : (q[r] = {}))
              : (q[r] = u);
        }; /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
      var E,
        F = function () {};
      (function () {
        function n(h, l) {
          h = h || "";
          l = l || {};
          for (var y in u)
            u.hasOwnProperty(y) &&
              (l.N && (l["fix_" + y] = !0), (l.G = l.G || l["fix_" + y]));
          var z = {
              comment: /^\x3c!--/,
              endTag: /^<\//,
              atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
              startTag: /^</,
              chars: /^[^<]/,
            },
            e = {
              comment: function () {
                var a = h.indexOf("--\x3e");
                if (a >= 0) return { content: h.substr(4, a), length: a + 3 };
              },
              endTag: function () {
                var a = h.match(q);
                if (a) return { tagName: a[1], length: a[0].length };
              },
              atomicTag: function () {
                var a = e.startTag();
                if (a) {
                  var b = h.slice(a.length);
                  if (
                    b.match(new RegExp("</\\s*" + a.tagName + "\\s*>", "i"))
                  ) {
                    var c = b.match(
                      new RegExp(
                        "([\\s\\S]*?)</\\s*" + a.tagName + "\\s*>",
                        "i"
                      )
                    );
                    if (c)
                      return {
                        tagName: a.tagName,
                        g: a.g,
                        content: c[1],
                        length: c[0].length + a.length,
                      };
                  }
                }
              },
              startTag: function () {
                var a = h.match(w);
                if (a) {
                  var b = {};
                  a[2].replace(r, function (c, d) {
                    var k =
                        arguments[2] ||
                        arguments[3] ||
                        arguments[4] ||
                        (B.test(d) && d) ||
                        null,
                      g = document.createElement("div");
                    g.innerHTML = k;
                    b[d] = g.textContent || g.innerText || k;
                  });
                  return {
                    tagName: a[1],
                    g: b,
                    s: !!a[3],
                    length: a[0].length,
                  };
                }
              },
              chars: function () {
                var a = h.indexOf("<");
                return { length: a >= 0 ? a : h.length };
              },
            },
            f = function () {
              for (var a in z)
                if (z[a].test(h)) {
                  var b = e[a]();
                  return b
                    ? ((b.type = b.type || a),
                      (b.text = h.substr(0, b.length)),
                      (h = h.slice(b.length)),
                      b)
                    : null;
                }
            };
          l.G &&
            (function () {
              var a =
                  /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                b = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,
                c = [];
              c.H = function () {
                return this[this.length - 1];
              };
              c.v = function (m) {
                var p = this.H();
                return (
                  p && p.tagName && p.tagName.toUpperCase() === m.toUpperCase()
                );
              };
              c.V = function (m) {
                for (var p = 0, x; (x = this[p]); p++)
                  if (x.tagName === m) return !0;
                return !1;
              };
              var d = function (m) {
                  m &&
                    m.type === "startTag" &&
                    (m.s = a.test(m.tagName) || m.s);
                  return m;
                },
                k = f,
                g = function () {
                  h = "</" + c.pop().tagName + ">" + h;
                },
                t = {
                  startTag: function (m) {
                    var p = m.tagName;
                    p.toUpperCase() === "TR" && c.v("TABLE")
                      ? ((h = "<TBODY>" + h), v())
                      : l.oa && b.test(p) && c.V(p)
                      ? c.v(p)
                        ? g()
                        : ((h = "</" + m.tagName + ">" + h), v())
                      : m.s || c.push(m);
                  },
                  endTag: function (m) {
                    c.H()
                      ? l.W && !c.v(m.tagName)
                        ? g()
                        : c.pop()
                      : l.W && (k(), v());
                  },
                },
                v = function () {
                  var m = h,
                    p = d(k());
                  h = m;
                  if (p && t[p.type]) t[p.type](p);
                };
              f = function () {
                v();
                return d(k());
              };
            })();
          return {
            append: function (a) {
              h += a;
            },
            ea: f,
            sa: function (a) {
              for (var b; (b = f()) && (!a[b.type] || a[b.type](b) !== !1); );
            },
            clear: function () {
              var a = h;
              h = "";
              return a;
            },
            ta: function () {
              return h;
            },
            stack: [],
          };
        }
        var u = (function () {
            var h = {},
              l = this.document.createElement("div");
            l.innerHTML = "<P><I></P></I>";
            h.va = l.innerHTML !== "<P><I></P></I>";
            l.innerHTML = "<P><i><P></P></i></P>";
            h.ua = l.childNodes.length === 2;
            return h;
          })(),
          w =
            /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
          q = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
          r =
            /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
          B =
            /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;
        n.supports = u;
        for (var A in u);
        E = n;
      })();
      (function () {
        function n() {}
        function u(e) {
          return e !== void 0 && e !== null;
        }
        function w(e, f, a) {
          var b,
            c = (e && e.length) || 0;
          for (b = 0; b < c; b++) f.call(a, e[b], b);
        }
        function q(e, f, a) {
          for (var b in e) e.hasOwnProperty(b) && f.call(a, b, e[b]);
        }
        function r(e, f) {
          q(f, function (a, b) {
            e[a] = b;
          });
          return e;
        }
        function B(e, f) {
          e = e || {};
          q(f, function (a, b) {
            u(e[a]) || (e[a] = b);
          });
          return e;
        }
        function A(e) {
          try {
            return y.call(e);
          } catch (a) {
            var f = [];
            w(e, function (b) {
              f.push(b);
            });
            return f;
          }
        }
        var h = {
            J: n,
            K: n,
            L: n,
            M: n,
            O: n,
            P: function (e) {
              return e;
            },
            done: n,
            error: function (e) {
              throw e;
            },
            fa: !1,
          },
          l = this;
        if (!l.postscribe) {
          var y = Array.prototype.slice,
            z = (function () {
              function e(a, b, c) {
                var d = "data-ps-" + b;
                if (arguments.length === 2) {
                  var k = a.getAttribute(d);
                  return u(k) ? String(k) : k;
                }
                u(c) && c !== "" ? a.setAttribute(d, c) : a.removeAttribute(d);
              }
              function f(a, b) {
                var c = a.ownerDocument;
                r(this, {
                  root: a,
                  options: b,
                  l: c.defaultView || c.parentWindow,
                  i: c,
                  o: E("", { N: !0 }),
                  u: [a],
                  B: "",
                  C: c.createElement(a.nodeName),
                  j: [],
                  h: [],
                });
                e(this.C, "proxyof", 0);
              }
              f.prototype.write = function () {
                [].push.apply(this.h, arguments);
                for (var a; !this.m && this.h.length; )
                  (a = this.h.shift()),
                    "function" === typeof a ? this.U(a) : this.D(a);
              };
              f.prototype.U = function (a) {
                var b = { type: "function", value: a.name || a.toString() };
                this.A(b);
                a.call(this.l, this.i);
                this.I(b);
              };
              f.prototype.D = function (a) {
                this.o.append(a);
                for (
                  var b, c = [], d, k;
                  (b = this.o.ea()) &&
                  !(d =
                    b && "tagName" in b
                      ? !!~b.tagName.toLowerCase().indexOf("script")
                      : !1) &&
                  !(k =
                    b && "tagName" in b
                      ? !!~b.tagName.toLowerCase().indexOf("style")
                      : !1);

                )
                  c.push(b);
                this.ka(c);
                d && this.X(b);
                k && this.Y(b);
              };
              f.prototype.ka = function (a) {
                var b = this.R(a);
                b.F &&
                  ((b.Z = this.B + b.F),
                  (this.B += b.proxy),
                  (this.C.innerHTML = b.Z),
                  this.ia());
              };
              f.prototype.R = function (a) {
                var b = this.u.length,
                  c = [],
                  d = [],
                  k = [];
                w(a, function (g) {
                  c.push(g.text);
                  if (g.g) {
                    if (!/^noscript$/i.test(g.tagName)) {
                      var t = b++;
                      d.push(
                        g.text.replace(/(\/?>)/, " data-ps-id=" + t + " $1")
                      );
                      g.g.id !== "ps-script" &&
                        g.g.id !== "ps-style" &&
                        k.push(
                          g.type === "atomicTag"
                            ? ""
                            : "<" +
                                g.tagName +
                                " data-ps-proxyof=" +
                                t +
                                (g.s ? " />" : ">")
                        );
                    }
                  } else d.push(g.text), k.push(g.type === "endTag" ? g.text : "");
                });
                return {
                  wa: a,
                  raw: c.join(""),
                  F: d.join(""),
                  proxy: k.join(""),
                };
              };
              f.prototype.ia = function () {
                for (var a, b = [this.C]; u((a = b.shift())); ) {
                  var c = a.nodeType === 1;
                  if (!c || !e(a, "proxyof")) {
                    c && ((this.u[e(a, "id")] = a), e(a, "id", null));
                    var d = a.parentNode && e(a.parentNode, "proxyof");
                    d && this.u[d].appendChild(a);
                  }
                  b.unshift.apply(b, A(a.childNodes));
                }
              };
              f.prototype.X = function (a) {
                var b = this.o.clear();
                b && this.h.unshift(b);
                a.src = a.g.src || a.g.ma;
                a.src && this.j.length ? (this.m = a) : this.A(a);
                var c = this;
                this.ja(a, function () {
                  c.I(a);
                });
              };
              f.prototype.Y = function (a) {
                var b = this.o.clear();
                b && this.h.unshift(b);
                a.type = a.g.type || a.g.TYPE || "text/css";
                this.la(a);
                b && this.write();
              };
              f.prototype.la = function (a) {
                var b = this.T(a);
                this.ba(b);
                a.content &&
                  (b.styleSheet && !b.sheet
                    ? (b.styleSheet.cssText = a.content)
                    : b.appendChild(this.i.createTextNode(a.content)));
              };
              f.prototype.T = function (a) {
                var b = this.i.createElement(a.tagName);
                b.setAttribute("type", a.type);
                q(a.g, function (c, d) {
                  b.setAttribute(c, d);
                });
                return b;
              };
              f.prototype.ba = function (a) {
                this.D('<span id="ps-style"/>');
                var b = this.i.getElementById("ps-style");
                b.parentNode.replaceChild(a, b);
              };
              f.prototype.A = function (a) {
                a.ca = this.h;
                this.h = [];
                this.j.unshift(a);
              };
              f.prototype.I = function (a) {
                a !== this.j[0]
                  ? this.options.error({
                      message: "Bad script nesting or script finished twice",
                    })
                  : (this.j.shift(),
                    this.write.apply(this, a.ca),
                    !this.j.length &&
                      this.m &&
                      (this.A(this.m), (this.m = null)));
              };
              f.prototype.ja = function (a, b) {
                var c = this.S(a),
                  d = this.ha(c),
                  k = this.options.J;
                a.src &&
                  ((c.src = a.src),
                  this.ga(
                    c,
                    d
                      ? k
                      : function () {
                          b();
                          k();
                        }
                  ));
                try {
                  this.aa(c), (a.src && !d) || b();
                } catch (g) {
                  this.options.error(g), b();
                }
              };
              f.prototype.S = function (a) {
                var b = this.i.createElement(a.tagName);
                q(a.g, function (c, d) {
                  b.setAttribute(c, d);
                });
                a.content && (b.text = a.content);
                return b;
              };
              f.prototype.aa = function (a) {
                this.D('<span id="ps-script"/>');
                var b = this.i.getElementById("ps-script");
                b.parentNode.replaceChild(a, b);
              };
              f.prototype.ga = function (a, b) {
                function c() {
                  a = a.onload = a.onreadystatechange = a.onerror = null;
                }
                var d = this.options.error;
                r(a, {
                  onload: function () {
                    c();
                    b();
                  },
                  onreadystatechange: function () {
                    /^(loaded|complete)$/.test(a.readyState) && (c(), b());
                  },
                  onerror: function () {
                    var k = { message: "remote script failed " + a.src };
                    c();
                    d(k);
                    b();
                  },
                });
              };
              f.prototype.ha = function (a) {
                return (
                  !/^script$/i.test(a.nodeName) ||
                  !!(this.options.fa && a.src && a.hasAttribute("async"))
                );
              };
              return f;
            })();
          l.postscribe = (function () {
            function e() {
              var d = b.shift(),
                k;
              d &&
                ((k = d[d.length - 1]),
                k.K(),
                (d.stream = f.apply(null, d)),
                k.L());
            }
            function f(d, k, g) {
              function t(x) {
                x = g.P(x);
                c.write(x);
                g.M(x);
              }
              c = new z(d, g);
              c.id = a++;
              c.name = g.name || c.id;
              var v = d.ownerDocument,
                m = {
                  close: v.close,
                  open: v.open,
                  write: v.write,
                  writeln: v.writeln,
                };
              r(v, {
                close: n,
                open: n,
                write: function () {
                  return t(A(arguments).join(""));
                },
                writeln: function () {
                  return t(A(arguments).join("") + "\n");
                },
              });
              var p = c.l.onerror || n;
              c.l.onerror = function (x, G, H) {
                g.error({ qa: x + " - " + G + ":" + H });
                p.apply(c.l, arguments);
              };
              c.write(k, function () {
                r(v, m);
                c.l.onerror = p;
                g.done();
                c = null;
                e();
              });
              return c;
            }
            var a = 0,
              b = [],
              c = null;
            return r(
              function (d, k, g) {
                "function" === typeof g && (g = { done: g });
                g = B(g, h);
                d = /^#/.test(d)
                  ? l.document.getElementById(d.substr(1))
                  : d.pa
                  ? d[0]
                  : d;
                var t = [d, k, g];
                d.da = {
                  cancel: function () {
                    t.stream ? t.stream.abort() : (t[1] = n);
                  },
                };
                g.O(t);
                b.push(t);
                c || e();
                return d.da;
              },
              { streams: {}, ra: b, na: z }
            );
          })();
          F = l.postscribe;
        }
      })();
      D(
        "google_tag_manager_external.postscribe.installPostscribe",
        function () {
          var n = window.google_tag_manager;
          n && (n.postscribe || (n.postscribe = window.postscribe || F));
        }
      );
      D("google_tag_manager_external.postscribe.getPostscribe", function () {
        return window.google_tag_manager.postscribe;
      });
    }).call(this);
  } catch {}

  var h,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    da = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    ea = da(this),
    fa = function (a, b) {
      if (b)
        a: {
          for (var c = ea, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            k = c[g],
            m = b(k);
          m != k &&
            m != null &&
            ca(c, g, { configurable: !0, writable: !0, value: m });
        }
    };
  fa("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.j = f;
      ca(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.j;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  var ja = function (a) {
      return ha(a, a);
    },
    ha = function (a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a), Object.freeze(b));
      return a;
    },
    l = function (a) {
      var b =
        typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: aa(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ka = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ma = function (a) {
      return a instanceof Array ? a : ka(l(a));
    },
    oa =
      typeof Object.assign == "function"
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  fa("Object.assign", function (a) {
    return a || oa;
  });
  var pa =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    qa;
  if (typeof Object.setPrototypeOf == "function") qa = Object.setPrototypeOf;
  else {
    var ra;
    a: {
      var sa = { a: !0 },
        ta = {};
      try {
        ta.__proto__ = sa;
        ra = ta.a;
        break a;
      } catch (a) {}
      ra = !1;
    }
    qa = ra
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ua = qa,
    va = function (a, b) {
      a.prototype = pa(b.prototype);
      a.prototype.constructor = a;
      if (ua) ua(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Qn = b.prototype;
    },
    wa = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var ya = this || self;
  var za = function (a, b) {
    this.type = a;
    this.data = b;
  };
  var Aa = function () {
    this.map = {};
    this.C = {};
  };
  h = Aa.prototype;
  h.get = function (a) {
    return this.map["dust." + a];
  };
  h.set = function (a, b) {
    var c = "dust." + a;
    this.C.hasOwnProperty(c) || (this.map[c] = b);
  };
  h.Yh = function (a, b) {
    this.set(a, b);
    this.C["dust." + a] = !0;
  };
  h.has = function (a) {
    return this.map.hasOwnProperty("dust." + a);
  };
  h.remove = function (a) {
    var b = "dust." + a;
    this.C.hasOwnProperty(b) || delete this.map[b];
  };
  var Ba = function () {};
  Ba.prototype.reset = function () {};
  var Ca = function (a, b) {
    this.P = a;
    this.parent = b;
    this.j = this.C = void 0;
    this.K = !1;
    this.H = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Aa();
  };
  Ca.prototype.add = function (a, b) {
    Da(this, a, b, !1);
  };
  var Da = function (a, b, c, d) {
    a.K || (d ? a.values.Yh(b, c) : a.values.set(b, c));
  };
  Ca.prototype.set = function (a, b) {
    this.K ||
      (!this.values.has(a) && this.parent && this.parent.has(a)
        ? this.parent.set(a, b)
        : this.values.set(a, b));
  };
  Ca.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  Ca.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Fa = function (a) {
    var b = new Ca(a.P, a);
    a.C && (b.C = a.C);
    b.H = a.H;
    b.j = a.j;
    return b;
  };
  Ca.prototype.sd = function () {
    return this.P;
  };
  Ca.prototype.Ka = function () {
    this.K = !0;
  };
  function Ga(a, b) {
    for (
      var c, d = l(b), e = d.next();
      !e.done && !((c = Ha(a, e.value)), c instanceof za);
      e = d.next()
    );
    return c;
  }
  function Ha(a, b) {
    try {
      var c = l(b),
        d = c.next().value,
        e = ka(c),
        f = a.get(String(d));
      if (!f || typeof f.invoke !== "function")
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return f.invoke.apply(f, [a].concat(ma(e)));
    } catch (k) {
      var g = a.C;
      g && g(k, b.context ? { id: b[0], line: b.context.line } : null);
      throw k;
    }
  }
  var Ia = function () {
    this.C = new Ba();
    this.j = new Ca(this.C);
  };
  h = Ia.prototype;
  h.sd = function () {
    return this.C;
  };
  h.execute = function (a) {
    return this.Xh([a].concat(ma(wa.apply(1, arguments))));
  };
  h.Xh = function () {
    for (
      var a, b = l(wa.apply(0, arguments)), c = b.next();
      !c.done;
      c = b.next()
    )
      a = Ha(this.j, c.value);
    return a;
  };
  h.Pk = function (a) {
    var b = wa.apply(1, arguments),
      c = Fa(this.j);
    c.j = a;
    for (var d, e = l(b), f = e.next(); !f.done; f = e.next())
      d = Ha(c, f.value);
    return d;
  };
  h.Ka = function () {
    this.j.Ka();
  };
  var Ja = function () {
    Aa.call(this);
    this.j = !1;
  };
  va(Ja, Aa);
  var Ka = function (a, b) {
    var c = [],
      d;
    for (d in a.map)
      if (a.map.hasOwnProperty(d))
        switch (((d = d.substring(5)), b)) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)]);
        }
    return c;
  };
  h = Ja.prototype;
  h.set = function (a, b) {
    this.j || Aa.prototype.set.call(this, a, b);
  };
  h.Yh = function (a, b) {
    this.j || Aa.prototype.Yh.call(this, a, b);
  };
  h.remove = function (a) {
    this.j || Aa.prototype.remove.call(this, a);
  };
  h.fc = function () {
    return Ka(this, 1);
  };
  h.Ka = function () {
    this.j = !0;
  };
  h.Qk = function () {
    return this.j;
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var La = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Ma = function (a) {
      if (a == null) return String(a);
      var b = La.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Na = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Pa = function (a) {
      if (!a || Ma(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Na(a, "constructor") &&
          !Na(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return b === void 0 || Na(a, b);
    },
    Qa = function (a, b) {
      var c = b || (Ma(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (Na(a, d)) {
          var e = a[d];
          Ma(e) == "array"
            ? (Ma(c[d]) != "array" && (c[d] = []), (c[d] = Qa(e, c[d])))
            : Pa(e)
            ? (Pa(c[d]) || (c[d] = {}), (c[d] = Qa(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Ra(a) {
    if (a == void 0 || Array.isArray(a) || Pa(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function Ta(a) {
    return (
      (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) ||
      (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a))
    );
  }
  var Ua = function (a) {
    a = a === void 0 ? [] : a;
    Ja.call(this);
    this.values = [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Ta(b)
          ? (this.values[Number(b)] = a[Number(b)])
          : Ja.prototype.set.call(this, b, a[b]));
  };
  va(Ua, Ja);
  h = Ua.prototype;
  h.toString = function (a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.values.length; c++) {
      var d = this.values[c];
      d === null || d === void 0
        ? b.push("")
        : d instanceof Ua
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  h.set = function (a, b) {
    if (!Ja.prototype.Qk.call(this))
      if (a === "length") {
        if (!Ta(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.values.length = Number(b);
      } else
        Ta(a)
          ? (this.values[Number(a)] = b)
          : Ja.prototype.set.call(this, a, b);
  };
  h.get = function (a) {
    return a === "length"
      ? this.length()
      : Ta(a)
      ? this.values[Number(a)]
      : Ja.prototype.get.call(this, a);
  };
  h.length = function () {
    return this.values.length;
  };
  h.Nb = function () {
    for (var a = Ja.prototype.fc.call(this), b = 0; b < this.values.length; b++)
      a.push(String(b));
    return new Ua(a);
  };
  h.remove = function (a) {
    Ta(a) ? delete this.values[Number(a)] : Ja.prototype.remove.call(this, a);
  };
  h.pop = function () {
    return this.values.pop();
  };
  h.push = function () {
    return this.values.push.apply(
      this.values,
      Array.prototype.slice.call(arguments)
    );
  };
  h.shift = function () {
    return this.values.shift();
  };
  h.splice = function (a, b) {
    return new Ua(this.values.splice.apply(this.values, arguments));
  };
  h.unshift = function () {
    return this.values.unshift.apply(
      this.values,
      Array.prototype.slice.call(arguments)
    );
  };
  h.has = function (a) {
    return (
      (Ta(a) && this.values.hasOwnProperty(a)) || Ja.prototype.has.call(this, a)
    );
  };
  h.Ka = function () {
    Ja.prototype.Ka.call(this);
    Object.freeze(this.values);
  };
  function Va(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var Wa = function () {
    Ja.call(this);
  };
  va(Wa, Ja);
  Wa.prototype.Nb = function () {
    return new Ua(this.fc());
  };
  function Xa() {
    for (var a = Ya, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Za() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Ya, ab;
  function bb(a) {
    Ya = Ya || Za();
    ab = ab || Xa();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Ya[m], Ya[n], Ya[p], Ya[q]);
    }
    return b.join("");
  }
  function cb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = ab[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Ya = Ya || Za();
    ab = ab || Xa();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (k === 64 && e === -1) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      g !== 64 &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var db = {};
  function eb(a, b) {
    db[a] = db[a] || [];
    db[a][b] = !0;
  }
  function fb(a) {
    var b = db[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return bb(c.join("")).replace(/\.+$/, "");
  }
  function gb() {
    for (var a = [], b = db.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return a.length > 0 ? a : void 0;
  }
  var hb = [],
    ib = {};
  function jb(a) {
    return hb[a] === void 0 ? !1 : hb[a];
  }
  function kb() {}
  function lb(a) {
    return typeof a === "function";
  }
  function z(a) {
    return typeof a === "string";
  }
  function mb(a) {
    return typeof a === "number" && !isNaN(a);
  }
  function nb(a) {
    return Array.isArray(a) ? a : [a];
  }
  function ob(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function pb(a, b) {
    if (!mb(a) || !mb(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function qb(a, b) {
    for (var c = new rb(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function sb(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function tb(a) {
    return (
      !!a &&
      (Object.prototype.toString.call(a) === "[object Arguments]" ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function ub(a) {
    return Math.round(Number(a)) || 0;
  }
  function vb(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function wb(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function xb(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function yb() {
    return new Date(Date.now());
  }
  function zb() {
    return yb().getTime();
  }
  var rb = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  rb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  rb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  rb.prototype.contains = function (a) {
    return this.get(a) !== void 0;
  };
  function Ab(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function Bb(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function Cb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function Db(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function Eb(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b;
  }
  function Fb(a, b) {
    return (
      a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    );
  }
  function Gb(a, b) {
    var c = C;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return;
    }
    return d;
  }
  function Hb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var Ib = /^\w{1,9}$/;
  function Jb(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    sb(a, function (d, e) {
      Ib.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function Kb(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function Lb(a) {
    if (!a) return a;
    var b = a;
    if (jb(3))
      try {
        b = decodeURIComponent(a);
      } catch (d) {}
    var c = b.split(",");
    return c.length === 2 && c[0] === c[1] ? c[0] : a;
  } /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
  var Mb = globalThis.trustedTypes,
    Nb;
  function Ob() {
    var a = null;
    if (!Mb) return a;
    try {
      var b = function (c) {
        return c;
      };
      a = Mb.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b,
      });
    } catch (c) {}
    return a;
  }
  function Pb() {
    Nb === void 0 && (Nb = Ob());
    return Nb;
  }
  var Qb = function (a) {
    this.j = a;
  };
  Qb.prototype.toString = function () {
    return this.j + "";
  };
  function Rb(a) {
    var b = a,
      c = Pb();
    return new Qb(c ? c.createScriptURL(b) : b);
  }
  function Sb(a) {
    if (a instanceof Qb) return a.j;
    throw Error("");
  }
  var Tb = ja([""]),
    Ub = ha(["\x00"], ["\\0"]),
    Vb = ha(["\n"], ["\\n"]),
    Wb = ha(["\x00"], ["\\u0000"]);
  function Xb(a) {
    return a.toString().indexOf("`") === -1;
  }
  Xb(function (a) {
    return a(Tb);
  }) ||
    Xb(function (a) {
      return a(Ub);
    }) ||
    Xb(function (a) {
      return a(Vb);
    }) ||
    Xb(function (a) {
      return a(Wb);
    });
  var Yb = function (a) {
    this.j = a;
  };
  Yb.prototype.toString = function () {
    return this.j;
  };
  var Zb = new Yb("about:invalid#zClosurez");
  var $b = function (a) {
    this.lm = a;
  };
  function ac(a) {
    return new $b(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var bc = [
    ac("data"),
    ac("http"),
    ac("https"),
    ac("mailto"),
    ac("ftp"),
    new $b(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function cc(a, b) {
    b = b === void 0 ? bc : b;
    if (a instanceof Yb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof $b && d.lm(a)) return new Yb(a);
    }
  }
  function dc(a) {
    var b;
    b = b === void 0 ? bc : b;
    return cc(a, b) || Zb;
  }
  var ec = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function fc(a) {
    var b;
    if (a instanceof Yb)
      if (a instanceof Yb) b = a.j;
      else throw Error("");
    else b = ec.test(a) ? a : void 0;
    return b;
  }
  var hc = function () {
    this.j = gc[0].toLowerCase();
  };
  hc.prototype.toString = function () {
    return this.j;
  };
  var ic = function (a) {
    this.j = a;
  };
  ic.prototype.toString = function () {
    return this.j + "";
  };
  function jc(a, b) {
    var c = [new hc()];
    if (c.length === 0) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof hc) g = f.j;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return e.indexOf(f) !== 0;
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function kc(a, b) {
    var c = fc(b);
    c !== void 0 && (a.action = c);
  }
  var lc = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function mc(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  }
  var C = window,
    E = document,
    nc = navigator;
  function oc() {
    var a;
    try {
      a = nc.serviceWorker;
    } catch (b) {
      return;
    }
    return a;
  }
  var pc = E.currentScript,
    qc = pc && pc.src;
  function rc(a, b) {
    var c = C[a];
    C[a] = c === void 0 ? b : c;
    return C[a];
  }
  function sc(a) {
    return (nc.userAgent || "").indexOf(a) !== -1;
  }
  var tc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    uc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function vc(a, b, c) {
    b &&
      sb(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  function wc(a, b, c, d, e) {
    var f = E.createElement("script");
    vc(f, d, tc);
    f.type = "text/javascript";
    f.async = d && d.async === !1 ? !1 : !0;
    var g;
    g = Rb(mc(a));
    f.src = Sb(g);
    var k,
      m,
      n,
      p =
        (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
          .document).querySelector) == null
          ? void 0
          : n.call(m, "script[nonce]");
    (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
      f.setAttribute("nonce", k);
    b && (f.onload = b);
    c && (f.onerror = c);
    if (e) e.appendChild(f);
    else {
      var q = E.getElementsByTagName("script")[0] || E.body || E.head;
      q.parentNode.insertBefore(f, q);
    }
    return f;
  }
  function xc() {
    if (qc) {
      var a = qc.toLowerCase();
      if (a.indexOf("https://") === 0) return 2;
      if (a.indexOf("http://") === 0) return 3;
    }
    return 1;
  }
  function yc(a, b, c, d, e) {
    var f;
    f = f === void 0 ? !0 : f;
    var g = e,
      k = !1;
    g || ((g = E.createElement("iframe")), (k = !0));
    vc(g, c, uc);
    d &&
      sb(d, function (n, p) {
        g.dataset[n] = p;
      });
    f &&
      ((g.height = "0"),
      (g.width = "0"),
      (g.style.display = "none"),
      (g.style.visibility = "hidden"));
    a !== void 0 && (g.src = a);
    if (k) {
      var m = (E.body && E.body.lastChild) || E.body || E.head;
      m.parentNode.insertBefore(g, m);
    }
    b && (g.onload = b);
    return g;
  }
  var zc = function (a, b, c, d) {
    var e = new Image(1, 1);
    vc(e, d, {});
    e.onload = function () {
      e.onload = null;
      b && b();
    };
    e.onerror = function () {
      e.onerror = null;
      c && c();
    };
    e.src = a;
    return e;
  };
  function Ac(a, b, c, d) {
    zc(a, b, c, d);
  }
  function Bc(a, b, c, d) {
    a.addEventListener
      ? a.addEventListener(b, c, !!d)
      : a.attachEvent && a.attachEvent("on" + b, c);
  }
  function Cc(a, b, c) {
    a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : a.detachEvent && a.detachEvent("on" + b, c);
  }
  function F(a) {
    C.setTimeout(a, 0);
  }
  function Dc(a, b) {
    return a && b && a.attributes && a.attributes[b]
      ? a.attributes[b].value
      : null;
  }
  function Ec(a) {
    function b(e) {
      e && e !== " " && (e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      e && e !== " " && (e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      e && (e = e.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return e;
    }
    var c = b(a.innerText || a.textContent || "");
    if (jb(10)) {
      var d = b(a.textContent || "");
      eb("TAGGING", 26);
      d !== c && eb("TAGGING", 25);
    }
    return c;
  }
  function Fc(a) {
    var b = E.createElement("div"),
      c = b,
      d,
      e = mc("A<div>" + a + "</div>"),
      f = Pb();
    d = new ic(f ? f.createHTML(e) : e);
    if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName))
      throw Error("");
    var g;
    if (d instanceof ic) g = d.j;
    else throw Error("");
    c.innerHTML = g;
    b = b.lastChild;
    for (var k = []; b && b.firstChild; ) k.push(b.removeChild(b.firstChild));
    return k;
  }
  function Gc(a, b, c) {
    c = c || 100;
    for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
    for (var f = a, g = 0; f && g <= c; g++) {
      if (d[String(f.tagName).toLowerCase()]) return f;
      f = f.parentElement;
    }
    return null;
  }
  function Hc(a) {
    var b;
    try {
      b = nc.sendBeacon && nc.sendBeacon(a);
    } catch (c) {
      eb("TAGGING", 15);
    }
    b || zc(a);
  }
  function Ic(a, b) {
    try {
      return nc.sendBeacon(a, b);
    } catch (c) {
      eb("TAGGING", 15);
    }
    return !1;
  }
  var Jc = {
    cache: "no-store",
    credentials: "include",
    keepalive: !0,
    method: "POST",
    mode: "no-cors",
    redirect: "follow",
  };
  function Kc(a, b, c) {
    if (Lc()) {
      var d = Object.assign({}, Jc);
      b && (d.body = b);
      c &&
        (c.attributionReporting &&
          (d.attributionReporting = c.attributionReporting),
        c.browsingTopics && (d.browsingTopics = c.browsingTopics));
      try {
        var e = C.fetch(a, d);
        e && e.catch(kb);
        return !0;
      } catch (f) {}
    }
    if (c && c.noFallback) return !1;
    if (b) return Ic(a, b);
    Hc(a);
    return !0;
  }
  function Lc() {
    return typeof C.fetch === "function";
  }
  function Mc(a, b) {
    var c = a[b];
    c && typeof c.animVal === "string" && (c = c.animVal);
    return c;
  }
  function Nc() {
    var a = C.performance;
    if (a && lb(a.now)) return a.now();
  }
  function Oc() {
    return C.performance || void 0;
  }
  function Pc(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Qc(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function Rc(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function Sc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    return String(a).indexOf(String(b)) > -1;
  }
  function Tc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function Uc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    switch (a) {
      case "pageLocation":
        var c = C.location.href;
        b instanceof Wa &&
          b.get("stripProtocol") &&
          (c = c.replace(/^https?:\/\//, ""));
        return c;
    }
  }
  var Vc = function (a, b) {
    Ja.call(this);
    this.Tj = a;
    this.th = b;
  };
  va(Vc, Ja);
  h = Vc.prototype;
  h.toString = function () {
    return this.Tj;
  };
  h.getName = function () {
    return this.Tj;
  };
  h.Nb = function () {
    return new Ua(this.fc());
  };
  h.invoke = function (a) {
    return this.th.apply(
      new Wc(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  h.fb = function (a) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (b) {}
  };
  var Wc = function (a, b) {
    this.th = a;
    this.D = b;
  };
  Wc.prototype.evaluate = function (a) {
    var b = this.D;
    return Array.isArray(a) ? Ha(b, a) : a;
  };
  Wc.prototype.getName = function () {
    return this.th.getName();
  };
  Wc.prototype.sd = function () {
    return this.D.sd();
  };
  var Xc = function () {
    this.map = new Map();
  };
  Xc.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  Xc.prototype.get = function (a) {
    return this.map.get(a);
  };
  var Yc = function () {
    this.keys = [];
    this.values = [];
  };
  Yc.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  Yc.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b];
  };
  function Zc() {
    try {
      return Map ? new Xc() : new Yc();
    } catch (a) {
      return new Yc();
    }
  }
  var $c = function (a) {
    if (a instanceof $c) return a;
    if (Ra(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  $c.prototype.getValue = function () {
    return this.value;
  };
  $c.prototype.toString = function () {
    return String(this.value);
  };
  var bd = function (a) {
    Ja.call(this);
    this.promise = a;
    this.set("then", ad(this));
    this.set("catch", ad(this, !0));
    this.set("finally", ad(this, !1, !0));
  };
  va(bd, Wa);
  var ad = function (a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new Vc("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof Vc || (d = void 0);
      e instanceof Vc || (e = void 0);
      var f = Fa(this.D),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        k = a.promise.then(d && g(d), e && g(e));
      return new bd(k);
    });
  };
  function I(a, b, c) {
    var d = Zc(),
      e = function (g, k) {
        for (var m = g.fc(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (g instanceof Ua) {
          var m = [];
          d.set(g, m);
          for (var n = g.Nb(), p = 0; p < n.length(); p++)
            m[n.get(p)] = f(g.get(n.get(p)));
          return m;
        }
        if (g instanceof bd) return g.promise;
        if (g instanceof Wa) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof Vc) {
          var r = function () {
            for (
              var v = Array.prototype.slice.call(arguments, 0), u = 0;
              u < v.length;
              u++
            )
              v[u] = cd(v[u], b, c);
            var w = new Ca(b ? b.sd() : new Ba());
            b && (w.j = b.j);
            return f(g.invoke.apply(g, [w].concat(v)));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var t = !1;
        switch (c) {
          case 1:
            t = !0;
            break;
          case 2:
            t = !1;
            break;
          case 3:
            t = !1;
            break;
          default:
        }
        if (g instanceof $c && t) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null;
        }
      };
    return f(a);
  }
  function cd(a, b, c) {
    var d = Zc(),
      e = function (g, k) {
        for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (Array.isArray(g) || tb(g)) {
          var m = new Ua([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (Pa(g)) {
          var p = new Wa();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if (typeof g === "function") {
          var q = new Vc("", function () {
            for (
              var x = Array.prototype.slice.call(arguments, 0), y = 0;
              y < x.length;
              y++
            )
              x[y] = I(this.evaluate(x[y]), b, c);
            return f((0, this.D.H)(g, g, x));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var u = typeof g;
        if (g === null || u === "string" || u === "number" || u === "boolean")
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new $c(g);
      };
    return f(a);
  }
  function dd() {
    var a = !1;
    return a;
  }
  var ed = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof Ua)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new Ua(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new Ua(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new Ua(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; k >= 0; k--)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = Va(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new Ua(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Va(this);
      b === void 0
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var fd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  va(fd, Error);
  var gd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    hd = new za("break"),
    id = new za("continue");
  function jd(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function kd(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function ld(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof Ua))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (a === null || a === void 0) {
      var d = "TypeError: Can't read property " + b + " of " + a + ".";
      if (dd()) throw new fd(d);
      throw Error(d);
    }
    var e = typeof a === "number";
    if (typeof a === "boolean" || e) {
      if (b === "toString") {
        if (e && c.length()) {
          var f = I(c.get(0));
          try {
            return a.toString(f);
          } catch (y) {}
        }
        return a.toString();
      }
      var g = "TypeError: " + a + "." + b + " is not a function.";
      if (dd()) throw new fd(g);
      throw Error(g);
    }
    if (typeof a === "string") {
      if (gd.hasOwnProperty(b)) {
        var k = 2;
        k = 1;
        var m = I(c, void 0, k);
        return cd(a[b].apply(a, m), this.D);
      }
      var n = "TypeError: " + b + " is not a function";
      if (dd()) throw new fd(n);
      throw Error(n);
    }
    if (a instanceof Ua) {
      if (a.has(b)) {
        var p = a.get(b);
        if (p instanceof Vc) {
          var q = Va(c);
          q.unshift(this.D);
          return p.invoke.apply(p, q);
        }
        var r = "TypeError: " + b + " is not a function";
        if (dd()) throw new fd(r);
        throw Error(r);
      }
      if (ed.supportedMethods.indexOf(b) >= 0) {
        var t = Va(c);
        t.unshift(this.D);
        return ed[b].apply(a, t);
      }
    }
    if (a instanceof Vc || a instanceof Wa) {
      if (a.has(b)) {
        var v = a.get(b);
        if (v instanceof Vc) {
          var u = Va(c);
          u.unshift(this.D);
          return v.invoke.apply(v, u);
        }
        var w = "TypeError: " + b + " is not a function";
        if (dd()) throw new fd(w);
        throw Error(w);
      }
      if (b === "toString") return a instanceof Vc ? a.getName() : a.toString();
      if (b === "hasOwnProperty") return a.has.apply(a, Va(c));
    }
    if (a instanceof $c && b === "toString") return a.toString();
    var x = "TypeError: Object has no '" + b + "' property.";
    if (dd()) throw new fd(x);
    throw Error(x);
  }
  function md(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string")
      throw Error("Invalid key name given for assignment.");
    var c = this.D;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function nd() {
    var a = Fa(this.D),
      b = Ga(a, Array.prototype.slice.apply(arguments));
    if (b instanceof za) return b;
  }
  function od() {
    return hd;
  }
  function pd(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof za) return d;
    }
  }
  function qd() {
    for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        Da(a, c, d, !0);
      }
    }
  }
  function rd() {
    return id;
  }
  function sd(a, b) {
    return new za(a, this.evaluate(b));
  }
  function vd(a, b) {
    var c = new Ua();
    b = this.evaluate(b);
    for (var d = 0; d < b.length; d++) c.push(b[d]);
    var e = [51, a, c].concat(
      Array.prototype.splice.call(arguments, 2, arguments.length - 2)
    );
    this.D.add(a, this.evaluate(e));
  }
  function wd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function xd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    var c = a instanceof $c,
      d = b instanceof $c;
    return c || d ? (c && d ? a.getValue() === b.getValue() : !1) : a == b;
  }
  function yd() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function zd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Ga(f, d);
      if (g instanceof za) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
    }
  }
  function Ad(a, b, c) {
    if (typeof b === "string")
      return zd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof Wa || b instanceof Ua || b instanceof Vc) {
      var d = b.Nb(),
        e = d.length();
      return zd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  function Bd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ad(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Cd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ad(
      function (e) {
        var f = Fa(d);
        Da(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Dd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ad(
      function (e) {
        var f = Fa(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Ed(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Fd(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Gd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Fd(
      function (e) {
        var f = Fa(d);
        Da(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Hd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Fd(
      function (e) {
        var f = Fa(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Fd(a, b, c) {
    if (typeof b === "string")
      return zd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof Ua)
      return zd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (dd()) throw new fd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Id(a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var t = f.get(r);
        q.add(t, p.get(t));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof Ua))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.D;
    d = this.evaluate(d);
    var k = Fa(g);
    for (e(g, k); Ha(k, b); ) {
      var m = Ga(k, d);
      if (m instanceof za) {
        if (m.type === "break") break;
        if (m.type === "return") return m;
      }
      var n = Fa(g);
      e(k, n);
      Ha(n, c);
      k = n;
    }
  }
  function Jd(a, b) {
    var c = this.D,
      d = this.evaluate(b);
    if (!(d instanceof Ua))
      throw Error("Error: non-List value given for Fn argument names.");
    var e = Array.prototype.slice.call(arguments, 2);
    return new Vc(
      a,
      (function () {
        return function (f) {
          var g = Fa(c);
          g.j === void 0 && (g.j = this.D.j);
          for (
            var k = Array.prototype.slice.call(arguments, 0), m = 0;
            m < k.length;
            m++
          )
            if (((k[m] = this.evaluate(k[m])), k[m] instanceof za)) return k[m];
          for (var n = d.get("length"), p = 0; p < n; p++)
            p < k.length ? g.add(d.get(p), k[p]) : g.add(d.get(p), void 0);
          g.add("arguments", new Ua(k));
          var q = Ga(g, e);
          if (q instanceof za) return q.type === "return" ? q.data : q;
        };
      })()
    );
  }
  function Kd(a) {
    a = this.evaluate(a);
    var b = this.D;
    if (Ld && !b.has(a)) throw new ReferenceError(a + " is not defined.");
    return b.get(a);
  }
  function Md(a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (a === void 0 || a === null) {
      var d =
        "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
      if (dd()) throw new fd(d);
      throw Error(d);
    }
    if (a instanceof Wa || a instanceof Ua || a instanceof Vc) c = a.get(b);
    else if (typeof a === "string")
      b === "length" ? (c = a.length) : Ta(b) && (c = a[b]);
    else if (a instanceof $c) return;
    return c;
  }
  function Nd(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function Od(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function Pd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    a instanceof $c && (a = a.getValue());
    b instanceof $c && (b = b.getValue());
    return a === b;
  }
  function Qd(a, b) {
    return !Pd.call(this, a, b);
  }
  function Rd(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Ga(this.D, d);
    if (e instanceof za) return e;
  }
  var Ld = !1;
  function Sd(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function Td(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function Ud() {
    for (var a = new Ua(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function Vd() {
    for (var a = new Wa(), b = 0; b < arguments.length - 1; b += 2) {
      var c = this.evaluate(arguments[b]) + "",
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function Wd(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function Xd(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function Yd(a) {
    return -this.evaluate(a);
  }
  function Zd(a) {
    return !this.evaluate(a);
  }
  function $d(a, b) {
    return !xd.call(this, a, b);
  }
  function ae() {
    return null;
  }
  function be(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function ce(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function de(a) {
    return this.evaluate(a);
  }
  function ee() {
    return Array.prototype.slice.apply(arguments);
  }
  function fe(a) {
    return new za("return", this.evaluate(a));
  }
  function ge(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (a === null || a === void 0) {
      var d = "TypeError: Can't set property " + b + " of " + a + ".";
      if (dd()) throw new fd(d);
      throw Error(d);
    }
    (a instanceof Vc || a instanceof Ua || a instanceof Wa) && a.set(b, c);
    return c;
  }
  function he(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function ie(a, b, c) {
    a = this.evaluate(a);
    var d = this.evaluate(b),
      e = this.evaluate(c);
    if (!Array.isArray(d) || !Array.isArray(e))
      throw Error("Error: Malformed switch instruction.");
    for (var f, g = !1, k = 0; k < d.length; k++)
      if (g || a === this.evaluate(d[k]))
        if (((f = this.evaluate(e[k])), f instanceof za)) {
          var m = f.type;
          if (m === "break") return;
          if (m === "return" || m === "continue") return f;
        } else g = !0;
    if (
      e.length === d.length + 1 &&
      ((f = this.evaluate(e[e.length - 1])),
      f instanceof za && (f.type === "return" || f.type === "continue"))
    )
      return f;
  }
  function je(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function ke(a) {
    a = this.evaluate(a);
    return a instanceof Vc ? "function" : typeof a;
  }
  function le() {
    for (var a = this.D, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0);
    }
  }
  function me(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Ga(this.D, e);
      if (f instanceof za) {
        if (f.type === "break") return;
        if (f.type === "return") return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Ga(this.D, e);
      if (g instanceof za) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
      this.evaluate(b);
    }
  }
  function ne(a) {
    return ~Number(this.evaluate(a));
  }
  function oe(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function pe(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function qe(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function re(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function se(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function te(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function ue() {}
  function ve(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof za) return g;
    } catch (r) {
      if (!(r instanceof fd && a)) throw ((f = r instanceof fd), r);
      var k = Fa(this.D),
        m = new $c(r);
      k.add(b, m);
      var n = this.evaluate(d),
        p = Ga(k, n);
      if (p instanceof za) return p;
    } finally {
      if (f && e !== void 0) {
        var q = this.evaluate(e);
        if (q instanceof za) return q;
      }
    }
  }
  var xe = function () {
    this.j = new Ia();
    we(this);
  };
  xe.prototype.execute = function (a) {
    return this.j.Xh(a);
  };
  var we = function (a) {
    var b = function (c, d) {
      var e = new Vc(String(c), d);
      e.Ka();
      a.j.j.set(String(c), e);
    };
    b("map", Vd);
    b("and", Pc);
    b("contains", Sc);
    b("equals", Qc);
    b("or", Rc);
    b("startsWith", Tc);
    b("variable", Uc);
  };
  var ze = function () {
    this.C = !1;
    this.j = new Ia();
    ye(this);
    this.C = !0;
  };
  ze.prototype.execute = function (a) {
    return Ae(this.j.Xh(a));
  };
  var Be = function (a, b, c) {
    return Ae(a.j.Pk(b, c));
  };
  ze.prototype.Ka = function () {
    this.j.Ka();
  };
  var ye = function (a) {
    var b = function (c, d) {
      var e = String(c),
        f = new Vc(e, d);
      f.Ka();
      a.j.j.set(e, f);
    };
    b(0, jd);
    b(1, kd);
    b(2, ld);
    b(3, md);
    b(56, re);
    b(57, oe);
    b(58, ne);
    b(59, te);
    b(60, pe);
    b(61, qe);
    b(62, se);
    b(53, nd);
    b(4, od);
    b(5, pd);
    b(52, qd);
    b(6, rd);
    b(49, sd);
    b(7, Ud);
    b(8, Vd);
    b(9, pd);
    b(50, vd);
    b(10, wd);
    b(12, xd);
    b(13, yd);
    b(51, Jd);
    b(47, Bd);
    b(54, Cd);
    b(55, Dd);
    b(63, Id);
    b(64, Ed);
    b(65, Gd);
    b(66, Hd);
    b(15, Kd);
    b(16, Md);
    b(17, Md);
    b(18, Nd);
    b(19, Od);
    b(20, Pd);
    b(21, Qd);
    b(22, Rd);
    b(23, Sd);
    b(24, Td);
    b(25, Wd);
    b(26, Xd);
    b(27, Yd);
    b(28, Zd);
    b(29, $d);
    b(45, ae);
    b(30, be);
    b(32, ce);
    b(33, ce);
    b(34, de);
    b(35, de);
    b(46, ee);
    b(36, fe);
    b(43, ge);
    b(37, he);
    b(38, ie);
    b(39, je);
    b(67, ve);
    b(40, ke);
    b(44, ue);
    b(41, le);
    b(42, me);
  };
  ze.prototype.sd = function () {
    return this.j.sd();
  };
  function Ae(a) {
    if (
      a instanceof za ||
      a instanceof Vc ||
      a instanceof Ua ||
      a instanceof Wa ||
      a instanceof $c ||
      a === null ||
      a === void 0 ||
      typeof a === "string" ||
      typeof a === "number" ||
      typeof a === "boolean"
    )
      return a;
  }
  var Ce = function (a) {
    this.message = a;
  };
  function De(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return b === void 0
      ? new Ce(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function Ee(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Fe = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ge(a, b) {
    for (var c = "", d = !0; a > 7; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + De(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + De(a | b) + c);
  }
  var He = (function () {
    function a(b) {
      return {
        toString: function () {
          return b;
        },
      };
    }
    return {
      sk: a("consent"),
      ji: a("convert_case_to"),
      ki: a("convert_false_to"),
      li: a("convert_null_to"),
      mi: a("convert_true_to"),
      ni: a("convert_undefined_to"),
      on: a("debug_mode_metadata"),
      la: a("function"),
      Xg: a("instance_name"),
      Tk: a("live_only"),
      Uk: a("malware_disabled"),
      METADATA: a("metadata"),
      Xk: a("original_activity_id"),
      xn: a("original_vendor_template_id"),
      wn: a("once_on_load"),
      Wk: a("once_per_event"),
      sj: a("once_per_load"),
      zn: a("priority_override"),
      An: a("respected_consent_types"),
      Aj: a("setup_tags"),
      xe: a("tag_id"),
      Fj: a("teardown_tags"),
    };
  })();
  var Je = function (a) {
      return Ie[a];
    },
    Le = function (a) {
      return Ke[a];
    },
    Ne = function (a) {
      return Me[a];
    },
    Oe = [],
    Me = {
      "\x00": "&#0;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\v": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      "-": "&#45;",
      "/": "&#47;",
      "=": "&#61;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    },
    Pe = /[\x00\x22\x26\x27\x3c\x3e]/g;
  var Ve = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
    Ke = {
      "\x00": "\\x00",
      "\b": "\\x08",
      "\t": "\\t",
      "\n": "\\n",
      "\v": "\\x0b",
      "\f": "\\f",
      "\r": "\\r",
      '"': "\\x22",
      "&": "\\x26",
      "'": "\\x27",
      "/": "\\/",
      "<": "\\x3c",
      "=": "\\x3d",
      ">": "\\x3e",
      "\\": "\\\\",
      "\u0085": "\\x85",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
      $: "\\x24",
      "(": "\\x28",
      ")": "\\x29",
      "*": "\\x2a",
      "+": "\\x2b",
      ",": "\\x2c",
      "-": "\\x2d",
      ".": "\\x2e",
      ":": "\\x3a",
      "?": "\\x3f",
      "[": "\\x5b",
      "]": "\\x5d",
      "^": "\\x5e",
      "{": "\\x7b",
      "|": "\\x7c",
      "}": "\\x7d",
    };
  Oe[8] = function (a) {
    if (a == null) return " null ";
    switch (typeof a) {
      case "boolean":
      case "number":
        return " " + a + " ";
      default:
        return "'" + String(String(a)).replace(Ve, Le) + "'";
    }
  };
  var af = function (a) {
      return "%" + a.charCodeAt(0).toString(16);
    },
    bf = /['()]/g;
  Oe[12] = function (a) {
    var b = encodeURIComponent(String(a));
    bf.lastIndex = 0;
    return bf.test(b) ? b.replace(bf, af) : b;
  };
  var cf =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    Ie = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\v": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    };
  Oe[16] = function (a) {
    return a;
  };
  var ef;
  var ff = [],
    gf = [],
    hf = [],
    jf = [],
    kf = [],
    lf = {},
    mf,
    nf;
  function of(a) {
    nf = nf || a;
  }
  function pf(a) {}
  var qf,
    rf = [],
    sf = [];
  function tf(a, b) {
    var c = {};
    c[He.la] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function uf(a, b, c) {
    try {
      return mf(vf(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function wf(a) {
    var b = a[He.la];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!lf[b];
  }
  var vf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = xf(a[e], b, c));
      return d;
    },
    xf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(xf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = ff[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[He.Xg]);
            try {
              var m = vf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = yf(m, { event: b, index: f, type: 2, name: k });
              qf && (d = qf.sl(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[xf(a[n], b, c)] = xf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = xf(a[q], b, c);
              nf && (p = p || nf.im(r));
              d.push(r);
            }
            return nf && p ? nf.wl(d) : d.join("");
          case "escape":
            d = xf(a[1], b, c);
            if (nf && Array.isArray(a[1]) && a[1][0] === "macro" && nf.jm(a))
              return nf.Gm(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Oe[a[t]] && (d = Oe[a[t]](d));
            return d;
          case "tag":
            var v = a[1];
            if (!jf[v])
              throw Error("Unable to resolve tag reference " + v + ".");
            return { Lj: a[2], index: v };
          case "zb":
            var u = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            u[He.la] = a[1];
            var w = uf(u, b, c),
              x = !!a[4];
            return x || w !== 2 ? x !== (w === 1) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    yf = function (a, b) {
      var c = a[He.la],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = lf[c],
        f =
          b &&
          b.type === 2 &&
          (d == null ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          rf.indexOf(c) !== -1,
        g = {},
        k = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          Eb(m, "vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (k[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = ff[q];
                  break;
                case 1:
                  r = jf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var t = r && r[He.Xg];
              n = t ? String(t) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var v, u, w;
      if (f && sf.indexOf(c) === -1) {
        sf.push(c);
        var x = zb();
        v = e(g);
        var y = zb() - x,
          A = zb();
        u = ef(c, k, b);
        w = y - (zb() - A);
      } else if ((e && (v = e(g)), !e || f)) u = ef(c, k, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Ra(v)
          ? (Array.isArray(v)
              ? Array.isArray(u)
              : Pa(v)
              ? Pa(u)
              : typeof v === "function"
              ? typeof u === "function"
              : v === u) || d.reportMacroDiscrepancy(d.id, c)
          : v !== u && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? v : u;
    };
  var zf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  va(zf, Error);
  zf.prototype.getMessage = function () {
    return this.message;
  };
  function Af(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Af(a[c], b[c]);
    }
  }
  var Bf = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Am = a;
    this.j = [];
    this.C = b;
  };
  va(Bf, Error);
  function Cf() {
    return function (a, b) {
      a instanceof Bf || (a = new Bf(a, Df));
      b && a instanceof Bf && a.j.push(b);
      throw a;
    };
  }
  function Df(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; b > 0; b--) mb(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  function Ef(a) {
    function b(r) {
      for (var t = 0; t < r.length; t++) d[r[t]] = !0;
    }
    for (var c = [], d = [], e = Ff(a), f = 0; f < gf.length; f++) {
      var g = gf[f],
        k = Gf(g, e);
      if (k) {
        for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
        b(g.block || []);
      } else k === null && b(g.block || []);
    }
    for (var p = [], q = 0; q < jf.length; q++) c[q] && !d[q] && (p[q] = !0);
    return p;
  }
  function Gf(a, b) {
    for (var c = a["if"] || [], d = 0; d < c.length; d++) {
      var e = b(c[d]);
      if (e === 0) return !1;
      if (e === 2) return null;
    }
    for (var f = a.unless || [], g = 0; g < f.length; g++) {
      var k = b(f[g]);
      if (k === 2) return null;
      if (k === 1) return !1;
    }
    return !0;
  }
  function Ff(a) {
    var b = [];
    return function (c) {
      b[c] === void 0 && (b[c] = uf(hf[c], a));
      return b[c];
    };
  }
  var Hf = {
    sl: function (a, b) {
      b[He.ji] &&
        typeof a === "string" &&
        (a = b[He.ji] === 1 ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(He.li) && a === null && (a = b[He.li]);
      b.hasOwnProperty(He.ni) && a === void 0 && (a = b[He.ni]);
      b.hasOwnProperty(He.mi) && a === !0 && (a = b[He.mi]);
      b.hasOwnProperty(He.ki) && a === !1 && (a = b[He.ki]);
      return a;
    },
  };
  var If = function () {
      this.j = {};
    },
    Kf = function (a, b) {
      var c = Jf.j,
        d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function () {
        return b.apply(null, ma(wa.apply(0, arguments)));
      });
    };
  function Lf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (k) {
          g =
            typeof k === "string"
              ? g + (": " + k)
              : k instanceof Error
              ? g + (": " + k.message)
              : g + ".";
        }
        if (!f) throw new zf(c, d, g);
      }
  }
  function Mf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.j[d],
          f = a.j.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Lf(e, b, d, g);
          Lf(f, b, d, g);
        }
      }
    };
  }
  var Qf = function () {
      var a = data.permissions || {},
        b = Nf.ctid,
        c = this;
      this.C = {};
      this.j = new If();
      var d = {},
        e = {},
        f = Mf(this.j, b, function () {
          var g = arguments[0];
          return g && d[g]
            ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      sb(a, function (g, k) {
        function m(p) {
          var q = wa.apply(1, arguments);
          if (!n[p])
            throw Of(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(ma(q)));
        }
        var n = {};
        sb(k, function (p, q) {
          var r = Pf(p, q);
          n[p] = r.assert;
          d[p] || (d[p] = r.M);
          r.Hj && !e[p] && (e[p] = r.Hj);
        });
        c.C[g] = function (p, q) {
          var r = n[p];
          if (!r)
            throw Of(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var t = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, t);
          f.apply(void 0, t);
          var v = e[p];
          v && v.apply(null, [m].concat(ma(t.slice(1))));
        };
      });
    },
    Rf = function (a) {
      return Jf.C[a] || function () {};
    };
  function Pf(a, b) {
    var c = tf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Of;
    try {
      return yf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new zf(e, {}, "Permission " + e + " is unknown.");
        },
        M: function () {
          throw new zf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Of(a, b, c) {
    return new zf(a, b, c);
  }
  var Sf = !1;
  var Tf = {};
  Tf.jk = vb("");
  Tf.Bl = vb("");
  var Zf = {},
    $f =
      ((Zf.uaa = !0),
      (Zf.uab = !0),
      (Zf.uafvl = !0),
      (Zf.uamb = !0),
      (Zf.uam = !0),
      (Zf.uap = !0),
      (Zf.uapv = !0),
      (Zf.uaw = !0),
      Zf);
  var hg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!fg.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          k = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!gg.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || k.length > d.length || (!g && d.length !== e.length)
            ? 0
            : g
            ? Eb(d, k) && (d === k || d.charAt(k.length) === ".")
            : d === k
        )
          return !0;
      }
      return !1;
    },
    gg = /^[a-z$_][\w$]*$/i,
    fg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
  var ig = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function jg(a, b) {
    var c = String(a),
      d = String(b),
      e = c.length - d.length;
    return e >= 0 && c.indexOf(d, e) === e;
  }
  var kg = new rb();
  function lg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + String(d),
        f = kg.get(e);
      f || ((f = new RegExp(b, d)), kg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function mg(a, b) {
    return String(a).indexOf(String(b)) >= 0;
  }
  function ng(a, b) {
    return String(a) === String(b);
  }
  function og(a, b) {
    return Number(a) >= Number(b);
  }
  function pg(a, b) {
    return Number(a) <= Number(b);
  }
  function qg(a, b) {
    return Number(a) > Number(b);
  }
  function rg(a, b) {
    return Number(a) < Number(b);
  }
  function sg(a, b) {
    return Eb(String(a), String(b));
  }
  var tg = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    },
    ug = function (a, b) {
      var c = b.charAt(b.length - 1) === "*" || b === "/" || b === "/*";
      tg(b, "/*") && (b = b.slice(0, -2));
      tg(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && d.length === 1) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (e === -1 || (f === 0 && e !== 0)) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var k = d[d.length - 1];
      return a.lastIndexOf(k) === a.length - k.length;
    },
    vg = function (a) {
      return a.protocol === "https:" && (!a.port || a.port === "443");
    },
    yg = function (a, b) {
      var c;
      if (!(c = !vg(a))) {
        var d;
        a: {
          var e = a.hostname.split(".");
          if (e.length < 2) d = !1;
          else {
            for (var f = 0; f < e.length; f++)
              if (!wg.exec(e[f])) {
                d = !1;
                break a;
              }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var k;
        var m = a,
          n = b[g];
        if (!xg.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8),
          q = p.slice(0, p.indexOf("/")),
          r;
        var t = m.hostname,
          v = q;
        if (v.indexOf("*.") !== 0) r = t.toLowerCase() === v.toLowerCase();
        else {
          v = v.slice(2);
          var u = t.toLowerCase().indexOf(v.toLowerCase());
          r =
            u === -1
              ? !1
              : t.length === v.length
              ? !0
              : t.length !== v.length + u
              ? !1
              : t[u - 1] === ".";
        }
        if (r) {
          var w = p.slice(p.indexOf("/"));
          k = ug(m.pathname + m.search, w) ? !0 : !1;
        } else k = !1;
        if (k) return !0;
      }
      return !1;
    },
    wg = /^[a-z0-9-]+$/i,
    xg = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i;
  var zg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Ag = { Fn: "function", PixieMap: "Object", List: "Array" };
  function K(a, b, c) {
    for (var d = 0; d < b.length; d++) {
      var e = zg.exec(b[d]);
      if (!e) throw Error("Internal Error in " + a);
      var f = e[1],
        g = e[2] === "!",
        k = e[3],
        m = c[d];
      if (m == null) {
        if (g)
          throw Error(
            "Error in " + a + ". Required argument " + f + " not supplied."
          );
      } else if (k !== "*") {
        var n = typeof m;
        m instanceof Vc
          ? (n = "Fn")
          : m instanceof Ua
          ? (n = "List")
          : m instanceof Wa
          ? (n = "PixieMap")
          : m instanceof $c && (n = "OpaqueValue");
        if (n !== k)
          throw Error(
            "Error in " +
              a +
              ". Argument " +
              f +
              " has type " +
              ((Ag[n] || n) + ", which does not match required type ") +
              ((Ag[k] || k) + ".")
          );
      }
    }
  }
  function Bg(a) {
    return "" + a;
  }
  function Cg(a, b) {
    var c = [];
    return c;
  }
  function Dg(a, b) {
    var c = new Vc(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (dd()) throw new fd(g.message);
        throw g;
      }
    });
    c.Ka();
    return c;
  }
  function Eg(a, b) {
    var c = new Wa(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        lb(e)
          ? c.set(d, Dg(a + "_" + d, e))
          : Pa(e)
          ? c.set(d, Eg(a + "_" + d, e))
          : (mb(e) || z(e) || typeof e === "boolean") && c.set(d, e);
      }
    c.Ka();
    return c;
  }
  function Fg(a, b) {
    K(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new Wa();
    return (d = Eg("AssertApiSubject", c));
  }
  function Gg(a, b) {
    K(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof bd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new Wa();
    return (d = Eg("AssertThatSubject", c));
  }
  function Hg(a) {
    return function () {
      for (var b = [], c = this.D, d = 0; d < arguments.length; ++d)
        b.push(I(arguments[d], c));
      return cd(a.apply(null, b));
    };
  }
  function Ig() {
    for (var a = Math, b = Jg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Hg(a[e].bind(a)));
    }
    return c;
  }
  function Kg(a) {
    var b;
    return b;
  }
  function Lg(a) {
    var b;
    return b;
  }
  function Mg(a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  }
  function Ng(a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  }
  function Sg(a) {
    K(this.getName(), ["message:?string"], arguments);
  }
  function Tg(a, b) {
    K(this.getName(), ["min:!number", "max:!number"], arguments);
    return pb(a, b);
  }
  function Ug() {
    return new Date().getTime();
  }
  function Vg(a) {
    if (a === null) return "null";
    if (a instanceof Ua) return "array";
    if (a instanceof Vc) return "function";
    if (a instanceof $c) {
      var b;
      a = (b = a) == null ? void 0 : b.getValue();
      var c;
      if (
        ((c = a) == null ? void 0 : c.constructor) === void 0 ||
        a.constructor.name === void 0
      ) {
        var d = String(a);
        return d.substring(8, d.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  }
  function Wg(a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Sf || Tf.jk) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return cd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(I(c));
      }),
    };
  }
  function Xg(a) {
    return ub(I(a, this.D));
  }
  function Yg(a) {
    return Number(I(a, this.D));
  }
  function Zg(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
  }
  function $g(a, b, c) {
    var d = null,
      e = !1;
    K(
      this.getName(),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new Wa();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof Wa &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  }
  var Jg = "floor ceil round max min abs pow sqrt".split(" ");
  function ah() {
    var a = {};
    return {
      Ll: function (b) {
        return a.hasOwnProperty(b) ? a[b] : void 0;
      },
      gk: function (b, c) {
        a[b] = c;
      },
      reset: function () {
        a = {};
      },
    };
  }
  function bh(a, b) {
    return function () {
      var c = Array.prototype.slice.call(wa.apply(0, arguments), 0);
      c.unshift(b);
      return Vc.prototype.invoke.apply(a, c);
    };
  }
  function ch(a, b) {
    K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
  }
  function dh(a, b) {
    K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
  }
  var eh = {};
  var fh = function (a) {
    var b = new Wa();
    if (a instanceof Ua)
      for (var c = a.Nb(), d = 0; d < c.length(); d++) {
        var e = c.get(d);
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof Vc)
      for (var f = a.fc(), g = 0; g < f.length; g++) {
        var k = f[g];
        b.set(k, a.get(k));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  eh.keys = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Ua || a instanceof Vc || typeof a === "string") a = fh(a);
    if (a instanceof Wa) return a.Nb();
    return new Ua();
  };
  eh.values = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Ua || a instanceof Vc || typeof a === "string") a = fh(a);
    if (a instanceof Wa) return new Ua(Ka(a, 2));
    return new Ua();
  };
  eh.entries = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Ua || a instanceof Vc || typeof a === "string") a = fh(a);
    if (a instanceof Wa) {
      for (var b = Ka(a, 3), c = new Ua(), d = 0; d < b.length; d++) {
        var e = new Ua(b[d]);
        c.push(e);
      }
      return c;
    }
    return new Ua();
  };
  eh.freeze = function (a) {
    (a instanceof Wa || a instanceof Ua || a instanceof Vc) && a.Ka();
    return a;
  };
  eh.delete = function (a, b) {
    if (a instanceof Wa && !a.j) return a.remove(b), !0;
    return !1;
  };
  function M(a, b) {
    var c = wa.apply(2, arguments),
      d = a.D.j;
    if (!d) throw Error("Missing program state.");
    if (d.Mm) {
      try {
        d.Ij.apply(null, [b].concat(ma(c)));
      } catch (e) {
        throw (eb("TAGGING", 21), e);
      }
      return;
    }
    d.Ij.apply(null, [b].concat(ma(c)));
  }
  var gh = function () {
    this.C = {};
    this.j = {};
    this.H = !0;
  };
  gh.prototype.get = function (a, b) {
    var c = this.contains(a) ? this.C[a] : void 0;
    return c;
  };
  gh.prototype.contains = function (a) {
    return this.C.hasOwnProperty(a);
  };
  gh.prototype.add = function (a, b, c) {
    if (this.contains(a))
      throw Error(
        "Attempting to add a function which already exists: " + a + "."
      );
    if (this.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.C[a] = c ? void 0 : lb(b) ? Dg(a, b) : Eg(a, b);
  };
  function hh(a, b) {
    var c = void 0;
    return c;
  }
  function ih() {
    var a = {};
    return a;
  }
  function jh(a) {
    return kh ? E.querySelectorAll(a) : null;
  }
  function lh(a, b) {
    if (!kh) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!E.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (d !== null && d.nodeType === 1);
    return null;
  }
  var mh = !1;
  if (E.querySelectorAll)
    try {
      var nh = E.querySelectorAll(":root");
      nh && nh.length == 1 && nh[0] == E.documentElement && (mh = !0);
    } catch (a) {}
  var kh = mh;
  var oh = /^[0-9A-Fa-f]{64}$/;
  function ph(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128
          ? b.push(d)
          : d < 2048
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : d < 55296 || d >= 57344
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ));
      }
      return new Uint8Array(b);
    }
  }
  function qh(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = C.crypto) == null ? 0 : b.subtle) {
      if (oh.test(a)) return Promise.resolve(a);
      try {
        var c = ph(a);
        return C.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return C.btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function rh(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var sh = [];
  function th(a) {
    switch (a) {
      case 0:
        return 0;
      case 43:
        return 1;
      case 44:
        return 2;
      case 45:
        return 11;
      case 52:
        return 3;
      case 62:
        return 4;
      case 73:
        return 7;
      case 86:
        return 5;
      case 99:
        return 6;
      case 100:
        return 13;
      case 101:
        return 10;
      case 103:
        return 8;
      case 104:
        return 9;
    }
  }
  function N(a) {
    sh[a] = !0;
    var b = th(a);
    b !== void 0 && (hb[b] = !0);
  }
  N(32);
  N(28);
  N(29);
  N(30);
  N(31);
  N(46);
  N(77);
  N(16);
  N(110);
  N(15);
  N(115);
  N(109);
  N(63);
  N(87);
  N(7);
  N(47);
  N(4);
  N(81);
  N(106);
  N(72);
  N(68);
  N(70);
  N(85);
  N(120);

  N(116);
  N(86);
  N(5);
  N(73);
  N(99);
  ib[1] = rh("1", 6e4);
  ib[3] = rh("10", 1);
  ib[2] = rh("", 50);
  N(24);
  N(13);
  N(67);
  N(107);
  N(9);
  N(88);

  N(54);
  N(23);
  N(42);
  N(103);
  N(104);
  N(101);
  N(98);
  N(91);
  N(50);
  N(52);
  N(59);
  N(64);
  N(65);
  N(74);

  N(69);
  N(49);
  N(6);

  function O(a) {
    return !!sh[a];
  }
  function Q(a) {
    eb("GTM", a);
  }
  var xh = function (a) {
      var b = {},
        c = ["tv.1"],
        d = 0;
      var v = c.join("~");
      return { Zh: { userData: b }, Ym: v, kn: d };
    },
    vh = function (a) {
      return yh.indexOf(a) !== -1;
    },
    Ah = function (a) {
      if (C.Promise)
        try {
          return new Promise(function (b) {
            zh(a, function (c) {
              b(c);
            });
          });
        } catch (b) {}
    },
    Bh = function (a) {
      for (var b = ["tv.1"], c = 0, d = 0; d < a.length; ++d) {
        var e = a[d].name,
          f = a[d].value,
          g = a[d].index,
          k = uh[e];
        k &&
          f &&
          (!vh(e) || /^e\d+$/.test(f) || wh.test(f) || oh.test(f)) &&
          (g !== void 0 && (k += g), b.push(k + "." + f), c++);
      }
      a.length === 1 && a[0].name === "error_code" && (c = 0);
      return { We: encodeURIComponent(b.join("~")), Qh: c };
    },
    zh = function (a, b) {
      Ch(a, function (c) {
        b(Bh(c));
      });
    },
    Kh = function (a) {
      function b(r, t, v, u) {
        var w = Dh(r);
        w !== "" &&
          (oh.test(w)
            ? k.push({ name: t, value: w, index: u })
            : k.push({ name: t, value: v(w), index: u }));
      }
      function c(r, t) {
        var v = r;
        if (z(v) || Array.isArray(v)) {
          v = nb(r);
          for (var u = 0; u < v.length; ++u) {
            var w = Dh(v[u]),
              x = oh.test(w);
            t && !x && Q(89);
            !t && x && Q(88);
          }
        }
      }
      function d(r, t) {
        var v = r[t];
        c(v, !1);
        var u = Eh[t];
        r[u] && (r[t] && Q(90), (v = r[u]), c(v, !0));
        return v;
      }
      function e(r, t, v) {
        for (var u = nb(d(r, t)), w = 0; w < u.length; ++w) b(u[w], t, v);
      }
      function f(r, t, v, u) {
        var w = d(r, t);
        b(w, t, v, u);
      }
      function g(r) {
        return function (t) {
          Q(64);
          return r(t);
        };
      }
      var k = [];
      if (C.location.protocol !== "https:")
        return k.push({ name: "error_code", value: "e3", index: void 0 }), k;
      e(a, "email", Fh);
      e(a, "phone_number", Gh);
      e(a, "first_name", g(Hh));
      e(a, "last_name", g(Hh));
      var m = a.home_address || {};
      e(m, "street", g(Ih));
      e(m, "city", g(Ih));
      e(m, "postal_code", g(Jh));
      e(m, "region", g(Ih));
      e(m, "country", g(Jh));
      for (var n = nb(a.address || {}), p = 0; p < n.length; p++) {
        var q = n[p];
        f(q, "first_name", Hh, p);
        f(q, "last_name", Hh, p);
        f(q, "street", Ih, p);
        f(q, "city", Ih, p);
        f(q, "postal_code", Jh, p);
        f(q, "region", Ih, p);
        f(q, "country", Jh, p);
      }
      return k;
    },
    Ch = function (a, b) {
      var c = Kh(a);
      Lh(c, b);
    },
    Dh = function (a) {
      return a == null ? "" : z(a) ? xb(String(a)) : "e0";
    },
    Jh = function (a) {
      return a.replace(Mh, "");
    },
    Hh = function (a) {
      return Ih(a.replace(/\s/g, ""));
    },
    Ih = function (a) {
      return xb(a.replace(Nh, "").toLowerCase());
    },
    Gh = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      a.charAt(0) !== "+" && (a = "+" + a);
      return Oh.test(a) ? a : "e0";
    },
    Fh = function (a) {
      var b = a.toLowerCase().split("@");
      if (b.length === 2) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Ph.test(c)) return c;
      }
      return "e0";
    },
    Lh = function (a, b) {
      var c = !1;
      (c = O(53)
        ? !a.some(function (d) {
            return d.value && vh(d.name);
          })
        : a.some(function (d) {
            d.value && vh(d.name);
          }))
        ? b(a)
        : C.Promise
        ? Promise.all(
            a.map(function (d) {
              return d.value && vh(d.name)
                ? qh(d.value).then(function (e) {
                    d.value = e;
                  })
                : Promise.resolve();
            })
          )
            .then(function () {
              b(a);
            })
            .catch(function () {
              b([]);
            })
        : b([]);
    },
    Nh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Ph = /^\S+@\S+\.\S+$/,
    Oh = /^\+\d{10,15}$/,
    Mh = /[.~]/g,
    wh = /^[0-9A-Za-z_-]{43}$/,
    Qh = {},
    uh =
      ((Qh.email = "em"),
      (Qh.phone_number = "pn"),
      (Qh.first_name = "fn"),
      (Qh.last_name = "ln"),
      (Qh.street = "sa"),
      (Qh.city = "ct"),
      (Qh.region = "rg"),
      (Qh.country = "co"),
      (Qh.postal_code = "pc"),
      (Qh.error_code = "ec"),
      Qh),
    Rh = {},
    Eh =
      ((Rh.email = "sha256_email_address"),
      (Rh.phone_number = "sha256_phone_number"),
      (Rh.first_name = "sha256_first_name"),
      (Rh.last_name = "sha256_last_name"),
      (Rh.street = "sha256_street"),
      Rh),
    yh = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var T = {
      g: {
        sa: "ad_personalization",
        O: "ad_storage",
        N: "ad_user_data",
        U: "analytics_storage",
        Cb: "region",
        Qb: "consent_updated",
        ef: "wait_for_update",
        ri: "app_remove",
        si: "app_store_refund",
        ui: "app_store_subscription_cancel",
        vi: "app_store_subscription_convert",
        wi: "app_store_subscription_renew",
        vk: "consent_update",
        hg: "add_payment_info",
        ig: "add_shipping_info",
        kc: "add_to_cart",
        mc: "remove_from_cart",
        jg: "view_cart",
        Rb: "begin_checkout",
        nc: "select_item",
        ib: "view_item_list",
        Db: "select_promotion",
        jb: "view_promotion",
        Ga: "purchase",
        oc: "refund",
        La: "view_item",
        kg: "add_to_wishlist",
        wk: "exception",
        xi: "first_open",
        yi: "first_visit",
        aa: "gtag.config",
        Ta: "gtag.get",
        zi: "in_app_purchase",
        Sb: "page_view",
        xk: "screen_view",
        Ai: "session_start",
        yk: "timing_complete",
        zk: "track_social",
        Nc: "user_engagement",
        Ak: "user_id_update",
        Gd: "gclid_link_decoration_source",
        Hd: "gclid_storage_source",
        kb: "gclgb",
        Ua: "gclid",
        ff: "gclgs",
        hf: "gcllp",
        jf: "gclst",
        da: "ads_data_redaction",
        Bi: "gad_source",
        Ci: "gad_source_src",
        Id: "gclid_url",
        Di: "gclsrc",
        lg: "gbraid",
        kf: "wbraid",
        ja: "allow_ad_personalization_signals",
        lf: "allow_custom_scripts",
        Jd: "allow_direct_google_requests",
        nf: "allow_display_features",
        Kd: "allow_enhanced_conversions",
        lb: "allow_google_signals",
        za: "allow_interest_groups",
        Bk: "app_id",
        Ck: "app_installer_id",
        Dk: "app_name",
        Ek: "app_version",
        Eb: "auid",
        Ei: "auto_detection_enabled",
        Tb: "aw_remarketing",
        pf: "aw_remarketing_only",
        Ld: "discount",
        Md: "aw_feed_country",
        Nd: "aw_feed_language",
        ba: "items",
        Od: "aw_merchant_id",
        mg: "aw_basket_type",
        Oc: "campaign_content",
        Pc: "campaign_id",
        Qc: "campaign_medium",
        Rc: "campaign_name",
        Sc: "campaign",
        Tc: "campaign_source",
        Uc: "campaign_term",
        nb: "client_id",
        Fi: "rnd",
        ng: "consent_update_type",
        Gi: "content_group",
        Hi: "content_type",
        Xa: "conversion_cookie_prefix",
        Vc: "conversion_id",
        na: "conversion_linker",
        Ii: "conversion_linker_disabled",
        Ub: "conversion_api",
        qf: "cookie_deprecation",
        Va: "cookie_domain",
        Ma: "cookie_expires",
        Ya: "cookie_flags",
        qc: "cookie_name",
        Fb: "cookie_path",
        Na: "cookie_prefix",
        rc: "cookie_update",
        sc: "country",
        wa: "currency",
        Pd: "customer_lifetime_value",
        Wc: "custom_map",
        og: "gcldc",
        Qd: "dclid",
        Ji: "debug_mode",
        fa: "developer_id",
        Ki: "disable_merchant_reported_purchases",
        Xc: "dc_custom_params",
        Li: "dc_natural_search",
        pg: "dynamic_event_settings",
        qg: "affiliation",
        Rd: "checkout_option",
        rf: "checkout_step",
        rg: "coupon",
        Yc: "item_list_name",
        tf: "list_name",
        Mi: "promotions",
        Zc: "shipping",
        uf: "tax",
        Sd: "engagement_time_msec",
        Td: "enhanced_client_id",
        Ud: "enhanced_conversions",
        sg: "enhanced_conversions_automatic_settings",
        Vd: "estimated_delivery_date",
        vf: "euid_logged_in_state",
        bd: "event_callback",
        Fk: "event_category",
        pb: "event_developer_id_string",
        Gk: "event_label",
        uc: "event",
        Wd: "event_settings",
        Xd: "event_timeout",
        Hk: "description",
        Ik: "fatal",
        Ni: "experiments",
        wf: "firebase_id",
        vc: "first_party_collection",
        Yd: "_x_20",
        qb: "_x_19",
        Oi: "fledge_drop_reason",
        ug: "fledge",
        vg: "flight_error_code",
        wg: "flight_error_message",
        Pi: "fl_activity_category",
        Qi: "fl_activity_group",
        xg: "fl_advertiser_id",
        Ri: "fl_ar_dedupe",
        yg: "match_id",
        Si: "fl_random_number",
        Ti: "tran",
        Ui: "u",
        Zd: "gac_gclid",
        wc: "gac_wbraid",
        zg: "gac_wbraid_multiple_conversions",
        Ag: "ga_restrict_domain",
        Bg: "ga_temp_client_id",
        Jk: "ga_temp_ecid",
        xc: "gdpr_applies",
        Cg: "geo_granularity",
        Gb: "value_callback",
        rb: "value_key",
        yc: "_google_ng",
        zc: "google_signals",
        Dg: "google_tld",
        ae: "groups",
        Eg: "gsa_experiment_id",
        Vi: "gtm_up",
        Hb: "iframe_state",
        dd: "ignore_referrer",
        xf: "internal_traffic_results",
        Vb: "is_legacy_converted",
        Ib: "is_legacy_loaded",
        be: "is_passthrough",
        ed: "_lps",
        Oa: "language",
        de: "legacy_developer_id_string",
        oa: "linker",
        Ac: "accept_incoming",
        tb: "decorate_forms",
        W: "domains",
        Jb: "url_position",
        Fg: "method",
        Kk: "name",
        fd: "new_customer",
        Gg: "non_interaction",
        Wi: "optimize_id",
        Hg: "page_hostname",
        gd: "page_path",
        Aa: "page_referrer",
        Za: "page_title",
        Ig: "passengers",
        Jg: "phone_conversion_callback",
        Xi: "phone_conversion_country_code",
        Kg: "phone_conversion_css_class",
        Yi: "phone_conversion_ids",
        Lg: "phone_conversion_number",
        Mg: "phone_conversion_options",
        Ng: "_protected_audience_enabled",
        hd: "quantity",
        ee: "redact_device_info",
        yf: "referral_exclusion_definition",
        Wb: "restricted_data_processing",
        Zi: "retoken",
        Lk: "sample_rate",
        zf: "screen_name",
        Kb: "screen_resolution",
        aj: "search_term",
        Ha: "send_page_view",
        Xb: "send_to",
        jd: "server_container_url",
        kd: "session_duration",
        fe: "session_engaged",
        Af: "session_engaged_time",
        ub: "session_id",
        he: "session_number",
        Bf: "_shared_user_id",
        ld: "delivery_postal_code",
        Mk: "temporary_client_id",
        Cf: "topmost_url",
        bj: "tracking_id",
        Df: "traffic_type",
        xa: "transaction_id",
        Lb: "transport_url",
        Og: "trip_type",
        Yb: "update",
        Wa: "url_passthrough",
        Ef: "_user_agent_architecture",
        Ff: "_user_agent_bitness",
        Gf: "_user_agent_full_version_list",
        Hf: "_user_agent_mobile",
        If: "_user_agent_model",
        Jf: "_user_agent_platform",
        Kf: "_user_agent_platform_version",
        Lf: "_user_agent_wow64",
        Ba: "user_data",
        Pg: "user_data_auto_latency",
        Qg: "user_data_auto_meta",
        Rg: "user_data_auto_multi",
        Sg: "user_data_auto_selectors",
        Tg: "user_data_auto_status",
        md: "user_data_mode",
        ie: "user_data_settings",
        ya: "user_id",
        ab: "user_properties",
        cj: "_user_region",
        je: "us_privacy_string",
        ka: "value",
        Ug: "wbraid_multiple_conversions",
        ne: "_fpm_parameters",
        kj: "_host_name",
        lj: "_in_page_command",
        mj: "_ip_override",
        nj: "_is_passthrough_cid",
        Mb: "non_personalized_ads",
        ve: "_sst_parameters",
        ob: "conversion_label",
        qa: "page_location",
        sb: "global_developer_id_string",
        Bc: "tc_privacy_string",
      },
    },
    Sh = {},
    Th = Object.freeze(
      ((Sh[T.g.ja] = 1),
      (Sh[T.g.nf] = 1),
      (Sh[T.g.Kd] = 1),
      (Sh[T.g.lb] = 1),
      (Sh[T.g.ba] = 1),
      (Sh[T.g.Va] = 1),
      (Sh[T.g.Ma] = 1),
      (Sh[T.g.Ya] = 1),
      (Sh[T.g.qc] = 1),
      (Sh[T.g.Fb] = 1),
      (Sh[T.g.Na] = 1),
      (Sh[T.g.rc] = 1),
      (Sh[T.g.Wc] = 1),
      (Sh[T.g.fa] = 1),
      (Sh[T.g.pg] = 1),
      (Sh[T.g.bd] = 1),
      (Sh[T.g.Wd] = 1),
      (Sh[T.g.Xd] = 1),
      (Sh[T.g.vc] = 1),
      (Sh[T.g.Ag] = 1),
      (Sh[T.g.zc] = 1),
      (Sh[T.g.Dg] = 1),
      (Sh[T.g.ae] = 1),
      (Sh[T.g.xf] = 1),
      (Sh[T.g.Vb] = 1),
      (Sh[T.g.Ib] = 1),
      (Sh[T.g.oa] = 1),
      (Sh[T.g.yf] = 1),
      (Sh[T.g.Wb] = 1),
      (Sh[T.g.Ha] = 1),
      (Sh[T.g.Xb] = 1),
      (Sh[T.g.jd] = 1),
      (Sh[T.g.kd] = 1),
      (Sh[T.g.Af] = 1),
      (Sh[T.g.ld] = 1),
      (Sh[T.g.Lb] = 1),
      (Sh[T.g.Yb] = 1),
      (Sh[T.g.ie] = 1),
      (Sh[T.g.ab] = 1),
      (Sh[T.g.ve] = 1),
      Sh)
    );
  Object.freeze([
    T.g.qa,
    T.g.Aa,
    T.g.Za,
    T.g.Oa,
    T.g.zf,
    T.g.ya,
    T.g.wf,
    T.g.Gi,
  ]);
  var Uh = {},
    Vh = Object.freeze(
      ((Uh[T.g.ri] = 1),
      (Uh[T.g.si] = 1),
      (Uh[T.g.ui] = 1),
      (Uh[T.g.vi] = 1),
      (Uh[T.g.wi] = 1),
      (Uh[T.g.xi] = 1),
      (Uh[T.g.yi] = 1),
      (Uh[T.g.zi] = 1),
      (Uh[T.g.Ai] = 1),
      (Uh[T.g.Nc] = 1),
      Uh)
    ),
    Wh = {},
    Xh = Object.freeze(
      ((Wh[T.g.hg] = 1),
      (Wh[T.g.ig] = 1),
      (Wh[T.g.kc] = 1),
      (Wh[T.g.mc] = 1),
      (Wh[T.g.jg] = 1),
      (Wh[T.g.Rb] = 1),
      (Wh[T.g.nc] = 1),
      (Wh[T.g.ib] = 1),
      (Wh[T.g.Db] = 1),
      (Wh[T.g.jb] = 1),
      (Wh[T.g.Ga] = 1),
      (Wh[T.g.oc] = 1),
      (Wh[T.g.La] = 1),
      (Wh[T.g.kg] = 1),
      Wh)
    ),
    Yh = Object.freeze([
      T.g.ja,
      T.g.Jd,
      T.g.lb,
      T.g.rc,
      T.g.vc,
      T.g.dd,
      T.g.Ha,
      T.g.Yb,
    ]),
    Zh = Object.freeze([].concat(ma(Yh))),
    $h = Object.freeze([T.g.Ma, T.g.Xd, T.g.kd, T.g.Af, T.g.Sd]),
    ai = Object.freeze([].concat(ma($h))),
    bi = {},
    ci =
      ((bi[T.g.O] = "1"),
      (bi[T.g.U] = "2"),
      (bi[T.g.N] = "3"),
      (bi[T.g.sa] = "4"),
      bi),
    di = {},
    ei = Object.freeze(
      ((di[T.g.Gd] = 1),
      (di[T.g.Hd] = 1),
      (di[T.g.ja] = 1),
      (di[T.g.Jd] = 1),
      (di[T.g.Kd] = 1),
      (di[T.g.za] = 1),
      (di[T.g.Tb] = 1),
      (di[T.g.pf] = 1),
      (di[T.g.Ld] = 1),
      (di[T.g.Md] = 1),
      (di[T.g.Nd] = 1),
      (di[T.g.ba] = 1),
      (di[T.g.Od] = 1),
      (di[T.g.Xa] = 1),
      (di[T.g.na] = 1),
      (di[T.g.Va] = 1),
      (di[T.g.Ma] = 1),
      (di[T.g.Ya] = 1),
      (di[T.g.Na] = 1),
      (di[T.g.wa] = 1),
      (di[T.g.Pd] = 1),
      (di[T.g.fa] = 1),
      (di[T.g.Ki] = 1),
      (di[T.g.Ud] = 1),
      (di[T.g.Vd] = 1),
      (di[T.g.wf] = 1),
      (di[T.g.vc] = 1),
      (di[T.g.Vb] = 1),
      (di[T.g.Ib] = 1),
      (di[T.g.Oa] = 1),
      (di[T.g.fd] = 1),
      (di[T.g.qa] = 1),
      (di[T.g.Aa] = 1),
      (di[T.g.Jg] = 1),
      (di[T.g.Kg] = 1),
      (di[T.g.Lg] = 1),
      (di[T.g.Mg] = 1),
      (di[T.g.Wb] = 1),
      (di[T.g.Ha] = 1),
      (di[T.g.Xb] = 1),
      (di[T.g.jd] = 1),
      (di[T.g.ld] = 1),
      (di[T.g.xa] = 1),
      (di[T.g.Lb] = 1),
      (di[T.g.Yb] = 1),
      (di[T.g.Wa] = 1),
      (di[T.g.Ba] = 1),
      (di[T.g.ya] = 1),
      (di[T.g.ka] = 1),
      di)
    ),
    fi = {},
    gi = Object.freeze(
      ((fi.search = "s"),
      (fi.youtube = "y"),
      (fi.playstore = "p"),
      (fi.shopping = "h"),
      (fi.ads = "a"),
      (fi.maps = "m"),
      fi)
    );
  Object.freeze(T.g);
  var hi = {},
    ii = (C.google_tag_manager = C.google_tag_manager || {});
  hi.Zg = "49u0";
  hi.ue = Number("0") || 0;
  hi.hb = "dataLayer";
  hi.nn =
    "ChEI8LvutwYQ/OyKyI/Xpf+NARIhAGEYQ+wXJfhoS2Uw7J7q2FHIu9iw1qmtHZgSMMlnrVNeGgI5dg\x3d\x3d";
  var ji = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    ki = { __paused: 1, __tg: 1 },
    li;
  for (li in ji) ji.hasOwnProperty(li) && (ki[li] = 1);
  var mi = vb(""),
    ni = !0,
    oi,
    pi = !1;
  oi = pi;
  var qi,
    ri = !1;
  qi = ri;
  var si,
    ti = !1;
  si = ti;
  hi.Fd = "www.googletagmanager.com";
  var ui = "" + hi.Fd + (oi ? "/gtag/js" : "/gtm.js"),
    vi = null,
    wi = null,
    xi = {},
    yi = {};
  function zi() {
    var a = ii.sequence || 1;
    ii.sequence = a + 1;
    return a;
  }
  hi.tk = "";
  var Ai = "";
  hi.ah = Ai;
  var Bi = new (function () {
    this.j = "";
    this.H = !1;
    this.C = 0;
    this.P = this.Z = this.Pa = this.K = "";
  })();
  function Ci() {
    var a = Bi.K.length;
    return Bi.K[a - 1] === "/" ? Bi.K.substring(0, a - 1) : Bi.K;
  }
  function Di() {
    return Bi.H && Bi.C !== 1;
  }
  function Ei(a) {
    for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var Fi = new rb(),
    Gi = {},
    Hi = {},
    Ki = {
      name: hi.hb,
      set: function (a, b) {
        Qa(Hb(a, b), Gi);
        Ii();
      },
      get: function (a) {
        return Ji(a, 2);
      },
      reset: function () {
        Fi = new rb();
        Gi = {};
        Ii();
      },
    };
  function Ji(a, b) {
    return b != 2 ? Fi.get(a) : Li(a);
  }
  function Li(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = Gi, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return;
    }
    return d;
  }
  function Mi(a, b) {
    Hi.hasOwnProperty(a) || (Fi.set(a, b), Qa(Hb(a, b), Gi), Ii());
  }
  function Ni() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = Ji(c, 1);
      if (Array.isArray(d) || Pa(d)) d = Qa(d);
      Hi[c] = d;
    }
  }
  function Ii(a) {
    sb(Hi, function (b, c) {
      Fi.set(b, c);
      Qa(Hb(b), Gi);
      Qa(Hb(b, c), Gi);
      a && delete Hi[b];
    });
  }
  function Oi(a, b) {
    var c,
      d = (b === void 0 ? 2 : b) !== 1 ? Li(a) : Fi.get(a);
    Ma(d) === "array" || Ma(d) === "object" ? (c = Qa(d)) : (c = d);
    return c;
  }
  var Pi = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f = O(105),
        g;
      if (f || d === "js_variable")
        for (
          var k = e
              .replace(/\["?'?/g, ".")
              .replace(/"?'?\]/g, "")
              .split(","),
            m = 0;
          m < k.length;
          m++
        ) {
          var n = k[m].trim();
          if (n && !Eb(n, "#") && !Eb(n, ".")) {
            if (Eb(n, "dataLayer.")) g = Ji(n.substring(10));
            else {
              var p = n.split(".");
              g = C[p.shift()];
              for (var q = 0; q < p.length; q++) g = g && g[p[q]];
            }
            if (g !== void 0) break;
          }
        }
      if (((f && g === void 0) || (!f && d === "css_selector")) && kh)
        try {
          var r = jh(e);
          if (r && r.length > 0) {
            g = [];
            for (
              var t = 0;
              t < r.length &&
              t < (b === "email" || b === "phone_number" ? 5 : 1);
              t++
            )
              g.push(Ec(r[t]) || xb(r[t].value));
            g = g.length === 1 ? g[0] : g;
          }
        } catch (v) {
          Q(149);
        }
      return g ? ((a[b] = g), !0) : !1;
    },
    Qi = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = Pi(b, "email", a.email) || c;
        c = Pi(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = Pi(f, "first_name", d[e].first_name) || c;
          c = Pi(f, "last_name", d[e].last_name) || c;
          c = Pi(f, "street", d[e].street) || c;
          c = Pi(f, "city", d[e].city) || c;
          c = Pi(f, "region", d[e].region) || c;
          c = Pi(f, "country", d[e].country) || c;
          c = Pi(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    Ri = function (a) {
      return Pa(a) ? !!a.enable_code : !1;
    };
  var Si = /:[0-9]+$/,
    Ti = /^\d+\.fls\.doubleclick\.net$/;
  function Ui(a, b, c, d) {
    for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
      var k = l(g.value.split("=")),
        m = k.next().value,
        n = ka(k);
      if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
        var p = n.join("=");
        if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
        e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
      }
    }
    return c ? e : void 0;
  }
  function Vi(a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if (b === "protocol" || b === "port")
      a.protocol = Wi(a.protocol) || Wi(C.location.protocol);
    b === "port"
      ? (a.port = String(
          Number(a.hostname ? a.port : C.location.port) ||
            (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")
        ))
      : b === "host" &&
        (a.hostname = (a.hostname || C.location.hostname)
          .replace(Si, "")
          .toLowerCase());
    return Xi(a, b, c, d, e);
  }
  function Xi(a, b, c, d, e) {
    var f,
      g = Wi(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = Yi(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace(Si, "").toLowerCase();
        if (c) {
          var k = /^www\d*\./.exec(f);
          k && k[0] && (f = f.substring(k[0].length));
        }
        break;
      case "port":
        f = String(
          Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : "")
        );
        break;
      case "path":
        a.pathname || a.hostname || eb("TAGGING", 1);
        f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
        var m = f.split("/");
        (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
        f = m.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = Ui(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = n.length > 1 ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href;
    }
    return f;
  }
  function Wi(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  function Yi(a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = c < 0 ? a.href : a.href.substring(0, c);
    }
    return b;
  }
  var Zi = {},
    $i = 0;
  function aj(a) {
    var b = Zi[a];
    if (!b) {
      var c = E.createElement("a");
      a && (c.href = a);
      var d = c.pathname;
      d[0] !== "/" && (a || eb("TAGGING", 1), (d = "/" + d));
      var e = c.hostname.replace(Si, "");
      b = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: e,
        pathname: d,
        search: c.search,
        hash: c.hash,
        port: c.port,
      };
      $i < 5 && ((Zi[a] = b), $i++);
    }
    return b;
  }
  function bj(a) {
    function b(n) {
      var p = n.split("=")[0];
      return d.indexOf(p) < 0 ? n : p + "=0";
    }
    function c(n) {
      return n
        .split("&")
        .map(b)
        .filter(function (p) {
          return p !== void 0;
        })
        .join("&");
    }
    var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
        " "
      ),
      e = aj(a),
      f = a.split(/[?#]/)[0],
      g = e.search,
      k = e.hash;
    g[0] === "?" && (g = g.substring(1));
    k[0] === "#" && (k = k.substring(1));
    g = c(g);
    k = c(k);
    g !== "" && (g = "?" + g);
    k !== "" && (k = "#" + k);
    var m = "" + f + g + k;
    m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
    return m;
  }
  function cj(a) {
    var b = aj(C.location.href),
      c = Vi(b, "host", !1);
    if (c && c.match(Ti)) {
      var d = Vi(b, "path");
      if (d) {
        var e = d.split(a + "=");
        if (e.length > 1) return e[1].split(";")[0].split("?")[0];
      }
    }
  }
  function dj(a) {
    for (var b = 0; b < 3; ++b)
      try {
        var c = decodeURIComponent(a).replace(/\+/g, " ");
        if (c === a) break;
        a = c;
      } catch (d) {
        return "";
      }
    return a;
  }
  var ej = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function fj(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 &&
        c.indexOf("https://") !== 0 &&
        (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return aj("" + c + b).href;
    }
  }
  function gj(a, b) {
    if (Di() || qi) return fj(a, b);
  }
  function hj() {
    return !!hi.ah && hi.ah.split("@@").join("") !== "SGTM_TOKEN";
  }
  function ij(a) {
    for (var b = l([T.g.jd, T.g.Lb]), c = b.next(); !c.done; c = b.next()) {
      var d = V(a, c.value);
      if (d) return d;
    }
  }
  function jj(a, b) {
    return Di() ? "" + Ci() + (b ? ej[a] || "" : "") : a;
  }
  function kj(a) {
    var b = String(a[He.la] || "").replace(/_/g, "");
    return Eb(b, "cvt") ? "cvt" : b;
  }
  var lj =
    C.location.search.indexOf("?gtm_latency=") >= 0 ||
    C.location.search.indexOf("&gtm_latency=") >= 0;
  var mj = { sampleRate: "0.005000", pk: "", ln: "0.01" },
    nj = Math.random(),
    oj;
  if (!(oj = lj)) {
    var pj = mj.sampleRate;
    oj = nj < Number(pj);
  }
  var qj = oj,
    rj =
      (qc == null ? void 0 : qc.includes("gtm_debug=d")) ||
      lj ||
      nj >= 1 - Number(mj.ln);
  var sj = /gtag[.\/]js/,
    tj = /gtm[.\/]js/,
    uj = !1;
  function vj(a) {
    if (uj) return "1";
    var b = a.scriptSource;
    if (b) {
      if (sj.test(b)) return "3";
      if (tj.test(b)) return "2";
    }
    return "0";
  }
  function wj(a, b) {
    var c = xj();
    c.pending || (c.pending = []);
    ob(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  var yj = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
    this.injectedFirstPartyContainers = {};
    var a;
    var b = C.google_tags_first_party || [];
    if (Array.isArray(b)) {
      for (var c = {}, d = l(b), e = d.next(); !e.done; e = d.next())
        c[e.value] = !0;
      a = Object.freeze(c);
    } else a = {};
    this.injectedFirstPartyContainers = a;
  };
  function xj() {
    var a = rc("google_tag_data", {}),
      b = a.tidr;
    b || ((b = new yj()), (a.tidr = b));
    return b;
  }
  var zj = {},
    Aj = !1,
    Nf = {
      ctid: "GTM-RQS5",
      canonicalContainerId: "64439",
      Uj: "GTM-RQS5",
      Vj: "GTM-RQS5",
    };
  zj.qe = vb("");
  function Bj() {
    var a = Cj();
    return Aj ? a.map(Dj) : a;
  }
  function Ej() {
    var a = Fj();
    return Aj ? a.map(Dj) : a;
  }
  function Gj() {
    return Hj(Nf.ctid);
  }
  function Ij() {
    return Hj(Nf.canonicalContainerId || "_" + Nf.ctid);
  }
  function Cj() {
    return Nf.Uj ? Nf.Uj.split("|") : [Nf.ctid];
  }
  function Fj() {
    return Nf.Vj ? Nf.Vj.split("|") : [];
  }
  function Jj() {
    var a = Kj(Oj()),
      b = a && a.parent;
    if (b) return Kj(b);
  }
  function Kj(a) {
    var b = xj();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function Hj(a) {
    return Aj ? Dj(a) : a;
  }
  function Dj(a) {
    return "siloed_" + a;
  }
  function Pj(a) {
    return Aj ? Qj(a) : a;
  }
  function Qj(a) {
    a = String(a);
    return Eb(a, "siloed_") ? a.substring(7) : a;
  }
  function Rj() {
    var a = !1;
    if (a) {
      var b = xj();
      if (b.siloed) {
        for (
          var c = [], d = Cj().map(Dj), e = Fj().map(Dj), f = {}, g = 0;
          g < b.siloed.length;
          f = { Qf: void 0 }, g++
        )
          (f.Qf = b.siloed[g]),
            !Aj &&
            ob(
              f.Qf.isDestination ? e : d,
              (function (k) {
                return function (m) {
                  return m === k.Qf.ctid;
                };
              })(f)
            )
              ? (Aj = !0)
              : c.push(f.Qf);
        b.siloed = c;
      }
    }
  }
  function Sj() {
    var a = xj();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = Bj(), f = Ej(), g = {}, k = 0;
        k < a.pending.length;
        g = { Xe: void 0 }, k++
      )
        (g.Xe = a.pending[k]),
          ob(
            g.Xe.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Xe.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.Xe.onLoad), (d = !0))
            : c.push(g.Xe);
      a.pending = c;
      if (b)
        try {
          b(Ij());
        } catch (m) {}
    }
  }
  function Tj() {
    for (
      var a = Nf.ctid,
        b = Bj(),
        c = Ej(),
        d = function (n, p) {
          var q = {
            canonicalContainerId: Nf.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          pc && (q.scriptElement = pc);
          qc && (q.scriptSource = qc);
          if (Jj() === void 0) {
            var r;
            a: {
              if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                var t;
                b: {
                  if (q.scriptSource) {
                    for (
                      var v = Bi.H,
                        u = aj(q.scriptSource),
                        w = v ? u.pathname : "" + u.hostname + u.pathname,
                        x = E.scripts,
                        y = "",
                        A = 0;
                      A < x.length;
                      ++A
                    ) {
                      var B = x[A];
                      if (
                        !(
                          B.innerHTML.length === 0 ||
                          (!v &&
                            B.innerHTML.indexOf(
                              q.scriptContainerId || "SHOULD_NOT_BE_SET"
                            ) < 0) ||
                          B.innerHTML.indexOf(w) < 0
                        )
                      ) {
                        if (B.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                          t = String(A);
                          break b;
                        }
                        y = String(A);
                      }
                    }
                    if (y) {
                      t = y;
                      break b;
                    }
                  }
                  t = void 0;
                }
                var D = t;
                if (D) {
                  uj = !0;
                  r = D;
                  break a;
                }
              }
              var H = [].slice.call(document.scripts);
              r = q.scriptElement ? String(H.indexOf(q.scriptElement)) : "-1";
            }
            q.htmlLoadOrder = r;
            q.loadScriptType = vj(q);
          }
          var J = p ? e.destination : e.container,
            G = J[n];
          G ? (p && G.state === 0 && Q(93), Object.assign(G, q)) : (J[n] = q);
        },
        e = xj(),
        f = l(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var k = l(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
    e.canonical[Ij()] = {};
    Sj();
  }
  function Uj(a) {
    return !!xj().container[a];
  }
  function Vj(a) {
    var b = xj().destination[a];
    return !!b && !!b.state;
  }
  function Oj() {
    return { ctid: Gj(), isDestination: zj.qe };
  }
  function Wj(a) {
    var b = xj();
    (b.siloed = b.siloed || []).push(a);
  }
  function Xj() {
    var a = xj().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1;
  }
  function Yj() {
    var a = {};
    sb(xj().destination, function (b, c) {
      c.state === 0 && (a[Qj(b)] = c);
    });
    return a;
  }
  function Zj(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      a.context.source === 1 &&
      a.parent.ctid.indexOf("GTM-") !== 0
    );
  }
  var ak = "/td?id=" + Nf.ctid,
    bk = ["v", "t", "pid", "dl", "tdp"],
    ck = ["mcc"],
    dk = {},
    ek = {};
  function fk(a, b, c) {
    ek[a] = b;
    (c === void 0 || c) && gk(a);
  }
  function gk(a, b) {
    if (dk[a] === void 0 || (b === void 0 ? 0 : b)) dk[a] = !0;
  }
  function hk(a) {
    a = a === void 0 ? !1 : a;
    var b = Object.keys(dk)
      .filter(function (c) {
        return dk[c] === !0 && ek[c] !== void 0 && (a || !ck.includes(c));
      })
      .map(function (c) {
        var d = ek[c];
        typeof d === "function" && (d = d());
        return d ? "&" + c + "=" + d : "";
      })
      .join("");
    return "" + jj("https://www.googletagmanager.com") + ak + ("" + b + "&z=0");
  }
  function ik() {
    Object.keys(dk).forEach(function (a) {
      bk.indexOf(a) < 0 && (dk[a] = !1);
    });
  }
  function jk(a) {
    a = a === void 0 ? !1 : a;
    if (rj && Nf.ctid) {
      var b = hk(a);
      a ? Kc(b) : zc(b);
      ik();
    }
  }
  function kk() {
    Object.keys(dk).filter(function (a) {
      return dk[a] && !bk.includes(a);
    }).length > 0 && jk(!0);
  }
  var lk = pb();
  function mk() {
    lk = pb();
  }
  function nk() {
    fk("v", "3");
    fk("t", "t");
    fk("pid", function () {
      return String(lk);
    });
    Bc(C, "pagehide", kk);
    C.setInterval(mk, 864e5);
  }
  function ok() {
    var a = rc("google_tag_data", {});
    return (a.ics = a.ics || new pk());
  }
  var pk = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.j = [];
  };
  pk.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    eb("TAGGING", 19);
    b == null ? eb("TAGGING", 18) : qk(this, a, b === "granted", c, d, e, f, g);
  };
  pk.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      qk(this, a[d], void 0, void 0, "", "", b, c);
  };
  var qk = function (a, b, c, d, e, f, g, k) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && z(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        t = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if (e !== "" || n.default !== !1) m[b] = t;
      r &&
        C.setTimeout(function () {
          m[b] === t &&
            t.quiet &&
            (eb("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, k),
            a.notifyListeners());
        }, g);
    }
  };
  h = pk.prototype;
  h.clearTimeout = function (a, b, c) {
    var d = [a],
      e = c.delegatedConsentTypes,
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      k = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = l(d), n = m.next(); !n.done; n = m.next()) rk(this, n.value);
    } else if (b !== void 0 && k !== b)
      for (var p = l(d), q = p.next(); !q.done; q = p.next()) rk(this, q.value);
  };
  h.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c);
    }
  };
  h.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && z(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if (d !== "" || g.declare !== !1) f[a] = n;
    }
  };
  h.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    d.implicit !== !1 && (d.implicit = b === "granted");
  };
  h.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    if (jb(8) && b.usedContainerScopedDefaults) {
      var f = b.containerScopedDefaults[a];
      if (f === 3) return 1;
      if (f === 2) return 2;
    } else if (((e = d.default), e !== void 0)) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var g = b.delegatedConsentTypes[a],
        k = c[g] || {};
      e = k.update;
      if (e !== void 0) return e ? 1 : 2;
      if (jb(8) && b.usedContainerScopedDefaults) {
        var m = b.containerScopedDefaults[g];
        if (m === 3) return 1;
        if (m === 2) return 2;
      } else if (((e = k.default), e !== void 0)) return e ? 1 : 2;
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? (e ? 3 : 4) : 0;
  };
  h.addListener = function (a, b) {
    this.j.push({ consentTypes: a, Gl: b });
  };
  var rk = function (a, b) {
    for (var c = 0; c < a.j.length; ++c) {
      var d = a.j[c];
      Array.isArray(d.consentTypes) &&
        d.consentTypes.indexOf(b) !== -1 &&
        (d.Wj = !0);
    }
  };
  pk.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.j.length; ++c) {
      var d = this.j[c];
      if (d.Wj) {
        d.Wj = !1;
        try {
          d.Gl({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var sk = !1,
    tk = !1,
    uk = {},
    vk = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
      selectedAllCorePlatformServices: !1,
      containerScopedDefaults:
        ((uk.ad_storage = 1),
        (uk.analytics_storage = 1),
        (uk.ad_user_data = 1),
        (uk.ad_personalization = 1),
        uk),
      usedContainerScopedDefaults: !1,
    };
  function wk(a) {
    var b = ok();
    b.accessedAny = !0;
    return (z(a) ? [a] : a).every(function (c) {
      switch (b.getConsentState(c, vk)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    });
  }
  function xk(a) {
    var b = ok();
    b.accessedAny = !0;
    return b.getConsentState(a, vk);
  }
  function yk(a) {
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      b[e] = vk.corePlatformServices[e] !== !1;
    }
    return b;
  }
  function zk(a) {
    var b = ok();
    b.accessedAny = !0;
    return !(b.entries[a] || {}).quiet;
  }
  function Ak() {
    if (!jb(12)) return !1;
    var a = ok();
    a.accessedAny = !0;
    if (a.active) return !0;
    if (!jb(8) || !vk.usedContainerScopedDefaults) return !1;
    for (
      var b = l(Object.keys(vk.containerScopedDefaults)), c = b.next();
      !c.done;
      c = b.next()
    )
      if (vk.containerScopedDefaults[c.value] !== 1) return !0;
    return !1;
  }
  function Bk(a, b) {
    ok().addListener(a, b);
  }
  function Ck(a, b) {
    ok().notifyListeners(a, b);
  }
  function Dk(a, b) {
    function c() {
      for (var e = 0; e < b.length; e++) if (!zk(b[e])) return !0;
      return !1;
    }
    if (c()) {
      var d = !1;
      Bk(b, function (e) {
        d || c() || ((d = !0), a(e));
      });
    } else a({});
  }
  function Ek(a, b) {
    function c() {
      for (var k = [], m = 0; m < e.length; m++) {
        var n = e[m];
        wk(n) && !f[n] && k.push(n);
      }
      return k;
    }
    function d(k) {
      for (var m = 0; m < k.length; m++) f[k[m]] = !0;
    }
    var e = z(b) ? [b] : b,
      f = {},
      g = c();
    g.length !== e.length &&
      (d(g),
      Bk(e, function (k) {
        function m(q) {
          q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
        }
        var n = c();
        if (n.length !== 0) {
          var p = Object.keys(f).length;
          n.length + p >= e.length
            ? m(n)
            : C.setTimeout(function () {
                m(c());
              }, 500);
        }
      }));
  }
  var Fk = [
      "ad_storage",
      "analytics_storage",
      "ad_user_data",
      "ad_personalization",
    ],
    Gk = !1,
    Hk = !1;
  function Ik() {
    O(50) &&
      !Hk &&
      Gk &&
      (Fk.some(function (a) {
        return vk.containerScopedDefaults[a] !== 1;
      }) ||
        Jk("mbc"));
    Hk = !0;
  }
  function Jk(a) {
    rj && (fk(a, "1"), jk());
  }
  function Kk(a) {
    eb("HEALTH", a);
  }
  var Lk;
  try {
    Lk = JSON.parse(
      cb(
        "eyIwIjoiR0IiLCIxIjoiIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUuY28udWsiLCI0IjoicmVnaW9uMSIsIjUiOmZhbHNlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
      )
    );
  } catch (a) {
    Q(123), Kk(2), (Lk = {});
  }
  function Mk() {
    return Lk["0"] || "";
  }
  function Nk() {
    return Lk["1"] || "";
  }
  function Ok() {
    var a = !1;
    return a;
  }
  function Pk() {
    return Lk["6"] !== !1;
  }
  function Qk() {
    var a = "";
    return a;
  }
  function Rk() {
    var a = !1;
    a = !!Lk["5"];
    return a;
  }
  function Sk() {
    var a = "";
    return a;
  }
  var Tk = [T.g.O, T.g.U, T.g.N, T.g.sa],
    Uk,
    Vk;
  function Wk(a) {
    for (
      var b = a[T.g.Cb], c = Array.isArray(b) ? b : [b], d = { Me: 0 };
      d.Me < c.length;
      d = { Me: d.Me }, ++d.Me
    )
      sb(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== T.g.Cb) {
              var k = c[e.Me],
                m = Mk(),
                n = Nk();
              tk = !0;
              sk && eb("TAGGING", 20);
              ok().declare(f, g, k, m, n);
            }
          };
        })(d)
      );
  }
  function Xk(a) {
    Ik();
    !Vk && Uk && Jk("crc");
    Vk = !0;
    var b = a[T.g.Cb];
    b && Q(40);
    var c = a[T.g.ef];
    c && Q(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { Ne: 0 };
      e.Ne < d.length;
      e = { Ne: e.Ne }, ++e.Ne
    )
      sb(
        a,
        (function (f) {
          return function (g, k) {
            if (g !== T.g.Cb && g !== T.g.ef) {
              var m = d[f.Ne],
                n = Number(c),
                p = Mk(),
                q = Nk();
              n = n === void 0 ? 0 : n;
              sk = !0;
              tk && eb("TAGGING", 20);
              ok().default(g, k, m, p, q, n, vk);
            }
          };
        })(e)
      );
  }
  function Yk(a) {
    if (O(104)) {
      jb(9) && (vk.usedContainerScopedDefaults = !0);
      var b = a[T.g.Cb];
      if (b) {
        var c = Array.isArray(b) ? b : [b];
        if (!c.includes(Nk()) && !c.includes(Mk())) return;
      }
      sb(a, function (d, e) {
        switch (d) {
          case "ad_storage":
          case "analytics_storage":
          case "ad_user_data":
          case "ad_personalization":
            break;
          default:
            return;
        }
        jb(9) && (vk.usedContainerScopedDefaults = !0);
        vk.containerScopedDefaults[d] = e === "granted" ? 3 : 2;
      });
    }
  }
  function Zk(a, b) {
    Ik();
    Uk = !0;
    sb(a, function (c, d) {
      sk = !0;
      tk && eb("TAGGING", 20);
      ok().update(c, d, vk);
    });
    Ck(b.eventId, b.priorityId);
  }
  function $k(a) {
    a.hasOwnProperty("all") &&
      ((vk.selectedAllCorePlatformServices = !0),
      sb(gi, function (b) {
        vk.corePlatformServices[b] = a.all === "granted";
        vk.usedCorePlatformServices = !0;
      }));
    sb(a, function (b, c) {
      b !== "all" &&
        ((vk.corePlatformServices[b] = c === "granted"),
        (vk.usedCorePlatformServices = !0));
    });
  }
  function X(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return wk(b);
    });
  }
  function al(a, b) {
    Bk(a, b);
  }
  function bl(a, b) {
    Ek(a, b);
  }
  function cl(a, b) {
    Dk(a, b);
  }
  function dl() {
    var a = [T.g.O, T.g.sa, T.g.N];
    ok().waitForUpdate(a, 500, vk);
  }
  function el(a) {
    for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      ok().clearTimeout(d, void 0, vk);
    }
    Ck();
  }
  function fl() {
    if (ii.pscdl === void 0) {
      var a = function (c) {
          ii.pscdl = c;
        },
        b = function () {
          a("error");
        };
      try {
        nc.cookieDeprecationLabel
          ? (a("pending"),
            nc.cookieDeprecationLabel.getValue().then(a).catch(b))
          : a("noapi");
      } catch (c) {
        b(c);
      }
    }
  }
  function gl(a, b) {
    b &&
      sb(b, function (c, d) {
        typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d));
      });
  }
  var hl = /[A-Z]+/,
    il = /\s/;
  function jl(a, b) {
    if (z(a)) {
      a = xb(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (hl.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var k = g(f[1]);
              k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (il.test(f[m]) && (d !== "AW" || m !== 1))) return;
          }
          return { id: a, prefix: d, destinationId: d + "-" + f[0], ids: f };
        }
      }
    }
  }
  function kl(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = jl(a[d], b);
      e && (c[e.id] = e);
    }
    ll(c);
    var f = [];
    sb(c, function (g, k) {
      f.push(k);
    });
    return f;
  }
  function ll(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ids[ml[2]] && b.push(d.destinationId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var nl = {},
    ml =
      ((nl[0] = 0),
      (nl[1] = 0),
      (nl[2] = 1),
      (nl[3] = 0),
      (nl[4] = 1),
      (nl[5] = 2),
      (nl[6] = 0),
      (nl[7] = 0),
      (nl[8] = 0),
      nl);
  var ol = Number("") || 500,
    pl = {},
    ql = {},
    rl = { initialized: 11, complete: 12, interactive: 13 },
    sl = {},
    tl = Object.freeze(((sl[T.g.Ha] = !0), sl)),
    ul =
      E.location.search.indexOf("?gtm_diagnostics=") >= 0 ||
      E.location.search.indexOf("&gtm_diagnostics=") >= 0,
    vl = void 0;
  function wl(a, b) {
    if (b.length && rj) {
      var c;
      (c = pl)[a] != null || (c[a] = []);
      ql[a] != null || (ql[a] = []);
      var d = b.filter(function (e) {
        return !ql[a].includes(e);
      });
      pl[a].push.apply(pl[a], ma(d));
      ql[a].push.apply(ql[a], ma(d));
      !vl &&
        d.length > 0 &&
        (gk("tdc", !0),
        (vl = C.setTimeout(function () {
          jk();
          pl = {};
          vl = void 0;
        }, ol)));
    }
  }
  function xl(a, b, c) {
    if (rj && a === "config") {
      var d,
        e = (d = jl(b)) == null ? void 0 : d.ids;
      if (!(e && e.length > 1)) {
        var f,
          g = rc("google_tag_data", {});
        g.td || (g.td = {});
        f = g.td;
        var k = Qa(c.K);
        Qa(c.j, k);
        var m = [],
          n;
        for (n in f)
          if (f.hasOwnProperty(n)) {
            var p = yl(f[n], k);
            p.length && (ul && console.log(p), m.push(n));
          }
        m.length && (wl(b, m), eb("TAGGING", rl[E.readyState] || 14));
        f[b] = k;
      }
    }
  }
  function zl(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function yl(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function (r, t) {
        var v;
        Ma(t) === "object" ? (v = t[r]) : Ma(t) === "array" && (v = t[r]);
        return v === void 0 ? tl[r] : v;
      },
      f = zl(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var k = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = Ma(m) === "object" || Ma(m) === "array",
          q = Ma(n) === "object" || Ma(n) === "array";
        if (p && q) yl(m, n, c, k);
        else if (p || q || m !== n) c[k] = !0;
      }
    return Object.keys(c);
  }
  function Al() {
    fk(
      "tdc",
      function () {
        vl && (C.clearTimeout(vl), (vl = void 0));
        var a = [],
          b;
        for (b in pl) pl.hasOwnProperty(b) && a.push(b + "*" + pl[b].join("."));
        return a.length ? a.join("!") : void 0;
      },
      !1
    );
  }
  var Bl = function (a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.P = d;
      this.H = e;
      this.K = f;
      this.C = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    Cl = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.j);
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 2:
          c.push(a.j);
          break;
        case 1:
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 4:
          c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K);
      }
      return c;
    },
    V = function (a, b, c, d) {
      for (
        var e = l(Cl(a, d === void 0 ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (g[b] !== void 0) return g[b];
      }
      return c;
    },
    Dl = function (a) {
      for (
        var b = {}, c = Cl(a, 4), d = l(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = l(f), k = g.next();
          !k.done;
          k = g.next()
        )
          b[k.value] = 1;
      return Object.keys(b);
    },
    El = function (a, b, c) {
      function d(n) {
        Pa(n) &&
          sb(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = Cl(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    Fl = function (a) {
      for (
        var b = [T.g.Sc, T.g.Oc, T.g.Pc, T.g.Qc, T.g.Rc, T.g.Tc, T.g.Uc],
          c = Cl(a, 3),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, k = !1, m = l(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
        }
        var q = k ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    Gl = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.C = {};
      this.P = {};
      this.j = {};
      this.H = {};
      this.Z = {};
      this.K = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    Hl = function (a, b) {
      a.C = b;
      return a;
    },
    Il = function (a, b) {
      a.P = b;
      return a;
    },
    Jl = function (a, b) {
      a.j = b;
      return a;
    },
    Kl = function (a, b) {
      a.H = b;
      return a;
    },
    Ll = function (a, b) {
      a.Z = b;
      return a;
    },
    Ml = function (a, b) {
      a.K = b;
      return a;
    },
    Nl = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    Ol = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Pl = function (a, b) {
      a.onFailure = b;
      return a;
    },
    Ql = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    Rl = function (a) {
      return new Bl(
        a.eventId,
        a.priorityId,
        a.C,
        a.P,
        a.j,
        a.H,
        a.K,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var Sl = { nk: Number("5"), Rn: Number("") },
    Tl = [];
  function Ul(a) {
    Tl.push(a);
  }
  var Vl = "?id=" + Nf.ctid,
    Wl = void 0,
    Xl = {},
    Yl = void 0,
    Zl = new (function () {
      var a = 5;
      Sl.nk > 0 && (a = Sl.nk);
      this.C = a;
      this.j = 0;
      this.H = [];
    })(),
    $l = 1e3;
  function am(a, b) {
    var c = Wl;
    if (c === void 0)
      if (b) c = zi();
      else return "";
    for (
      var d = [jj("https://www.googletagmanager.com"), "/a", Vl],
        e = l(Tl),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value, k = g({ eventId: c, ic: !!a }), m = l(k), n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = l(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function bm() {
    Yl && (C.clearTimeout(Yl), (Yl = void 0));
    if (Wl !== void 0 && cm) {
      var a;
      (a = Xl[Wl]) || (a = Zl.j < Zl.C ? !1 : zb() - Zl.H[Zl.j % Zl.C] < 1e3);
      if (a || $l-- <= 0) Q(1), (Xl[Wl] = !0);
      else {
        var b = Zl.j++ % Zl.C;
        Zl.H[b] = zb();
        var c = am(!0);
        zc(c);
        cm = !1;
      }
    }
  }
  var cm = !1;
  function dm(a) {
    Xl[a] ||
      (a !== Wl && (bm(), (Wl = a)),
      (cm = !0),
      Yl || (Yl = C.setTimeout(bm, 500)),
      am().length >= 2022 && bm());
  }
  var em = pb();
  function fm() {
    em = pb();
  }
  function gm() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(em)],
    ];
  }
  var hm = {};
  function im(a, b, c) {
    qj && a !== void 0 && ((hm[a] = hm[a] || []), hm[a].push(c + b), dm(a));
  }
  function jm(a) {
    var b = a.eventId,
      c = a.ic,
      d = [],
      e = hm[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete hm[b];
    return d;
  }
  function km(a, b) {
    var c = jl(Hj(a), !0);
    c && lm.register(c, b);
  }
  function mm(a, b, c, d) {
    var e = jl(c, d.isGtmEvent);
    e &&
      (O(48) && O(48) && ni && !Aj && (d.deferrable = !0),
      lm.push("event", [b, a], e, d));
  }
  function nm(a, b, c, d) {
    var e = jl(c, d.isGtmEvent);
    e && lm.push("get", [a, b], e, d);
  }
  function om(a) {
    var b = jl(Hj(a), !0),
      c;
    b ? (c = pm(lm, b).j) : (c = {});
    return c;
  }
  function qm(a, b) {
    var c = jl(Hj(a), !0);
    if (c) {
      var d = lm,
        e = Qa(b, null);
      Qa(pm(d, c).j, e);
      pm(d, c).j = e;
    }
  }
  var rm = function () {
      this.P = {};
      this.j = {};
      this.C = {};
      this.Z = null;
      this.K = {};
      this.H = !1;
      this.status = 1;
    },
    sm = function (a, b, c, d) {
      this.C = zb();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    tm = function () {
      this.destinations = {};
      this.j = {};
      this.commands = [];
    },
    pm = function (a, b) {
      var c = b.destinationId;
      return (a.destinations[c] = a.destinations[c] || new rm());
    },
    um = function (a, b, c, d) {
      if (d.j) {
        var e = pm(a, d.j),
          f = e.Z;
        if (f) {
          var g = Qa(c, null),
            k = Qa(e.P[d.j.id], null),
            m = Qa(e.K, null),
            n = Qa(e.j, null),
            p = Qa(a.j, null),
            q = {};
          if (qj)
            try {
              q = Qa(Gi);
            } catch (u) {
              Q(72);
            }
          var r = d.j.prefix,
            t = function (u) {
              im(d.messageContext.eventId, r, u);
            },
            v = Rl(
              Ql(
                Pl(
                  Ol(
                    Nl(
                      Ll(
                        Kl(
                          Ml(
                            Jl(
                              Il(
                                Hl(
                                  new Gl(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                k
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var u = t;
                        t = void 0;
                        u("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var u = t;
                      t = void 0;
                      u("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            im(d.messageContext.eventId, r, "1"),
              xl(d.type, d.j.id, v),
              f(d.j.id, b, d.C, v);
          } catch (u) {
            im(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  tm.prototype.register = function (a, b, c) {
    var d = pm(this, a);
    d.status !== 3 &&
      ((d.Z = b), (d.status = 3), c && (Qa(d.j, c), (d.j = c)), this.flush());
  };
  tm.prototype.push = function (a, b, c, d) {
    c !== void 0 &&
      (pm(this, c).status === 1 &&
        ((pm(this, c).status = 2), this.push("require", [{}], c, {})),
      pm(this, c).H && (d.deferrable = !1));
    this.commands.push(new sm(a, c, b, d));
    d.deferrable || this.flush();
  };
  tm.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.commands.length;
      e = { Dc: void 0, sh: void 0 }
    ) {
      var f = this.commands[0],
        g = f.j;
      if (f.messageContext.deferrable)
        !g || pm(this, g).H
          ? ((f.messageContext.deferrable = !1), this.commands.push(f))
          : c.push(f),
          this.commands.shift();
      else {
        switch (f.type) {
          case "require":
            if (pm(this, g).status !== 3 && !a) {
              this.commands.push.apply(this.commands, c);
              return;
            }
            break;
          case "set":
            sb(f.args[0], function (r, t) {
              Qa(Hb(r, t), b.j);
            });
            break;
          case "config":
            var k = pm(this, g);
            e.Dc = {};
            sb(
              f.args[0],
              (function (r) {
                return function (t, v) {
                  Qa(Hb(t, v), r.Dc);
                };
              })(e)
            );
            var m = !!e.Dc[T.g.Yb];
            delete e.Dc[T.g.Yb];
            var n = g.destinationId === g.id;
            m || (n ? (k.K = {}) : (k.P[g.id] = {}));
            (k.H && m) || um(this, T.g.aa, e.Dc, f);
            k.H = !0;
            n ? Qa(e.Dc, k.K) : (Qa(e.Dc, k.P[g.id]), Q(70));
            d = !0;
            break;
          case "event":
            e.sh = {};
            sb(
              f.args[0],
              (function (r) {
                return function (t, v) {
                  Qa(Hb(t, v), r.sh);
                };
              })(e)
            );
            um(this, f.args[1], e.sh, f);
            break;
          case "get":
            var p = {},
              q = ((p[T.g.rb] = f.args[0]), (p[T.g.Gb] = f.args[1]), p);
            um(this, T.g.Ta, q, f);
        }
        this.commands.shift();
        vm(this, f);
      }
    }
    this.commands.push.apply(this.commands, c);
    d && this.flush();
  };
  var vm = function (a, b) {
      if (b.type !== "require")
        if (b.j)
          for (var c = pm(a, b.j).C[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.C)
                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    lm = new tm();
  var wm = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    xm = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var ym = function (a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    },
    zm = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    };
  var Am, Bm;
  a: {
    for (var Cm = ["CLOSURE_FLAGS"], Dm = ya, Em = 0; Em < Cm.length; Em++)
      if (((Dm = Dm[Cm[Em]]), Dm == null)) {
        Bm = null;
        break a;
      }
    Bm = Dm;
  }
  var Fm = Bm && Bm[610401301];
  Am = Fm != null ? Fm : !1;
  function Gm() {
    var a = ya.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Hm,
    Im = ya.navigator;
  Hm = Im ? Im.userAgentData || null : null;
  function Jm(a) {
    return Am
      ? Hm
        ? Hm.brands.some(function (b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function Km(a) {
    return Gm().indexOf(a) != -1;
  }
  function Lm() {
    return Am ? !!Hm && Hm.brands.length > 0 : !1;
  }
  function Mm() {
    return Lm() ? !1 : Km("Opera");
  }
  function Nm() {
    return Km("Firefox") || Km("FxiOS");
  }
  function Om() {
    return Lm()
      ? Jm("Chromium")
      : ((Km("Chrome") || Km("CriOS")) && !(Lm() ? 0 : Km("Edge"))) ||
          Km("Silk");
  }
  function Pm() {
    return Am ? !!Hm && !!Hm.platform : !1;
  }
  function Qm() {
    return Km("iPhone") && !Km("iPod") && !Km("iPad");
  }
  function Rm() {
    Qm() || Km("iPad") || Km("iPod");
  }
  var Sm = function (a) {
    Sm[" "](a);
    return a;
  };
  Sm[" "] = function () {};
  Mm();
  Lm() || Km("Trident") || Km("MSIE");
  Km("Edge");
  !Km("Gecko") ||
    (Gm().toLowerCase().indexOf("webkit") != -1 && !Km("Edge")) ||
    Km("Trident") ||
    Km("MSIE") ||
    Km("Edge");
  Gm().toLowerCase().indexOf("webkit") != -1 && !Km("Edge") && Km("Mobile");
  Pm() || Km("Macintosh");
  Pm() || Km("Windows");
  (Pm() ? Hm.platform === "Linux" : Km("Linux")) || Pm() || Km("CrOS");
  Pm() || Km("Android");
  Qm();
  Km("iPad");
  Km("iPod");
  Rm();
  Gm().toLowerCase().indexOf("kaios");
  var Tm = function (a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var k = a.charCodeAt(e + f);
          if (!k || k == 61 || k == 38 || k == 35) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Um = /#|$/,
    Vm = function (a, b) {
      var c = a.search(Um),
        d = Tm(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " ")
      );
    },
    Wm = /[?&]($|#)/,
    Xm = function (a, b, c) {
      for (
        var d, e = a.search(Um), f = 0, g, k = [];
        (g = Tm(a, f, b, e)) >= 0;

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(Wm, "$1");
      var m,
        n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        r < 0 && (r = d.length);
        var t = d.indexOf("?"),
          v;
        t < 0 || t > r ? ((t = r), (v = "")) : (v = d.substring(t + 1, r));
        q = [d.slice(0, t), v, d.slice(r)];
        var u = q[1];
        q[1] = p ? (u ? u + "&" + p : p) : u;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Ym = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              Sm(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Zm = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    $m = function (a) {
      if (C.top == C) return 0;
      if (a === void 0 ? 0 : a) {
        var b = C.location.ancestorOrigins;
        if (b) return b[b.length - 1] == C.location.origin ? 1 : 2;
      }
      return Ym(C.top) ? 1 : 2;
    },
    an = function (a) {
      a = a === void 0 ? document : a;
      return a.createElement("img");
    };
  function bn(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = an(a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = lc(g, e);
          k >= 0 && Array.prototype.splice.call(g, k, 1);
        }
        zm(e, "load", f);
        zm(e, "error", f);
      };
      ym(e, "load", f);
      ym(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var dn = function (a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Zm(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      cn(c, b);
    },
    cn = function (a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else bn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  var en = function () {
    this.P = this.P;
    this.C = this.C;
  };
  en.prototype.P = !1;
  en.prototype.dispose = function () {
    this.P || ((this.P = !0), this.Pa());
  };
  en.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  en.prototype.addOnDisposeCallback = function (a, b) {
    this.P
      ? b !== void 0
        ? a.call(b)
        : a()
      : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a));
  };
  en.prototype.Pa = function () {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  var fn = function (a) {
      a.addtlConsent !== void 0 &&
        typeof a.addtlConsent !== "string" &&
        (a.addtlConsent = void 0);
      a.gdprApplies !== void 0 &&
        typeof a.gdprApplies !== "boolean" &&
        (a.gdprApplies = void 0);
      return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
        (a.listenerId !== void 0 && typeof a.listenerId !== "number")
        ? 2
        : a.cmpStatus && a.cmpStatus !== "error"
        ? 0
        : 3;
    },
    gn = function (a, b) {
      b = b === void 0 ? {} : b;
      en.call(this);
      this.H = a;
      this.j = null;
      this.Z = {};
      this.Mf = 0;
      var c;
      this.oe = (c = b.dn) != null ? c : 500;
      var d;
      this.Cc = (d = b.In) != null ? d : !1;
      this.K = null;
    };
  va(gn, en);
  gn.prototype.Pa = function () {
    this.Z = {};
    this.K && (zm(this.H, "message", this.K), delete this.K);
    delete this.Z;
    delete this.H;
    delete this.j;
    en.prototype.Pa.call(this);
  };
  var jn = function (a) {
    return typeof a.H.__tcfapi === "function" || hn(a) != null;
  };
  gn.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.Cc },
      d = xm(function () {
        return a(c);
      }),
      e = 0;
    this.oe !== -1 &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.oe));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = fn(c)),
          (c.internalBlockOnErrors = b.Cc),
          (k && c.internalErrorState === 0) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      kn(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  gn.prototype.removeEventListener = function (a) {
    a && a.listenerId && kn(this, "removeEventListener", null, a.listenerId);
  };
  var mn = function (a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (g === 0) return !1;
      var k = c;
      c === 2
        ? ((k = 0), g === 2 && (k = 1))
        : c === 3 && ((k = 1), g === 1 && (k = 0));
      var m;
      if (k === 0)
        if (a.purpose && a.vendor) {
          var n = ln(a.vendor.consents, d === void 0 ? "755" : d);
          m =
            n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH"
              ? !0
              : n && ln(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          k === 1
            ? a.purpose && a.vendor
              ? ln(a.purpose.legitimateInterests, b) &&
                ln(a.vendor.legitimateInterests, d === void 0 ? "755" : d)
              : !0
            : !0;
      return m;
    },
    ln = function (a, b) {
      return !(!a || !a[b]);
    },
    kn = function (a, b, c, d) {
      c || (c = function () {});
      if (typeof a.H.__tcfapi === "function") {
        var e = a.H.__tcfapi;
        e(b, 2, c, d);
      } else if (hn(a)) {
        nn(a);
        var f = ++a.Mf;
        a.Z[f] = c;
        if (a.j) {
          var g = {};
          a.j.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    hn = function (a) {
      if (a.j) return a.j;
      var b;
      a: {
        for (var c = a.H, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.j = b;
      return a.j;
    },
    nn = function (a) {
      a.K ||
        ((a.K = function (b) {
          try {
            var c;
            c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.Z[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        ym(a.H, "message", a.K));
    },
    on = function (a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = fn(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0
        ? a.internalBlockOnErrors
          ? (dn({ e: String(a.internalErrorState) }), !1)
          : !0
        : a.cmpStatus !== "loaded" ||
          (a.eventStatus !== "tcloaded" &&
            a.eventStatus !== "useractioncomplete")
        ? !1
        : !0;
    };
  var pn = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function qn() {
    var a = ii.tcf || {};
    return (ii.tcf = a);
  }
  var rn = function () {
    return new gn(C, { dn: -1 });
  };
  function sn() {
    var a = qn(),
      b = rn();
    jn(b) && !tn() && !un() && Q(124);
    if (!a.active && jn(b)) {
      tn() &&
        ((a.active = !0),
        (a.hc = {}),
        (a.cmpId = 0),
        (a.tcfPolicyVersion = 0),
        (ok().active = !0),
        (a.tcString = "tcunavailable"));
      dl();
      try {
        b.addEventListener(function (c) {
          if (c.internalErrorState !== 0)
            vn(a), el([T.g.O, T.g.sa, T.g.N]), (ok().active = !0);
          else if (
            ((a.gdprApplies = c.gdprApplies),
            (a.cmpId = c.cmpId),
            (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
            un() && (a.active = !0),
            !wn(c) || tn() || un())
          ) {
            a.tcfPolicyVersion = c.tcfPolicyVersion;
            var d;
            if (c.gdprApplies === !1) {
              var e = {},
                f;
              for (f in pn) pn.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (wn(c)) {
              var g = {},
                k;
              for (k in pn)
                if (pn.hasOwnProperty(k))
                  if (k === "1") {
                    var m,
                      n = c,
                      p = { Kl: !0 };
                    p = p === void 0 ? {} : p;
                    m = on(n)
                      ? n.gdprApplies === !1
                        ? !0
                        : n.tcString === "tcunavailable"
                        ? !p.Qj
                        : (p.Qj || n.gdprApplies !== void 0 || p.Kl) &&
                          (p.Qj ||
                            (typeof n.tcString === "string" &&
                              n.tcString.length))
                        ? mn(n, "1", 0)
                        : !0
                      : !1;
                    g["1"] = m;
                  } else g[k] = mn(c, k, pn[k]);
              d = g;
            }
            if (d) {
              a.tcString = c.tcString || "tcempty";
              a.hc = d;
              var q = {},
                r = ((q[T.g.O] = a.hc["1"] ? "granted" : "denied"), q);
              a.gdprApplies !== !0
                ? (el([T.g.O, T.g.sa, T.g.N]), (ok().active = !0))
                : ((r[T.g.sa] = a.hc["3"] && a.hc["4"] ? "granted" : "denied"),
                  typeof a.tcfPolicyVersion === "number" &&
                  a.tcfPolicyVersion >= 4
                    ? (r[T.g.N] = a.hc["1"] && a.hc["7"] ? "granted" : "denied")
                    : el([T.g.N]),
                  Zk(
                    r,
                    { eventId: 0 },
                    {
                      gdprApplies: a ? a.gdprApplies : void 0,
                      tcString: xn() || "",
                    }
                  ));
            }
          } else el([T.g.O, T.g.sa, T.g.N]);
        });
      } catch (c) {
        vn(a), el([T.g.O, T.g.sa, T.g.N]), (ok().active = !0);
      }
    }
  }
  function vn(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function wn(a) {
    return (
      a.eventStatus === "tcloaded" ||
      a.eventStatus === "useractioncomplete" ||
      a.eventStatus === "cmpuishown"
    );
  }
  function tn() {
    return C.gtag_enable_tcf_support === !0;
  }
  function un() {
    return qn().enableAdvertiserConsentMode === !0;
  }
  function xn() {
    var a = qn();
    if (a.active) return a.tcString;
  }
  function yn() {
    var a = qn();
    if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0";
  }
  function zn(a) {
    if (!pn.hasOwnProperty(String(a))) return !0;
    var b = qn();
    return b.active && b.hc ? !!b.hc[String(a)] : !0;
  }
  var An = [T.g.O, T.g.U, T.g.N, T.g.sa],
    Bn = {},
    Cn = ((Bn[T.g.O] = 1), (Bn[T.g.U] = 2), Bn);
  function Dn(a) {
    if (a === void 0) return 0;
    switch (V(a, T.g.ja)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  function En(a) {
    if (Nk() === "US-CO" && nc.globalPrivacyControl === !0) return !1;
    var b = Dn(a);
    if (b === 3) return !1;
    switch (xk(T.g.sa)) {
      case 1:
      case 3:
        return !0;
      case 2:
        return !1;
      case 4:
        return b === 2;
      case 0:
        return !0;
      default:
        return !1;
    }
  }
  function Fn() {
    return Ak() || !wk(T.g.O) || !wk(T.g.U);
  }
  function Gn() {
    var a = {},
      b;
    for (b in Cn) Cn.hasOwnProperty(b) && (a[Cn[b]] = xk(b));
    return "G1" + Ee(a[1] || 0) + Ee(a[2] || 0);
  }
  var Hn = {},
    In =
      ((Hn[T.g.O] = 0), (Hn[T.g.U] = 1), (Hn[T.g.N] = 2), (Hn[T.g.sa] = 3), Hn);
  function Jn(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  function Kn(a) {
    for (var b = "1", c = 0; c < An.length; c++) {
      var d = b,
        e,
        f = An[c],
        g = vk.delegatedConsentTypes[f];
      e = g === void 0 ? 0 : In.hasOwnProperty(g) ? 12 | In[g] : 8;
      var k = ok();
      k.accessedAny = !0;
      var m = k.entries[f] || {};
      e = (e << 2) | Jn(m.implicit);
      b =
        d +
        ("" +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            e
          ] +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (Jn(m.declare) << 4) | (Jn(m.default) << 2) | Jn(m.update)
          ]);
    }
    var n = b,
      p = (Nk() === "US-CO" && nc.globalPrivacyControl === !0 ? 1 : 0) << 3,
      q = (Ak() ? 1 : 0) << 2,
      r = Dn(a);
    b =
      n +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        p | q | r
      ];
    O(104) &&
      (b +=
        "" +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          (vk.containerScopedDefaults.ad_storage << 4) |
            (vk.containerScopedDefaults.analytics_storage << 2) |
            vk.containerScopedDefaults.ad_user_data
        ] +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          ((jb(8) && vk.usedContainerScopedDefaults ? 1 : 0) << 2) |
            vk.containerScopedDefaults.ad_personalization
        ]);
    return b;
  }
  function Ln() {
    if (!wk(T.g.N)) return "-";
    for (
      var a = Object.keys(gi), b = yk(a), c = "", d = l(a), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value;
      b[f] && (c += gi[f]);
    }
    (vk.usedCorePlatformServices ? vk.selectedAllCorePlatformServices : 1) &&
      (c += "o");
    return c || "-";
  }
  function Mn() {
    return Pk() || ((tn() || un()) && yn() === "1") ? "1" : "0";
  }
  function Nn() {
    return (Pk() ? !0 : !(!tn() && !un()) && yn() === "1") || !wk(T.g.N);
  }
  function On() {
    var a = "0",
      b = "0",
      c;
    var d = qn();
    c = d.active ? d.cmpId : void 0;
    typeof c === "number" &&
      c >= 0 &&
      c <= 4095 &&
      ((a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (c >> 6) & 63
      ]),
      (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        c & 63
      ]));
    var e = "0",
      f;
    var g = qn();
    f = g.active ? g.tcfPolicyVersion : void 0;
    typeof f === "number" &&
      f >= 0 &&
      f <= 63 &&
      (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        f
      ]);
    var k = 0;
    Pk() && (k |= 1);
    yn() === "1" && (k |= 2);
    tn() && (k |= 4);
    var m;
    var n = qn();
    m =
      n.enableAdvertiserConsentMode !== void 0
        ? n.enableAdvertiserConsentMode
          ? "1"
          : "0"
        : void 0;
    m === "1" && (k |= 8);
    ok().waitPeriodTimedOut && (k |= 16);
    return (
      "1" +
      a +
      b +
      e +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
    );
  }
  function Vn() {
    return Nk() === "US-CO";
  }
  function Wn() {
    var a = !1;
    return a;
  }
  var Xn = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function Yn(a) {
    a = a === void 0 ? {} : a;
    var b = Nf.ctid.split("-")[0].toUpperCase(),
      c = {};
    c.ctid = Nf.ctid;
    c.Lm = hi.ue;
    c.Pm = hi.Zg;
    c.mm = zj.qe ? 2 : 1;
    c.Vm = a.fk;
    c.Be = Nf.canonicalContainerId;
    c.Be !== a.ra && (c.ra = a.ra);
    var d = Jj();
    c.Bm = d ? d.canonicalContainerId : void 0;
    oi ? ((c.Yf = Xn[b]), c.Yf || (c.Yf = 0)) : (c.Yf = si ? 13 : 10);
    Bi.H
      ? ((c.Wf = 0), (c.ol = 2))
      : qi
      ? (c.Wf = 1)
      : Wn()
      ? (c.Wf = 2)
      : (c.Wf = 3);
    var e = {};
    e[6] = Aj;
    Bi.C === 2 ? (e[7] = !0) : Bi.C === 1 && (e[2] = !0);
    c.rl = e;
    var f = a.Of,
      g;
    var k = c.Yf,
      m = c.Wf;
    k === void 0
      ? (g = "")
      : (m || (m = 0), (g = "" + Ge(1, 1) + De((k << 2) | m)));
    var n = c.ol,
      p = "4" + g + (n ? "" + Ge(2, 1) + De(n) : ""),
      q,
      r = c.Pm;
    q = r && Fe.test(r) ? "" + Ge(3, 2) + r : "";
    var t,
      v = c.Lm;
    t = v ? "" + Ge(4, 1) + De(v) : "";
    var u;
    var w = c.ctid;
    if (w && f) {
      var x = w.split("-"),
        y = x[0].toUpperCase();
      if (y !== "GTM" && y !== "OPT") u = "";
      else {
        var A = x[1];
        u = "" + Ge(5, 3) + De(1 + A.length) + (c.mm || 0) + A;
      }
    } else u = "";
    var B = c.Vm,
      D = c.Be,
      H = c.ra,
      J = c.Pn,
      G =
        p +
        q +
        t +
        u +
        (B ? "" + Ge(6, 1) + De(B) : "") +
        (D ? "" + Ge(7, 3) + De(D.length) + D : "") +
        (H ? "" + Ge(8, 3) + De(H.length) + H : "") +
        (J ? "" + Ge(9, 3) + De(J.length) + J : ""),
      U;
    var L = c.rl;
    L = L === void 0 ? {} : L;
    for (
      var R = [], W = l(Object.keys(L)), ba = W.next();
      !ba.done;
      ba = W.next()
    ) {
      var S = ba.value;
      R[Number(S)] = L[S];
    }
    if (R.length) {
      var P = Ge(10, 3),
        la;
      if (R.length === 0) la = De(0);
      else {
        for (var na = [], ia = 0, xa = !1, Oa = 0; Oa < R.length; Oa++) {
          xa = !0;
          var Ea = Oa % 6;
          R[Oa] && (ia |= 1 << Ea);
          Ea === 5 && (na.push(De(ia)), (ia = 0), (xa = !1));
        }
        xa && na.push(De(ia));
        la = na.join("");
      }
      var Sa = la;
      U = "" + P + De(Sa.length) + Sa;
    } else U = "";
    var $a = c.Bm;
    return G + U + ($a ? "" + Ge(11, 3) + De($a.length) + $a : "");
  }
  var Zn = {
      zj: "service_worker_endpoint",
      bh: "shared_user_id",
      eh: "shared_user_id_requested",
      we: "shared_user_id_source",
    },
    $n;
  function ao(a) {
    if (!$n) {
      $n = {};
      for (var b = l(Object.keys(Zn)), c = b.next(); !c.done; c = b.next())
        $n[Zn[c.value]] = !0;
    }
    return !!$n[a];
  }
  function bo(a, b) {
    b = b === void 0 ? !1 : b;
    if (ao(a)) {
      var c,
        d,
        e =
          (d = (c = rc("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          k = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              k[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = l(Object.keys(k)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  k[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function co(a, b) {
    var c = bo(a, !0);
    c && c.set(b);
  }
  function eo(a) {
    var b;
    return (b = bo(a)) == null ? void 0 : b.get();
  }
  function fo(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = bo(a, !0)) == null ? void 0 : c.subscribe(b);
    }
  }
  function go(a, b) {
    var c = bo(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function ho(a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; d >= 0; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = c !== 0 ? b ^ (c >> 21) : b);
    return b;
  }
  function io(a) {
    return a.origin !== "null";
  }
  function jo(a, b, c, d) {
    var e;
    if (ko(d)) {
      for (
        var f = [], g = String(b || lo()).split(";"), k = 0;
        k < g.length;
        k++
      ) {
        var m = g[k].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function mo(a, b, c, d, e) {
    if (ko(e)) {
      var f = no(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = oo(
          f,
          function (g) {
            return g.Al;
          },
          b
        );
        if (f.length === 1) return f[0].id;
        f = oo(
          f,
          function (g) {
            return g.Dm;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function po(a, b, c, d) {
    var e = lo(),
      f = window;
    io(f) && (f.document.cookie = a);
    var g = lo();
    return e !== g || (c !== void 0 && jo(b, g, !1, d).indexOf(c) >= 0);
  }
  function qo(a, b, c, d) {
    function e(w, x, y) {
      if (y == null) return delete k[x], w;
      k[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (x == null) return w;
      k[x] = !0;
      return w + "; " + x;
    }
    if (!ko(c.Ab)) return 2;
    var g;
    b == null
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = ro(b)),
        (g = a + "=" + b));
    var k = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.tm);
    g = e(g, "samesite", c.Qm);
    c.secure && (g = f(g, "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = so(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
        var v = p[t] !== "none" ? p[t] : void 0,
          u = e(g, "domain", v);
        u = f(u, c.flags);
        try {
          d && d(a, k);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!to(v, c.path) && po(u, a, b, c.Ab)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, k);
    return to(n, c.path) ? 1 : po(g, a, b, c.Ab) ? 0 : 1;
  }
  function uo(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return qo(a, b, c);
  }
  function oo(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : f === void 0 || m < f
        ? ((e = [k]), (f = m))
        : m === f && e.push(k);
    }
    return d.length > 0 ? d : e;
  }
  function no(a, b, c) {
    for (var d = [], e = jo(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || !k || b.indexOf(k) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            Al: Number(n[0]) || 1,
            Dm: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function ro(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a;
  }
  var vo = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    wo = /(^|\.)doubleclick\.net$/i;
  function to(a, b) {
    return (
      a !== void 0 &&
      (wo.test(window.document.location.hostname) || (b === "/" && vo.test(a)))
    );
  }
  function xo(a) {
    if (!a) return 1;
    var b = a;
    jb(11) && a === "none" && (b = window.document.location.hostname);
    b = b.indexOf(".") === 0 ? b.substring(1) : b;
    return b.split(".").length;
  }
  function yo(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1;
  }
  function zo(a, b) {
    var c = "" + xo(a),
      d = yo(b);
    d > 1 && (c += "-" + d);
    return c;
  }
  var lo = function () {
      return io(window) ? window.document.cookie : "";
    },
    ko = function (a) {
      return a && jb(12)
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return zk(b) && wk(b);
          })
        : !0;
    },
    so = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      wo.test(e) || vo.test(e) || a.push("none");
      return a;
    };
  function Ao(a) {
    var b = Math.round(Math.random() * 2147483647);
    return a ? String(b ^ (ho(a) & 2147483647)) : String(b);
  }
  function Bo(a) {
    return [Ao(a), Math.round(zb() / 1e3)].join(".");
  }
  function Co(a, b, c, d, e) {
    var f = xo(b);
    return mo(a, f, yo(c), d, e);
  }
  function Do(a, b, c, d) {
    return [b, zo(c, d), a].join(".");
  }
  function Eo(a, b, c, d) {
    var e,
      f = Number(a.zb != null ? a.zb : void 0);
    f !== 0 && (e = new Date((b || zb()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Ab: d,
    };
  }
  var Fo;
  function Go() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = Ho,
      d = Io,
      e = Jo();
    if (!e.init) {
      Bc(E, "mousedown", a);
      Bc(E, "keyup", a);
      Bc(E, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function Ko(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e,
    };
    Jo().decorators.push(f);
  }
  function Lo(a, b, c) {
    for (var d = Jo().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        k;
      if ((k = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== E.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  k = !0;
                  break a;
                }
              } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                k = !0;
                break a;
              }
          k = !1;
        }
      if (k) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && Cb(e, g.callback());
      }
    }
    return e;
  }
  function Jo() {
    var a = rc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Mo = /(.*?)\*(.*?)\*(.*)/,
    No = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Oo = /^(?:www\.|m\.|amp\.)+/,
    Po = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Qo(a) {
    var b = Po.exec(a);
    if (b) return { Nh: b[1], query: b[2], fragment: b[3] };
  }
  function Ro(a, b) {
    var c = [
        nc.userAgent,
        new Date().getTimezoneOffset(),
        nc.userLanguage || nc.language,
        Math.floor(zb() / 60 / 1e3) - (b === void 0 ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Fo)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, k = 0; k < 8; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Fo = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Fo[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function So() {
    return function (a) {
      var b = aj(C.location.href),
        c = b.search.replace("?", ""),
        d = Ui(c, "_gl", !1, !0) || "";
      a.query = To(d) || {};
      var e = Vi(b, "fragment"),
        f;
      var g = -1;
      if (Eb(e, "_gl=")) g = 4;
      else {
        var k = e.indexOf("&_gl=");
        k > 0 && (g = k + 3 + 2);
      }
      if (g < 0) f = void 0;
      else {
        var m = e.indexOf("&", g);
        f = m < 0 ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = To(f || "") || {};
    };
  }
  function Uo(a) {
    var b = So(),
      c = Jo();
    c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
    var d = {},
      e = c.data;
    e && (Cb(d, e.query), a && Cb(d, e.fragment));
    return d;
  }
  var To = function (a) {
    try {
      var b = Vo(a, 3);
      if (b !== void 0) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = cb(d[e + 1]);
          c[f] = g;
        }
        eb("TAGGING", 6);
        return c;
      }
    } catch (k) {
      eb("TAGGING", 8);
    }
  };
  function Vo(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = Mo.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && g[1] === "1") {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Ro(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        eb("TAGGING", 7);
      }
    }
  }
  function Wo(a, b, c, d, e) {
    function f(p) {
      var q = p,
        r = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(q),
        t = q;
      if (r) {
        var v = r[2],
          u = r[4];
        t = r[1];
        u && (t = t + v + u);
      }
      p = t;
      var w = p.charAt(p.length - 1);
      p && w !== "&" && (p += "&");
      return p + n;
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = Qo(c);
    if (!g) return "";
    var k = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1)))
      : (k = "?" + f(k.substring(1)));
    return "" + g.Nh + k + m;
  }
  function Xo(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var v,
          u = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            x !== void 0 &&
              x === x &&
              x !== null &&
              x.toString() !== "[object Object]" &&
              (u.push(w), u.push(bb(String(x))));
          }
        var y = u.join("*");
        v = ["1", Ro(y), y].join("*");
        d
          ? (jb(4) || jb(1) || !p) && Yo("_gl", v, a, p, q)
          : Zo("_gl", v, a, p, q);
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = Lo(b, 1, d),
      f = Lo(b, 2, d),
      g = Lo(b, 4, d),
      k = Lo(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    jb(1) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && $o(m, k[m], a);
  }
  function $o(a, b, c) {
    c.tagName.toLowerCase() === "a"
      ? Zo(a, b, c)
      : c.tagName.toLowerCase() === "form" && Yo(a, b, c);
  }
  function Zo(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !jb(5) || d)) {
        var k = C.location.href,
          m = Qo(c.href),
          n = Qo(k);
        g = !(m && n && m.Nh === n.Nh && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = Wo(a, b, c.href, d, e);
      ec.test(p) && (c.href = p);
    }
  }
  function Yo(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = Wo(a, b, c.action, d, e);
          ec.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = E.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function Ho(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        (f !== "http:" && f !== "https:") || Xo(e, e.hostname);
      }
    } catch (g) {}
  }
  function Io(a) {
    try {
      if (a.action) {
        var b = Vi(aj(a.action), "host");
        Xo(a, b);
      }
    } catch (c) {}
  }
  function ap(a, b, c, d) {
    Go();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    Ko(a, b, e, d, !1);
    e === 2 && eb("TAGGING", 23);
    d && eb("TAGGING", 24);
  }
  function bp(a, b) {
    Go();
    Ko(a, [Xi(C.location, "host", !0)], b, !0, !0);
  }
  function cp() {
    var a = E.location.hostname,
      b = No.exec(E.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var k = a.replace(Oo, ""),
      m = e.replace(Oo, "");
    return k === m || Fb(k, "." + m);
  }
  function dp(a, b) {
    return a === !1 ? !1 : a || b || cp();
  }
  var ep = ["1"],
    fp = {},
    gp = {};
  function hp(a, b) {
    b = b === void 0 ? !0 : b;
    var c = ip(a.prefix);
    if (!fp[c])
      if (jp(c, a.path, a.domain)) {
        var d = gp[ip(a.prefix)];
        kp(a, d ? d.id : void 0, d ? d.Ih : void 0);
      } else {
        var e = cj("auiddc");
        if (e) eb("TAGGING", 17), (fp[c] = e);
        else if (b) {
          var f = ip(a.prefix),
            g = Bo();
          lp(f, g, a);
          jp(c, a.path, a.domain);
        }
      }
  }
  function kp(a, b, c) {
    var d = ip(a.prefix),
      e = fp[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(zb() / 1e3)));
          lp(d, k, a, g * 1e3);
        }
      }
    }
  }
  function lp(a, b, c, d) {
    var e = Do(b, "1", c.domain, c.path),
      f = Eo(c, d);
    f.Ab = mp();
    uo(a, e, f);
  }
  function jp(a, b, c) {
    var d = Co(a, b, c, ep, mp());
    if (!d) return !1;
    np(a, d);
    return !0;
  }
  function np(a, b) {
    var c = b.split(".");
    c.length === 5
      ? ((fp[a] = c.slice(0, 2).join(".")),
        (gp[a] = { id: c.slice(2, 4).join("."), Ih: Number(c[4]) || 0 }))
      : c.length === 3
      ? (gp[a] = { id: c.slice(0, 2).join("."), Ih: Number(c[2]) || 0 })
      : (fp[a] = b);
  }
  function ip(a) {
    return (a || "_gcl") + "_au";
  }
  function op(a) {
    function b() {
      wk(c) && a();
    }
    var c = mp();
    Dk(function () {
      b();
      wk(c) || Ek(b, c);
    }, c);
  }
  function pp(a) {
    var b = Uo(!0),
      c = ip(a.prefix);
    op(function () {
      var d = b[c];
      if (d) {
        np(c, d);
        var e = Number(fp[c].split(".")[1]) * 1e3;
        if (e) {
          eb("TAGGING", 16);
          var f = Eo(a, e);
          f.Ab = mp();
          var g = Do(d, "1", a.domain, a.path);
          uo(c, g, f);
        }
      }
    });
  }
  function qp(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = Co(a, e.path, e.domain, ep, mp());
      k && (g[a] = k);
      return g;
    };
    op(function () {
      ap(f, b, c, d);
    });
  }
  function mp() {
    return ["ad_storage", "ad_user_data"];
  }
  var rp = {},
    sp =
      ((rp.k = { Fa: /^[\w-]+$/ }),
      (rp.b = { Fa: /^[\w-]+$/, Vh: !0 }),
      (rp.i = { Fa: /^[1-9]\d*$/ }),
      (rp.u = { Fa: /^[1-9]\d*$/ }),
      rp);
  var tp = {},
    wp =
      ((tp[5] = { qk: { 2: up }, kh: ["k", "i", "b", "u"] }),
      (tp[4] = { qk: { 2: up, GCL: vp }, kh: ["k", "i", "b"] }),
      tp);
  function xp(a) {
    var b = wp[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.qk[c];
        if (d) return d(a, 5);
      }
    }
  }
  function up(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = wp[b];
      if (e) {
        for (
          var f = e.kh, g = l(c[2].split("$")), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var m = k.value,
            n = m[0];
          if (f.indexOf(n) !== -1)
            try {
              var p = decodeURIComponent(m.substring(1)),
                q = sp[n];
              q && (q.Vh ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
            } catch (r) {}
        }
        return d;
      }
    }
  }
  function yp(a, b) {
    var c = wp[5];
    if (c) {
      for (var d = [], e = l(c.kh), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          k = sp[g];
        if (k) {
          var m = a[g];
          if (m !== void 0)
            if (k.Vh && Array.isArray(m))
              for (var n = l(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return ["2", b || "1", d.join("$")].join(".");
    }
  }
  function vp(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var zp = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function Ap(a) {
    if (wp[5]) {
      for (
        var b = [],
          c = jo(a, void 0, void 0, zp.get(5)),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = xp(e.value);
        f && (Bp(f), b.push(f));
      }
      return b;
    }
  }
  function Cp(a, b, c, d) {
    c = c || {};
    var e = zo(c.domain, c.path),
      f = yp(b, e);
    if (f) {
      var g = Eo(c, d, void 0, zp.get(5));
      uo(a, f, g);
    }
  }
  function Dp(a, b) {
    var c = b.Fa;
    return typeof c === "function" ? c(a) : c.test(a);
  }
  function Bp(a) {
    for (
      var b = l(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { De: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.De = sp[e];
      d.De
        ? d.De.Vh
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (k) {
                      return Dp(k, g.De);
                    };
                  })(d)
                )
              : void 0)
          : (typeof f === "string" && Dp(f, d.De)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  function Ep(a) {
    for (
      var b = [],
        c = E.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          bi: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  }
  function Fp(a, b) {
    var c = Ep(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) &&
        Number(f[1])
      ) {
        d[c[e].bi] || (d[c[e].bi] = []);
        var g = { version: f[0], timestamp: Number(f[1]) * 1e3, T: f[2] };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].bi].push(g);
      }
    }
    return d;
  }
  var Gp = ["ad_storage", "ad_user_data"];
  function Hp() {
    var a = Ip();
    if (a.error) return a;
    if (!a.value) return { error: 2 };
    var b;
    try {
      b = a.value.gclid;
    } catch (c) {
      return { error: 11 };
    }
    return b ? { value: b } : { value: void 0 };
  }
  function Ip() {
    if (!wk(Gp)) return { error: 3 };
    if (!C.localStorage) return { error: 1 };
    var a = { schema: "gcl", version: 1 },
      b = void 0;
    try {
      b = C.localStorage.getItem("_gcl_ls");
    } catch (d) {
      return { error: 13 };
    }
    try {
      if (b) {
        var c = JSON.parse(b);
        if (c && typeof c === "object") a = c;
        else return { error: 12 };
      }
    } catch (d) {
      return { error: 8 };
    }
    if (a.schema !== "gcl") return { error: 4 };
    if (a.version !== 1) return { error: 5 };
    try {
      Jp(a);
    } catch (d) {
      return { error: 8 };
    }
    return { value: a, error: 0 };
  }
  function Jp(a) {
    if (a && typeof a === "object")
      if ("expires" in a && "value" in a)
        Date.now() > a.expires && ((a.value = null), (a.error = 9));
      else
        for (var b = l(Object.keys(a)), c = b.next(); !c.done; c = b.next())
          Jp(a[c.value]);
  }
  var Kp = /^\w+$/,
    Lp = /^[\w-]+$/,
    Mp = {},
    Np =
      ((Mp.aw = "_aw"),
      (Mp.dc = "_dc"),
      (Mp.gf = "_gf"),
      (Mp.gp = "_gp"),
      (Mp.gs = "_gs"),
      (Mp.ha = "_ha"),
      (Mp.ag = "_ag"),
      (Mp.gb = "_gb"),
      Mp);
  function Op() {
    return ["ad_storage", "ad_user_data"];
  }
  function Pp(a) {
    return !jb(12) || wk(a);
  }
  function Qp(a, b) {
    function c() {
      var d = Pp(b);
      d && a();
      return d;
    }
    Dk(function () {
      c() || Ek(c, b);
    }, b);
  }
  function Rp(a) {
    return Sp(a).map(function (b) {
      return b.T;
    });
  }
  function Tp(a) {
    return Up(a)
      .filter(function (b) {
        return b.T;
      })
      .map(function (b) {
        return b.T;
      });
  }
  function Up(a) {
    var b = Vp(a.prefix),
      c = Wp("gb", b),
      d = Wp("ag", b);
    if (!d || !c) return [];
    var e = function (k) {
        return function (m) {
          m.type = k;
          return m;
        };
      },
      f = Sp(c).map(e("gb")),
      g = (jb(7) ? Xp(d) : []).map(e("ag"));
    return f.concat(g).sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
  }
  function Yp(a, b, c, d, e, f) {
    var g = ob(a, function (k) {
      return k.T === c;
    });
    g
      ? (g.timestamp < d && ((g.timestamp = d), (g.xd = f)),
        (g.labels = Zp(g.labels || [], e || [])))
      : a.push({ version: b, T: c, timestamp: d, labels: e, xd: f });
  }
  function Xp(a) {
    for (
      var b = Ap(a) || [], c = [], d = l(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        k = g.k,
        m = g.b,
        n = $p(f);
      if (n) {
        var p = void 0;
        jb(13) && (p = f.u);
        Yp(c, "2", k, n, m || [], p);
      }
    }
    return c.sort(function (q, r) {
      return r.timestamp - q.timestamp;
    });
  }
  function Sp(a) {
    for (
      var b = [], c = jo(a, E.cookie, void 0, Op()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = aq(e.value);
      if (f != null) {
        var g = f;
        Yp(b, g.version, g.T, g.timestamp, g.labels);
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return bq(b);
  }
  function cq(a, b) {
    for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
      var f = e.value;
      c.includes(f) || c.push(f);
    }
    for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
      var m = k.value;
      c.includes(m) || c.push(m);
    }
    return c;
  }
  function dq(a, b) {
    var c = ob(a, function (d) {
      return d.T === b.T;
    });
    c
      ? (c.timestamp < b.timestamp &&
          ((c.timestamp = b.timestamp), (c.xd = b.xd)),
        (c.Ja = c.Ja
          ? b.Ja
            ? c.timestamp < b.timestamp
              ? b.Ja
              : c.Ja
            : c.Ja || 0
          : b.Ja || 0),
        (c.labels = cq(c.labels || [], b.labels || [])),
        (c.Mc = cq(c.Mc || [], b.Mc || [])))
      : a.push(b);
  }
  function eq() {
    var a = Hp();
    if (!a || a.error || !a.value || typeof a.value !== "object") return null;
    var b = a.value;
    try {
      if (!("value" in b && b.value) || typeof b.value !== "object")
        return null;
      var c = b.value,
        d = c.value;
      return d && d.match(Lp)
        ? {
            version: "",
            T: d,
            timestamp: Number(c.creationTimeMs) || 0,
            labels: [],
            Ja: c.linkDecorationSource || 0,
            Mc: [2],
          }
        : null;
    } catch (e) {
      return null;
    }
  }
  function fq(a) {
    for (
      var b = [], c = jo(a, E.cookie, void 0, Op()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = aq(e.value);
      f != null && ((f.xd = void 0), (f.Ja = 0), (f.Mc = [1]), dq(b, f));
    }
    var g = eq();
    g && ((g.xd = void 0), (g.Ja = g.Ja || 0), (g.Mc = g.Mc || [2]), dq(b, g));
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return bq(b);
  }
  function Zp(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function Vp(a) {
    return a && typeof a === "string" && a.match(Kp) ? a : "_gcl";
  }
  function gq(a, b, c) {
    var d = aj(a),
      e = { value: Vi(d, "query", !1, void 0, "gclid"), Ja: c ? 4 : 2 };
    if (b && !e.value) {
      var f = d.hash.replace("#", "");
      e.value = Ui(f, "gclid", !1);
      e.Ja = 3;
    }
    return e.value ? [e] : [];
  }
  function hq(a, b) {
    var c = jb(7),
      d = aj(a),
      e = Vi(d, "query", !1, void 0, "gclid"),
      f = Vi(d, "query", !1, void 0, "gclsrc"),
      g = Vi(d, "query", !1, void 0, "wbraid");
    g = Lb(g);
    var k;
    c && (k = Vi(d, "query", !1, void 0, "gbraid"));
    var m = Vi(d, "query", !1, void 0, "gad_source"),
      n = Vi(d, "query", !1, void 0, "dclid");
    if (b && (!e || !f || !g || (c && !k))) {
      var p = d.hash.replace("#", "");
      e = e || Ui(p, "gclid", !1);
      f = f || Ui(p, "gclsrc", !1);
      g = g || Ui(p, "wbraid", !1);
      c && (k = k || Ui(p, "gbraid", !1));
      m = m || Ui(p, "gad_source", !1);
    }
    return iq(e, f, n, g, k, m);
  }
  function jq() {
    return hq(C.location.href, !0);
  }
  function iq(a, b, c, d, e, f) {
    var g = {},
      k = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(Lp))
      switch (b) {
        case void 0:
          k(a, "aw");
          break;
        case "aw.ds":
          k(a, "aw");
          k(a, "dc");
          break;
        case "ds":
          k(a, "dc");
          break;
        case "3p.ds":
          k(a, "dc");
          break;
        case "gf":
          k(a, "gf");
          break;
        case "ha":
          k(a, "ha");
      }
    c && k(c, "dc");
    d !== void 0 && Lp.test(d) && ((g.wbraid = d), k(d, "gb"));
    jb(7) && e !== void 0 && Lp.test(e) && ((g.gbraid = e), k(e, "ag"));
    f !== void 0 && Lp.test(f) && ((g.gad_source = f), k(f, "gs"));
    return g;
  }
  function kq(a) {
    var b = jq();
    if (jb(6)) {
      for (
        var c = !0, d = l(Object.keys(b)), e = d.next();
        !e.done;
        e = d.next()
      )
        if (b[e.value] !== void 0) {
          c = !1;
          break;
        }
      c && ((b = hq(C.document.referrer, !1)), (b.gad_source = void 0));
    }
    lq(b, !1, a);
  }
  function mq(a) {
    kq(a);
    var b = gq(C.location.href, !0, !1);
    jb(6) && !b.length && (b = gq(C.document.referrer, !1, !0));
    if (b.length) {
      var c = b[0];
      a = a || {};
      var d = zb(),
        e = Eo(a, d, !0),
        f = Op(),
        g = function () {
          if (Pp(f)) {
            var k = {
                value: {
                  value: c.value,
                  creationTimeMs: d,
                  linkDecorationSource: c.Ja,
                },
                expires: Number(e.expires),
              },
              m = Ip();
            if (!m.error && m.value)
              a: if (((m.value.gclid = k), !m.error && m.value)) {
                var n = m.value,
                  p;
                try {
                  p = JSON.stringify(n);
                } catch (q) {
                  break a;
                }
                try {
                  C.localStorage.setItem("_gcl_ls", p);
                } catch (q) {}
              }
          }
        };
      Dk(function () {
        g();
        Pp(f) || Ek(g, f);
      }, f);
    }
  }
  function lq(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = Vp(c.prefix),
      g = d || zb(),
      k = Math.round(g / 1e3),
      m = Op(),
      n = !1,
      p = !1,
      q = function () {
        if (Pp(m)) {
          var r = Eo(c, g, !0);
          r.Ab = m;
          for (
            var t = function (G, U) {
                var L = Wp(G, f);
                L && (uo(L, U, r), G !== "gb" && (n = !0));
              },
              v = function (G) {
                var U = ["GCL", k, G];
                e.length > 0 && U.push(e.join("."));
                return U.join(".");
              },
              u = l(["aw", "dc", "gf", "ha", "gp"]),
              w = u.next();
            !w.done;
            w = u.next()
          ) {
            var x = w.value;
            a[x] && t(x, v(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              A = Wp("gb", f);
            (!b &&
              Sp(A).some(function (G) {
                return G.T === y && G.labels && G.labels.length > 0;
              })) ||
              t("gb", v(y));
          }
        }
        if (!p && jb(7) && a.gbraid && Pp("ad_storage") && ((p = !0), !n)) {
          var B = a.gbraid,
            D = Wp("ag", f);
          if (
            b ||
            !(jb(7) ? Xp(D) : []).some(function (G) {
              return G.T === B && G.labels && G.labels.length > 0;
            })
          ) {
            var H = {},
              J = ((H.k = B), (H.i = "" + k), (H.b = e), H);
            Cp(D, J, c, g);
          }
        }
        nq(a, f, g, c);
      };
    Dk(function () {
      q();
      Pp(m) || Ek(q, m);
    }, m);
  }
  function nq(a, b, c, d) {
    if (a.gad_source !== void 0 && Pp("ad_storage")) {
      var e = a.gad_source,
        f = Wp("gs", b);
      if (f) {
        var g = Math.round((zb() - (Nc() || 0)) / 1e3),
          k;
        if (jb(13)) {
          var m,
            n = String,
            p = C.location.hostname,
            q = C.location.pathname,
            r = (p = dj(p));
          r.split(".").length > 2 &&
            (r = r.replace(
              /^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./,
              ""
            ));
          p = r;
          q = dj(q);
          var t = q.split(";")[0];
          t = t.replace(/\/(ar|slp|web|index)?\/?$/, "");
          m = n(ho(("" + p + t).toLowerCase()));
          var v = {};
          k = ((v.k = e), (v.i = "" + g), (v.u = m), v);
        } else {
          var u = {};
          k = ((u.k = e), (u.i = "" + g), u);
        }
        Cp(f, k, d, c);
      }
    }
  }
  function oq(a, b) {
    var c = Uo(!0);
    Qp(function () {
      for (var d = Vp(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (Np[f] !== void 0) {
          var g = Wp(f, d),
            k = c[g];
          if (k) {
            var m = Math.min(pq(k), zb()),
              n;
            b: {
              for (
                var p = m, q = jo(g, E.cookie, void 0, Op()), r = 0;
                r < q.length;
                ++r
              )
                if (pq(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var t = Eo(b, m, !0);
              t.Ab = Op();
              uo(g, k, t);
            }
          }
        }
      }
      lq(iq(c.gclid, c.gclsrc), !1, b);
    }, Op());
  }
  function qq(a) {
    var b = [];
    jb(7) && b.push("ag");
    if (b.length !== 0) {
      var c = Uo(!0),
        d = Vp(a.prefix);
      Qp(
        function () {
          for (var e = 0; e < b.length; ++e) {
            var f = Wp(b[e], d);
            if (f) {
              var g = c[f];
              if (g) {
                var k = xp(g);
                if (k) {
                  var m = $p(k);
                  m || (m = zb());
                  var n;
                  a: {
                    for (var p = m, q = Ap(f), r = 0; r < q.length; ++r)
                      if ($p(q[r]) > p) {
                        n = !0;
                        break a;
                      }
                    n = !1;
                  }
                  if (n) break;
                  k.i = "" + Math.round(m / 1e3);
                  Cp(f, k, a, m);
                }
              }
            }
          }
        },
        ["ad_storage"]
      );
    }
  }
  function Wp(a, b) {
    var c = Np[a];
    if (c !== void 0) return b + c;
  }
  function pq(a) {
    return rq(a.split(".")).length !== 0
      ? (Number(a.split(".")[1]) || 0) * 1e3
      : 0;
  }
  function $p(a) {
    return a ? (Number(a.i) || 0) * 1e3 : 0;
  }
  function aq(a) {
    var b = rq(a.split("."));
    return b.length === 0
      ? null
      : {
          version: b[0],
          T: b[2],
          timestamp: (Number(b[1]) || 0) * 1e3,
          labels: b.slice(3),
        };
  }
  function rq(a) {
    return a.length < 3 ||
      (a[0] !== "GCL" && a[0] !== "1") ||
      !/^\d+$/.test(a[1]) ||
      !Lp.test(a[2])
      ? []
      : a;
  }
  function sq(a, b, c, d, e) {
    if (Array.isArray(b) && io(C)) {
      var f = Vp(e),
        g = function () {
          for (var k = {}, m = 0; m < a.length; ++m) {
            var n = Wp(a[m], f);
            if (n) {
              var p = jo(n, E.cookie, void 0, Op());
              p.length && (k[n] = p.sort()[p.length - 1]);
            }
          }
          return k;
        };
      Qp(function () {
        ap(g, b, c, d);
      }, Op());
    }
  }
  function tq(a, b, c, d) {
    if (Array.isArray(a) && io(C)) {
      var e = [];
      jb(7) && e.push("ag");
      if (e.length !== 0) {
        var f = Vp(d),
          g = function () {
            for (var k = {}, m = 0; m < e.length; ++m) {
              var n = Wp(e[m], f);
              if (!n) return {};
              var p = Ap(n);
              if (p.length) {
                var q = p.sort(function (r, t) {
                  return $p(t) - $p(r);
                })[0];
                k[n] = yp(q);
              }
            }
            return k;
          };
        Qp(
          function () {
            ap(g, a, b, c);
          },
          ["ad_storage"]
        );
      }
    }
  }
  function bq(a) {
    return a.filter(function (b) {
      return Lp.test(b.T);
    });
  }
  function uq(a, b) {
    if (io(C)) {
      for (var c = Vp(b.prefix), d = {}, e = 0; e < a.length; e++)
        Np[a[e]] && (d[a[e]] = Np[a[e]]);
      Qp(function () {
        sb(d, function (f, g) {
          var k = jo(c + g, E.cookie, void 0, Op());
          k.sort(function (t, v) {
            return pq(v) - pq(t);
          });
          if (k.length) {
            var m = k[0],
              n = pq(m),
              p = rq(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = rq(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            lq(q, !0, b, n, p);
          }
        });
      }, Op());
    }
  }
  function vq(a) {
    var b = [],
      c = [];
    jb(7) && (b.push("ag"), c.push("gbraid"));
    b.length !== 0 &&
      Qp(
        function () {
          for (var d = Vp(a.prefix), e = 0; e < b.length; ++e) {
            var f = Wp(b[e], d);
            if (!f) break;
            var g = Ap(f);
            if (g.length) {
              var k = g.sort(function (q, r) {
                  return $p(r) - $p(q);
                })[0],
                m = $p(k),
                n = k.b,
                p = {};
              p[c[e]] = k.k;
              lq(p, !0, a, m, n);
            }
          }
        },
        ["ad_storage"]
      );
  }
  function wq(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function xq(a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (Ak()) {
      var c = jq();
      if (wq(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.wbraid);
        jb(7) && b(d, "gbraid", c.gbraid);
        bp(function () {
          return d;
        }, 3);
        bp(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  }
  function yq(a) {
    if (!jb(1)) return null;
    var b = Uo(!0).gad_source;
    if (b != null) return (C.location.hash = ""), b;
    if (jb(2)) {
      var c = aj(C.location.href);
      b = Vi(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = jq();
      if (wq(d, a)) return "0";
    }
    return null;
  }
  function zq(a) {
    var b = yq(a);
    b != null &&
      bp(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function Aq(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        k = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1
        ? (a.push(0), e[k] || d.push(g))
        : a.push(1);
      e[k] = !0;
    }
    return d;
  }
  function Bq(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!Pp(Op())) return e;
    var f = Sp(a),
      g = Aq(e, f, b);
    if (g.length && !d)
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.T]
            .concat(n.labels || [], [b])
            .join("."),
          r = Eo(c, p, !0);
        r.Ab = Op();
        uo(a, q, r);
      }
    return e;
  }
  function Cq(a, b) {
    var c = [];
    b = b || {};
    var d = Up(b),
      e = Aq(c, d, a);
    if (e.length)
      for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
        var k = g.value,
          m = Vp(b.prefix),
          n = Wp(k.type, m);
        if (!n) break;
        var p = k,
          q = p.version,
          r = p.T,
          t = p.labels,
          v = p.timestamp,
          u = Math.round(v / 1e3);
        if (k.type === "ag") {
          var w = {},
            x = ((w.k = r), (w.i = "" + u), (w.b = (t || []).concat([a])), w);
          Cp(n, x, b, v);
        } else if (k.type === "gb") {
          var y = [q, u, r].concat(t || [], [a]).join("."),
            A = Eo(b, v, !0);
          A.Ab = Op();
          uo(n, y, A);
        }
      }
    return c;
  }
  function Dq(a, b) {
    var c = Vp(b),
      d = Wp(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? (jb(7) ? Xp(d) : []) : Sp(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Eq(a) {
    for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function Fq(a, b) {
    var c = Math.max(Dq("aw", a), Eq(Pp(Op()) ? Fp() : {})),
      d = Math.max(Dq("gb", a), Eq(Pp(Op()) ? Fp("_gac_gb", !0) : {}));
    jb(7) && b && (d = Math.max(d, Dq("ag", a)));
    return d > c;
  }
  var Gq = function (a, b) {
      var c = (ii.ads_pageview = ii.ads_pageview || {});
      if (c[a]) return !1;
      (b === void 0 ? 0 : b) || (c[a] = !0);
      return !0;
    },
    Qq = function (a, b, c, d, e) {
      var f = Vp(a.prefix);
      if (Gq(f, !0)) {
        var g = jq(),
          k = [],
          m = g.gclid,
          n = g.dclid,
          p = g.gclsrc || "aw",
          q = Hq(),
          r,
          t;
        if (O(70)) {
          var v = Iq();
          r = v.Je;
          t = v.Mj;
        } else r = Jq();
        !m ||
          (p !== "aw.ds" && p !== "aw" && p !== "ds" && p !== "3p.ds") ||
          k.push({ T: m, Ke: p });
        n && k.push({ T: n, Ke: "ds" });
        k.length === 2 && Q(147);
        k.length === 0 && g.wbraid && k.push({ T: g.wbraid, Ke: "gb" });
        k.length === 0 && p === "aw.ds" && k.push({ T: "", Ke: "aw.ds" });
        Kq(function () {
          var u = X(Lq());
          if (u) {
            hp(a);
            var w = [],
              x = u ? fp[ip(a.prefix)] : void 0;
            x && w.push("auid=" + x);
            if (X(T.g.N)) {
              e && w.push("userId=" + e);
              var y = eo(Zn.bh);
              if (y === void 0) co(Zn.eh, !0);
              else {
                var A = eo(Zn.we);
                w.push("ga_uid=" + A + "." + y);
              }
            }
            var B = E.referrer ? Vi(aj(E.referrer), "host") : "",
              D = u || !d ? k : [];
            D.length === 0 &&
              (Mq.test(B) || Nq.test(B)) &&
              D.push({ T: "", Ke: "" });
            if (D.length !== 0 || q || r !== void 0) {
              B && w.push("ref=" + encodeURIComponent(B));
              var H = Oq();
              w.push("url=" + encodeURIComponent(H));
              w.push("tft=" + zb());
              var J = Nc();
              J !== void 0 && w.push("tfd=" + Math.round(J));
              var G = $m(!0);
              w.push("frm=" + G);
              q && w.push("gad=1");
              r !== void 0 && w.push("gad_source=" + encodeURIComponent(r));
              t !== void 0 &&
                w.push("gad_source_src=" + encodeURIComponent(t.toString()));
              if (!c) {
                var U = {};
                c = Rl(Hl(new Gl(0), ((U[T.g.ja] = lm.j[T.g.ja]), U)));
              }
              w.push("gtm=" + Yn({ ra: b }));
              Fn() && w.push("gcs=" + Gn());
              w.push("gcd=" + Kn(c));
              Nn() && w.push("dma_cps=" + Ln());
              w.push("dma=" + Mn());
              En(c) ? w.push("npa=0") : w.push("npa=1");
              Vn() && w.push("_ng=1");
              jn(rn()) && w.push("tcfd=" + On());
              var L = yn();
              L && w.push("gdpr=" + L);
              var R = xn();
              R && w.push("gdpr_consent=" + R);
              O(18) && w.push("apve=" + (O(19) ? 1 : 0));
              O(88) && Uo(!1)._up && w.push("gtm_up=1");
              Bi.j && w.push("tag_exp=" + Bi.j);
              if (D.length > 0)
                for (var W = 0; W < D.length; W++) {
                  var ba = D[W],
                    S = ba.T,
                    P = ba.Ke;
                  if (!Pq(a.prefix, P + "." + S, x !== void 0)) {
                    var la =
                      "https://adservice.google.com/pagead/regclk?" +
                      w.join("&");
                    S !== ""
                      ? (la =
                          P === "gb"
                            ? la + "&wbraid=" + S
                            : la + "&gclid=" + S + "&gclsrc=" + P)
                      : P === "aw.ds" && (la += "&gclsrc=aw.ds");
                    Hc(la);
                  }
                }
              else if (
                (q || r !== void 0) &&
                !Pq(a.prefix, "gad", x !== void 0)
              ) {
                var na =
                  "https://adservice.google.com/pagead/regclk?" + w.join("&");
                Hc(na);
              }
            }
          }
        });
      }
    },
    Pq = function (a, b, c) {
      var d = (ii.joined_auid = ii.joined_auid || {}),
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    Iq = function () {
      var a = aj(C.location.href),
        b = void 0,
        c = void 0,
        d = Vi(a, "query", !1, void 0, "gad_source"),
        e = Rq(a);
      d && e
        ? ((b = d), (c = 1))
        : d
        ? ((b = d), (c = 2))
        : e && ((b = e), (c = 3));
      return { Je: b, Mj: c };
    },
    Rq = function (a) {
      var b = a.hash.replace("#", "").match(Sq);
      return b ? b[1] : void 0;
    },
    Jq = function () {
      var a = aj(C.location.href),
        b = Vi(a, "query", !1, void 0, "gad_source");
      b === void 0 && (b = Rq(a));
      return b;
    },
    Hq = function () {
      var a = aj(C.location.href).search.replace("?", "");
      return Ui(a, "gad", !1, !0) === "1";
    },
    Oq = function () {
      var a = $m(!1) === 1 ? C.top.location.href : C.location.href;
      return (a = a.replace(/[\?#].*$/, ""));
    },
    Tq = function (a) {
      var b = [];
      sb(a, function (c, d) {
        d = bq(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].T);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    Vq = function (a, b) {
      return Uq("dc", a, b);
    },
    Wq = function (a, b) {
      return Uq("aw", a, b);
    },
    Uq = function (a, b, c) {
      if (a === "aw" || a === "dc" || a === "gb") {
        var d = cj("gcl" + a);
        if (d) return d.split(".");
      }
      var e = Vp(b);
      if (e === "_gcl") {
        var f = !X(Lq()) && c,
          g;
        g = jq()[a] || [];
        if (g.length > 0) return f ? ["0"] : g;
      }
      var k = Wp(a, e);
      return k ? Rp(k) : [];
    },
    Kq = function (a) {
      var b = Lq();
      cl(function () {
        a();
        X(b) || Ek(a, b);
      }, b);
    },
    Lq = function () {
      return [T.g.O, T.g.N];
    },
    Mq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Nq = /^www.googleadservices.com$/,
    Sq = /^gad_source[_=](\d+)$/;
  function Xq() {
    ii.dedupe_gclid || (ii.dedupe_gclid = Bo());
    return ii.dedupe_gclid;
  }
  var Yq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Zq = /^www.googleadservices.com$/;
  function $q(a) {
    a || (a = ar());
    return a.jn
      ? !1
      : a.Vl || a.Wl || a.Zl || a.Xl || a.Ah || a.Je || a.Jl || a.Yl || a.Nl
      ? !0
      : !1;
  }
  function ar() {
    var a = {},
      b = Uo(!0);
    a.jn = !!b._up;
    var c = jq();
    a.Vl = c.aw !== void 0;
    a.Wl = c.dc !== void 0;
    a.Zl = c.wbraid !== void 0;
    a.Xl = c.gbraid !== void 0;
    a.Yl = c.gclsrc === "aw.ds";
    var d = aj(C.location.href),
      e = Vi(d, "query", !1, void 0, "gad");
    a.Ah = e !== void 0;
    if (!a.Ah) {
      var f = d.hash.replace("#", ""),
        g = Ui(f, "gad", !1);
      a.Ah = g !== void 0;
    }
    a.Je = Iq().Je;
    var k = E.referrer ? Vi(aj(E.referrer), "host") : "";
    a.Nl = Yq.test(k);
    a.Jl = Zq.test(k);
    return a;
  }
  var br = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    cr = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    dr = /^\d+\.fls\.doubleclick\.net$/,
    er = /;gac=([^;?]+)/,
    fr = /;gacgb=([^;?]+)/;
  function gr(a, b) {
    if (dr.test(E.location.host)) {
      var c = E.location.href.match(b);
      return c && c.length === 2 && c[1].match(br)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = l(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
        k.push(m[n].T);
      d.push(g + ":" + k.join(","));
    }
    return d.length > 0 ? d.join(";") : "";
  }
  function hr(a, b, c) {
    for (
      var d = Pp(Op()) ? Fp("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = l(Object.keys(d)),
        k = g.next();
      !k.done;
      k = g.next()
    ) {
      var m = k.value,
        n = Bq("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (n.length !== 0 &&
          n.some(function (p) {
            return p === 1;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { Il: f ? e.join(";") : "", Hl: gr(d, fr) };
  }
  function ir(a) {
    var b = E.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(cr) ? b[1] : void 0;
  }
  function jr(a) {
    var b = jb(13),
      c = {},
      d,
      e,
      f;
    dr.test(E.location.host) &&
      ((d = ir("gclgs")), (e = ir("gclst")), b && (f = ir("gcllp")));
    if (d && e && (!b || f)) (c.vh = d), (c.xh = e), (c.wh = f);
    else {
      var g = zb(),
        k = Xp((a || "_gcl") + "_gs"),
        m = k.map(function (q) {
          return q.T;
        }),
        n = k.map(function (q) {
          return g - q.timestamp;
        }),
        p = [];
      b &&
        (p = k.map(function (q) {
          return q.xd;
        }));
      m.length > 0 &&
        n.length > 0 &&
        (!b || p.length > 0) &&
        ((c.vh = m.join(".")),
        (c.xh = n.join(".")),
        b && p.length > 0 && (c.wh = p.join(".")));
    }
    return c;
  }
  function kr(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (dr.test(E.location.host)) {
      var e = ir(c);
      if (e) return [{ T: e }];
    } else {
      if (b === "gclid") {
        var f = (a || "_gcl") + "_aw";
        return d ? fq(f) : Sp(f);
      }
      if (b === "wbraid") return Sp((a || "_gcl") + "_gb");
      if (b === "braids") return Up({ prefix: a });
    }
    return [];
  }
  function lr(a) {
    return kr(a, "gclid", "gclaw")
      .map(function (b) {
        return b.T;
      })
      .join(".");
  }
  function mr(a) {
    var b = kr(a, "gclid", "gclaw", !0),
      c = b
        .map(function (f) {
          return f.T;
        })
        .join("."),
      d = b
        .map(function (f) {
          return f.Ja || 0;
        })
        .join("."),
      e = b
        .map(function (f) {
          for (
            var g = 0, k = l(f.Mc || []), m = k.next();
            !m.done;
            m = k.next()
          ) {
            var n = m.value;
            n === 1 && (g |= 1);
            n === 2 && (g |= 2);
          }
          return g.toString();
        })
        .join(".");
    return { T: c, Nj: d, Oj: e };
  }
  function nr(a) {
    return kr(a, "wbraid", "gclgb")
      .map(function (b) {
        return b.T;
      })
      .join(".");
  }
  function or(a) {
    return kr(a, "braids", "gclgb")
      .map(function (b) {
        return b.T;
      })
      .join(".");
  }
  function pr(a, b) {
    return dr.test(E.location.host) ? !(ir("gclaw") || ir("gac")) : Fq(a, b);
  }
  function qr(a, b, c) {
    var d;
    d = c ? Cq(a, b) : Bq(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return d.length === 0 ||
      d.every(function (e) {
        return e === 0;
      })
      ? ""
      : d.join(".");
  }
  function rr() {
    var a = C.__uspapi;
    if (lb(a)) {
      var b = "";
      try {
        a("getUSPData", 1, function (c, d) {
          if (d && c) {
            var e = c.uspString;
            e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e);
          }
        });
      } catch (c) {}
      return b;
    }
  }
  var vr = function (a) {
      if (a.eventName === T.g.aa && a.metadata.hit_type === "page_view")
        if (O(19)) {
          a.metadata.redact_click_ids =
            V(a.m, T.g.da) != null &&
            V(a.m, T.g.da) !== !1 &&
            !X([T.g.O, T.g.N]);
          var b = sr(a),
            c = V(a.m, T.g.na) !== !1;
          c || (a.j[T.g.Ii] = "1");
          var d = Vp(b.prefix),
            e = a.metadata.is_server_side_destination;
          if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
            var f = V(a.m, T.g.Wa),
              g = V(a.m, T.g.oa) || {};
            tr({ pd: c, yd: g, Dd: f, bc: b });
            if (!e && !Gq(d)) {
              a.isAborted = !0;
              return;
            }
          }
          if (e) a.isAborted = !0;
          else {
            a.j[T.g.uc] = T.g.Sb;
            if (a.metadata.consent_updated)
              (a.j[T.g.uc] = T.g.vk), (a.j[T.g.Qb] = "1");
            else if (a.metadata.user_id_updated) a.j[T.g.uc] = T.g.Ak;
            else {
              var k = jq();
              a.j[T.g.Id] = k.gclid;
              a.j[T.g.Qd] = k.dclid;
              a.j[T.g.Di] = k.gclsrc;
              a.j[T.g.Id] ||
                a.j[T.g.Qd] ||
                ((a.j[T.g.kf] = k.wbraid), (a.j[T.g.lg] = k.gbraid));
              a.j[T.g.Aa] = E.referrer ? Vi(aj(E.referrer), "host") : "";
              a.j[T.g.qa] = Oq();
              O(22) && (a.j[T.g.Za] = ur());
              var m;
              if (O(70)) {
                var n = Iq();
                m = n.Je;
                a.j[T.g.Ci] = n.Mj;
              } else m = Jq();
              a.j[T.g.Bi] = m;
              a.j[T.g.Hb] = $m(!0);
              var p = ar();
              $q(p) && (a.j[T.g.ed] = "1");
              a.j[T.g.Fi] = Xq();
              Uo(!1)._up === "1" && (a.j[T.g.Vi] = "1");
            }
            Gk = !0;
            var q = X([T.g.O, T.g.N]);
            c && q && (hp(b), (a.j[T.g.Eb] = fp[ip(b.prefix)]));
            a.j[T.g.kb] = void 0;
            a.j[T.g.Ua] = void 0;
            var r = O(73);
            if (!a.j[T.g.Id] && !a.j[T.g.Qd] && pr(d, r)) {
              var t = r ? Tp(b) : Rp(d + "_gb");
              t.length > 0 && (a.j[T.g.kb] = t.join("."));
            } else if (!a.j[T.g.kf] && q) {
              var v = Rp(d + "_aw");
              v.length > 0 && (a.j[T.g.Ua] = v.join("."));
            }
            a.m.isGtmEvent && (a.m.j[T.g.ja] = lm.j[T.g.ja]);
            En(a.m) ? (a.j[T.g.Mb] = !1) : (a.j[T.g.Mb] = !0);
            a.metadata.add_tag_timing = !0;
            var u = rr();
            u !== void 0 && (a.j[T.g.je] = u || "error");
            var w = yn();
            w && (a.j[T.g.xc] = w);
            var x = xn();
            x && (a.j[T.g.Bc] = x);
            a.metadata.speculative = !1;
          }
        } else a.isAborted = !0;
    },
    sr = function (a) {
      var b = {
        prefix: V(a.m, T.g.Xa) || V(a.m, T.g.Na),
        domain: V(a.m, T.g.Va),
        zb: V(a.m, T.g.Ma),
        flags: V(a.m, T.g.Ya),
      };
      a.m.isGtmEvent && (b.path = V(a.m, T.g.Fb));
      return b;
    },
    wr = function (a, b) {
      var c, d, e, f, g, k, m, n;
      c = a.pd;
      d = a.yd;
      e = a.Dd;
      f = a.ra;
      g = a.m;
      k = a.zd;
      m = a.Kn;
      n = a.lk;
      tr({ pd: c, yd: d, Dd: e, bc: b });
      c &&
        m !== !0 &&
        (n != null ? (n = String(n)) : (n = void 0), Qq(b, f, g, k, n));
    },
    tr = function (a) {
      var b, c, d, e;
      b = a.pd;
      c = a.yd;
      d = a.Dd;
      e = a.bc;
      b &&
        (dp(c[T.g.Ac], !!c[T.g.W]) && (oq(xr, e), qq(e), pp(e)),
        O(82) ? mq(e) : kq(e),
        uq(xr, e),
        vq(e));
      c[T.g.W] &&
        (sq(xr, c[T.g.W], c[T.g.Jb], !!c[T.g.tb], e.prefix),
        tq(c[T.g.W], c[T.g.Jb], !!c[T.g.tb], e.prefix),
        qp(ip(e.prefix), c[T.g.W], c[T.g.Jb], !!c[T.g.tb], e),
        qp("FPAU", c[T.g.W], c[T.g.Jb], !!c[T.g.tb], e));
      d && xq(yr);
      zq(yr);
    },
    zr = function (a, b, c, d) {
      var e, f, g;
      e = a.mk;
      f = a.callback;
      g = a.Sj;
      if (typeof f === "function")
        if (e === T.g.Ua && g === void 0) {
          var k = d(b.prefix, c);
          k.length === 0 ? f(void 0) : k.length === 1 ? f(k[0]) : f(k);
        } else e === T.g.Eb ? (Q(65), hp(b, !1), f(fp[ip(b.prefix)])) : f(g);
    },
    xr = ["aw", "dc", "gb"],
    yr = ["aw", "dc", "gb", "ag"];
  function Ar(a) {
    var b = V(a.m, T.g.Ib),
      c = V(a.m, T.g.Vb);
    b && !c
      ? (a.eventName !== T.g.aa && a.eventName !== T.g.Nc && Q(131),
        (a.isAborted = !0))
      : !b && c && (Q(132), (a.isAborted = !0));
  }
  function Br(a) {
    var b = X(T.g.O) ? ii.pscdl : "denied";
    b != null && (a.j[T.g.qf] = b);
  }
  function Cr(a) {
    var b = $m(!0);
    a.j[T.g.Hb] = b;
  }
  function Dr(a) {
    Vn() && (a.j[T.g.yc] = 1);
  }
  function ur() {
    var a = E.title;
    if (a === void 0 || a === "") return "";
    var b = function (d) {
      try {
        return decodeURIComponent(d), !0;
      } catch (e) {
        return !1;
      }
    };
    a = encodeURIComponent(a);
    for (var c = 256; c > 0 && !b(a.substring(0, c)); ) c--;
    return decodeURIComponent(a.substring(0, c));
  }
  function Er(a) {
    var b = V(a.m, T.g.Ma);
    a.j[T.g.ne] || (a.j[T.g.ne] = {});
    a.j[T.g.ne].ce = b;
  }
  var Ir = function (a, b) {
      var c = a && !X([T.g.O, T.g.N]);
      return b && c ? "0" : b;
    },
    Kr = function (a) {
      var b = a.bc === void 0 ? {} : a.bc,
        c = Vp(b.prefix);
      Gq(c) &&
        cl(
          function () {
            function d(x) {
              var y = X([T.g.O, T.g.N]),
                A = m && y,
                B = b.prefix || "_gcl",
                D;
              ii.reported_gclid || (ii.reported_gclid = {});
              D = ii.reported_gclid;
              var H =
                (A ? B : "") +
                "." +
                (X(T.g.O) ? 1 : 0) +
                "." +
                (X(T.g.N) ? 1 : 0);
              if (!D[H]) {
                D[H] = !0;
                var J = {},
                  G = function (S, P) {
                    if (P || typeof P === "number") J[S] = P.toString();
                  },
                  U = "https://www.google.com";
                Fn() && (G("gcs", Gn()), x && G("gcu", 1));
                G("gcd", Kn(k));
                Bi.j && G("tag_exp", Bi.j);
                if (Ak()) {
                  G("rnd", Xq());
                  if ((!p || (q && q !== "aw.ds")) && y) {
                    var L = Rp(B + "_aw");
                    G("gclaw", L.join("."));
                  }
                  G("url", String(C.location).split(/[?#]/)[0]);
                  G("dclid", Ir(f, r));
                  y || (U = "https://pagead2.googlesyndication.com");
                }
                Nn() && G("dma_cps", Ln());
                G("dma", Mn());
                G("npa", En(k) ? 0 : 1);
                Vn() && G("_ng", 1);
                jn(rn()) && G("tcfd", On());
                G("gdpr_consent", xn() || "");
                G("gdpr", yn() || "");
                Uo(!1)._up === "1" && G("gtm_up", 1);
                G("gclid", Ir(f, p));
                G("gclsrc", q);
                if (
                  !(
                    J.hasOwnProperty("gclid") ||
                    J.hasOwnProperty("dclid") ||
                    J.hasOwnProperty("gclaw")
                  ) &&
                  (G("gbraid", Ir(f, t)),
                  !J.hasOwnProperty("gbraid") && Ak() && y)
                ) {
                  var R = Rp(B + "_gb");
                  R.length > 0 && G("gclgb", R.join("."));
                }
                G(
                  "gtm",
                  Yn({ ra: k.eventMetadata.source_canonical_id, Of: !g })
                );
                m &&
                  X(T.g.O) &&
                  (hp(b || {}), A && G("auid", fp[ip(b.prefix)] || ""));
                Jr || (a.Kj && G("did", a.Kj));
                a.yh && G("gdid", a.yh);
                a.qh && G("edid", a.qh);
                a.Bh !== void 0 && G("frm", a.Bh);
                O(18) && G("apve", O(19) ? 1 : 0);
                var W = Object.keys(J).map(function (S) {
                    return S + "=" + encodeURIComponent(J[S]);
                  }),
                  ba = U + "/pagead/landing?" + W.join("&");
                Hc(ba);
              }
            }
            var e = !!a.lh,
              f = !!a.zd,
              g = a.targetId,
              k = a.m,
              m = a.Tf === void 0 ? !0 : a.Tf,
              n = jq(),
              p = n.gclid || "",
              q = n.gclsrc,
              r = n.dclid || "",
              t = n.wbraid || "",
              v = !e && ((!p || (q && q !== "aw.ds") ? !1 : !0) || t),
              u = Ak();
            if (v || u)
              if (u) {
                var w = [T.g.O, T.g.N, T.g.sa];
                d();
                (function () {
                  X(w) ||
                    bl(function (x) {
                      d(!0, x.consentEventId, x.consentPriorityId);
                    }, w);
                })();
              } else d();
          },
          [T.g.O, T.g.N, T.g.sa]
        );
    },
    Jr = !1;
  function Lr(a, b, c, d) {
    var e = xc(),
      f;
    if (e === 1)
      a: {
        var g = ui;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = E.getElementsByTagName("script"),
            q = 0;
          q < p.length && q < 100;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (r.indexOf(m) === 0) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf(k) === 0 && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (f === 2 || d || "http:" !== C.location.protocol ? a : b) + c;
  }
  function Xr(a) {
    return {
      getDestinationId: function () {
        return a.target.destinationId;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.j[b];
      },
      setHitData: function (b, c) {
        a.j[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        a.j[b] === void 0 && (a.j[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return V(a.m, b);
      },
      Sf: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.j);
      },
    };
  }
  var Zr = function (a) {
      var b = Yr[a.target.destinationId];
      if (!a.isAborted && b)
        for (var c = Xr(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    $r = function (a, b) {
      var c = Yr[a];
      c || (c = Yr[a] = []);
      c.push(b);
    },
    Yr = {};
  var ds,
    es = !1;
  function fs() {
    es = !0;
    (ds = productSettings), (productSettings = void 0);
    ds = ds || {};
  }
  function gs(a) {
    es || fs();
    return ds[a];
  }
  function hs() {
    var a = C.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function is(a) {
    if (E.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !C.getComputedStyle)
      return !0;
    var c = C.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d; ) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        k >= 0 &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) && (e = C.getComputedStyle(d, null));
    }
    return !1;
  }
  var ks = function (a) {
      var b = js(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0;
    },
    js = function () {
      var a = E.body,
        b = E.documentElement || (a && a.parentElement),
        c,
        d;
      if (E.compatMode && E.compatMode !== "BackCompat")
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    };
  var ns = function (a) {
      if (ls) {
        if (a >= 0 && a < ms.length && ms[a]) {
          var b;
          (b = ms[a]) == null || b.disconnect();
          ms[a] = void 0;
        }
      } else C.clearInterval(a);
    },
    qs = function (a, b, c) {
      for (var d = 0; d < c.length; d++)
        c[d] > 1 ? (c[d] = 1) : c[d] < 0 && (c[d] = 0);
      if (ls) {
        var e = !1;
        F(function () {
          e || os(a, b, c)();
        });
        return ps(
          function (f) {
            e = !0;
            for (var g = { Oe: 0 }; g.Oe < f.length; g = { Oe: g.Oe }, g.Oe++)
              F(
                (function (k) {
                  return function () {
                    a(f[k.Oe]);
                  };
                })(g)
              );
          },
          b,
          c
        );
      }
      return C.setInterval(os(a, b, c), 1e3);
    },
    os = function (a, b, c) {
      function d(k, m) {
        var n = { top: 0, bottom: 0, right: 0, left: 0, width: 0, height: 0 },
          p = {
            boundingClientRect: k.getBoundingClientRect(),
            intersectionRatio: m,
            intersectionRect: n,
            isIntersecting: m > 0,
            rootBounds: n,
            target: k,
            time: zb(),
          };
        F(function () {
          a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (k, m) {
        return k - m;
      });
      return function () {
        for (var k = 0; k < b.length; k++) {
          var m = ks(b[k]);
          if (m > e[k])
            for (; f[k] < c.length - 1 && m >= c[f[k] + 1]; )
              d(b[k], m), f[k]++;
          else if (m < e[k])
            for (; f[k] >= 0 && m <= c[f[k]]; ) d(b[k], m), f[k]--;
          e[k] = m;
        }
      };
    },
    ps = function (a, b, c) {
      for (
        var d = new C.IntersectionObserver(a, { threshold: c }), e = 0;
        e < b.length;
        e++
      )
        d.observe(b[e]);
      for (var f = 0; f < ms.length; f++) if (!ms[f]) return (ms[f] = d), f;
      return ms.push(d) - 1;
    },
    ms = [],
    ls = !(!C.IntersectionObserver || !C.IntersectionObserverEntry);
  var ss = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.X.length + ":" + rs.test(a.X)
      );
    },
    Gs = function (a) {
      a = a || { vd: !0, wd: !0, Zf: void 0 };
      a.wb = a.wb || { email: !0, phone: !1, address: !1 };
      var b = ts(a),
        c = us[b];
      if (c && zb() - c.timestamp < 200) return c.result;
      var d = vs(),
        e = d.status,
        f = [],
        g,
        k,
        m = [];
      if (!O(27)) {
        if (a.wb && a.wb.email) {
          var n = ws(d.elements);
          f = xs(n, a && a.Ee);
          g = ys(f);
          n.length > 10 && (e = "3");
        }
        !a.Zf && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(zs(f[p], !!a.vd, !!a.wd));
        m = m.slice(0, 10);
      } else if (a.wb) {
      }
      g && (k = zs(g, !!a.vd, !!a.wd));
      var D = { elements: m, Rh: k, status: e };
      us[b] = { timestamp: zb(), result: D };
      return D;
    },
    Fs = function (a, b, c) {
      var d = a.element,
        e = { X: a.X, type: a.ma, tagName: d.tagName };
      b && (e.querySelector = Hs(d));
      c && (e.isVisible = !is(d));
      return e;
    },
    zs = function (a, b, c) {
      return Fs({ element: a.element, X: a.X, ma: Es.jc }, b, c);
    },
    ts = function (a) {
      var b = !(a == null || !a.vd) + "." + !(a == null || !a.wd);
      a && a.Ee && a.Ee.length && (b += "." + a.Ee.join("."));
      a &&
        a.wb &&
        (b += "." + a.wb.email + "." + a.wb.phone + "." + a.wb.address);
      return b;
    },
    ys = function (a) {
      if (a.length !== 0) {
        var b;
        b = Is(a, function (c) {
          return !Js.test(c.X);
        });
        b = Is(b, function (c) {
          return c.element.tagName.toUpperCase() === "INPUT";
        });
        b = Is(b, function (c) {
          return !is(c.element);
        });
        return b[0];
      }
    },
    xs = function (a, b) {
      if (!b || b.length === 0) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && lh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    Is = function (a, b) {
      if (a.length <= 1) return a;
      var c = a.filter(b);
      return c.length === 0 ? a : c;
    },
    Hs = function (a) {
      var b;
      if (a === E.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = Hs(a.parentElement) + ">:nth-child(" + e.toString() + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    ws = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
        if (e) {
          var f = e.match(Ks);
          if (f) {
            var g = f[0],
              k;
            if (C.location) {
              var m = Xi(C.location, "host", !0);
              k = g.toLowerCase().indexOf(m) >= 0;
            } else k = !1;
            k || b.push({ element: d, X: g });
          }
        }
      }
      return b;
    },
    vs = function () {
      var a = [],
        b = E.body;
      if (!b) return { elements: a, status: "4" };
      for (
        var c = b.querySelectorAll("*"), d = 0;
        d < c.length && d < 1e4;
        d++
      ) {
        var e = c[d];
        if (
          !(Ls.indexOf(e.tagName.toUpperCase()) >= 0) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && g < 1e4; g++)
            if (!(Ms.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
              f = !0;
              break;
            }
          (!f || (O(27) && Ns.indexOf(e.tagName) !== -1)) && a.push(e);
        }
      }
      return { elements: a, status: c.length > 1e4 ? "2" : "1" };
    },
    Os = !1;
  var Ks = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    rs = /@(gmail|googlemail)\./i,
    Js = /support|noreply/i,
    Ls = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    Ms = ["BR"],
    Es = { jc: "1", te: "2", me: "3", pe: "4", fg: "5", Yg: "6", Nf: "7" },
    us = {},
    Ns = ["INPUT", "SELECT"];
  var Jf;
  var it = Number("") || 5,
    jt = Number("") || 50,
    kt = pb();
  var pt = {
    fl: Number("") || 500,
    Ok: Number("") || 5e3,
    pj: Number("20") || 10,
    uk: Number("") || 5e3,
  };
  function qt(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var rt = function (a, b) {
    var c;
    return c;
  };
  var st;
  function zt() {
    var a = Mf(Jf.j, "", function () {
      return {};
    });
    try {
      return a("internal_sw_allowed"), !0;
    } catch (b) {
      return !1;
    }
  }
  function At(a, b) {}
  var Bt = function (a, b, c, d) {};
  function Ct(a, b, c, d) {}
  function Dt(a, b, c, d) {}
  var Et = void 0;
  function Ft(a) {
    var b = [];
    return b;
  }
  var Gt = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128
        ? (b[c++] = e)
        : (e < 2048
            ? (b[c++] = (e >> 6) | 192)
            : ((e & 64512) == 55296 &&
              d + 1 < a.length &&
              (a.charCodeAt(d + 1) & 64512) == 56320
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  Nm();
  Qm() || Km("iPod");
  Km("iPad");
  !Km("Android") || Om() || Nm() || Mm() || Km("Silk");
  Om();
  !Km("Safari") ||
    Om() ||
    (Lm() ? 0 : Km("Coast")) ||
    Mm() ||
    (Lm() ? 0 : Km("Edge")) ||
    (Lm() ? Jm("Microsoft Edge") : Km("Edg/")) ||
    (Lm() ? Jm("Opera") : Km("OPR")) ||
    Nm() ||
    Km("Silk") ||
    Km("Android") ||
    Rm();
  var Ht = {},
    It = null,
    Jt = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!It) {
        It = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          m < 5;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          Ht[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            It[q] === void 0 && (It[q] = p);
          }
        }
      }
      for (
        var r = Ht[f],
          t = Array(Math.floor(b.length / 3)),
          v = r[64] || "",
          u = 0,
          w = 0;
        u < b.length - 2;
        u += 3
      ) {
        var x = b[u],
          y = b[u + 1],
          A = b[u + 2],
          B = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          H = r[((y & 15) << 2) | (A >> 6)],
          J = r[A & 63];
        t[w++] = "" + B + D + H + J;
      }
      var G = 0,
        U = v;
      switch (b.length - u) {
        case 2:
          (G = b[u + 1]), (U = r[(G & 15) << 2] || v);
        case 1:
          var L = b[u];
          t[w] = "" + r[L >> 2] + r[((L & 3) << 4) | (G >> 4)] + U + v;
      }
      return t.join("");
    };
  var Kt =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Lt(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function Mt() {
    var a = C.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function Nt() {
    var a, b;
    return (b = (a = C.google_tag_data) == null ? void 0 : a.uach_promise) !=
      null
      ? b
      : null;
  }
  function Ot(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function Pt() {
    var a = C;
    if (!Ot(a)) return null;
    var b = Lt(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(Kt)
      .then(function (d) {
        b.uach != null || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var Qt = function (a, b) {
      a &&
        ((b.j[T.g.Ef] = a.architecture),
        (b.j[T.g.Ff] = a.bitness),
        a.fullVersionList &&
          (b.j[T.g.Gf] = a.fullVersionList
            .map(function (c) {
              return (
                encodeURIComponent(c.brand || "") +
                ";" +
                encodeURIComponent(c.version || "")
              );
            })
            .join("|")),
        (b.j[T.g.Hf] = a.mobile ? "1" : "0"),
        (b.j[T.g.If] = a.model),
        (b.j[T.g.Jf] = a.platform),
        (b.j[T.g.Kf] = a.platformVersion),
        (b.j[T.g.Lf] = a.wow64 ? "1" : "0"));
    },
    St = function (a) {
      var b = Rt.hn,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = Mt();
      if (d) c(d);
      else {
        var e = Nt();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = C.setTimeout(function () {
            c.Qe || ((c.Qe = !0), Q(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.Qe || ((c.Qe = !0), Q(104), C.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Qe || ((c.Qe = !0), Q(105), C.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    Ut = function () {
      if (Ot(C) && ((Tt = zb()), !Nt())) {
        var a = Pt();
        a &&
          (a.then(function () {
            Q(95);
          }),
          a.catch(function () {
            Q(96);
          }));
      }
    },
    Tt;
  function Vt(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
  }
  function Wt() {
    return Vt("join-ad-interest-group") && lb(nc.joinAdInterestGroup);
  }
  function Xt(a, b) {
    var c = ib[3] === void 0 ? 1 : ib[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (c === 1) {
        var f = E.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(E.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = E.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var k = g,
      m =
        ((k == null ? void 0 : k.length) || 0) >=
        (ib[2] === void 0 ? 50 : ib[2]),
      n;
    if ((n = e.length >= 1)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p !== void 0 && zb() - p < (ib[1] === void 0 ? 6e4 : ib[1])
        ? (eb("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (c === 1)
        if (e.length >= 1) Yt(e[0]);
        else {
          if (m) {
            eb("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? Yt(e[0]) : m && Yt(k[0]);
      yc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: zb() }
      );
    }
  }
  function Yt(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function Zt() {
    return "https://td.doubleclick.net";
  }
  var Pu = function (a, b) {
      var c = {},
        d = function (f, g) {
          var k;
          k = g === !0 ? "1" : g === !1 ? "0" : encodeURIComponent(String(g));
          c[f] = k;
        };
      sb(a.j, function (f, g) {
        var k = Ou[f];
        k &&
          g !== void 0 &&
          g !== "" &&
          (!a.metadata.redact_click_ids ||
            (f !== T.g.Id && f !== T.g.Qd && f !== T.g.kf && f !== T.g.lg) ||
            (g = "0"),
          d(k, g));
      });
      d("gtm", Yn({ ra: a.metadata.source_canonical_id }));
      Fn() && d("gcs", Gn());
      d("gcd", Kn(a.m));
      Nn() && d("dma_cps", Ln());
      d("dma", Mn());
      jn(rn()) && d("tcfd", On());
      Bi.j && d("tag_exp", Bi.j);
      if (a.metadata.add_tag_timing) {
        d("tft", zb());
        var e = Nc();
        e !== void 0 && d("tfd", Math.round(e));
      }
      O(18) && d("apve", O(19) ? "1" : "0");
      O(20) && d("apvf", Lc() ? (O(21) ? "f" : "sb") : "nf");
      b(c);
    },
    Qu = function (a) {
      Pu(a, function (b) {
        if (a.metadata.hit_type === "page_view") {
          var c = [];
          sb(b, function (e, f) {
            c.push(e + "=" + f);
          });
          var d =
            jj(
              X([T.g.O, T.g.N])
                ? "https://www.google.com"
                : "https://pagead2.googlesyndication.com",
              !0
            ) +
            "/ccm/collect?" +
            c.join("&");
          O(20) && O(21) && Lc() ? Kc(d, void 0, { noFallback: !0 }) : Hc(d);
          if (lb(a.m.onSuccess)) a.m.onSuccess();
        }
      });
    },
    Ru = {},
    Ou =
      ((Ru[T.g.Qb] = "gcu"),
      (Ru[T.g.kb] = "gclgb"),
      (Ru[T.g.Ua] = "gclaw"),
      (Ru[T.g.Bi] = "gad_source"),
      (Ru[T.g.Ci] = "gad_source_src"),
      (Ru[T.g.Id] = "gclid"),
      (Ru[T.g.Di] = "gclsrc"),
      (Ru[T.g.lg] = "gbraid"),
      (Ru[T.g.kf] = "wbraid"),
      (Ru[T.g.Eb] = "auid"),
      (Ru[T.g.Fi] = "rnd"),
      (Ru[T.g.Ii] = "ncl"),
      (Ru[T.g.og] = "gcldc"),
      (Ru[T.g.Qd] = "dclid"),
      (Ru[T.g.pb] = "edid"),
      (Ru[T.g.uc] = "en"),
      (Ru[T.g.xc] = "gdpr"),
      (Ru[T.g.sb] = "gdid"),
      (Ru[T.g.yc] = "_ng"),
      (Ru[T.g.Vi] = "gtm_up"),
      (Ru[T.g.Hb] = "frm"),
      (Ru[T.g.ed] = "lps"),
      (Ru[T.g.de] = "did"),
      (Ru[T.g.qa] = "dl"),
      (Ru[T.g.Aa] = "dr"),
      (Ru[T.g.Za] = "dt"),
      (Ru[T.g.Bf] = "ga_uid"),
      (Ru[T.g.Bc] = "gdpr_consent"),
      (Ru[T.g.ya] = "uid"),
      (Ru[T.g.je] = "us_privacy"),
      (Ru[T.g.Mb] = "npa"),
      Ru);
  var Su = {
    J: {
      ei: "ads_conversion_hit",
      Ed: "container_execute_start",
      hi: "container_setup_end",
      dg: "container_setup_start",
      fi: "container_blocking_end",
      gi: "container_execute_end",
      ii: "container_yield_end",
      eg: "container_yield_start",
      ej: "event_execute_end",
      dj: "event_evaluation_end",
      Vg: "event_evaluation_start",
      fj: "event_setup_end",
      ke: "event_setup_start",
      ij: "ga4_conversion_hit",
      se: "page_load",
      yn: "pageview",
      Zb: "snippet_load",
      Bj: "tag_callback_error",
      Cj: "tag_callback_failure",
      Dj: "tag_callback_success",
      Ej: "tag_execute_end",
      nd: "tag_execute_start",
    },
  };
  function Tu() {
    function a(c, d) {
      var e = fb(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var Uu = !1;
  function Cv(a, b) {}
  function Dv(a, b) {}
  function Ev(a, b) {}
  function Fv(a, b) {}
  function Gv() {
    var a = {};
    return a;
  }
  function uv(a) {
    a = a === void 0 ? !0 : a;
    var b = {};
    return b;
  }
  function Hv() {}
  function Iv(a, b) {}
  function Jv(a, b, c) {}
  function Kv() {}
  function Lv(a, b) {
    var c = C,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  function Mv(a, b, c, d) {
    var e = Vm(a, "fmt");
    if (b) {
      var f = Vm(a, "random"),
        g = Vm(a, "label") || "";
      if (!f) return !1;
      var k = Jt(
        decodeURIComponent(g.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(f.replace(/\+/g, " "))
      );
      if (!Lv(k, b)) return !1;
    }
    e && Number(e) !== 4 && (a = Xm(a, "rfmt", e));
    var m = Xm(a, "fmt", 4);
    wc(
      m,
      function () {
        C.google_noFurtherRedirects &&
          b &&
          ((C.google_noFurtherRedirects = null), b());
      },
      c,
      d,
      E.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  }
  function fw(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function gw(a, b, c) {
    c = c === void 0 ? !1 : c;
    hw().addRestriction(0, a, b, c);
  }
  function iw(a, b, c) {
    c = c === void 0 ? !1 : c;
    hw().addRestriction(1, a, b, c);
  }
  function jw() {
    var a = Ij();
    return hw().getRestrictions(1, a);
  }
  var kw = function () {
      this.j = {};
      this.C = {};
    },
    lw = function (a, b) {
      var c = a.j[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.j[b] = c));
      return c;
    };
  kw.prototype.addRestriction = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.C[b]) {
      var e = lw(this, b);
      a === 0
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : a === 1 &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  kw.prototype.getRestrictions = function (a, b) {
    var c = lw(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(
        ma(
          (c == null
            ? void 0
            : (d = c._entity) == null
            ? void 0
            : d.internal) || []
        ),
        ma(
          (c == null
            ? void 0
            : (e = c._entity) == null
            ? void 0
            : e.external) || []
        )
      );
    }
    if (a === 1) {
      var f, g;
      return [].concat(
        ma(
          (c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) ||
            []
        ),
        ma(
          (c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  kw.prototype.getExternalRestrictions = function (a, b) {
    var c = lw(this, b),
      d,
      e;
    return a === 0
      ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) ||
          []
      : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) ||
          [];
  };
  kw.prototype.removeExternalRestrictions = function (a) {
    var b = lw(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.C[a] = !0;
  };
  function hw() {
    var a = ii.r;
    a || ((a = new kw()), (ii.r = a));
    return a;
  }
  var mw = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    nw = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    ow = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    pw =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  function qw() {
    var a = Ji("gtm.allowlist") || Ji("gtm.whitelist");
    a && Q(9);
    oi && (a = ["google", "gtagfl", "lcl", "zone"]);
    mw.test(C.location && C.location.hostname) &&
      (oi
        ? Q(116)
        : (Q(117),
          rw &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && Db(wb(a), nw),
      c = Ji("gtm.blocklist") || Ji("gtm.blacklist");
    c || ((c = Ji("tagTypeBlacklist")) && Q(3));
    c ? Q(8) : (c = []);
    mw.test(C.location && C.location.hostname) &&
      ((c = wb(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    wb(c).indexOf("google") >= 0 && Q(2);
    var d = c && Db(wb(c), ow),
      e = {};
    return function (f) {
      var g = f && f[He.la];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var k = yi[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (b.indexOf(g) < 0)
              if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) {
                  if (b.indexOf(k[p]) < 0) {
                    Q(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var t = qb(d, k || []);
          t && Q(10);
          q = t;
        }
      }
      var v = !m || q;
      v ||
        !(k.indexOf("sandboxedScripts") >= 0) ||
        (b && b.indexOf("sandboxedScripts") !== -1) ||
        (v = qb(d, pw));
      return (e[g] = v);
    };
  }
  var rw = !1;
  rw = !0;
  function sw() {
    Aj &&
      gw(Ij(), function (a) {
        var b = tf(a.entityId),
          c;
        if (wf(b)) {
          var d = b[He.la];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = lf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!fw(b[He.la], 4);
        return c;
      });
  }
  function tw(a, b, c, d, e) {
    if (!uw()) {
      var f = d.siloed ? Dj(a) : a;
      if (!Uj(f)) {
        var g = vw(a),
          k = Eb(a, "GTM-"),
          m = hj(),
          n = c ? "/gtag/js" : "/gtm.js",
          p = gj(b, n + g);
        if (!p) {
          var q = hi.Fd + n;
          if (m && qc && k)
            (q = qc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
              (p = Lr("https://", "http://", q + g));
          else if (Di()) {
            var r = n;
            O(64) && (r = "/");
            p = Ci() + r + g;
          } else p = Lr("https://", "http://", q + g);
        }
        d.siloed && Wj({ ctid: f, isDestination: !1 });
        var t = Oj();
        xj().container[f] = { state: 1, context: d, parent: t };
        wj({ ctid: f, isDestination: !1 }, e);
        wc(p);
      }
    }
  }
  function ww(a, b, c, d) {
    if (!uw()) {
      var e = c.siloed ? Dj(a) : a;
      if (!Vj(e))
        if (!c.siloed && Xj())
          (xj().destination[e] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: Oj(),
          }),
            wj({ ctid: e, isDestination: !0 }, d),
            Q(91);
        else {
          var f = "/gtag/destination" + vw(a, !0),
            g = gj(b, f);
          g ||
            (Di()
              ? (O(64) && (f = "/gtd" + vw(a, !0)), (g = Ci() + f))
              : (g = Lr("https://", "http://", hi.Fd + f)));
          c.siloed && Wj({ ctid: e, isDestination: !0 });
          xj().destination[e] = { state: 1, context: c, parent: Oj() };
          wj({ ctid: e, isDestination: !0 }, d);
          wc(g);
        }
    }
  }
  function vw(a, b) {
    b = b === void 0 ? !1 : b;
    var c = "?id=" + encodeURIComponent(a) + "&l=" + hi.hb;
    if (!Eb(a, "GTM-") || b) c += "&cx=c";
    O(75) && (c += "&gtm=" + Yn());
    hj() && (c += "&sign=" + hi.ah);
    var d = Bi.C;
    d === 1 ? (c += "&fps=fc") : d === 2 && (c += "&fps=fe");
    return c;
  }
  function uw() {
    if (Wn()) {
      return !0;
    }
    return !1;
  }
  var xw = [];
  function yw() {
    var a = Nf.ctid;
    if (a) {
      var b = zj.qe ? 1 : 0,
        c,
        d = Kj(Oj());
      c = d && d.context;
      return (
        a +
        ";" +
        Nf.canonicalContainerId +
        ";" +
        (c && c.fromContainerExecution ? 1 : 0) +
        ";" +
        ((c && c.source) || 0) +
        ";" +
        b
      );
    }
  }
  function zw() {
    var a = aj(C.location.href);
    return a.hostname + a.pathname;
  }
  function Aw() {
    var a = zw();
    a && fk("dl", encodeURIComponent(a));
    if (O(98)) {
      var b = yw();
      b && fk("tdp", b);
    } else
      fk("tdp", function () {
        return xw.length > 0 ? xw.join(".") : void 0;
      });
    var c = $m(!0);
    c !== void 0 && fk("frm", String(c));
  }
  var Bw = !1,
    Cw = 0,
    Dw = [];
  function Ew(a) {
    if (!Bw) {
      var b = E.createEventObject,
        c = E.readyState === "complete",
        d = E.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || (!b && d)) {
        Bw = !0;
        for (var e = 0; e < Dw.length; e++) F(Dw[e]);
      }
      Dw.push = function () {
        for (var f = wa.apply(0, arguments), g = 0; g < f.length; g++) F(f[g]);
        return 0;
      };
    }
  }
  function Fw() {
    if (!Bw && Cw < 140) {
      Cw++;
      try {
        var a, b;
        (b = (a = E.documentElement).doScroll) == null || b.call(a, "left");
        Ew();
      } catch (c) {
        C.setTimeout(Fw, 50);
      }
    }
  }
  function Gw(a) {
    Bw ? a() : Dw.push(a);
  }
  function Iw(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Gj(),
    };
  }
  var Kw = function (a, b) {
      this.j = !1;
      this.K = [];
      this.eventData = { tags: [] };
      this.P = !1;
      this.C = this.H = 0;
      Jw(this, a, b);
    },
    Lw = function (a, b, c, d) {
      if (ki.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      Pa(d) && (e = Qa(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    Mw = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Nw = function (a) {
      if (!a.j) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.j = !0;
        a.K.length = 0;
      }
    },
    Jw = function (a, b, c) {
      b !== void 0 && a.ye(b);
      c &&
        C.setTimeout(function () {
          Nw(a);
        }, Number(c));
    };
  Kw.prototype.ye = function (a) {
    var b = this,
      c = Bb(function () {
        F(function () {
          a(Gj(), b.eventData);
        });
      });
    this.j ? c() : this.K.push(c);
  };
  var Ow = function (a) {
      a.H++;
      return Bb(function () {
        a.C++;
        a.P && a.C >= a.H && Nw(a);
      });
    },
    Pw = function (a) {
      a.P = !0;
      a.C >= a.H && Nw(a);
    };
  var Qw = {};
  function Rw() {
    return C[Sw()];
  }
  function Sw() {
    return C.GoogleAnalyticsObject || "ga";
  }
  function Vw() {
    var a = Gj();
  }
  function Ww(a, b) {
    return function () {
      var c = Rw(),
        d = c && c.getByName && c.getByName(a);
      if (d) {
        var e = d.get("sendHitTask");
        d.set("sendHitTask", function (f) {
          var g = f.get("hitPayload"),
            k = f.get("hitCallback"),
            m = g.indexOf("&tid=" + b) < 0;
          m &&
            (f.set(
              "hitPayload",
              g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
              !0
            ),
            f.set("hitCallback", void 0, !0));
          e(f);
          m &&
            (f.set("hitPayload", g, !0),
            f.set("hitCallback", k, !0),
            f.set("_x_19", void 0, !0),
            e(f));
        });
      }
    };
  }
  var ax = ["es", "1"],
    bx = {},
    cx = {};
  function dx(a, b) {
    if (qj) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      bx[a] = [
        ["e", c],
        ["eid", a],
      ];
      dm(a);
    }
  }
  function ex(a) {
    var b = a.eventId,
      c = a.ic;
    if (!bx[b]) return [];
    var d = [];
    cx[b] || d.push(ax);
    d.push.apply(d, ma(bx[b]));
    c && (cx[b] = !0);
    return d;
  }
  var fx = {},
    gx = {},
    hx = {};
  function ix(a, b, c, d) {
    qj &&
      O(87) &&
      ((d === void 0 ? 0 : d)
        ? ((hx[b] = hx[b] || 0), ++hx[b])
        : c !== void 0
        ? ((gx[a] = gx[a] || {}), (gx[a][b] = Math.round(c)))
        : ((fx[a] = fx[a] || {}), (fx[a][b] = (fx[a][b] || 0) + 1)));
  }
  function jx(a) {
    var b = a.eventId,
      c = a.ic,
      d = fx[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete fx[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function kx(a) {
    var b = a.eventId,
      c = a.ic,
      d = gx[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete gx[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function lx() {
    for (
      var a = [], b = l(Object.keys(hx)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + hx[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var mx = {},
    nx = {};
  function ox(a, b, c) {
    if (qj && b) {
      var d = kj(b);
      mx[a] = mx[a] || [];
      mx[a].push(c + d);
      var e = (wf(b) ? "1" : "2") + d;
      nx[a] = nx[a] || [];
      nx[a].push(e);
      dm(a);
    }
  }
  function px(a) {
    var b = a.eventId,
      c = a.ic,
      d = [],
      e = mx[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = nx[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete mx[b], delete nx[b]);
    return d;
  }
  function qx(a, b, c, d) {
    var e = jf[a],
      f = rx(a, b, c, d);
    if (!f) return null;
    var g = xf(e[He.Aj], c, []);
    if (g && g.length) {
      var k = g[0];
      f = qx(
        k.index,
        {
          onSuccess: f,
          onFailure: k.Lj === 1 ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function rx(a, b, c, d) {
    function e() {
      function w() {
        Kk(3);
        var J = zb() - H;
        ox(c.id, f, "7");
        Mw(c.ac, B, "exception", J);
        O(76) && Jv(c, f, Su.J.Bj);
        D || ((D = !0), k());
      }
      if (f[He.Uk]) k();
      else {
        var x = vf(f, c, []),
          y = x[He.sk];
        if (y != null)
          for (var A = 0; A < y.length; A++)
            if (!X(y[A])) {
              k();
              return;
            }
        var B = Lw(c.ac, String(f[He.la]), Number(f[He.xe]), x[He.METADATA]),
          D = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!D) {
            D = !0;
            var J = zb() - H;
            ox(c.id, jf[a], "5");
            Mw(c.ac, B, "success", J);
            O(76) && Jv(c, f, Su.J.Dj);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!D) {
            D = !0;
            var J = zb() - H;
            ox(c.id, jf[a], "6");
            Mw(c.ac, B, "failure", J);
            O(76) && Jv(c, f, Su.J.Cj);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        ox(c.id, f, "1");
        O(76) && Iv(c, f);
        var H = zb();
        try {
          yf(x, { event: c, index: a, type: 1 });
        } catch (J) {
          w(J);
        }
        O(76) && Jv(c, f, Su.J.Ej);
      }
    }
    var f = jf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = xf(f[He.Fj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = qx(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = p.Lj === 2 ? m : q;
    }
    if (f[He.sj] || f[He.Wk]) {
      var r = f[He.sj] ? kf : c.Wm,
        t = g,
        v = k;
      if (!r[a]) {
        var u = sx(a, r, Bb(e));
        g = u.onSuccess;
        k = u.onFailure;
      }
      return function () {
        r[a](t, v);
      };
    }
    return e;
  }
  function sx(a, b, c) {
    var d = [],
      e = [];
    b[a] = tx(d, e, c);
    return {
      onSuccess: function () {
        b[a] = ux;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = vx;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function tx(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function ux(a) {
    a();
  }
  function vx(a, b) {
    b();
  }
  var yx = function (a, b) {
    for (var c = [], d = 0; d < jf.length; d++)
      if (a[d]) {
        var e = jf[d];
        var f = Ow(b.ac);
        try {
          var g = qx(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = e[He.la];
            if (!k)
              throw Error("Error: No function name given for function call.");
            var m = lf[k];
            c.push({
              ik: d,
              Xj: (m ? m.priorityOverride || 0 : 0) || fw(e[He.la], 1) || 0,
              execute: g,
            });
          } else wx(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(xx);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length > 0;
  };
  function xx(a, b) {
    var c,
      d = b.Xj,
      e = a.Xj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.ik,
        k = b.ik;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function wx(a, b) {
    if (qj) {
      var c = function (d) {
        var e = b.isBlocked(jf[d]) ? "3" : "4",
          f = xf(jf[d][He.Aj], b, []);
        f && f.length && c(f[0].index);
        ox(b.id, jf[d], e);
        var g = xf(jf[d][He.Fj], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var Bx = !1,
    zx;
  function Dx(a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (O(76)) {
    }
    if (d === "gtm.js") {
      if (Bx) return !1;
      Bx = !0;
    }
    var e = !1,
      f = jw(),
      g = Qa(a, null);
    if (
      !f.every(function (t) {
        return t({ originalEventData: g });
      })
    ) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
        return !1;
      e = !0;
    }
    dx(b, d);
    var k = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Ex(g, e),
        Wm: [],
        logMacroError: function () {
          Q(6);
          Kk(0);
        },
        cachedModelValues: Fx(),
        ac: new Kw(function () {
          if (O(76)) {
          }
          k && k.apply(k, Array.prototype.slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    O(87) && qj && (n.reportMacroDiscrepancy = ix);
    O(76) && Ev(n.id, n.name);
    var p = Ef(n);
    O(76) && Fv(n.id, n.name);
    e && (p = Gx(p));
    if (O(76)) {
    }
    var q = yx(p, n),
      r = !1;
    Pw(n.ac);
    (d !== "gtm.js" && d !== "gtm.sync") || Vw();
    return Hx(p, q) || r;
  }
  function Fx() {
    var a = {};
    a.event = Oi("event", 1);
    a.ecommerce = Oi("ecommerce", 1);
    a.gtm = Oi("gtm");
    a.eventModel = Oi("eventModel");
    return a;
  }
  function Ex(a, b) {
    var c = qw();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[He.la];
      if (!e || typeof e !== "string") return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = Ij();
      f = hw().getRestrictions(0, g);
      var k = a;
      b &&
        ((k = Qa(a, null)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (var m = yi[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function Gx(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(jf[c][He.la]);
        if (ji[d] || jf[c][He.Xk] !== void 0 || fw(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Hx(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && jf[c] && !ki[String(jf[c][He.la])]) return !0;
    return !1;
  }
  var Ix = 0;
  function Jx(a, b) {
    return arguments.length === 1 ? Kx("set", a) : Kx("set", a, b);
  }
  function Lx(a, b) {
    return arguments.length === 1 ? Kx("config", a) : Kx("config", a, b);
  }
  function Rx(a, b, c) {
    c = c || {};
    c[T.g.Xb] = a;
    return Kx("event", b, c);
  }
  function Kx() {
    return arguments;
  }
  var Sx = function () {
    this.messages = [];
    this.j = [];
  };
  Sx.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.j.length; g++)
      try {
        this.j[g](f);
      } catch (k) {}
  };
  Sx.prototype.listen = function (a) {
    this.j.push(a);
  };
  Sx.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Sx.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function Tx(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Nf.canonicalContainerId;
    Ux().enqueue(a, b, c);
  }
  function Vx() {
    var a = Wx;
    Ux().listen(a);
  }
  function Ux() {
    var a = ii.mb;
    a || ((a = new Sx()), (ii.mb = a));
    return a;
  }
  var Xx = {},
    Yx = {};
  function Zx(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { Ph: void 0, zh: void 0 }, f++
    ) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (((e.Ph = jl(g, b)), e.Ph)) {
          var k = Ej();
          ob(
            k,
            (function (r) {
              return function (t) {
                return r.Ph.destinationId === t;
              };
            })(e)
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = Xx[g] || [];
        e.zh = {};
        m.forEach(
          (function (r) {
            return function (t) {
              r.zh[t] = !0;
            };
          })(e)
        );
        for (var n = Bj(), p = 0; p < n.length; p++)
          if (e.zh[n[p]]) {
            c = c.concat(Ej());
            break;
          }
        var q = Yx[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { qm: c, vm: d };
  }
  function $x(a) {
    sb(Xx, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  function ay(a) {
    sb(Yx, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  var by = "HA GF G UA AW DC MC".split(" "),
    cy = !1,
    dy = !1,
    ey = !1,
    fy = !1;
  function gy(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: zi() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var hy = void 0,
    iy = void 0;
  function jy(a, b, c) {
    var d = Qa(a, null);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return b[f] !== void 0;
    }) && Q(136);
    var e = Qa(b, null);
    Qa(c, e);
    Tx(Lx(Bj()[0], e), a.eventId, d);
  }
  function ky(a) {
    for (var b = l([T.g.jd, T.g.Lb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || lm.j[d];
      if (e) return e;
    }
  }
  var ly = [
      T.g.jd,
      T.g.Lb,
      T.g.vc,
      T.g.nb,
      T.g.ub,
      T.g.ya,
      T.g.oa,
      T.g.Na,
      T.g.Va,
      T.g.Fb,
    ],
    my = {
      config: function (a, b) {
        var c = gy(a, b);
        if (!(a.length < 2) && z(a[1])) {
          var d = {};
          if (a.length > 2) {
            if ((a[2] !== void 0 && !Pa(a[2])) || a.length > 3) return;
            d = a[2];
          }
          var e = jl(a[1], b.isGtmEvent);
          if (e) {
            var f, g, k;
            a: {
              if (!zj.qe) {
                var m = Kj(Oj());
                if (Zj(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  k = { Cm: Kj(n), om: p };
                  break a;
                }
              }
              k = void 0;
            }
            var q = k;
            q && ((f = q.Cm), (g = q.om));
            dx(c.eventId, "gtag.config");
            var r = e.destinationId,
              t = e.id !== r;
            if (t ? Ej().indexOf(r) === -1 : Bj().indexOf(r) === -1) {
              if (!b.inheritParentConfig && !d[T.g.Ib]) {
                var v = ky(d);
                if (t)
                  ww(r, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var u = d;
                  hy ? jy(b, u, hy) : iy || (iy = Qa(u, null));
                } else
                  tw(r, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (Q(128), g && Q(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                iy
                  ? (jy(b, iy, x), (w = !1))
                  : ((!x[T.g.Yb] && mi && hy) || (hy = Qa(x, null)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (!ey && ((ey = !0), dy))
                for (var A = l(ly), B = A.next(); !B.done; B = A.next())
                  if (y.hasOwnProperty(B.value)) {
                    Jk("erc");
                    break;
                  }
              rj && !Aj && (Ix === 1 && (dk.mcc = !1), (Ix = 2));
              Gk = !0;
              if (mi && !t && !d[T.g.Yb]) {
                var D = fy;
                fy = !0;
                if (D) return;
              }
              cy || Q(43);
              if (!b.noTargetGroup)
                if (t) {
                  ay(e.id);
                  var H = e.id,
                    J = d[T.g.ae] || "default";
                  J = String(J).split(",");
                  for (var G = 0; G < J.length; G++) {
                    var U = Yx[J[G]] || [];
                    Yx[J[G]] = U;
                    U.indexOf(H) < 0 && U.push(H);
                  }
                } else {
                  $x(e.id);
                  var L = e.id,
                    R = d[T.g.ae] || "default";
                  R = R.toString().split(",");
                  for (var W = 0; W < R.length; W++) {
                    var ba = Xx[R[W]] || [];
                    Xx[R[W]] = ba;
                    ba.indexOf(L) < 0 && ba.push(L);
                  }
                }
              delete d[T.g.ae];
              var S = b.eventMetadata || {};
              S.hasOwnProperty("is_external_event") ||
                (S.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = S;
              delete d[T.g.bd];
              for (var P = t ? [e.id] : Ej(), la = 0; la < P.length; la++) {
                var na = d,
                  ia = P[la],
                  xa = Qa(b, null),
                  Oa = jl(ia, xa.isGtmEvent);
                Oa && lm.push("config", [na], Oa, xa);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (a.length === 3) {
          Q(39);
          var c = gy(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[T.g.N] && Q(139), e[T.g.sa] && Q(140));
          d === "default"
            ? Xk(e)
            : d === "update"
            ? Zk(e, c)
            : d === "declare" && b.fromContainerExecution && Wk(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(a.length < 2) && z(c)) {
          var d = void 0;
          if (a.length > 2) {
            if ((!Pa(a[2]) && a[2] !== void 0) || a.length > 3) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = Qa(e, null)),
            e[T.g.bd] && (g.eventCallback = e[T.g.bd]),
            e[T.g.Xd] && (g.eventTimeout = e[T.g.Xd]));
          var k = gy(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback")
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[T.g.Xb];
          r === void 0 &&
            ((r = Ji(T.g.Xb, 2)), r === void 0 && (r = "default"));
          if (z(r) || Array.isArray(r)) {
            var t;
            t = b.isGtmEvent
              ? z(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var v = Zx(t, b.isGtmEvent),
              u = v.qm,
              w = v.vm;
            if (w.length)
              for (var x = ky(q), y = 0; y < w.length; y++) {
                var A = jl(w[y], b.isGtmEvent);
                A &&
                  ww(A.destinationId, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = kl(u, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            var D;
            !B.length ||
              ((D = b.eventMetadata) == null ? 0 : D.em_event) ||
              (dy = !0);
            dx(m, c);
            for (var H = [], J = 0; J < B.length; J++) {
              var G = B[J],
                U = Qa(b, null);
              if (by.indexOf(Pj(G.prefix)) !== -1) {
                var L = Qa(d, null),
                  R = U.eventMetadata || {};
                R.hasOwnProperty("is_external_event") ||
                  (R.is_external_event = !U.fromContainerExecution);
                U.eventMetadata = R;
                delete L[T.g.bd];
                mm(c, L, G.id, U);
                rj && !Aj && Ix === 0 && (fk("mcc", "1"), (Ix = 1));
                Gk = !0;
              }
              H.push(G.id);
            }
            g.eventModel = g.eventModel || {};
            B.length > 0
              ? (g.eventModel[T.g.Xb] = H.join())
              : delete g.eventModel[T.g.Xb];
            cy || Q(43);
            b.noGtmEvent === void 0 &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[T.g.Vb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        Q(53);
        if (a.length === 4 && z(a[1]) && z(a[2]) && lb(a[3])) {
          var c = jl(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            cy || Q(43);
            var f = ky();
            if (
              !ob(Ej(), function (k) {
                return c.destinationId === k;
              })
            )
              ww(c.destinationId, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (by.indexOf(Pj(c.prefix)) !== -1) {
              Gk = !0;
              gy(a, b);
              var g = {};
              Qa(((g[T.g.rb] = d), (g[T.g.Gb] = e), g), null);
              nm(
                d,
                function (k) {
                  F(function () {
                    e(k);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (a.length === 2 && a[1].getTime) {
          cy = !0;
          var c = gy(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (a.length === 3 && z(a[1]) && lb(a[2])) {
          if ((Kf(a[1], a[2]), Q(74), a[1] === "all")) {
            Q(75);
            var b = !1;
            try {
              b = a[2](Gj(), "unknown", {});
            } catch (c) {}
            b || Q(76);
          }
        } else Q(73);
      },
      set: function (a, b) {
        var c = void 0;
        a.length === 2 && Pa(a[1])
          ? (c = Qa(a[1], null))
          : a.length === 3 &&
            z(a[1]) &&
            ((c = {}),
            Pa(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = Qa(a[2], null))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = gy(a, b),
            e = d.eventId,
            f = d.priorityId;
          Qa(c, null);
          var g = Qa(c, null);
          lm.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    ny = { policy: !0 };
  var py = function (a) {
    if (oy(a)) return a;
    this.value = a;
  };
  py.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var oy = function (a) {
    return !a || Ma(a) !== "object" || Pa(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  py.prototype.getUntrustedMessageValue = py.prototype.getUntrustedMessageValue;
  var qy = !1,
    ry = [];
  function sy() {
    if (!qy) {
      qy = !0;
      for (var a = 0; a < ry.length; a++) F(ry[a]);
    }
  }
  function ty(a) {
    qy ? F(a) : ry.push(a);
  }
  var uy = 0,
    vy = {},
    wy = [],
    xy = [],
    yy = !1,
    zy = !1;
  function Ay(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  function By(a, b, c) {
    a.eventCallback = b;
    c && (a.eventTimeout = c);
    return Cy(a);
  }
  function Dy(a, b) {
    if (!mb(b) || b < 0) b = 0;
    var c = ii[hi.hb],
      d = 0,
      e = !1,
      f = void 0;
    f = C.setTimeout(function () {
      e || ((e = !0), a());
      f = void 0;
    }, b);
    return function () {
      var g = c ? c.subscribers : 1;
      ++d === g &&
        (f && (C.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
    };
  }
  function Ey(a, b) {
    var c = a._clear || b.overwriteModelFields;
    sb(a, function (e, f) {
      e !== "_clear" && (c && Mi(e), Mi(e, f));
    });
    vi || (vi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" &&
      ((d = zi()), (a["gtm.uniqueEventId"] = d), Mi("gtm.uniqueEventId", d));
    return Dx(a);
  }
  function Fy(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (tb(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get")
        return !0;
    }
    return !1;
  }
  function Gy() {
    var a;
    if (xy.length) a = xy.shift();
    else if (wy.length) a = wy.shift();
    else return;
    var b;
    var c = a;
    if (yy || !Fy(c.message)) b = c;
    else {
      yy = !0;
      var d = c.message["gtm.uniqueEventId"];
      typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = zi());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      wy.unshift(k, c);
      if (rj) {
        if (!O(98)) {
          var m = yw();
          m && xw.push(m);
        }
        jk();
      }
      b = f;
    }
    return b;
  }
  function Hy() {
    for (var a = !1, b; !zy && (b = Gy()); ) {
      zy = !0;
      delete Gi.eventModel;
      Ii();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) zy = !1;
      else {
        e.fromContainerExecution && Ni();
        try {
          if (lb(d))
            try {
              d.call(Ki);
            } catch (v) {}
          else if (Array.isArray(d)) {
            if (z(d[0])) {
              var f = d[0].split("."),
                g = f.pop(),
                k = d.slice(1),
                m = Ji(f.join("."), 2);
              if (m != null)
                try {
                  m[g].apply(m, k);
                } catch (v) {}
            }
          } else {
            var n = void 0;
            if (tb(d))
              a: {
                if (d.length && z(d[0])) {
                  var p = my[d[0]];
                  if (p && (!e.fromContainerExecution || !ny[d[0]])) {
                    n = p(d, e);
                    break a;
                  }
                }
                n = void 0;
              }
            else n = d;
            n && (a = Ey(n, e) || a);
          }
        } finally {
          e.fromContainerExecution && Ii(!0);
          var q = d["gtm.uniqueEventId"];
          if (typeof q === "number") {
            for (var r = vy[String(q)] || [], t = 0; t < r.length; t++)
              xy.push(Iy(r[t]));
            r.length && xy.sort(Ay);
            delete vy[String(q)];
            q > uy && (uy = q);
          }
          zy = !1;
        }
      }
    }
    return !a;
  }
  function Jy() {
    if (O(76)) {
      var a = Ky();
    }
    var b = Hy();
    if (O(76)) {
    }
    try {
      var c = Gj(),
        d = C[hi.hb].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] === !0) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function Wx(a) {
    if (uy < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      vy[b] = vy[b] || [];
      vy[b].push(a);
    } else
      xy.push(Iy(a)),
        xy.sort(Ay),
        F(function () {
          zy || Hy();
        });
  }
  function Iy(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  function Ly() {
    function a(f) {
      var g = {};
      if (oy(f)) {
        var k = f;
        f = oy(k) ? k.getUntrustedMessageValue() : void 0;
        g.fromContainerExecution = !0;
      }
      return { message: f, messageContext: g };
    }
    var b = rc(hi.hb, []),
      c = (ii[hi.hb] = ii[hi.hb] || {});
    c.pruned === !0 && Q(83);
    vy = Ux().get();
    Vx();
    Gw(function () {
      if (!c.gtmDom) {
        c.gtmDom = !0;
        var f = {};
        b.push(((f.event = "gtm.dom"), f));
      }
    });
    ty(function () {
      if (!c.gtmLoad) {
        c.gtmLoad = !0;
        var f = {};
        b.push(((f.event = "gtm.load"), f));
      }
    });
    c.subscribers = (c.subscribers || 0) + 1;
    var d = b.push;
    b.push = function () {
      var f;
      if (ii.SANDBOXED_JS_SEMAPHORE > 0) {
        f = [];
        for (var g = 0; g < arguments.length; g++) f[g] = new py(arguments[g]);
      } else f = [].slice.call(arguments, 0);
      var k = f.map(function (q) {
        return a(q);
      });
      wy.push.apply(wy, k);
      var m = d.apply(b, f),
        n = Math.max(100, Number("1000") || 300);
      if (this.length > n)
        for (Q(4), c.pruned = !0; this.length > n; ) this.shift();
      var p = typeof m !== "boolean" || m;
      return Hy() && p;
    };
    var e = b.slice(0).map(function (f) {
      return a(f);
    });
    wy.push.apply(wy, e);
    if (Ky()) {
      if (O(76)) {
      }
      F(Jy);
    }
  }
  var Ky = function () {
      var a = !0;
      return a;
    },
    Cy = function (a) {
      return C[hi.hb].push(a);
    };
  function My(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = zb();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Ny(a) {
    return a && a.indexOf("pending:") === 0 ? My(a.substr(8)) : !1;
  }
  function hz() {}
  var iz = function () {};
  iz.prototype.toString = function () {
    return "undefined";
  };
  var jz = new iz();
  var lz = function () {
      (ii.rm = ii.rm || {})[Ij()] = function (a) {
        if (kz.hasOwnProperty(a)) return kz[a];
      };
    },
    oz = function (a, b, c) {
      if (a instanceof mz) {
        var d = a,
          e = d.resolve,
          f = b,
          g = String(zi());
        nz[g] = [f, c];
        a = e.call(d, g);
        b = kb;
      }
      return { Pj: a, onSuccess: b };
    },
    pz = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        Q(a ? 134 : 135);
        var d = nz[c];
        if (d && typeof d[b] === "function") d[b]();
        nz[c] = void 0;
      };
    },
    mz = function (a) {
      this.valueOf = this.toString;
      this.resolve = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === jz ? b : a[d]);
        return c.join("");
      };
    };
  mz.prototype.toString = function () {
    return this.resolve("undefined");
  };
  var kz = {},
    nz = {};
  function qz(a, b) {
    function c(g) {
      var k = aj(g),
        m = Vi(k, "protocol"),
        n = Vi(k, "host", !0),
        p = Vi(k, "port"),
        q = Vi(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        m === void 0 ||
        (m === "http" && p === "80") ||
        (m === "https" && p === "443")
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function rz(a) {
    return sz(a) ? 1 : 0;
  }
  function sz(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = Qa(a, {});
        Qa({ arg1: c[d], any_of: void 0 }, e);
        if (rz(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return mg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < ig.length; g++) {
                var k = ig[g];
                if (b[k] != null) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return jg(b, c);
      case "_eq":
        return ng(b, c);
      case "_ge":
        return og(b, c);
      case "_gt":
        return qg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
        return pg(b, c);
      case "_lt":
        return rg(b, c);
      case "_re":
        return lg(b, c, a.ignore_case);
      case "_sw":
        return sg(b, c);
      case "_um":
        return qz(b, c);
    }
    return !1;
  }
  function tz() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return (
      (b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function uz() {
    var a = [
      ["cv", O(107) ? tz() : "190"],
      ["rv", hi.Zg],
      [
        "tc",
        jf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    hi.ue && a.push(["x", hi.ue]);
    Bi.j && a.push(["tag_exp", Bi.j]);
    return a;
  }
  var vz = {},
    wz = {};
  function xz() {
    var a = 0;
    return function (b) {
      switch (b) {
        case 1:
          a |= 1;
          break;
        case 2:
          a |= 2;
          break;
        case 3:
          a |= 4;
      }
      return a;
    };
  }
  function yz(a, b, c, d) {
    if (qj) {
      var e = String(c) + b;
      vz[a] = vz[a] || [];
      vz[a].push(e);
      wz[a] = wz[a] || [];
      wz[a].push(d + b);
    }
  }
  function zz(a) {
    var b = a.eventId,
      c = a.ic,
      d = [],
      e = vz[b] || [];
    e.length && d.push(["hf", e.join(".")]);
    var f = wz[b] || [];
    f.length && d.push(["ht", f.join(".")]);
    c && (delete vz[b], delete wz[b]);
    return d;
  }
  function Az() {
    return !1;
  }
  function Bz() {
    var a = {};
    return function (b, c, d) {};
  }
  function Cz() {
    var a = Dz;
    return function (b, c, d) {
      var e = d && d.event;
      (b === "__html" && O(80)) || Ez(c);
      var f = Eb(b, "__cvt_") ? void 0 : 1,
        g = new Wa();
      sb(c, function (r, t) {
        var v = cd(t, void 0, f);
        v === void 0 && t !== void 0 && Q(44);
        g.set(r, v);
      });
      a.j.j.C = Cf();
      var k = {
        Ij: Rf(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        ye:
          e !== void 0
            ? function (r) {
                e.ac.ye(r);
              }
            : void 0,
        cb: function () {
          return b;
        },
        log: function () {},
        Fl: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name,
        },
        Mm: !!fw(b, 3),
        originalEventData: e == null ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (k.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (Az()) {
        var m = Bz(),
          n,
          p;
        k.Sa = {
          ai: [],
          ze: {},
          xb: function (r, t, v) {
            t === 1 && (n = r);
            t === 7 && (p = v);
            m(r, t, v);
          },
          Xf: ah(),
        };
        k.log = function (r) {
          var t = wa.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: t });
        };
      }
      var q = Be(a, k, [b, g]);
      a.j.j.C = void 0;
      q instanceof za && q.type === "return" && (q = q.data);
      return I(q, void 0, f);
    };
  }
  function Ez(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    lb(b) &&
      (a.gtmOnSuccess = function () {
        F(b);
      });
    lb(c) &&
      (a.gtmOnFailure = function () {
        F(c);
      });
  }
  function Fz(a, b) {
    var c = this;
  }
  Fz.R = "addConsentListener";
  var Gz = !1;
  function Hz(a) {
    for (var b = 0; b < a.length; ++b)
      if (Gz)
        try {
          a[b]();
        } catch (c) {
          Q(77);
        }
      else a[b]();
  }
  function Iz(a, b, c) {
    var d = this,
      e;
    return e;
  }
  Iz.F = "internal.addDataLayerEventListener";
  function Jz(a, b, c) {}
  Jz.R = "addDocumentEventListener";
  function Kz(a, b, c, d) {}
  Kz.R = "addElementEventListener";
  function Lz(a) {
    return a.D.j;
  }
  function Mz(a) {}
  Mz.R = "addEventCallback";
  var Nz = function (a) {
      return typeof a === "string" ? a : String(zi());
    },
    Qz = function (a, b) {
      Oz(a, "init", !1) || (Pz(a, "init", !0), b());
    },
    Oz = function (a, b, c) {
      var d = Rz(a);
      return Ab(d, b, c);
    },
    Sz = function (a, b, c, d) {
      var e = Rz(a),
        f = Ab(e, b, d);
      e[b] = c(f);
    },
    Pz = function (a, b, c) {
      Rz(a)[b] = c;
    },
    Rz = function (a) {
      ii.hasOwnProperty("autoEventsSettings") || (ii.autoEventsSettings = {});
      var b = ii.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Tz = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Mc(a, "className"),
        "gtm.elementId": a["for"] || Dc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Mc(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Mc(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    };
  function bA(a) {}
  bA.F = "internal.addFormAbandonmentListener";
  function cA(a, b, c, d) {}
  cA.F = "internal.addFormData";
  var dA = {},
    eA = [],
    fA = {},
    gA = 0,
    hA = 0;
  function oA(a, b) {}
  oA.F = "internal.addFormInteractionListener";
  function vA(a, b) {}
  vA.F = "internal.addFormSubmitListener";
  function AA(a) {}
  AA.F = "internal.addGaSendListener";
  function BA(a) {
    if (!a) return {};
    var b = a.Fl;
    return Iw(b.type, b.index, b.name);
  }
  function CA(a) {
    return a ? { originatingEntity: BA(a) } : {};
  }
  var EA = function (a, b, c) {
      DA().updateZone(a, b, c);
    },
    GA = function (a, b, c, d, e, f) {
      var g = DA();
      c = c && Db(c, FA);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, Gj(), k)) {
          var p = n,
            q = a,
            r = d,
            t = e,
            v = f;
          if (Eb(p, "GTM-"))
            tw(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var u = Kx("js", yb());
            tw(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: t, inheritParentConfig: v };
            O(112) || Tx(u, q, w);
            Tx(Lx(p, r), q, w);
          }
        }
      }
      return k;
    },
    DA = function () {
      var a = ii.zones;
      a || (a = ii.zones = new HA());
      return a;
    },
    IA = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    FA = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    HA = function () {
      this.j = {};
      this.C = {};
      this.H = 0;
    };
  h = HA.prototype;
  h.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.Oh], b)) return !1;
    for (var e = 0; e < c.df.length; e++) if (this.C[c.df[e]].ud(b)) return !0;
    return !1;
  };
  h.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.df.length; f++) {
      var g = this.C[c.df[f]];
      g.ud(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.Oh], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].fm(m, n)) return !0;
      return !1;
    };
  };
  h.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.j[a[b]];
  };
  h.createZone = function (a, b) {
    var c = String(++this.H);
    this.C[c] = new JA(a, b);
    return c;
  };
  h.updateZone = function (a, b, c) {
    var d = this.C[a];
    d && d.H(b, c);
  };
  h.registerChild = function (a, b, c) {
    var d = this.j[a];
    if ((!d && ii[a]) || (!d && Uj(a)) || (d && d.Oh !== b)) return !1;
    if (d) return d.df.push(c), !1;
    this.j[a] = { Oh: b, df: [c] };
    return !0;
  };
  var JA = function (a, b) {
    this.C = null;
    this.j = [{ eventId: a, ud: !0 }];
    if (b) {
      this.C = {};
      for (var c = 0; c < b.length; c++) this.C[b[c]] = !0;
    }
  };
  JA.prototype.H = function (a, b) {
    var c = this.j[this.j.length - 1];
    a <= c.eventId || (c.ud !== b && this.j.push({ eventId: a, ud: b }));
  };
  JA.prototype.ud = function (a) {
    for (var b = this.j.length - 1; b >= 0; b--)
      if (this.j[b].eventId <= a) return this.j[b].ud;
    return !1;
  };
  JA.prototype.fm = function (a, b) {
    b = b || [];
    if (!this.C || IA[a] || this.C[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.C[b[c]]) return !0;
    return !1;
  };
  function KA(a) {
    var b = ii.zones;
    return b
      ? b.getIsAllowedFn(Bj(), a)
      : function () {
          return !0;
        };
  }
  function LA() {
    iw(Ij(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = ii.zones;
      return c ? c.isActive(Bj(), b) : !0;
    });
    gw(Ij(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return KA(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var MA = function (a, b) {
    this.tagId = a;
    this.Be = b;
  };
  function NA(a, b) {
    var c = this,
      d;
    var e = function (v) {
      gw(
        v,
        function (u) {
          for (
            var w = hw().getExternalRestrictions(0, Ij()),
              x = l(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var A = y.value;
            if (!A(u)) return !1;
          }
          return !0;
        },
        !0
      );
      iw(
        v,
        function (u) {
          for (
            var w = hw().getExternalRestrictions(1, Ij()),
              x = l(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var A = y.value;
            if (!A(u)) return !1;
          }
          return !0;
        },
        !0
      );
      k && k(new MA(a, v));
    };
    K(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = I(b, this.D, 1) || {},
      g = f.firstPartyUrl,
      k = f.onLoad,
      m = f.loadByDestination === !0,
      n = f.isGtmEvent === !0,
      p = f.siloed === !0;
    Hz([
      function () {
        return M(c, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (Vj(a)) return;
    } else if (Uj(a)) return;
    var q = 6,
      r = Lz(this);
    n && (q = 7);
    r.cb() === "__zone" && (q = 1);
    var t = { source: q, fromContainerExecution: !0, siloed: p };
    m ? ww(a, g, t, e) : tw(a, g, !Eb(a, "GTM-"), t, e);
    k &&
      r.cb() === "__zone" &&
      GA(Number.MIN_SAFE_INTEGER, [a], null, {}, BA(Lz(this)));
    d = p ? Dj(a) : a;
    return d;
  }
  NA.F = "internal.loadGoogleTag";
  function OA(a) {
    return new Vc("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof Vc)
        return new Vc("", function () {
          var d = wa.apply(0, arguments),
            e = this,
            f = Qa(Lz(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            k = Fa(this.D);
          k.j = f;
          return c.fb.apply(c, [k].concat(ma(g)));
        });
    });
  }
  function PA(a, b, c) {
    var d = this;
  }
  PA.F = "internal.addGoogleTagRestriction";
  var QA = {},
    RA = [];
  function YA(a, b) {}
  YA.F = "internal.addHistoryChangeListener";
  function ZA(a, b, c) {}
  ZA.R = "addWindowEventListener";
  function $A(a, b) {
    return !0;
  }
  $A.R = "aliasInWindow";
  function aB(a, b, c) {}
  aB.F = "internal.appendRemoteConfigParameter";
  function bB(a) {
    var b;
    return b;
  }
  bB.R = "callInWindow";
  function cB(a) {}
  cB.R = "callLater";
  function dB(a) {}
  dB.F = "callOnDomReady";
  function eB(a) {}
  eB.F = "callOnWindowLoad";
  function fB(a, b) {
    var c;
    return c;
  }
  fB.F = "internal.computeGtmParameter";
  function gB(a, b) {
    var c = this;
  }
  gB.F = "internal.consentScheduleFirstTry";
  function hB(a, b) {
    var c = this;
  }
  hB.F = "internal.consentScheduleRetry";
  function iB(a) {
    var b;
    return b;
  }
  iB.F = "internal.copyFromCrossContainerData";
  function jB(a, b) {
    var c;
    var d = cd(c, this.D, Eb(Lz(this).cb(), "__cvt_") ? 2 : 1);
    d === void 0 && c !== void 0 && Q(45);
    return d;
  }
  jB.R = "copyFromDataLayer";
  function kB(a) {
    var b = void 0;
    return b;
  }
  kB.F = "internal.copyFromDataLayerCache";
  function lB(a) {
    var b;
    K(this.getName(), ["path:!string"], arguments);
    M(this, "access_globals", "read", a);
    var c = a.split("."),
      d = Gb(c, [C, E]);
    if (!d) return;
    var e = d[c[c.length - 1]];
    b = cd(e, this.D, 2);
    b === void 0 && e !== void 0 && Q(45);
    return b;
  }
  lB.R = "copyFromWindow";
  function mB(a) {
    var b = void 0;
    return cd(b, this.D, 1);
  }
  mB.F = "internal.copyKeyFromWindow";
  var nB = function (a, b, c) {
    this.eventName = b;
    this.m = c;
    this.j = {};
    this.isAborted = !1;
    this.target = a;
    this.metadata = Qa(c.eventMetadata || {}, {});
  };
  nB.prototype.copyToHitData = function (a, b, c) {
    var d = V(this.m, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && z(d) && O(68))
      try {
        d = c(d);
      } catch (e) {}
    d !== void 0 && (this.j[a] = d);
  };
  var dt = function (a, b, c) {
    var d = gs(a.target.destinationId);
    return d && d[b] !== void 0 ? d[b] : c;
  };
  function oB(a, b) {
    var c;
    return c;
  }
  oB.F = "internal.copyPreHit";
  function pB(a, b) {
    var c = null;
    K(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
    M(this, "access_globals", "readwrite", a);
    M(this, "access_globals", "readwrite", b);
    var d = [C, E],
      e = a.split("."),
      f = Gb(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var k = f[g];
    if (k && !lb(k)) return null;
    if (k) return cd(k, this.D, 2);
    var m;
    k = function () {
      if (!lb(m.push))
        throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments);
    };
    f[g] = k;
    var n = b.split("."),
      p = Gb(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && ((m = []), (p[q] = m));
    c = function () {
      k.apply(k, Array.prototype.slice.call(arguments, 0));
    };
    return cd(c, this.D, 2);
  }
  pB.R = "createArgumentsQueue";
  function qB(a) {
    return cd(
      function (c) {
        var d = Rw();
        if (typeof c === "function")
          d(function () {
            c(function (f, g, k) {
              var m = Rw(),
                n = m && m.getByName && m.getByName(f);
              return wm(C.gaplugins.Linker, n).decorate(g, k);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
        } else if (c === "isLoaded") return !!d.loaded;
      },
      this.D,
      1
    );
  }
  qB.F = "internal.createGaCommandQueue";
  function rB(a) {
    K(this.getName(), ["path:!string"], arguments);
    M(this, "access_globals", "readwrite", a);
    var b = a.split("."),
      c = Gb(b, [C, E]),
      d = b[b.length - 1];
    if (!c) throw Error("Path " + a + " does not exist.");
    var e = c[d];
    e === void 0 && ((e = []), (c[d] = e));
    return cd(
      function () {
        if (!lb(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.D,
      Eb(Lz(this).cb(), "__cvt_") ? 2 : 1
    );
  }
  rB.R = "createQueue";
  function sB(a, b) {
    var c = null;
    return c;
  }
  sB.F = "internal.createRegex";
  function tB() {
    var a = {};
    return a;
  }
  function uB(a) {}
  uB.F = "internal.declareConsentState";
  function vB(a) {
    var b = "";
    return b;
  }
  vB.F = "internal.decodeUrlHtmlEntities";
  function wB(a, b, c) {
    var d;
    return d;
  }
  wB.F = "internal.decorateUrlWithGaCookies";
  function xB(a) {
    var b;
    return b;
  }
  xB.F = "internal.detectUserProvidedData";
  function zB() {}
  zB.F = "internal.disableDeferringCustomEvents";
  var AB = function (a) {
      var b = Gc(a, ["button", "input"], 50);
      if (!b) return null;
      var c = String(b.tagName).toLowerCase();
      if (c === "button") return b;
      if (c === "input") {
        var d = Dc(b, "type");
        if (
          d === "button" ||
          d === "submit" ||
          d === "image" ||
          d === "file" ||
          d === "reset"
        )
          return b;
      }
      return null;
    },
    BB = function (a, b, c) {
      var d = c.target;
      if (d) {
        var e = Oz(a, "individualElementIds", []);
        if (e.length > 0) {
          var f = Tz(d, b, e);
          Cy(f);
        }
        var g = !1,
          k = Oz(a, "commonButtonIds", []);
        if (k.length > 0) {
          var m = AB(d);
          if (m) {
            var n = Tz(m, b, k);
            Cy(n);
            g = !0;
          }
        }
        var p = Oz(a, "selectorToTriggerIds", {}),
          q;
        for (q in p)
          if (p.hasOwnProperty(q)) {
            var r = g
              ? p[q].filter(function (u) {
                  return k.indexOf(u) === -1;
                })
              : p[q];
            if (r.length !== 0) {
              var t = lh(d, q);
              if (t) {
                var v = Tz(t, b, r);
                Cy(v);
              }
            }
          }
      }
    };
  function CB(a, b) {
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    var c = a ? I(a) : {},
      d = vb(c.matchCommonButtons),
      e = !!c.cssSelector;
    b = Nz(b);
    M(this, "detect_click_events", c.matchCommonButtons, c.cssSelector);
    var f = c.useV2EventName ? "gtm.click-v2" : "gtm.click",
      g = c.useV2EventName ? "ecl" : "cl",
      k = function (n) {
        n.push(b);
        return n;
      };
    if (e || d) {
      if ((d && Sz(g, "commonButtonIds", k, []), e)) {
        var m = xb(String(c.cssSelector));
        Sz(
          g,
          "selectorToTriggerIds",
          function (n) {
            n.hasOwnProperty(m) || (n[m] = []);
            k(n[m]);
            return n;
          },
          {}
        );
      }
    } else Sz(g, "individualElementIds", k, []);
    Qz(g, function () {
      Bc(
        E,
        "click",
        function (n) {
          BB(g, f, n);
        },
        !0
      );
    });
    return b;
  }
  CB.F = "internal.enableAutoEventOnClick";
  var FB = function (a) {
      if (!DB) {
        var b = function () {
          var c = E.body;
          if (c)
            if (EB)
              new MutationObserver(function () {
                for (var e = 0; e < DB.length; e++) F(DB[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              Bc(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  F(function () {
                    d = !1;
                    for (var e = 0; e < DB.length; e++) F(DB[e]);
                  }));
              });
            }
        };
        DB = [];
        E.body ? b() : F(b);
      }
      DB.push(a);
    },
    EB = !!C.MutationObserver,
    DB;
  var GB = function (a) {
      a.has("PollingId") &&
        (C.clearInterval(Number(a.get("PollingId"))), a.remove("PollingId"));
    },
    IB = function (a, b, c, d) {
      function e() {
        if (!is(a.target)) {
          b.has("RecentOnScreen") ||
            b.set("RecentOnScreen", "" + HB().toString());
          b.has("FirstOnScreen") ||
            b.set("FirstOnScreen", "" + HB().toString());
          var g = 0;
          b.has("TotalVisibleTime") && (g = Number(b.get("TotalVisibleTime")));
          g += 100;
          b.set("TotalVisibleTime", "" + g.toString());
          if (g >= c) {
            var k = Tz(a.target, "gtm.elementVisibility", [b.uid]),
              m = ks(a.target);
            k["gtm.visibleRatio"] = Math.round(m * 1e3) / 10;
            k["gtm.visibleTime"] = c;
            k["gtm.visibleFirstTime"] = Number(b.get("FirstOnScreen"));
            k["gtm.visibleLastTime"] = Number(b.get("RecentOnScreen"));
            Cy(k);
            d();
          }
        }
      }
      if (!b.has("PollingId") && (c === 0 && e(), !b.has("HasFired"))) {
        var f = C.setInterval(e, 100);
        b.set("PollingId", String(f));
      }
    },
    HB = function () {
      var a = Number(Ji("gtm.start", 2)) || 0;
      return zb() - a;
    },
    JB = function (a, b) {
      this.element = a;
      this.uid = b;
    };
  JB.prototype.has = function (a) {
    return !!this.element.dataset["gtmVis" + a + this.uid];
  };
  JB.prototype.get = function (a) {
    return this.element.dataset["gtmVis" + a + this.uid];
  };
  JB.prototype.set = function (a, b) {
    this.element.dataset["gtmVis" + a + this.uid] = b;
  };
  JB.prototype.remove = function (a) {
    delete this.element.dataset["gtmVis" + a + this.uid];
  };
  function KB(a, b) {
    var c = function (v) {
        var u = new JB(v.target, p);
        v.intersectionRatio >= n
          ? u.has("HasFired") ||
            IB(
              v,
              u,
              m,
              q === "ONCE"
                ? function () {
                    for (var w = 0; w < r.length; w++) {
                      var x = new JB(r[w], p);
                      x.set("HasFired", "1");
                      GB(x);
                    }
                    ns(t);
                    if (k) {
                      var y = d;
                      if (DB)
                        for (var A = 0; A < DB.length; A++)
                          DB[A] === y && DB.splice(A, 1);
                    }
                  }
                : function () {
                    u.set("HasFired", "1");
                    GB(u);
                  }
            )
          : (GB(u),
            q === "MANY_PER_ELEMENT" &&
              u.has("HasFired") &&
              (u.remove("HasFired"), u.remove("TotalVisibleTime")),
            u.remove("RecentOnScreen"));
      },
      d = function () {
        var v = !1,
          u = null;
        if (f === "CSS") {
          try {
            u = jh(g);
          } catch (A) {}
          v = !!u && r.length !== u.length;
        } else if (f === "ID") {
          var w = E.getElementById(g);
          w && ((u = [w]), (v = r.length !== 1 || r[0] !== w));
        }
        u || ((u = []), (v = r.length > 0));
        if (v) {
          for (var x = 0; x < r.length; x++) GB(new JB(r[x], p));
          r = [];
          for (var y = 0; y < u.length; y++) r.push(u[y]);
          t >= 0 && ns(t);
          r.length > 0 && (t = qs(c, r, [n]));
        }
      };
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    M(this, "detect_element_visibility_events");
    var e = a ? I(a) : {},
      f = e.selectorType,
      g;
    switch (f) {
      case "ID":
        g = String(e.id);
        break;
      case "CSS":
        g = String(e.selector);
        break;
      default:
        throw Error(
          "Unrecognized element selector type " +
            f +
            ". Must be one of 'ID' or 'CSS'."
        );
    }
    var k = !!e.useDomChangeListener,
      m = (e.onScreenDuration && Number(e.onScreenDuration)) || 0,
      n = (Number(e.onScreenRatio) || 50) / 100,
      p = Nz(b),
      q = e.firingFrequency,
      r = [],
      t = -1;
    d();
    k && FB(d);
    return b;
  }
  KB.F = "internal.enableAutoEventOnElementVisibility";
  function LB() {}
  LB.F = "internal.enableAutoEventOnError";
  var MB = {},
    NB = [],
    OB = {},
    PB = 0,
    QB = 0;
  function WB(a, b) {
    var c = this;
    return b;
  }
  WB.F = "internal.enableAutoEventOnFormInteraction";
  function aC(a, b) {
    var c = this;
    return b;
  }
  aC.F = "internal.enableAutoEventOnFormSubmit";
  function fC() {
    var a = this;
  }
  fC.F = "internal.enableAutoEventOnGaSend";
  var gC = {},
    hC = [];
  function oC(a, b) {
    var c = this;
    return b;
  }
  oC.F = "internal.enableAutoEventOnHistoryChange";
  var pC = ["http://", "https://", "javascript:", "file://"];
  var qC = function (a, b) {
      if (a.which === 2 || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
        return !1;
      var c = Mc(b, "href");
      if (
        c.indexOf(":") !== -1 &&
        !pC.some(function (k) {
          return Eb(c, k);
        })
      )
        return !1;
      var d = c.indexOf("#"),
        e = Mc(b, "target");
      if ((e && e !== "_self" && e !== "_parent" && e !== "_top") || d === 0)
        return !1;
      if (d > 0) {
        var f = Yi(aj(c)),
          g = Yi(aj(C.location.href));
        return f !== g;
      }
      return !0;
    },
    rC = function (a, b) {
      for (
        var c = Vi(
            aj(
              (b.attributes && b.attributes.formaction ? b.formAction : "") ||
                b.action ||
                Mc(b, "href") ||
                b.src ||
                b.code ||
                b.codebase ||
                ""
            ),
            "host"
          ),
          d = 0;
        d < a.length;
        d++
      )
        try {
          if (new RegExp(a[d]).test(c)) return !1;
        } catch (e) {}
      return !0;
    },
    sC = function () {
      function a(c) {
        var d = c.target;
        if (
          d &&
          c.which !== 3 &&
          !(c.j || (c.timeStamp && c.timeStamp === b))
        ) {
          b = c.timeStamp;
          d = Gc(d, ["a", "area"], 100);
          if (!d) return c.returnValue;
          var e = c.defaultPrevented || c.returnValue === !1,
            f = Oz("lcl", e ? "nv.mwt" : "mwt", 0),
            g;
          g = e ? Oz("lcl", "nv.ids", []) : Oz("lcl", "ids", []);
          for (var k = [], m = 0; m < g.length; m++) {
            var n = g[m],
              p = Oz("lcl", "aff.map", {})[n];
            (p && !rC(p, d)) || k.push(n);
          }
          if (k.length) {
            var q = qC(c, d),
              r = Tz(d, "gtm.linkClick", k);
            r["gtm.elementText"] = Ec(d);
            r["gtm.willOpenInNewWindow"] = !q;
            if (q && !e && f && d.href) {
              var t = !!ob(String(Mc(d, "rel") || "").split(" "), function (x) {
                  return x.toLowerCase() === "noreferrer";
                }),
                v = C[(Mc(d, "target") || "_self").substring(1)],
                u = !0,
                w = Dy(function () {
                  var x;
                  if ((x = u && v)) {
                    var y;
                    a: if (t) {
                      var A;
                      try {
                        A = new MouseEvent(c.type, { bubbles: !0 });
                      } catch (B) {
                        if (!E.createEvent) {
                          y = !1;
                          break a;
                        }
                        A = E.createEvent("MouseEvents");
                        A.initEvent(c.type, !0, !0);
                      }
                      A.j = !0;
                      c.target.dispatchEvent(A);
                      y = !0;
                    } else y = !1;
                    x = !y;
                  }
                  x && (v.location.href = Mc(d, "href"));
                }, f);
              if (By(r, w, f)) u = !1;
              else
                return (
                  c.preventDefault && c.preventDefault(), (c.returnValue = !1)
                );
            } else By(r, function () {}, f || 2e3);
            return !0;
          }
        }
      }
      var b = 0;
      Bc(E, "click", a, !1);
      Bc(E, "auxclick", a, !1);
    };
  function tC(a, b) {
    var c = this;
    K(this.getName(), ["dustOptions:?PixieMap", "triggerId:?*"], arguments);
    var d = I(a);
    Hz([
      function () {
        M(c, "detect_link_click_events", d);
      },
    ]);
    var e = d && !!d.waitForTags,
      f = d && !!d.checkValidation,
      g = d ? d.affiliateDomains : void 0;
    b = Nz(b);
    if (e) {
      var k = Number(d.waitForTagsTimeout);
      (k > 0 && isFinite(k)) || (k = 2e3);
      var m = function (p) {
        return Math.max(k, p);
      };
      Sz("lcl", "mwt", m, 0);
      f || Sz("lcl", "nv.mwt", m, 0);
    }
    var n = function (p) {
      p.push(b);
      return p;
    };
    Sz("lcl", "ids", n, []);
    f || Sz("lcl", "nv.ids", n, []);
    g &&
      Sz(
        "lcl",
        "aff.map",
        function (p) {
          p[b] = g;
          return p;
        },
        {}
      );
    Oz("lcl", "init", !1) || (sC(), Pz("lcl", "init", !0));
    return b;
  }
  tC.F = "internal.enableAutoEventOnLinkClick";
  var uC, vC;
  function GC(a, b) {
    var c = this;
    return b;
  }
  GC.F = "internal.enableAutoEventOnScroll";
  function HC(a) {
    return function () {
      if (a.limit && a.Kh >= a.limit) a.Vf && C.clearInterval(a.Vf);
      else {
        a.Kh++;
        var b = zb();
        Cy({
          event: a.eventName,
          "gtm.timerId": a.Vf,
          "gtm.timerEventNumber": a.Kh,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.limit,
          "gtm.timerStartTime": a.hk,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.hk,
          "gtm.triggers": a.gn,
        });
      }
    };
  }
  function IC(a, b) {
    return b;
  }
  IC.F = "internal.enableAutoEventOnTimer";
  var JC = function (a, b, c) {
    function d() {
      var g = a();
      f += e ? ((zb() - e) * g.playbackRate) / 1e3 : 0;
      e = zb();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (g, k, m) {
        var n = a(),
          p = n.oh,
          q = m ? Math.round(m) : k ? Math.round(n.oh * k) : Math.round(n.Jj),
          r =
            k !== void 0
              ? Math.round(k * 100)
              : p <= 0
              ? 0
              : Math.round((q / p) * 100),
          t = E.hidden ? !1 : ks(c) >= 0.5;
        d();
        var v = void 0;
        b !== void 0 && (v = [b]);
        var u = Tz(c, "gtm.video", v);
        u["gtm.videoProvider"] = "youtube";
        u["gtm.videoStatus"] = g;
        u["gtm.videoUrl"] = n.url;
        u["gtm.videoTitle"] = n.title;
        u["gtm.videoDuration"] = Math.round(p);
        u["gtm.videoCurrentTime"] = Math.round(q);
        u["gtm.videoElapsedTime"] = Math.round(f);
        u["gtm.videoPercent"] = r;
        u["gtm.videoVisible"] = t;
        return u;
      },
      dk: function () {
        e = zb();
      },
      od: function () {
        d();
      },
    };
  };
  var gc = ja(["data-gtm-yt-inspected-"]),
    KC = ["www.youtube.com", "www.youtube-nocookie.com"],
    LC,
    MC = !1;
  function WC(a, b) {
    var c = this;
    return b;
  }
  WC.F = "internal.enableAutoEventOnYouTubeActivity";
  function XC(a, b) {
    K(
      this.getName(),
      ["booleanExpression:!string", "context:?PixieMap"],
      arguments
    );
    var c = b ? I(b) : {},
      d = a,
      e = !1;
    return e;
  }
  XC.F = "internal.evaluateBooleanExpression";
  var YC;
  function ZC(a) {
    var b = !1;
    return b;
  }
  ZC.F = "internal.evaluateMatchingRules";
  var dD = function (a) {
      var b,
        c,
        d = a.metadata.send_as_iframe,
        e = a.j[T.g.xg];
      X([T.g.O, T.g.N])
        ? d
          ? ((b = Di()
              ? Ci() + "/activityi/" + e + ";"
              : "https://" + e + ".fls.doubleclick.net/activityi;"),
            (c = 3))
          : ((b = jj("https://ad.doubleclick.net") + "/activity;"), (c = 1))
        : ((b =
            "" + jj("https://ade.googlesyndication.com") + "/ddm/activity/"),
          (c = 2));
      return { baseUrl: b, endpoint: c, Rm: d };
    },
    fD = function (a) {
      a.metadata.hit_type === "page_view"
        ? Qu(a)
        : eD(a, function (b) {
            var c = a.metadata.parsed_target,
              d = dD(a),
              e = d.baseUrl,
              f = d.Rm,
              g = [];
            sb(b, function (p, q) {
              g.push(p + "=" + q);
            });
            var k = e + g.join(";") + "?";
            f ? yc(k, a.m.onSuccess) : zc(k, a.m.onSuccess, a.m.onFailure);
            if (a.metadata.attribution_reporting_experiment) {
              var m =
                "" +
                jj("https://ad.doubleclick.net") +
                "/activity;register_conversion=1;" +
                g.join(";") +
                "?";
              Ac(m, void 0, void 0, { attributionsrc: "" });
            }
            if (a.metadata.send_fledge_experiment) {
              var n =
                Zt() + "/td/fls/rul/activityi;fledge=1;" + g.join(";") + "?";
              Xt(n, Pj(c.target.id));
            }
          });
    },
    eD = function (a, b) {
      var c = [],
        d = {},
        e = function (r, t, v) {
          var u = v ? String(t) : encodeURIComponent(String(t));
          d[r] = u;
        },
        f = Pa(a.j[T.g.Xc]) ? a.j[T.g.Xc] : {};
      sb(a.j, function (r, t) {
        var v = gD[r];
        if (v) {
          var u = $f[v] === !0;
          if (t === void 0 || (!u && t === "")) return;
          e(v, t);
        }
        v === void 0 && e(r, t);
      });
      e("gtm", Yn({ ra: a.metadata.source_canonical_id }));
      Fn() && e("gcs", Gn());
      e("gcd", Kn(a.m));
      Nn() && e("dma_cps", Ln());
      e("dma", Mn());
      jn(rn()) && e("tcfd", On());
      Bi.j && e("tag_exp", Bi.j);
      var g = hD(a);
      g && e("prd", g, !0);
      e("epver", "2");
      var k = a.j[T.g.qa];
      k && a.metadata.redact_click_ids && (k = bj(String(k)));
      sb(f, function (r, t) {
        if (t != null)
          if (r === "~oref") k = t;
          else {
            var v = encodeURIComponent(r);
            d[v] != null && Q(141);
            e(v, t);
          }
      });
      var m = X(T.g.N);
      O(89) && (m = !1);
      var n = a.metadata.user_data;
      if (n && m) {
        var p = Ah(n);
        p &&
          c.push(
            p.then(function (r) {
              e("em", r.We);
            })
          );
      }
      var q = function () {
        k && e("~oref", k);
        b(d);
      };
      if (c.length)
        try {
          Promise.all(c).then(function () {
            q();
          });
          return;
        } catch (r) {}
      q();
    },
    hD = function (a) {
      var b = a.j[T.g.ba];
      if (!Array.isArray(b)) return "";
      for (
        var c = [],
          d = function (n, p, q) {
            q !== void 0 &&
              q !== "" &&
              c.push("" + n + p + ":" + encodeURIComponent(String(q)));
          },
          e = 0;
        e < b.length;
        e++
      ) {
        var f = b[e],
          g = O(60),
          k = f.id;
        f.item_id !== void 0 &&
          (g && (k = f.item_id),
          f.id !== void 0 ? (Q(150), f.id !== f.item_id && Q(151)) : Q(152));
        k === void 0 && g && (k = f.item_name);
        var m = e + 1;
        d("i", m, k);
        d("p", m, f.price);
        d("q", m, f[T.g.hd]);
        d("c", m, f[T.g.sc]);
        d("l", m, f[T.g.Oa]);
        d("a", m, f.accountId);
      }
      return c.join("|");
    },
    iD = {},
    gD =
      ((iD[T.g.Qb] = "gcu"),
      (iD[T.g.kb] = "gclgb"),
      (iD[T.g.Ua] = "gclaw"),
      (iD[T.g.Eb] = "auiddc"),
      (iD[T.g.Ub] = "ps"),
      (iD[T.g.qf] = "pscdl"),
      (iD[T.g.og] = "gcldc"),
      (iD[T.g.pb] = "edid"),
      (iD[T.g.Pi] = "cat"),
      (iD[T.g.Qi] = "type"),
      (iD[T.g.xg] = "src"),
      (iD[T.g.Ri] = "pcor"),
      (iD[T.g.Si] = "num"),
      (iD[T.g.Ti] = "tran"),
      (iD[T.g.Ui] = "u"),
      (iD[T.g.Zd] = "gac"),
      (iD[T.g.wc] = "gacgb"),
      (iD[T.g.xc] = "gdpr"),
      (iD[T.g.sb] = "gdid"),
      (iD[T.g.yc] = "_ng"),
      (iD[T.g.Hb] = "frm"),
      (iD[T.g.be] = "gtm_up"),
      (iD[T.g.hd] = "qty"),
      (iD[T.g.Bc] = "gdpr_consent"),
      (iD[T.g.xa] = "ord"),
      (iD[T.g.Ef] = "uaa"),
      (iD[T.g.Ff] = "uab"),
      (iD[T.g.Gf] = "uafvl"),
      (iD[T.g.Hf] = "uamb"),
      (iD[T.g.If] = "uam"),
      (iD[T.g.Jf] = "uap"),
      (iD[T.g.Kf] = "uapv"),
      (iD[T.g.Lf] = "uaw"),
      (iD[T.g.ka] = "cost"),
      (iD[T.g.Mb] = "npa"),
      (iD[T.g.qa] = null),
      (iD[T.g.Xc] = null),
      (iD[T.g.ba] = null),
      iD);
  var jD = function () {
      return [T.g.O, T.g.N];
    },
    lD = function (a) {
      var b = jl(a);
      if (b && (b.ids.length === 1 || b.ids.length === 3)) {
        var c = b.ids[ml[4]] || "",
          d = b.ids[ml[5]],
          e = "",
          f = "unknown";
        if (d) {
          var g = d.split("+");
          if (g.length !== 2) return;
          e = g[0];
          f = kD[g[1].toLowerCase()];
        }
        if (f) return { target: b, kl: c, ml: e, tl: f };
      }
    },
    mD = function (a) {
      Zr(a);
    },
    nD = function (a) {
      var b = Jb(El(a.m, T.g.fa, 1), "."),
        c = Jb(El(a.m, T.g.fa, 2), ".");
      a.j[T.g.sb] = b;
      a.j[T.g.pb] = c;
    },
    oD = function (a) {
      if (!a.metadata.consent_updated) {
        var b = V(a.m, T.g.Li);
        if (Pa(b) && b.exclusion_parameters && b.engines)
          if (Wn()) {
          } else {
            var c = V(a.m, T.g.na) !== !1,
              d = sr(a),
              e = function () {
                if (X(jD())) {
                  var f = {
                    config: b,
                    gtm: Yn({ ra: a.metadata.source_canonical_id }),
                  };
                  c && (hp(d), (f.auiddc = fp[ip(d.prefix)]));
                  C.__dc_ns_processor === void 0 && (C.__dc_ns_processor = []);
                  C.__dc_ns_processor.push(f);
                  wc("https://www.googletagmanager.com/dclk/ns/v1.js");
                }
              };
            X(jD()) ? e() : Ek(e, jD());
          }
      }
    },
    rD = function (a, b, c, d) {
      function e() {
        for (var p = l(g), q = p.next(); !q.done; q = p.next()) {
          var r = q.value;
          if (
            !r.metadata.consent_updated ||
            r.metadata.hit_type === "page_view" ||
            X(jD())
          ) {
            for (
              var t = l(r.metadata.hit_type === "page_view" ? pD : qD),
                v = t.next();
              !v.done;
              v = t.next()
            ) {
              var u = v.value;
              u(r);
              if (r.isAborted) break;
            }
            r.metadata.speculative || r.isAborted || fD(r);
          }
        }
      }
      var f = lD(a);
      if (f) {
        var g = [],
          k = new nB(f.target, b, d);
        k.metadata.parsed_target = f;
        k.metadata.counting_method = f.tl;
        g.push(k);
        if (O(19) && b === T.g.aa) {
          var m = new nB(f.target, b, d);
          m.metadata.hit_type = "page_view";
          m.metadata.speculative = !0;
          g.push(m);
        }
        var n = jD();
        cl(function () {
          e();
          X(n) ||
            bl(function (p) {
              var q, r;
              q = p.consentEventId;
              r = p.consentPriorityId;
              for (var t = l(g), v = t.next(); !v.done; v = t.next()) {
                var u = v.value;
                u.metadata.consent_updated = !0;
                u.metadata.consent_event_id = q;
                u.metadata.consent_priority_id = r;
              }
              e(q, r);
            }, n);
        }, n);
      } else F(d.onFailure);
    },
    qD = [
      Ar,
      function (a) {
        a.metadata.conversion_linker_enabled = V(a.m, T.g.na) !== !1;
        var b = V(a.m, T.g.lf) === !0,
          c = X(jD());
        if (Wn() && b) {
          b = !1;
        }
        a.metadata.send_as_iframe = b && c;
        var d = V(a.m, T.g.da);
        a.metadata.redact_ads_data = d !== void 0 && d !== !1;
        a.metadata.redact_click_ids = a.metadata.redact_ads_data && !X(jD());
        a.metadata.cookie_options = sr(a);
      },
      function (a) {
        if (!a.metadata.consent_updated) {
          var b = a.m.isGtmEvent ? V(a.m, "oref") : Yi(aj(C.location.href));
          a.j[T.g.qa] = b;
        }
      },
      function (a) {
        if (a.eventName === T.g.Ta && !a.m.isGtmEvent) {
          if (!a.metadata.consent_updated) {
            var b = {
              callback: V(a.m, T.g.Gb),
              Sj: V(a.m, V(a.m, T.g.rb)),
              mk: V(a.m, T.g.rb),
            };
            zr(b, a.metadata.cookie_options, a.metadata.redact_ads_data, Vq);
          }
          a.isAborted = !0;
        }
      },
      function (a) {
        if (a.eventName === T.g.aa && !a.m.isGtmEvent) {
          if (!a.metadata.consent_updated && !O(19)) {
            var b = a.metadata.conversion_linker_enabled,
              c = a.metadata.cookie_options,
              d = a.metadata.redact_ads_data;
            wr(
              {
                pd: b,
                yd: V(a.m, T.g.oa) || {},
                Dd: V(a.m, T.g.Wa),
                ra: a.metadata.source_canonical_id,
                m: a.m,
                zd: d,
                lk: V(a.m, T.g.ya),
              },
              c
            );
            oD(a);
            var e = a.metadata.parsed_target.target,
              f = Jb(El(a.m, T.g.fa, 2), "."),
              g = Jb(El(a.m, T.g.fa, 1), "."),
              k = $m(!0);
            Kr({
              lh: !0,
              bc: b ? c : void 0,
              qh: f,
              m: a.m,
              yh: g,
              Tf: b,
              zd: d,
              targetId: e.ids.length > 1 ? e.id : "",
              Bh: k,
            });
          }
          a.isAborted = !0;
        }
      },
      function (a) {
        var b = a.metadata.parsed_target,
          c = {},
          d = V(a.m, T.g.Xc);
        Pa(d) &&
          sb(d, function (e, f) {
            f != null && (c[e] = f);
          });
        a.j[T.g.xg] = b.target.ids[ml[3]];
        a.j[T.g.Qi] = b.kl;
        a.j[T.g.Pi] = b.ml;
        a.j[T.g.Xc] = c;
      },
      function (a) {
        var b = a.metadata.counting_method;
        switch (b) {
          case "standard":
            a.j[T.g.xa] = pb(1e11, 1e13);
            return;
          case "unique":
            a.j[T.g.xa] = "1";
            a.j[T.g.Si] = pb(1e11, 1e13);
            return;
          case "per_session":
            var c = V(a.m, T.g.ub);
            a.j[T.g.xa] = c;
            return;
        }
        var d = b === "transactions" ? "1" : V(a.m, T.g.hd);
        a.j[T.g.hd] = d;
        a.copyToHitData(T.g.ka);
        a.copyToHitData(T.g.xa);
      },
      function (a) {
        a.m.isGtmEvent &&
          (a.copyToHitData(T.g.Ui),
          a.copyToHitData(T.g.Ti),
          a.copyToHitData(T.g.yg));
      },
      function (a) {
        a.metadata.consent_updated && (a.j[T.g.Qb] = "1");
      },
      function (a) {
        var b = yn();
        b && (a.j[T.g.xc] = b);
        var c = xn();
        c && (a.j[T.g.Bc] = c);
      },
      function (a) {
        Uo(!1)._up === "1" && (a.j[T.g.be] = "1");
      },
      function (a) {
        En(a.m) ? (a.j[T.g.Mb] = "0") : (a.j[T.g.Mb] = "1");
      },
      function (a) {
        if (a.metadata.conversion_linker_enabled) {
          var b = X(jD()),
            c = a.metadata.cookie_options,
            d = a.metadata.redact_ads_data,
            e = Vq(c.prefix, d),
            f = !1;
          hp(c);
          var g = b ? fp[ip(c.prefix)] : void 0;
          e && e.length && ((a.j[T.g.og] = e.join(".")), (f = !0));
          if (a.metadata.send_as_iframe) {
            var k = Vp(c.prefix) !== "_gcl",
              m;
            if (!(m = f)) {
              var n = c.prefix;
              m = !(cj("gclaw") || cj("gac") || (jq().aw || []).length > 0
                ? 0
                : (jq().gb || []).length > 0 ||
                  (O(73) && jq().gbraid !== void 0) ||
                  Fq(n, !0));
            }
            if (m) {
              var p = Wq(c.prefix, d);
              p && p.length && ((a.j[T.g.Ua] = p.join(".")), Q(59));
              var q,
                r = cj("gac");
              (q = r
                ? !X(Lq()) && d
                  ? "0"
                  : decodeURIComponent(r)
                : Tq(Pp(Op()) ? Fp() : {})) &&
                (k || (a.j[T.g.Zd] = q));
            } else {
              var t;
              a: {
                var v = c.prefix,
                  u = cj("gclgb");
                if (u) t = u.split(".");
                else {
                  var w = Vp(v);
                  if (w === "_gcl") {
                    var x = !X(Lq()) && d,
                      y = jq(),
                      A = [];
                    y.wbraid && A.push(y.wbraid);
                    O(73) && y.gbraid && A.push(y.gbraid);
                    if (A.length > 0) {
                      t = x ? ["0"] : A;
                      break a;
                    }
                  }
                  t = Tp({ prefix: w });
                }
              }
              var B = t;
              B.length && (a.j[T.g.kb] = B.join("."));
              if (!k) {
                var D,
                  H = cj("gacgb");
                (D = H
                  ? !X(Lq()) && d
                    ? "0"
                    : decodeURIComponent(H)
                  : Tq(Pp(Op()) ? Fp("_gac_gb", !0) : {})) && (a.j[T.g.wc] = D);
              }
            }
          }
          g && (a.j[T.g.Eb] = g);
        }
      },
      function (a) {
        var b = a.metadata.counting_method;
        if (b === "transactions" || b === "items_sold") {
          var c = V(a.m, T.g.ba);
          if (Array.isArray(c)) {
            if (!a.m.isGtmEvent)
              for (
                var d = V(a.m, T.g.sc),
                  e = V(a.m, T.g.Oa),
                  f = l(c),
                  g = f.next();
                !g.done;
                g = f.next()
              ) {
                var k = g.value;
                Pa(k) &&
                  ((k[T.g.sc] = d), (k[T.g.Oa] = e), (k.accountId = void 0));
              }
            a.j[T.g.ba] = c;
          }
        }
      },
      function (a) {
        var b = V(a.m, T.g.Wc),
          c = {};
        Pa(b) &&
          sb(b, function (g, k) {
            z(k) && sD.test(g) && (c[g] = k);
          });
        for (var d = Dl(a.m), e = 0; e < d.length; e++) {
          var f = d[e];
          sD.test(f) && (c[f] = f);
        }
        sb(c, function (g, k) {
          a.j[g] = V(a.m, k);
        });
      },
      nD,
      function (a) {
        var b = X(jD()) && Vt("attribution-reporting");
        if ((a.metadata.attribution_reporting_experiment = b))
          (a.j[T.g.Ub] = "1"), (a.j[T.g.Ri] = pb());
      },
      function (a) {
        if (a.m.isGtmEvent) {
          var b = V(a.m, T.g.Ba);
          Pa(b) && (a.metadata.user_data = b);
        }
      },
      function (a) {
        if (!Ot(C)) Q(87);
        else if (Tt !== void 0) {
          Q(85);
          var b = Mt();
          b ? Qt(b, a) : Q(86);
        }
      },
      function (a) {
        O(46) &&
          V(a.m, T.g.za) !== !1 &&
          X(jD()) &&
          En(a.m) &&
          Wt() &&
          (a.metadata.send_fledge_experiment = !0);
      },
      function (a) {
        if (dt(a, "ccd_add_1p_data", !1) && X(T.g.N)) {
          var b = a.m.C[T.g.ie];
          if (Ri(b)) {
            var c = V(a.m, T.g.Ba);
            c === null
              ? (a.metadata.user_data_from_code = null)
              : (b.enable_code && Pa(c) && (a.metadata.user_data_from_code = c),
                Pa(b.selectors) &&
                  (a.metadata.user_data_from_manual = Qi(b.selectors)));
          }
        }
      },
      Br,
      Cr,
      Dr,
      mD,
    ],
    pD = [vr, nD, oD, Dr, mD],
    kD = {
      "": "unknown",
      standard: "standard",
      unique: "unique",
      per_session: "per_session",
      transactions: "transactions",
      items_sold: "items_sold",
    },
    sD = /^u([1-9]\d?|100)$/;
  function GD() {
    return zn(7) && zn(9) && zn(10);
  }
  function BE(a, b, c, d) {}
  BE.F = "internal.executeEventProcessor";
  function CE(a) {
    var b;
    K(this.getName(), ["javascript:!string"], arguments);
    M(this, "unsafe_run_arbitrary_javascript");
    try {
      var c = C.google_tag_manager;
      c && typeof c.e === "function" && (b = c.e(a));
    } catch (d) {}
    return cd(b, this.D, 1);
  }
  CE.F = "internal.executeJavascriptString";
  function DE(a) {
    var b;
    return b;
  }
  function EE(a) {
    var b = {};
    return cd(b);
  }
  EE.F = "internal.getAdsCookieWritingOptions";
  function FE(a) {
    var b = !1;
    return b;
  }
  FE.F = "internal.getAllowAdPersonalization";
  var GE = null;
  function HE() {
    var a = new Wa();
    return a;
  }
  HE.R = "getContainerVersion";
  function IE(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  IE.R = "getCookieValues";
  function JE() {
    return Mk();
  }
  JE.F = "internal.getCountryCode";
  function KE() {
    var a = [];
    return cd(a);
  }
  KE.F = "internal.getDestinationIds";
  function LE(a, b) {
    var c = null;
    return c;
  }
  LE.F = "internal.getElementAttribute";
  function ME(a) {
    var b = null;
    return b;
  }
  ME.F = "internal.getElementById";
  function NE(a) {
    var b = "";
    return b;
  }
  NE.F = "internal.getElementInnerText";
  function OE(a, b) {
    var c = null;
    return c;
  }
  OE.F = "internal.getElementProperty";
  function PE(a) {
    var b;
    return b;
  }
  PE.F = "internal.getElementValue";
  function QE(a) {
    var b = 0;
    return b;
  }
  QE.F = "internal.getElementVisibilityRatio";
  function RE(a) {
    var b = null;
    return b;
  }
  RE.F = "internal.getElementsByCssSelector";
  function SE(a) {
    var b;
    K(this.getName(), ["keyPath:!string"], arguments);
    M(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = Lz(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
            for (var v = r[t].split("."), u = 0; u < v.length; u++)
              n.push(v[u]), u !== v.length - 1 && n.push(m);
            t !== r.length - 1 && n.push(k);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], x = "", y = l(n), A = y.next();
          !A.done;
          A = y.next()
        ) {
          var B = A.value;
          B === m
            ? (w.push(x), (x = ""))
            : (x = B === g ? x + "\\" : B === k ? x + "." : x + B);
        }
        x && w.push(x);
        for (var D = l(w), H = D.next(); !H.done; H = D.next()) {
          if (f == null) {
            c = void 0;
            break a;
          }
          f = f[H.value];
        }
        c = f;
      } else c = void 0;
    }
    b = cd(c, this.D, 1);
    return b;
  }
  SE.F = "internal.getEventData";
  var TE = {};
  TE.enableAWFledge = O(28);
  TE.enableAdsConversionValidation = O(15);
  TE.enableAutoPhoneAndAddressDetection = O(26);
  TE.enableAutoPiiOnPhoneAndAddress = O(27);
  TE.enableCachedEcommerceData = O(34);
  TE.enableCloudRecommentationsErrorLogging = O(35);
  TE.enableCloudRecommentationsSchemaIngestion = O(36);
  TE.enableCloudRetailInjectPurchaseMetadata = O(38);
  TE.enableCloudRetailLogging = O(37);
  TE.enableCloudRetailPageCategories = O(39);
  TE.enableConsentDisclosureActivity = O(40);
  TE.enableConversionMarkerPageViewRename = O(42);
  TE.enableDCFledge = O(46);
  TE.enableDecodeUri = O(68);
  TE.enableDeferAllEnhancedMeasurement = O(47);
  TE.enableDetectUserProvidedDataErrorHandling = O(49);
  TE.enableDmaBlockDisclosure = O(51);
  TE.enableFormSkipValidation = O(63);
  TE.enableGtmEcModeFix = O(74);
  TE.enableUrlDecodeEventUsage = O(106);
  TE.enableZoneConfigInChildContainers = O(108);
  TE.useEnableAutoEventOnFormApis = O(118);
  TE.autoPiiEligible = Rk();
  function UE() {
    return cd(TE);
  }
  UE.F = "internal.getFlags";
  function VE() {
    return new $c(jz);
  }
  VE.F = "internal.getHtmlId";
  function WE(a, b) {
    var c;
    return c;
  }
  WE.F = "internal.getProductSettingsParameter";
  function XE(a, b) {
    var c;
    return c;
  }
  XE.R = "getQueryParameters";
  function YE(a, b) {
    var c;
    return c;
  }
  YE.R = "getReferrerQueryParameters";
  function ZE(a) {
    var b = "";
    return b;
  }
  ZE.R = "getReferrerUrl";
  function $E() {
    return Nk();
  }
  $E.F = "internal.getRegionCode";
  function aF(a, b) {
    var c;
    return c;
  }
  aF.F = "internal.getRemoteConfigParameter";
  function bF(a) {
    var b = "";
    return b;
  }
  bF.R = "getUrl";
  function cF() {
    M(this, "get_user_agent");
    return nc.userAgent;
  }
  cF.F = "internal.getUserAgent";
  function kF() {
    return (C.gaGlobal = C.gaGlobal || {});
  }
  function lF() {
    var a = kF();
    a.hid = a.hid || pb();
    return a.hid;
  }
  function mF(a, b) {
    var c = kF();
    if (c.vid === void 0 || (b && !c.from_cookie))
      (c.vid = a), (c.from_cookie = b);
  }
  function IF(a) {
    if (gt(a) || Di()) a.j[T.g.cj] = Nk() || Mk();
    O(65) && !gt(a) && Di() && (a.j[T.g.mj] = "::");
  }
  var YF = function (a) {
      this.H = a;
      this.j = "";
    },
    ZF = function (a, b) {
      a.C = b;
      return a;
    },
    $F = function (a, b) {
      b = a.j + b;
      for (var c = b.indexOf("\n\n"); c !== -1; ) {
        var d = a,
          e;
        a: {
          var f = l(b.substring(0, c).split("\n")),
            g = f.next().value,
            k = f.next().value;
          if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0)
            try {
              e = JSON.parse(k.substring(k.indexOf(":") + 1));
              break a;
            } catch (G) {}
          e = void 0;
        }
        var m = d,
          n = e;
        if (n) {
          var p = n.send_pixel,
            q = n.options,
            r = m.H;
          if (p) {
            var t = p || [];
            if (Array.isArray(t))
              for (
                var v = Pa(q) ? q : {}, u = l(t), w = u.next();
                !w.done;
                w = u.next()
              )
                r(w.value, v);
          }
          var x = n.create_iframe,
            y = n.options,
            A = m.C;
          if (x && A) {
            var B = x || [];
            if (Array.isArray(B))
              for (
                var D = Pa(y) ? y : {}, H = l(B), J = H.next();
                !J.done;
                J = H.next()
              )
                A(J.value, D);
          }
        }
        b = b.substring(c + 2);
        c = b.indexOf("\n\n");
      }
      a.j = b;
    };
  function aG(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  var MG = window,
    NG = document,
    OG = function (a) {
      var b = MG._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        NG.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && MG["ga-disable-" + a] === !0)
      )
        return !0;
      try {
        var c = MG.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
      } catch (p) {}
      for (
        var d = [], e = String(NG.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          k = g[0].replace(/^\s*|\s*$/g, "");
        if (k && k == "AMP_TOKEN") {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
      return NG.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function ZG(a) {
    sb(a, function (c) {
      c.charAt(0) === "_" && delete a[c];
    });
    var b = a[T.g.ab] || {};
    sb(b, function (c) {
      c.charAt(0) === "_" && delete b[c];
    });
  }
  function CH(a, b) {}
  function DH(a, b) {
    var c = function () {};
    return c;
  }
  function EH(a, b, c) {}
  var FH = DH;
  var GH = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function HH(a, b, c) {
    var d = this;
    K(
      this.getName(),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? I(b) : {};
    Hz([
      function () {
        return M(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? I(c) : {},
      g = Lz(this);
    f.originatingEntity = BA(g);
    Tx(Lx(a, e), g.eventId, f);
  }
  HH.F = "internal.gtagConfig";
  function IH() {
    var a = {};
    return a;
  }
  function KH(a, b) {}
  KH.R = "gtagSet";
  function LH(a, b) {}
  LH.R = "injectHiddenIframe";
  var MH = xz();
  function NH(a, b, c, d, e) {
    var f = this;
  }
  NH.F = "internal.injectHtml";
  var RH = {};
  var SH = function (a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          wc(
            a,
            function () {
              for (var g = e[f][0], k = 0; k < g.length; k++) F(g[k]);
              g.push = function (m) {
                F(m);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], k = 0; k < g.length; k++) F(g[k]);
              e[f] = null;
            },
            b
          ))
      : wc(a, c, d, b);
  };
  function TH(a, b, c, d) {
    if (!Wn()) {
      K(
        this.getName(),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments
      );
      M(this, "inject_script", a);
      var e = this.D;
      SH(
        a,
        void 0,
        function () {
          b && b.fb(e);
        },
        function () {
          c && c.fb(e);
        },
        RH,
        d
      );
    }
  }
  var UH = { dl: 1, id: 1 },
    VH = {};
  function WH(a, b, c, d) {}
  TH.R = "injectScript";
  WH.F = "internal.injectScript";
  function XH(a) {
    var b = !0;
    return b;
  }
  XH.R = "isConsentGranted";
  function YH() {
    return Pk();
  }
  YH.F = "internal.isDmaRegion";
  function ZH(a) {
    var b = !1;
    return b;
  }
  ZH.F = "internal.isEntityInfrastructure";
  function $H() {
    var a = Wg(function (b) {
      Lz(this).log("error", b);
    });
    a.R = "JSON";
    return a;
  }
  function aI(a) {
    var b = void 0;
    return cd(b);
  }
  aI.F = "internal.legacyParseUrl";
  function bI() {
    return !1;
  }
  var cI = {
    getItem: function (a) {
      var b = null;
      return b;
    },
    setItem: function (a, b) {
      return !1;
    },
    removeItem: function (a) {},
  };
  function dI() {
    try {
      M(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = I(a[b], this.D);
    console.log.apply(console, a);
  }
  dI.R = "logToConsole";
  function eI(a, b) {}
  eI.F = "internal.mergeRemoteConfig";
  function fI(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return cd(d);
  }
  fI.F = "internal.parseCookieValuesFromString";
  function gI(a) {
    var b = void 0;
    return b;
  }
  gI.R = "parseUrl";
  function hI(a) {}
  hI.F = "internal.processAsNewEvent";
  function iI(a, b, c) {
    var d;
    return d;
  }
  iI.F = "internal.pushToDataLayer";
  function jI(a) {
    var b = !1;
    return b;
  }
  jI.R = "queryPermission";
  function kI() {
    var a = "";
    return a;
  }
  kI.R = "readCharacterSet";
  function lI() {
    return hi.hb;
  }
  lI.F = "internal.readDataLayerName";
  function mI() {
    var a = "";
    return a;
  }
  mI.R = "readTitle";
  function nI(a, b) {
    var c = this;
  }
  nI.F = "internal.registerCcdCallback";
  function oI(a) {
    return !0;
  }
  oI.F = "internal.registerDestination";
  var pI = ["config", "event", "get", "set"];
  function qI(a, b, c) {}
  qI.F = "internal.registerGtagCommandListener";
  function rI(a, b) {
    var c = !1;
    return c;
  }
  rI.F = "internal.removeDataLayerEventListener";
  function sI(a, b) {}
  sI.F = "internal.removeFormData";
  function tI() {}
  tI.R = "resetDataLayer";
  function uI(a, b, c, d) {}
  uI.F = "internal.sendGtagEvent";
  function vI(a, b, c) {}
  vI.R = "sendPixel";
  function wI(a, b) {}
  wI.F = "internal.setAnchorHref";
  function xI(a) {}
  xI.F = "internal.setContainerConsentDefaults";
  function yI(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    return f;
  }
  yI.R = "setCookie";
  function zI(a) {}
  zI.F = "internal.setCorePlatformServices";
  function AI(a, b) {}
  AI.F = "internal.setDataLayerValue";
  function BI(a) {}
  BI.R = "setDefaultConsentState";
  function CI(a, b) {}
  CI.F = "internal.setDelegatedConsentType";
  function DI(a, b) {}
  DI.F = "internal.setFormAction";
  function EI(a, b, c) {}
  EI.F = "internal.setInCrossContainerData";
  function FI(a, b, c) {
    return !1;
  }
  FI.R = "setInWindow";
  function GI(a, b, c) {}
  GI.F = "internal.setProductSettingsParameter";
  function HI(a, b, c) {}
  HI.F = "internal.setRemoteConfigParameter";
  function II(a, b, c, d) {
    var e = this;
  }
  II.R = "sha256";
  function JI(a, b, c) {}
  JI.F = "internal.sortRemoteConfigParameters";
  function KI(a, b) {
    var c = void 0;
    return c;
  }
  KI.F = "internal.subscribeToCrossContainerData";
  var LI = {},
    MI = {};
  LI.getItem = function (a) {
    var b = null;
    return b;
  };
  LI.setItem = function (a, b) {};
  LI.removeItem = function (a) {};
  LI.clear = function () {};
  LI.R = "templateStorage";
  function NI(a, b) {
    var c = !1;
    return c;
  }
  NI.F = "internal.testRegex";
  function OI(a) {
    var b;
    return b;
  }
  function PI(a) {
    var b;
    return b;
  }
  PI.F = "internal.unsiloId";
  function QI(a, b) {
    var c;
    return c;
  }
  QI.F = "internal.unsubscribeFromCrossContainerData";
  function RI(a) {}
  RI.R = "updateConsentState";
  var SI;
  function TI(a, b, c) {
    SI = SI || new gh();
    SI.add(a, b, c);
  }
  function UI(a, b) {
    var c = (SI = SI || new gh());
    if (c.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.contains(a))
      throw Error(
        "Attempting to add a private function with an existing API name: " +
          a +
          "."
      );
    c.j[a] = lb(b) ? Dg(a, b) : Eg(a, b);
  }
  function VI() {
    return function (a) {
      var b;
      var c = SI;
      if (c.contains(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.j.hasOwnProperty(a))) {
          var e = !1,
            f = this.D.j;
          if (f) {
            var g = f.cb();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  function WI() {
    var a = function (c) {
        return void UI(c.F, c);
      },
      b = function (c) {
        return void TI(c.R, c);
      };
    b(Fz);
    b(Mz);
    b($A);
    b(bB);
    b(cB);
    b(jB);
    b(lB);
    b(pB);
    b($H());
    b(rB);
    b(HE);
    b(IE);
    b(XE);
    b(YE);
    b(ZE);
    b(bF);
    b(KH);
    b(LH);
    b(TH);
    b(XH);
    b(dI);
    b(gI);
    b(jI);
    b(kI);
    b(mI);
    b(vI);
    b(yI);
    b(BI);
    b(FI);
    b(II);
    b(LI);
    b(RI);
    TI("Math", Ig());
    TI("Object", eh);
    TI("TestHelper", ih());
    TI("assertApi", Fg);
    TI("assertThat", Gg);
    TI("decodeUri", Kg);
    TI("decodeUriComponent", Lg);
    TI("encodeUri", Mg);
    TI("encodeUriComponent", Ng);
    TI("fail", Sg);
    TI("generateRandom", Tg);
    TI("getTimestamp", Ug);
    TI("getTimestampMillis", Ug);
    TI("getType", Vg);
    TI("makeInteger", Xg);
    TI("makeNumber", Yg);
    TI("makeString", Zg);
    TI("makeTableMap", $g);
    TI("mock", ch);
    TI("fromBase64", DE, !("atob" in C));
    TI("localStorage", cI, !bI());
    TI("toBase64", OI, !("btoa" in C));
    a(Iz);
    a(cA);
    a(oA);
    a(vA);
    a(AA);
    a(PA);
    a(YA);
    a(aB);
    a(dB);
    a(eB);
    a(fB);
    a(gB);
    a(hB);
    a(iB);
    a(kB);
    a(mB);
    a(oB);
    a(qB);
    a(sB);
    a(uB);
    a(vB);
    a(wB);
    a(xB);
    a(zB);
    a(CB);
    a(KB);
    a(LB);
    a(WB);
    a(aC);
    a(fC);
    a(oC);
    a(tC);
    a(GC);
    a(IC);
    a(WC);
    a(XC);
    a(ZC);
    a(BE);
    a(CE);
    a(EE);
    a(FE);
    a(JE);
    a(KE);
    a(LE);
    a(ME);
    a(NE);
    a(OE);
    a(PE);
    a(QE);
    a(RE);
    a(SE);
    a(UE);
    a(VE);
    a(WE);
    a($E);
    a(aF);
    a(HH);
    a(NH);
    a(WH);
    a(YH);
    a(ZH);
    a(aI);
    a(NA);
    a(eI);
    a(fI);
    a(hI);
    a(iI);
    a(lI);
    a(nI);
    a(oI);
    a(qI);
    a(rI);
    a(sI);
    a(uI);
    a(wI);
    a(xI);
    a(zI);
    a(AI);
    a(CI);
    a(DI);
    a(EI);
    a(GI);
    a(HI);
    a(JI);
    a(KI);
    a(NI);
    a(PI);
    a(QI);
    UI("internal.CrossContainerSchema", tB());
    UI("internal.GtagSchema", IH());
    TI("mockObject", dh);
    return VI();
  }
  var Dz;
  function XI() {
    Dz.j.j.H = function (a, b, c) {
      ii.SANDBOXED_JS_SEMAPHORE = ii.SANDBOXED_JS_SEMAPHORE || 0;
      ii.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        ii.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function YI(a) {
    a &&
      sb(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          yi[e] = yi[e] || [];
          yi[e].push(b);
        }
      });
  }
  var ZI = Array.isArray;
  function $I(a, b) {
    return Qa(a, b || null);
  }
  function Y(a) {
    return window.encodeURIComponent(a);
  }
  function aJ(a, b, c) {
    zc(a, b, c);
  }
  function bJ(a, b) {
    if (!a) return !1;
    var c = Vi(aj(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        f > 0 && e.charAt(0) !== "." && (f--, (e = "." + e));
        if (f >= 0 && c.indexOf(e, f) === f) return !0;
      }
    }
    return !1;
  }
  function cJ(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  }
  var lJ = C.clearTimeout,
    mJ = C.setTimeout;
  function nJ(a, b, c) {
    if (Wn()) {
      b && F(b);
    } else return wc(a, b, c);
  }
  function oJ() {
    return C.location.href;
  }
  function pJ(a, b) {
    return Ji(a, b || 2);
  }
  function qJ(a, b) {
    C[a] = b;
  }
  function rJ(a, b, c) {
    b && (C[a] === void 0 || (c && !C[a])) && (C[a] = b);
    return C[a];
  }
  function sJ(a, b) {
    if (Wn()) {
      b && F(b);
    } else yc(a, b);
  }

  var tJ = {};
  var Z = { securityGroups: {} };

  (Z.securityGroups.flc = []),
    (Z.__flc = function (a) {
      var b =
          !a.hasOwnProperty("vtp_enableConversionLinker") ||
          !!a.vtp_enableConversionLinker,
        c = cJ(a.vtp_customVariable || [], "key", "value") || {},
        d = {},
        e =
          ((d[T.g.da] = pJ(T.g.da)),
          (d[T.g.lf] = a.vtp_useImageTag === !0 ? !1 : !0),
          (d[T.g.Xa] = a.vtp_conversionCookiePrefix || void 0),
          (d[T.g.na] = b),
          (d[T.g.ub] = a.vtp_sessionId),
          (d[T.g.yg] = a.vtp_matchIdVariable),
          (d.oref = a.vtp_useImageTag ? void 0 : a.vtp_url),
          (d.tran = a.vtp_transactionVariable),
          (d.u = a.vtp_userVariable),
          (d[T.g.Ba] = a.vtp_userDataVariable),
          d);
      O(46) && ((e[T.g.za] = pJ(T.g.za)), (e[T.g.ja] = pJ(T.g.ja)));
      for (var f in c) c.hasOwnProperty(f) && (e[f] = c[f]);
      var g = "DC-" + a.vtp_advertiserId,
        k =
          g +
          "/" +
          a.vtp_groupTag +
          "/" +
          (a.vtp_activityTag +
            "+" +
            ({ UNIQUE: "unique", SESSION: "per_session" }[a.vtp_ordinalType] ||
              "standard"));
      ww(g, void 0, { source: 7, fromContainerExecution: !0, siloed: !0 });
      var m = {
        noGtmEvent: !0,
        isGtmEvent: !0,
        onSuccess: a.vtp_gtmOnSuccess,
        onFailure: a.vtp_gtmOnFailure,
      };
      Tx(Rx(Dj(k), "", e), a.vtp_gtmEventId, m);
    }),
    (Z.__flc.o = "flc"),
    (Z.__flc.isVendorTemplate = !0),
    (Z.__flc.priorityOverride = 0),
    (Z.__flc.isInfrastructure = !1),
    (Z.__flc.runInSiloedMode = !1);
  (Z.securityGroups.f = ["google"]),
    (Z.__f = function (a) {
      var b = pJ("gtm.referrer", 1) || E.referrer;
      return b
        ? a.vtp_component && a.vtp_component != "URL"
          ? Vi(
              aj(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : Yi(aj(String(b)))
        : String(b);
    }),
    (Z.__f.o = "f"),
    (Z.__f.isVendorTemplate = !0),
    (Z.__f.priorityOverride = 0),
    (Z.__f.isInfrastructure = !0),
    (Z.__f.runInSiloedMode = !1);

  (Z.securityGroups.k = ["google"]),
    (Z.__k = function (a) {
      var b = a.vtp_name,
        c = pJ("gtm.cookie", 1),
        d = !!a.vtp_decodeCookie;
      return jo(b, c, d === void 0 ? !0 : !!d)[0];
    }),
    (Z.__k.o = "k"),
    (Z.__k.isVendorTemplate = !0),
    (Z.__k.priorityOverride = 0),
    (Z.__k.isInfrastructure = !0),
    (Z.__k.runInSiloedMode = !1);
  (Z.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_globals = b;
        Z.__access_globals.o = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
        Z.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            k = 0;
          k < c.length;
          k++
        ) {
          var m = c[k],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!z(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return;
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.o = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !0;
        Z.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : pJ("gtm.url", 1)) || oJ();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return Yi(aj(String(c)));
        var e = aj(String(c)),
          f;
        if (d === "QUERY")
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = Vi(e, "QUERY", void 0, void 0, n[p]);
              if (q != void 0 && (!m || q !== "")) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Vi(
            e,
            d,
            d == "HOST" ? b[a("vtp_stripWww")] : void 0,
            d == "PATH" ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Z.securityGroups.v = ["google"]),
    (Z.__v = function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = pJ(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return c !== void 0 ? c : a.vtp_defaultValue;
    }),
    (Z.__v.o = "v"),
    (Z.__v.isVendorTemplate = !0),
    (Z.__v.priorityOverride = 0),
    (Z.__v.isInfrastructure = !0),
    (Z.__v.runInSiloedMode = !1);

  (Z.securityGroups.ytl = ["google"]),
    (function () {
      function a() {
        var u = Math.round(Math.random() * 1e9) + "";
        return E.getElementById(u) ? a() : u;
      }
      function b(u, w) {
        if (!u) return !1;
        for (var x = 0; x < q.length; x++)
          if (u.indexOf("//" + q[x] + "/" + w) >= 0) return !0;
        return !1;
      }
      function c(u, w) {
        var x = u.getAttribute("src");
        if (b(x, "embed/")) {
          if (x.indexOf("enablejsapi=1") > 0) return !0;
          if (w) {
            var y = u.setAttribute,
              A;
            var B = x.indexOf("?") !== -1 ? "&" : "?";
            if (x.indexOf("origin=") > -1) A = x + B + "enablejsapi=1";
            else {
              if (!t) {
                var D = rJ("document");
                t = D.location.protocol + "//" + D.location.hostname;
                D.location.port && (t += ":" + D.location.port);
              }
              A = x + B + "enablejsapi=1&origin=" + encodeURIComponent(t);
            }
            y.call(u, "src", A);
            return !0;
          }
        }
        return !1;
      }
      function d(u, w) {
        if (
          !u.getAttribute("data-gtm-yt-inspected-" + w.Bb) &&
          (u.setAttribute("data-gtm-yt-inspected-" + w.Bb, "true"), c(u, w.Ie))
        ) {
          u.id || (u.id = a());
          var x = rJ("YT"),
            y = x.get(u.id);
          y || (y = new x.Player(u.id));
          var A = f(y, w),
            B = {},
            D;
          for (D in A)
            (B = { Se: B.Se }),
              (B.Se = D),
              A.hasOwnProperty(B.Se) &&
                y.addEventListener(
                  B.Se,
                  (function (H) {
                    return function (J) {
                      return A[H.Se](J.data);
                    };
                  })(B)
                );
        }
      }
      function e(u) {
        F(function () {
          function w() {
            for (
              var y = x.getElementsByTagName("iframe"), A = y.length, B = 0;
              B < A;
              B++
            )
              d(y[B], u);
          }
          var x = rJ("document");
          w();
          FB(w);
        });
      }
      function f(u, w) {
        var x, y;
        function A() {
          W = JC(
            function () {
              return {
                url: P,
                title: la,
                oh: S,
                Jj: u.getCurrentTime(),
                playbackRate: na,
              };
            },
            w.Bb,
            u.getIframe()
          );
          S = 0;
          la = P = "";
          na = 1;
          return B;
        }
        function B(Ea) {
          switch (Ea) {
            case r.PLAYING:
              S = Math.round(u.getDuration());
              P = u.getVideoUrl();
              if (u.getVideoData) {
                var Sa = u.getVideoData();
                la = Sa ? Sa.title : "";
              }
              na = u.getPlaybackRate();
              w.ih ? Cy(W.createEvent("start")) : W.od();
              ba = m(w.Th, w.Sh, u.getDuration());
              return D(Ea);
            default:
              return B;
          }
        }
        function D() {
          ia = u.getCurrentTime();
          xa = new Date().getTime();
          W.dk();
          R();
          return H;
        }
        function H(Ea) {
          var Sa;
          switch (Ea) {
            case r.ENDED:
              return G(Ea);
            case r.PAUSED:
              Sa = "pause";
            case r.BUFFERING:
              var $a = u.getCurrentTime() - ia;
              Sa =
                Math.abs(((new Date().getTime() - xa) / 1e3) * na - $a) > 1
                  ? "seek"
                  : Sa || "buffering";
              u.getCurrentTime() && (w.hh ? Cy(W.createEvent(Sa)) : W.od());
              L();
              return J;
            case r.UNSTARTED:
              return A(Ea);
            default:
              return H;
          }
        }
        function J(Ea) {
          switch (Ea) {
            case r.ENDED:
              return G(Ea);
            case r.PLAYING:
              return D(Ea);
            case r.UNSTARTED:
              return A(Ea);
            default:
              return J;
          }
        }
        function G() {
          for (; y; ) {
            var Ea = x;
            lJ(y);
            Ea();
          }
          w.gh && Cy(W.createEvent("complete", 1));
          return A(r.UNSTARTED);
        }
        function U() {}
        function L() {
          y && (lJ(y), (y = 0), (x = U));
        }
        function R() {
          if (ba.length && na !== 0) {
            var Ea = -1,
              Sa;
            do {
              Sa = ba[0];
              if (Sa.Ca > u.getDuration()) return;
              Ea = (Sa.Ca - u.getCurrentTime()) / na;
              if (Ea < 0 && (ba.shift(), ba.length === 0)) return;
            } while (Ea < 0);
            x = function () {
              y = 0;
              x = U;
              ba.length > 0 &&
                ba[0].Ca === Sa.Ca &&
                (ba.shift(), Cy(W.createEvent("progress", Sa.Ye, Sa.af)));
              R();
            };
            y = mJ(x, Ea * 1e3);
          }
        }
        var W,
          ba = [],
          S,
          P,
          la,
          na,
          ia,
          xa,
          Oa = A(r.UNSTARTED);
        y = 0;
        x = U;
        return {
          onStateChange: function (Ea) {
            Oa = Oa(Ea);
          },
          onPlaybackRateChange: function (Ea) {
            ia = u.getCurrentTime();
            xa = new Date().getTime();
            W.od();
            na = Ea;
            L();
            R();
          },
        };
      }
      function g(u) {
        for (var w = u.split(","), x = w.length, y = [], A = 0; A < x; A++) {
          var B = parseInt(w[A], 10);
          isNaN(B) || B > 100 || B < 0 || y.push(B / 100);
        }
        y.sort(function (D, H) {
          return D - H;
        });
        return y;
      }
      function k(u) {
        for (var w = u.split(","), x = w.length, y = [], A = 0; A < x; A++) {
          var B = parseInt(w[A], 10);
          isNaN(B) || B < 0 || y.push(B);
        }
        y.sort(function (D, H) {
          return D - H;
        });
        return y;
      }
      function m(u, w, x) {
        var y = u.map(function (D) {
          return { Ca: D, af: D, Ye: void 0 };
        });
        if (!w.length) return y;
        var A = w.map(function (D) {
          return { Ca: D * x, af: void 0, Ye: D };
        });
        if (!y.length) return A;
        var B = y.concat(A);
        B.sort(function (D, H) {
          return D.Ca - H.Ca;
        });
        return B;
      }
      function n(u) {
        u.vtp_triggerStartOption
          ? p(u)
          : Gw(function () {
              p(u);
            });
      }
      function p(u) {
        var w = !!u.vtp_captureStart,
          x = !!u.vtp_captureComplete,
          y = !!u.vtp_capturePause,
          A = g(u.vtp_progressThresholdsPercent + ""),
          B = k(u.vtp_progressThresholdsTimeInSeconds + ""),
          D = !!u.vtp_fixMissingApi;
        if (w || x || y || A.length || B.length) {
          var H = {
              ih: w,
              gh: x,
              hh: y,
              Sh: A,
              Th: B,
              Ie: D,
              Bb: u.vtp_uniqueTriggerId === void 0 ? "" : u.vtp_uniqueTriggerId,
            },
            J = rJ("YT"),
            G = function () {
              e(H);
            };
          F(u.vtp_gtmOnSuccess);
          if (J) J.ready && J.ready(G);
          else {
            var U = rJ("onYouTubeIframeAPIReady");
            qJ("onYouTubeIframeAPIReady", function () {
              U && U();
              G();
            });
            F(function () {
              for (
                var L = rJ("document"),
                  R = L.getElementsByTagName("script"),
                  W = R.length,
                  ba = 0;
                ba < W;
                ba++
              ) {
                var S = R[ba].getAttribute("src");
                if (b(S, "iframe_api") || b(S, "player_api")) return;
              }
              for (
                var P = L.getElementsByTagName("iframe"), la = P.length, na = 0;
                na < la;
                na++
              )
                if (!v && c(P[na], H.Ie)) {
                  nJ("https://www.youtube.com/iframe_api");
                  v = !0;
                  break;
                }
            });
          }
        } else F(u.vtp_gtmOnSuccess);
      }
      var q = ["www.youtube.com", "www.youtube-nocookie.com"],
        r = {
          UNSTARTED: -1,
          ENDED: 0,
          PLAYING: 1,
          PAUSED: 2,
          BUFFERING: 3,
          CUED: 5,
        },
        t,
        v = !1;
      Z.__ytl = n;
      Z.__ytl.o = "ytl";
      Z.__ytl.isVendorTemplate = !0;
      Z.__ytl.priorityOverride = 0;
      Z.__ytl.isInfrastructure = !1;
      Z.__ytl.runInSiloedMode = !1;
    })();
  (Z.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__read_event_data = b;
        Z.__read_event_data.o = "read_event_data";
        Z.__read_event_data.isVendorTemplate = !0;
        Z.__read_event_data.priorityOverride = 0;
        Z.__read_event_data.isInfrastructure = !1;
        Z.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (g != null && !z(g))
              throw e(f, { key: g }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && hg(g, d)) return;
              } catch (k) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.aev = ["google"]),
    (function () {
      function a(r, t, v, u, w) {
        w || (w = "element");
        var x = t + "." + v,
          y;
        if (n.hasOwnProperty(x)) y = n[x];
        else {
          var A = r[w];
          if (A && ((y = u(A)), (n[x] = y), p.push(x), p.length > 35)) {
            var B = p.shift();
            delete n[B];
          }
        }
        return y;
      }
      function b(r, t, v) {
        var u = r[q[t]];
        return u !== void 0 ? u : v;
      }
      function c(r, t) {
        if (!r) return !1;
        var v = d(oJ());
        Array.isArray(t) ||
          (t = String(t || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var u = [v], w = 0; w < t.length; w++) {
          var x = t[w];
          if (x.hasOwnProperty("is_regex"))
            if (x.is_regex)
              try {
                x = new RegExp(x.domain);
              } catch (B) {
                continue;
              }
            else x = x.domain;
          var y = d(r);
          if (x instanceof RegExp) {
            if (x.test(y)) return !1;
          } else {
            var A = x;
            if (A.length != 0) {
              if (y.indexOf(A) >= 0) return !1;
              u.push(d(A));
            }
          }
        }
        return !bJ(r, u);
      }
      function d(r) {
        m.test(r) || (r = "http://" + r);
        return Vi(aj(r), "HOST", !0);
      }
      function e(r, t, v, u) {
        switch (r) {
          case "SUBMIT_TEXT":
            return a(t, v, "FORM." + r, f, "formSubmitElement") || u;
          case "LENGTH":
            var w = a(t, v, "FORM." + r, g);
            return w === void 0 ? u : w;
          case "INTERACTED_FIELD_ID":
            return k(t, "id", u);
          case "INTERACTED_FIELD_NAME":
            return k(t, "name", u);
          case "INTERACTED_FIELD_TYPE":
            return k(t, "type", u);
          case "INTERACTED_FIELD_POSITION":
            var x = t.interactedFormFieldPosition;
            return x === void 0 ? u : x;
          case "INTERACT_SEQUENCE_NUMBER":
            var y = t.interactSequenceNumber;
            return y === void 0 ? u : y;
          default:
            return u;
        }
      }
      function f(r) {
        switch (r.tagName.toLowerCase()) {
          case "input":
            return Dc(r, "value");
          case "button":
            return Ec(r);
          default:
            return null;
        }
      }
      function g(r) {
        if (r.tagName.toLowerCase() === "form" && r.elements) {
          for (var t = 0, v = 0; v < r.elements.length; v++)
            Uz(r.elements[v]) && t++;
          return t;
        }
      }
      function k(r, t, v) {
        var u = r.interactedFormField;
        return (u && Dc(u, t)) || v;
      }
      var m = /^https?:\/\//i,
        n = {},
        p = [],
        q = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget",
        };
      (function (r) {
        Z.__aev = r;
        Z.__aev.o = "aev";
        Z.__aev.isVendorTemplate = !0;
        Z.__aev.priorityOverride = 0;
        Z.__aev.isInfrastructure = !0;
        Z.__aev.runInSiloedMode = !1;
      })(function (r) {
        var t = r.vtp_gtmEventId,
          v = r.vtp_defaultValue,
          u = r.vtp_varType,
          w = r.vtp_gtmCachedValues.gtm;
        switch (u) {
          case "TAG_NAME":
            var x = w.element;
            return (x && x.tagName) || v;
          case "TEXT":
            return a(w, t, u, Ec) || v;
          case "URL":
            var y;
            a: {
              var A = String(w.elementUrl || v || ""),
                B = aj(A),
                D = String(r.vtp_component || "URL");
              switch (D) {
                case "URL":
                  y = A;
                  break a;
                case "IS_OUTBOUND":
                  y = c(A, r.vtp_affiliatedDomains);
                  break a;
                default:
                  y = Vi(
                    B,
                    D,
                    r.vtp_stripWww,
                    r.vtp_defaultPages,
                    r.vtp_queryKey
                  );
              }
            }
            return y;
          case "ATTRIBUTE":
            var H;
            if (r.vtp_attribute === void 0) H = b(w, u, v);
            else {
              var J = w.element;
              H = (J && Dc(J, r.vtp_attribute)) || v || "";
            }
            return H;
          case "MD":
            var G = r.vtp_mdValue,
              U = a(w, t, "MD", gJ);
            return G && U ? dJ(U, G) || v : U || v;
          case "FORM":
            return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, v);
          default:
            return b(w, u, v);
        }
      });
    })();
  (Z.securityGroups.detect_element_visibility_events = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__detect_element_visibility_events = b;
        Z.__detect_element_visibility_events.o =
          "detect_element_visibility_events";
        Z.__detect_element_visibility_events.isVendorTemplate = !0;
        Z.__detect_element_visibility_events.priorityOverride = 0;
        Z.__detect_element_visibility_events.isInfrastructure = !1;
        Z.__detect_element_visibility_events.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, M: a };
      });
    })();

  (Z.securityGroups.gaawe = ["google"]),
    (function () {
      function a(f, g, k) {
        for (var m = 0; m < g.length; m++)
          f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]));
      }
      function b(f, g, k) {
        var m = {},
          n = function (v, u) {
            m[v] = m[v] || u;
          },
          p = function (v, u, w) {
            w = w === void 0 ? !1 : w;
            c.push(6);
            if (v) {
              m.items = m.items || [];
              for (var x = {}, y = 0; y < v.length; x = { Ve: void 0 }, y++)
                (x.Ve = {}),
                  sb(
                    v[y],
                    (function (B) {
                      return function (D, H) {
                        w && D === "id"
                          ? (B.Ve.promotion_id = H)
                          : w && D === "name"
                          ? (B.Ve.promotion_name = H)
                          : (B.Ve[D] = H);
                      };
                    })(x)
                  ),
                  m.items.push(x.Ve);
            }
            if (u)
              for (var A in u) d.hasOwnProperty(A) ? n(d[A], u[A]) : n(A, u[A]);
          },
          q;
        f.vtp_getEcommerceDataFrom === "dataLayer"
          ? (q = f.vtp_gtmCachedValues.eventModel) ||
            (q = f.vtp_gtmCachedValues.ecommerce)
          : ((q = f.vtp_ecommerceMacroData),
            Pa(q) && q.ecommerce && !q.items && (q = q.ecommerce));
        if (Pa(q)) {
          var r = !1,
            t;
          for (t in q)
            q.hasOwnProperty(t) &&
              (r || (c.push(5), (r = !0)),
              t === "currencyCode"
                ? n("currency", q.currencyCode)
                : t === "impressions" && g === T.g.ib
                ? p(q.impressions, null)
                : t === "promoClick" && g === T.g.Db
                ? p(q.promoClick.promotions, q.promoClick.actionField, !0)
                : t === "promoView" && g === T.g.jb
                ? p(q.promoView.promotions, q.promoView.actionField, !0)
                : e.hasOwnProperty(t)
                ? g === e[t] && p(q[t].products, q[t].actionField)
                : (m[t] = q[t]));
          $I(m, k);
        }
      }
      var c = [],
        d = { id: "transaction_id", revenue: "value", list: "item_list_name" },
        e = {
          click: "select_item",
          detail: "view_item",
          add: "add_to_cart",
          remove: "remove_from_cart",
          checkout: "begin_checkout",
          checkout_option: "checkout_option",
          purchase: "purchase",
          refund: "refund",
        };
      (function (f) {
        Z.__gaawe = f;
        Z.__gaawe.o = "gaawe";
        Z.__gaawe.isVendorTemplate = !0;
        Z.__gaawe.priorityOverride = 0;
        Z.__gaawe.isInfrastructure = !1;
        Z.__gaawe.runInSiloedMode = !1;
      })(function (f) {
        var g;
        g = f.vtp_migratedToV2
          ? String(f.vtp_measurementIdOverride)
          : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
        if (z(g) && g.indexOf("G-") === 0) {
          var k = String(f.vtp_eventName),
            m = {};
          c = [];
          f.vtp_sendEcommerceData &&
            (Xh.hasOwnProperty(k) || k === "checkout_option") &&
            b(f, k, m);
          var n = f.vtp_eventSettingsVariable;
          if (n) for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
          if (f.vtp_eventSettingsTable) {
            var q = cJ(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
              r;
            for (r in q) m[r] = q[r];
          }
          var t = cJ(f.vtp_eventParameters, "name", "value"),
            v;
          for (v in t) t.hasOwnProperty(v) && (m[v] = t[v]);
          var u = f.vtp_userDataVariable;
          u && (m[T.g.Ba] = u);
          if (m.hasOwnProperty(T.g.ab) || f.vtp_userProperties) {
            var w = m[T.g.ab] || {};
            $I(cJ(f.vtp_userProperties, "name", "value"), w);
            m[T.g.ab] = w;
          }
          var x = {
            originatingEntity: Iw(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName),
          };
          if (c.length > 0) {
            var y = {};
            x.eventMetadata = ((y.event_usage = c), y);
          }
          a(m, Yh, function (B) {
            return vb(B);
          });
          a(m, $h, function (B) {
            return Number(B);
          });
          var A = f.vtp_gtmEventId;
          x.noGtmEvent = !0;
          Tx(Rx(g, k, m), A, x);
          F(f.vtp_gtmOnSuccess);
        } else F(f.vtp_gtmOnFailure);
      });
    })();

  (Z.securityGroups.detect_link_click_events = ["google"]),
    (function () {
      function a(b, c) {
        return { options: c };
      }
      (function (b) {
        Z.__detect_link_click_events = b;
        Z.__detect_link_click_events.o = "detect_link_click_events";
        Z.__detect_link_click_events.isVendorTemplate = !0;
        Z.__detect_link_click_events.priorityOverride = 0;
        Z.__detect_link_click_events.isInfrastructure = !1;
        Z.__detect_link_click_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowWaitForTags,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.waitForTags)
              throw d(e, {}, "Prohibited option waitForTags.");
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Z.__load_google_tags = b;
        Z.__load_google_tags.o = "load_google_tags";
        Z.__load_google_tags.isVendorTemplate = !0;
        Z.__load_google_tags.priorityOverride = 0;
        Z.__load_google_tags.isInfrastructure = !1;
        Z.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          k = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!z(q)) throw k(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1))
                throw k(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (q !== void 0) {
                if (!z(q)) throw k(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific")
                    try {
                      if (yg(aj(q), f)) return;
                    } catch (r) {
                      throw k(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw k(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.inject_script = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Z.__inject_script = b;
        Z.__inject_script.o = "inject_script";
        Z.__inject_script.isVendorTemplate = !0;
        Z.__inject_script.priorityOverride = 0;
        Z.__inject_script.isInfrastructure = !1;
        Z.__inject_script.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urls || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!z(f)) throw d(e, {}, "Script URL must be a string.");
            try {
              if (yg(aj(f), c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid script URL filter.");
            }
            throw d(e, {}, "Prohibited script URL: " + f);
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.unsafe_run_arbitrary_javascript = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__unsafe_run_arbitrary_javascript = b;
        Z.__unsafe_run_arbitrary_javascript.o =
          "unsafe_run_arbitrary_javascript";
        Z.__unsafe_run_arbitrary_javascript.isVendorTemplate = !0;
        Z.__unsafe_run_arbitrary_javascript.priorityOverride = 0;
        Z.__unsafe_run_arbitrary_javascript.isInfrastructure = !1;
        Z.__unsafe_run_arbitrary_javascript.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, M: a };
      });
    })();

  (Z.securityGroups.gas = ["google"]),
    (Z.__gas = function (a) {
      var b = $I(a),
        c = b;
      c[He.la] = null;
      c[He.Xg] = null;
      var d = (b = c);
      d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
      var e = d.vtp_cookieDomain;
      e !== void 0 &&
        (d.vtp_fieldsToSet.push({ fieldName: "cookieDomain", value: e }),
        delete d.vtp_cookieDomain);
      return b;
    }),
    (Z.__gas.o = "gas"),
    (Z.__gas.isVendorTemplate = !0),
    (Z.__gas.priorityOverride = 0),
    (Z.__gas.isInfrastructure = !1),
    (Z.__gas.runInSiloedMode = !1);

  (Z.securityGroups.remm = ["google"]),
    (Z.__remm = function (a) {
      for (
        var b = a.vtp_input,
          c = a.vtp_map || [],
          d = a.vtp_fullMatch,
          e = a.vtp_ignoreCase ? "gi" : "g",
          f = a.vtp_defaultValue,
          g = 0;
        g < c.length;
        g++
      ) {
        var k = c[g].key || "";
        d && (k = "^" + k + "$");
        var m = new RegExp(k, e);
        if (m.test(b)) {
          var n = c[g].value;
          a.vtp_replaceAfterMatch && (n = String(b).replace(m, n));
          f = n;
          break;
        }
      }
      return f;
    }),
    (Z.__remm.o = "remm"),
    (Z.__remm.isVendorTemplate = !0),
    (Z.__remm.priorityOverride = 0),
    (Z.__remm.isInfrastructure = !0),
    (Z.__remm.runInSiloedMode = !1);

  (Z.securityGroups.detect_click_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { matchCommonButtons: c, cssSelector: d };
      }
      (function (b) {
        Z.__detect_click_events = b;
        Z.__detect_click_events.o = "detect_click_events";
        Z.__detect_click_events.isVendorTemplate = !0;
        Z.__detect_click_events.priorityOverride = 0;
        Z.__detect_click_events.isInfrastructure = !1;
        Z.__detect_click_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e, f) {
            if (e !== void 0 && typeof e !== "boolean")
              throw c(d, {}, "matchCommonButtons must be a boolean.");
            if (f !== void 0 && typeof f !== "string")
              throw c(d, {}, "cssSelector must be a string.");
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__logging = b;
        Z.__logging.o = "logging";
        Z.__logging.isVendorTemplate = !0;
        Z.__logging.priorityOverride = 0;
        Z.__logging.isInfrastructure = !1;
        Z.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = c !== "all" && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Z.__configure_google_tags = b;
        Z.__configure_google_tags.o = "configure_google_tags";
        Z.__configure_google_tags.isVendorTemplate = !0;
        Z.__configure_google_tags.priorityOverride = 0;
        Z.__configure_google_tags.isInfrastructure = !1;
        Z.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.html = ["customScripts"]),
    (function () {
      function a(d, e, f, g) {
        return function () {
          try {
            if (e.length > 0) {
              var k = e.shift(),
                m = a(d, e, f, g);
              if (
                String(k.nodeName).toUpperCase() == "SCRIPT" &&
                k.type == "text/gtmscript"
              ) {
                var n = E.createElement("script");
                n.async = !1;
                n.type = "text/javascript";
                n.id = k.id;
                n.text = k.text || k.textContent || k.innerHTML || "";
                k.charset && (n.charset = k.charset);
                var p = k.getAttribute("data-gtmsrc");
                p && ((n.src = p), m && (n.onload = m));
                d.insertBefore(n, null);
                p || m();
              } else if (
                k.innerHTML &&
                k.innerHTML.toLowerCase().indexOf("<script") >= 0
              ) {
                for (var q = []; k.firstChild; )
                  q.push(k.removeChild(k.firstChild));
                d.insertBefore(k, null);
                a(k, q, m, g)();
              } else d.insertBefore(k, null), m();
            } else f();
          } catch (r) {
            F(g);
          }
        };
      }
      function b(d) {
        var e = xz();
        d.vtp_useIframe && e(3);
        d.vtp_supportDocumentWrite && (e(1), e(2));
        yz(d.vtp_gtmEventId, d.vtp_gtmTagId, e(void 0), "j");
        if (E.body) {
          var f = d.vtp_gtmOnFailure,
            g = oz(d.vtp_html, d.vtp_gtmOnSuccess, f),
            k = g.Pj,
            m = g.onSuccess;
          if (d.vtp_useIframe) {
          } else
            d.vtp_supportDocumentWrite ? c(k, m, f) : a(E.body, Fc(k), m, f)();
        } else
          mJ(function () {
            b(d);
          }, 200);
      }
      var c = function (d, e, f) {
        Gw(function () {
          var g = google_tag_manager_external.postscribe.getPostscribe(),
            k = { done: e },
            m = E.createElement("div");
          m.style.display = "none";
          m.style.visibility = "hidden";
          E.body.appendChild(m);
          try {
            g(m, d, k);
          } catch (n) {
            F(f);
          }
        });
      };
      Z.__html = b;
      Z.__html.o = "html";
      Z.__html.isVendorTemplate = !0;
      Z.__html.priorityOverride = 0;
      Z.__html.isInfrastructure = !1;
      Z.__html.runInSiloedMode = !1;
    })();

  var uJ = {};
  (uJ.onHtmlSuccess = pz(!0)), (uJ.onHtmlFailure = pz(!1));
  uJ.dataLayer = Ki;
  uJ.callback = function (a) {
    xi.hasOwnProperty(a) && lb(xi[a]) && xi[a]();
    delete xi[a];
  };
  uJ.bootstrap = 0;
  uJ._spx = !1;
  function vJ() {
    ii[Gj()] = ii[Gj()] || uJ;
    Tj();
    Xj() ||
      sb(Yj(), function (d, e) {
        ww(d, e.transportUrl, e.context);
        Q(92);
      });
    Cb(yi, Z.securityGroups);
    var a = Kj(Oj()),
      b,
      c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    (c !== 2 && c !== 4 && c !== 3) || Q(142);
    lz(),
      of({
        im: function (d) {
          return d === jz;
        },
        wl: function (d) {
          return new mz(d);
        },
        jm: function (d) {
          for (var e = !1, f = !1, g = 2; g < d.length; g++)
            (e = e || d[g] === 8), (f = f || d[g] === 16);
          return e && f;
        },
        Gm: function (d) {
          var e;
          if (d === jz) e = d;
          else {
            var f = zi();
            kz[f] = d;
            e = 'google_tag_manager["rm"]["' + Ij() + '"](' + f + ")";
          }
          return e;
        },
      });
    qf = Hf;
  }
  var wJ = !1;
  (function (a) {
    function b() {
      n = E.documentElement.getAttribute("data-tag-assistant-present");
      My(n) && (m = k.gj);
    }
    function c() {
      m && qc ? g(m) : a();
    }
    if (!C["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (E.referrer) {
        var e = aj(E.referrer);
        d = Xi(e, "host") === "cct.google";
      }
      if (!d) {
        var f = jo("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((C["__TAGGY_INSTALLED"] = !0),
        wc("https://cct.google/taggy/agent.js"));
    }
    var g = function (v) {
        var u = "GTM",
          w = "GTM";
        oi && ((u = "OGT"), (w = "GTAG"));
        var x = C["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (C["google.tagmanager.debugui2.queue"] = x),
          wc(
            "https://" +
              hi.Fd +
              "/debug/bootstrap?id=" +
              Nf.ctid +
              "&src=" +
              w +
              "&cond=" +
              v +
              "&gtm=" +
              Yn()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: qc,
            containerProduct: u,
            debug: !1,
            id: Nf.ctid,
            targetRef: { ctid: Nf.ctid, isDestination: zj.qe },
            aliases: Cj(),
            destinations: Fj(),
          },
        };
        y.data.resume = function () {
          a();
        };
        hi.tk && (y.data.initialPublish = !0);
        x.push(y);
      },
      k = { Nk: 1, jj: 2, xj: 3, oi: 4, gj: 5 };
    k[k.Nk] = "GTM_DEBUG_LEGACY_PARAM";
    k[k.jj] = "GTM_DEBUG_PARAM";
    k[k.xj] = "REFERRER";
    k[k.oi] = "COOKIE";
    k[k.gj] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = Vi(C.location, "query", !1, void 0, "gtm_debug");
    My(p) && (m = k.jj);
    if (!m && E.referrer) {
      var q = aj(E.referrer);
      Xi(q, "host") === "tagassistant.google.com" && (m = k.xj);
    }
    if (!m) {
      var r = jo("__TAG_ASSISTANT");
      r.length && r[0].length && (m = k.oi);
    }
    m || b();
    if (!m && Ny(n)) {
      var t = !1;
      Bc(
        E,
        "TADebugSignal",
        function () {
          t || ((t = !0), b(), c());
        },
        !1
      );
      C.setTimeout(function () {
        t || ((t = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      var a;
      if (!(a = !O(59))) {
        var b;
        if (!(b = wJ)) {
          var c;
          a: {
            for (
              var d = xj().injectedFirstPartyContainers,
                e = l(Bj()),
                f = e.next();
              !f.done;
              f = e.next()
            )
              if (d[f.value]) {
                c = !0;
                break a;
              }
            c = !1;
          }
          b = !c;
        }
        a = b;
      }
      if (a) {
        Rj();
        if (O(76)) {
        }
        hb[12] = !0;
        sn();
        fl();
        var g = Ij();
        if (xj().canonical[g]) {
          var k = ii.zones;
          k && k.unregisterChild(Bj());
          hw().removeExternalRestrictions(Ij());
        } else {
          Ut();
          a: {
          }
          Bi.j = "101671035~101686685~101747727";
          Bi.K = "";
          Bi.Pa =
            "ad_storage|analytics_storage|ad_user_data|ad_personalization";
          Bi.Z = "ad_storage|analytics_storage|ad_user_data";
          Bi.P = "4990";
          Bi.P = "49u0";
          sw();
          for (
            var m = data.resource || {}, n = m.macros || [], p = 0;
            p < n.length;
            p++
          )
            ff.push(n[p]);
          for (var q = m.tags || [], r = 0; r < q.length; r++) jf.push(q[r]);
          for (var t = m.predicates || [], v = 0; v < t.length; v++)
            hf.push(t[v]);
          for (var u = m.rules || [], w = 0; w < u.length; w++) {
            for (var x = u[w], y = {}, A = 0; A < x.length; A++) {
              var B = x[A][0];
              y[B] = Array.prototype.slice.call(x[A], 1);
              (B !== "if" && B !== "unless") || pf(y[B]);
            }
            gf.push(y);
          }
          lf = Z;
          mf = rz;
          Jf = new Qf();
          var D = data.sandboxed_scripts,
            H = data.security_groups;
          a: {
            var J = data.runtime || [],
              G = data.runtime_lines;
            Dz = new ze();
            XI();
            ef = Cz();
            var U = Dz,
              L = WI(),
              R = new Vc("require", L);
            R.Ka();
            U.j.j.set("require", R);
            for (var W = [], ba = 0; ba < J.length; ba++) {
              var S = J[ba];
              if (!Array.isArray(S) || S.length < 3) {
                if (S.length === 0) continue;
                break a;
              }
              G && G[ba] && G[ba].length && Af(S, G[ba]);
              try {
                Dz.execute(S), O(87) && qj && S[0] === 50 && W.push(S[1]);
              } catch (Pn) {}
            }
            O(87) && (rf = W);
          }
          if (D && D.length)
            for (var P = ["sandboxedScripts"], la = 0; la < D.length; la++) {
              var na = D[la].replace(/^_*/, "");
              yi[na] = P;
            }
          YI(H);
          vJ();
          if (!si)
            for (
              var ia = Pk() ? Ei(Bi.Z) : Ei(Bi.Pa), xa = 0;
              xa < Tk.length;
              xa++
            ) {
              var Oa = Tk[xa],
                Ea = Oa,
                Sa = ia[Oa] ? "granted" : "denied";
              ok().implicit(Ea, Sa);
            }
          Ly();
          Bw = !1;
          Cw = 0;
          if (
            (E.readyState === "interactive" && !E.createEventObject) ||
            E.readyState === "complete"
          )
            Ew();
          else {
            Bc(E, "DOMContentLoaded", Ew);
            Bc(E, "readystatechange", Ew);
            if (E.createEventObject && E.documentElement.doScroll) {
              var $a = !0;
              try {
                $a = !C.frameElement;
              } catch (Pn) {}
              $a && Fw();
            }
            Bc(C, "load", Ew);
          }
          qy = !1;
          E.readyState === "complete" ? sy() : Bc(C, "load", sy);
          qj &&
            (Ul(gm),
            C.setInterval(fm, 864e5),
            Ul(uz),
            Ul(ex),
            Ul(Tu),
            Ul(jm),
            Ul(zz),
            Ul(px),
            Ul(Ft),
            O(87) && (Ul(jx), Ul(kx), Ul(lx)));
          if (rj) {
            nk();
            Al();
            Aw();
            var td;
            var ud = Kj(Oj());
            if (ud) {
              for (; ud.parent; ) {
                var Mx = Kj(ud.parent);
                if (!Mx) break;
                ud = Mx;
              }
              td = ud;
            } else td = void 0;
            var Re = td;
            if (!Re) Q(144);
            else if (Re.canonicalContainerId) {
              var Qn;
              a: {
                if (Re.scriptSource) {
                  var Lj;
                  try {
                    var Nx;
                    Lj =
                      (Nx = Oc()) == null
                        ? void 0
                        : Nx.getEntriesByType("resource");
                  } catch (Pn) {}
                  if (Lj) {
                    for (var Rn = {}, Mj = 0; Mj < Lj.length; ++Mj) {
                      var Ox = Lj[Mj],
                        Sn = Ox.initiatorType;
                      if (Sn === "script" && Ox.name === Re.scriptSource) {
                        Qn = { Nm: Mj, Om: Rn };
                        break a;
                      }
                      Rn[Sn] = 1 + (Rn[Sn] || 0);
                    }
                    Q(146);
                  } else Q(145);
                }
                Qn = void 0;
              }
              var Tn = Qn;
              Tn &&
                (fk("rtg", String(Re.canonicalContainerId)),
                fk("rlo", String(Tn.Nm)),
                fk("slo", String(Tn.Om.script || "0")),
                fk("hlo", Re.htmlLoadOrder || "-1"),
                fk("lst", String(Re.loadScriptType || "0")));
            }
            var Un;
            var Nj = Jj();
            if (Nj) {
              var Px;
              Un =
                Nj.canonicalContainerId ||
                "_" +
                  (Nj.scriptContainerId ||
                    ((Px = Nj.destinations) == null ? void 0 : Px[0]));
            } else Un = void 0;
            var Qx = Un;
            Qx && fk("pcid", Qx);
            O(33) &&
              (fk("bt", String(Bi.H ? 2 : qi ? 1 : 0)),
              fk("ct", String(Bi.H ? 0 : qi ? 1 : Wn() ? 2 : 3)));
          }
          google_tag_manager_external.postscribe.installPostscribe();
          hz();
          Kk(1);
          LA();
          wi = zb();
          uJ.bootstrap = wi;
          if (O(76)) {
          }
        }
      }
    } catch (Pn) {
      if ((Kk(4), qj)) {
        var xJ = am(!0, !0);
        zc(xJ);
      }
    }
  });
})();
