(() => {
    var e = {
            248: function (e, t) {
                !(function (e) {
                    "use strict";
                    function t(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            t &&
                                (i = i.filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                })),
                                r.push.apply(r, i);
                        }
                        return r;
                    }
                    function r(e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var i = null != arguments[r] ? arguments[r] : {};
                            r % 2
                                ? t(Object(i), !0).forEach(function (t) {
                                      s(e, t, i[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                                : t(Object(i)).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                                  });
                        }
                        return e;
                    }
                    function i(e) {
                        return (
                            (i =
                                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                      }),
                            i(e)
                        );
                    }
                    function n(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }
                    function a(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var i = t[r];
                            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                        }
                    }
                    function o(e, t, r) {
                        return t && a(e.prototype, t), r && a(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
                    }
                    function s(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
                    }
                    function l(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && u(e, t);
                    }
                    function c(e) {
                        return (
                            (c = Object.setPrototypeOf
                                ? Object.getPrototypeOf
                                : function (e) {
                                      return e.__proto__ || Object.getPrototypeOf(e);
                                  }),
                            c(e)
                        );
                    }
                    function u(e, t) {
                        return (
                            (u =
                                Object.setPrototypeOf ||
                                function (e, t) {
                                    return (e.__proto__ = t), e;
                                }),
                            u(e, t)
                        );
                    }
                    function d(e, t) {
                        if (t && ("object" == typeof t || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return (function (e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e;
                        })(e);
                    }
                    function p(e) {
                        var t = (function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })();
                        return function () {
                            var r,
                                i = c(e);
                            if (t) {
                                var n = c(this).constructor;
                                r = Reflect.construct(i, arguments, n);
                            } else r = i.apply(this, arguments);
                            return d(this, r);
                        };
                    }
                    function h(e) {
                        return (
                            (function (e) {
                                if (Array.isArray(e)) return f(e);
                            })(e) ||
                            (function (e) {
                                if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                            })(e) ||
                            (function (e, t) {
                                if (e) {
                                    if ("string" == typeof e) return f(e, t);
                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? f(e, t) : void 0;
                                }
                            })(e) ||
                            (function () {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            })()
                        );
                    }
                    function f(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
                        return i;
                    }
                    function v() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return { id: e.id || null, adId: e.adId || null, sequence: e.sequence || null, apiFramework: e.apiFramework || null, universalAdIds: [], creativeExtensions: [] };
                    }
                    var m = [
                        "ADCATEGORIES",
                        "ADCOUNT",
                        "ADPLAYHEAD",
                        "ADSERVINGID",
                        "ADTYPE",
                        "APIFRAMEWORKS",
                        "APPBUNDLE",
                        "ASSETURI",
                        "BLOCKEDADCATEGORIES",
                        "BREAKMAXADLENGTH",
                        "BREAKMAXADS",
                        "BREAKMAXDURATION",
                        "BREAKMINADLENGTH",
                        "BREAKMINDURATION",
                        "BREAKPOSITION",
                        "CLICKPOS",
                        "CLICKTYPE",
                        "CLIENTUA",
                        "CONTENTID",
                        "CONTENTPLAYHEAD",
                        "CONTENTURI",
                        "DEVICEIP",
                        "DEVICEUA",
                        "DOMAIN",
                        "EXTENSIONS",
                        "GDPRCONSENT",
                        "IFA",
                        "IFATYPE",
                        "INVENTORYSTATE",
                        "LATLONG",
                        "LIMITADTRACKING",
                        "MEDIAMIME",
                        "MEDIAPLAYHEAD",
                        "OMIDPARTNER",
                        "PAGEURL",
                        "PLACEMENTTYPE",
                        "PLAYERCAPABILITIES",
                        "PLAYERSIZE",
                        "PLAYERSTATE",
                        "PODSEQUENCE",
                        "REGULATIONS",
                        "SERVERSIDE",
                        "SERVERUA",
                        "TRANSACTIONID",
                        "UNIVERSALADID",
                        "VASTVERSIONS",
                        "VERIFICATIONVENDORS",
                    ];
                    function g(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = [],
                            n = T(e);
                        for (var a in (!t.ERRORCODE || r.isCustomCode || /^[0-9]{3}$/.test(t.ERRORCODE) || (t.ERRORCODE = 900),
                        (t.CACHEBUSTING = R(Math.round(1e8 * Math.random()))),
                        (t.TIMESTAMP = new Date().toISOString()),
                        (t.RANDOM = t.random = t.CACHEBUSTING),
                        t))
                            t[a] = E(t[a]);
                        for (var o in n) {
                            var s = n[o];
                            "string" == typeof s && i.push(y(s, t));
                        }
                        return i;
                    }
                    function y(e, t) {
                        var r = (e = A(e, t)).match(/[^[\]]+(?=])/g);
                        if (!r) return e;
                        var i = r.filter(function (e) {
                            return m.indexOf(e) > -1;
                        });
                        return 0 === i.length
                            ? e
                            : A(
                                  e,
                                  (i = i.reduce(function (e, t) {
                                      return (e[t] = -1), e;
                                  }, {}))
                              );
                    }
                    function A(e, t) {
                        var r = e;
                        for (var i in t) {
                            var n = t[i];
                            r = r.replace(new RegExp("(?:\\[|%%)(".concat(i, ")(?:\\]|%%)"), "g"), n);
                        }
                        return r;
                    }
                    function T(e) {
                        return Array.isArray(e)
                            ? e.map(function (e) {
                                  return e && e.hasOwnProperty("url") ? e.url : e;
                              })
                            : e;
                    }
                    function b(e, t) {
                        for (var r = 0; r < t.length; r++) if (k(t[r], e)) return !0;
                        return !1;
                    }
                    function k(e, t) {
                        if (e && t) {
                            var r = Object.getOwnPropertyNames(e),
                                i = Object.getOwnPropertyNames(t);
                            return r.length === i.length && e.id === t.id && e.url === t.url;
                        }
                        return !1;
                    }
                    function E(e) {
                        return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
                            return "%".concat(e.charCodeAt(0).toString(16));
                        });
                    }
                    function R(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
                        return e.toString().padStart(t, "0");
                    }
                    var w = {
                        track: function (e, t, r) {
                            g(e, t, r).forEach(function (e) {
                                "undefined" != typeof window && null !== window && (new Image().src = e);
                            });
                        },
                        resolveURLTemplates: g,
                        extractURLsFromTemplates: T,
                        containsTemplateObject: b,
                        isTemplateObjectEqual: k,
                        encodeURIComponentRFC3986: E,
                        replaceUrlMacros: y,
                        isNumeric: function (e) {
                            return !isNaN(parseFloat(e)) && isFinite(e);
                        },
                        flatten: function e(t) {
                            return t.reduce(function (t, r) {
                                return t.concat(Array.isArray(r) ? e(r) : r);
                            }, []);
                        },
                        joinArrayOfUniqueTemplateObjs: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                r = Array.isArray(e) ? e : [],
                                i = Array.isArray(t) ? t : [];
                            return r.concat(i).reduce(function (e, t) {
                                return b(t, e) || e.push(t), e;
                            }, []);
                        },
                        isValidTimeValue: function (e) {
                            return Number.isFinite(e) && e >= -2;
                        },
                        addLeadingZeros: R,
                    };
                    function L(e) {
                        return -1 !== ["true", "TRUE", "True", "1"].indexOf(e);
                    }
                    var N = {
                        childByName: function (e, t) {
                            var r = e.childNodes;
                            for (var i in r) {
                                var n = r[i];
                                if (n.nodeName === t) return n;
                            }
                        },
                        childrenByName: function (e, t) {
                            var r = [],
                                i = e.childNodes;
                            for (var n in i) {
                                var a = i[n];
                                a.nodeName === t && r.push(a);
                            }
                            return r;
                        },
                        resolveVastAdTagURI: function (e, t) {
                            if (!t) return e;
                            if (0 === e.indexOf("//")) {
                                var r = location.protocol;
                                return "".concat(r).concat(e);
                            }
                            if (-1 === e.indexOf("://")) {
                                var i = t.slice(0, t.lastIndexOf("/"));
                                return "".concat(i, "/").concat(e);
                            }
                            return e;
                        },
                        parseBoolean: L,
                        parseNodeText: function (e) {
                            return e && (e.textContent || e.text || "").trim();
                        },
                        copyNodeAttribute: function (e, t, r) {
                            var i = t.getAttribute(e);
                            i && r.setAttribute(e, i);
                        },
                        parseAttributes: function (e) {
                            for (var t = e.attributes, r = {}, i = 0; i < t.length; i++) r[t[i].nodeName] = t[i].nodeValue;
                            return r;
                        },
                        parseDuration: function (e) {
                            if (null == e) return -1;
                            if (w.isNumeric(e)) return parseInt(e);
                            var t = e.split(":");
                            if (3 !== t.length) return -1;
                            var r = t[2].split("."),
                                i = parseInt(r[0]);
                            2 === r.length && (i += parseFloat("0.".concat(r[1])));
                            var n = parseInt(60 * t[1]),
                                a = parseInt(60 * t[0] * 60);
                            return isNaN(a) || isNaN(n) || isNaN(i) || n > 3600 || i > 60 ? -1 : a + n + i;
                        },
                        splitVAST: function (e) {
                            var t = [],
                                r = null;
                            return (
                                e.forEach(function (i, n) {
                                    if ((i.sequence && (i.sequence = parseInt(i.sequence, 10)), i.sequence > 1)) {
                                        var a = e[n - 1];
                                        if (a && a.sequence === i.sequence - 1) return void (r && r.push(i));
                                        delete i.sequence;
                                    }
                                    (r = [i]), t.push(r);
                                }),
                                t
                            );
                        },
                        assignAttributes: function (e, t) {
                            if (e)
                                for (var r in e) {
                                    var i = e[r];
                                    if (i.nodeName && i.nodeValue && t.hasOwnProperty(i.nodeName)) {
                                        var n = i.nodeValue;
                                        "boolean" == typeof t[i.nodeName] && (n = L(n)), (t[i.nodeName] = n);
                                    }
                                }
                        },
                        mergeWrapperAdData: function (e, t) {
                            (e.errorURLTemplates = t.errorURLTemplates.concat(e.errorURLTemplates)),
                                (e.impressionURLTemplates = t.impressionURLTemplates.concat(e.impressionURLTemplates)),
                                (e.extensions = t.extensions.concat(e.extensions)),
                                t.viewableImpression.length > 0 && (e.viewableImpression = [].concat(h(e.viewableImpression), h(t.viewableImpression))),
                                (e.followAdditionalWrappers = t.followAdditionalWrappers),
                                (e.allowMultipleAds = t.allowMultipleAds),
                                (e.fallbackOnNoAd = t.fallbackOnNoAd);
                            var r = (t.creatives || []).filter(function (e) {
                                    return e && "companion" === e.type;
                                }),
                                i = r.reduce(function (e, t) {
                                    return (
                                        (t.variations || []).forEach(function (t) {
                                            (t.companionClickTrackingURLTemplates || []).forEach(function (t) {
                                                w.containsTemplateObject(t, e) || e.push(t);
                                            });
                                        }),
                                        e
                                    );
                                }, []);
                            e.creatives = r.concat(e.creatives);
                            var n = t.videoClickTrackingURLTemplates && t.videoClickTrackingURLTemplates.length,
                                a = t.videoCustomClickURLTemplates && t.videoCustomClickURLTemplates.length;
                            e.creatives.forEach(function (e) {
                                if (t.trackingEvents && t.trackingEvents[e.type])
                                    for (var r in t.trackingEvents[e.type]) {
                                        var o = t.trackingEvents[e.type][r];
                                        Array.isArray(e.trackingEvents[r]) || (e.trackingEvents[r] = []), (e.trackingEvents[r] = e.trackingEvents[r].concat(o));
                                    }
                                "linear" === e.type &&
                                    (n && (e.videoClickTrackingURLTemplates = e.videoClickTrackingURLTemplates.concat(t.videoClickTrackingURLTemplates)),
                                    a && (e.videoCustomClickURLTemplates = e.videoCustomClickURLTemplates.concat(t.videoCustomClickURLTemplates)),
                                    !t.videoClickThroughURLTemplate || (null !== e.videoClickThroughURLTemplate && void 0 !== e.videoClickThroughURLTemplate) || (e.videoClickThroughURLTemplate = t.videoClickThroughURLTemplate)),
                                    "companion" === e.type &&
                                        i.length &&
                                        (e.variations || []).forEach(function (e) {
                                            e.companionClickTrackingURLTemplates = w.joinArrayOfUniqueTemplateObjs(e.companionClickTrackingURLTemplates, i);
                                        });
                            }),
                                t.adVerifications && (e.adVerifications = e.adVerifications.concat(t.adVerifications)),
                                t.blockedAdCategories && (e.blockedAdCategories = e.blockedAdCategories.concat(t.blockedAdCategories));
                        },
                    };
                    function C(e, t) {
                        var r = (function () {
                            var e = v(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {});
                            return { id: e.id, adId: e.adId, sequence: e.sequence, apiFramework: e.apiFramework, type: "companion", required: null, variations: [] };
                        })(t);
                        return (
                            (r.required = e.getAttribute("required") || null),
                            (r.variations = N.childrenByName(e, "Companion").map(function (e) {
                                var t = (function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return {
                                        id: e.id || null,
                                        adType: "companionAd",
                                        width: e.width || 0,
                                        height: e.height || 0,
                                        assetWidth: e.assetWidth || null,
                                        assetHeight: e.assetHeight || null,
                                        expandedWidth: e.expandedWidth || null,
                                        expandedHeight: e.expandedHeight || null,
                                        apiFramework: e.apiFramework || null,
                                        adSlotID: e.adSlotID || null,
                                        pxratio: e.pxratio || "1",
                                        renderingMode: e.renderingMode || "default",
                                        staticResources: [],
                                        htmlResources: [],
                                        iframeResources: [],
                                        adParameters: null,
                                        xmlEncoded: null,
                                        altText: null,
                                        companionClickThroughURLTemplate: null,
                                        companionClickTrackingURLTemplates: [],
                                        trackingEvents: {},
                                    };
                                })(N.parseAttributes(e));
                                (t.htmlResources = N.childrenByName(e, "HTMLResource").reduce(function (e, t) {
                                    var r = N.parseNodeText(t);
                                    return r ? e.concat(r) : e;
                                }, [])),
                                    (t.iframeResources = N.childrenByName(e, "IFrameResource").reduce(function (e, t) {
                                        var r = N.parseNodeText(t);
                                        return r ? e.concat(r) : e;
                                    }, [])),
                                    (t.staticResources = N.childrenByName(e, "StaticResource").reduce(function (e, t) {
                                        var r = N.parseNodeText(t);
                                        return r ? e.concat({ url: r, creativeType: t.getAttribute("creativeType") || null }) : e;
                                    }, [])),
                                    (t.altText = N.parseNodeText(N.childByName(e, "AltText")) || null);
                                var r = N.childByName(e, "TrackingEvents");
                                r &&
                                    N.childrenByName(r, "Tracking").forEach(function (e) {
                                        var r = e.getAttribute("event"),
                                            i = N.parseNodeText(e);
                                        r && i && (Array.isArray(t.trackingEvents[r]) || (t.trackingEvents[r] = []), t.trackingEvents[r].push(i));
                                    }),
                                    (t.companionClickTrackingURLTemplates = N.childrenByName(e, "CompanionClickTracking").map(function (e) {
                                        return { id: e.getAttribute("id") || null, url: N.parseNodeText(e) };
                                    })),
                                    (t.companionClickThroughURLTemplate = N.parseNodeText(N.childByName(e, "CompanionClickThrough")) || null);
                                var i = N.childByName(e, "AdParameters");
                                return i && ((t.adParameters = N.parseNodeText(i)), (t.xmlEncoded = i.getAttribute("xmlEncoded") || null)), t;
                            })),
                            r
                        );
                    }
                    function U(e) {
                        return "linear" === e.type;
                    }
                    function I(e, t) {
                        var r,
                            i = (function () {
                                var e = v(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {});
                                return {
                                    id: e.id,
                                    adId: e.adId,
                                    sequence: e.sequence,
                                    apiFramework: e.apiFramework,
                                    type: "linear",
                                    duration: 0,
                                    skipDelay: null,
                                    mediaFiles: [],
                                    mezzanine: null,
                                    interactiveCreativeFile: null,
                                    closedCaptionFiles: [],
                                    videoClickThroughURLTemplate: null,
                                    videoClickTrackingURLTemplates: [],
                                    videoCustomClickURLTemplates: [],
                                    adParameters: null,
                                    icons: [],
                                    trackingEvents: {},
                                };
                            })(t);
                        i.duration = N.parseDuration(N.parseNodeText(N.childByName(e, "Duration")));
                        var n = e.getAttribute("skipoffset");
                        if (null == n) i.skipDelay = null;
                        else if ("%" === n.charAt(n.length - 1) && -1 !== i.duration) {
                            var a = parseInt(n, 10);
                            i.skipDelay = i.duration * (a / 100);
                        } else i.skipDelay = N.parseDuration(n);
                        var o = N.childByName(e, "VideoClicks");
                        if (o) {
                            var s = N.childByName(o, "ClickThrough");
                            (i.videoClickThroughURLTemplate = s ? { id: s.getAttribute("id") || null, url: N.parseNodeText(s) } : null),
                                N.childrenByName(o, "ClickTracking").forEach(function (e) {
                                    i.videoClickTrackingURLTemplates.push({ id: e.getAttribute("id") || null, url: N.parseNodeText(e) });
                                }),
                                N.childrenByName(o, "CustomClick").forEach(function (e) {
                                    i.videoCustomClickURLTemplates.push({ id: e.getAttribute("id") || null, url: N.parseNodeText(e) });
                                });
                        }
                        var l = N.childByName(e, "AdParameters");
                        l && (i.adParameters = N.parseNodeText(l)),
                            N.childrenByName(e, "TrackingEvents").forEach(function (e) {
                                N.childrenByName(e, "Tracking").forEach(function (e) {
                                    var t = e.getAttribute("event"),
                                        n = N.parseNodeText(e);
                                    if (t && n) {
                                        if ("progress" === t) {
                                            if (!(r = e.getAttribute("offset"))) return;
                                            t = "%" === r.charAt(r.length - 1) ? "progress-".concat(r) : "progress-".concat(Math.round(N.parseDuration(r)));
                                        }
                                        Array.isArray(i.trackingEvents[t]) || (i.trackingEvents[t] = []), i.trackingEvents[t].push(n);
                                    }
                                });
                            }),
                            N.childrenByName(e, "MediaFiles").forEach(function (e) {
                                N.childrenByName(e, "MediaFile").forEach(function (e) {
                                    i.mediaFiles.push(
                                        (function (e) {
                                            var t = {
                                                id: null,
                                                fileURL: null,
                                                fileSize: 0,
                                                deliveryType: "progressive",
                                                mimeType: null,
                                                mediaType: null,
                                                codec: null,
                                                bitrate: 0,
                                                minBitrate: 0,
                                                maxBitrate: 0,
                                                width: 0,
                                                height: 0,
                                                apiFramework: null,
                                                scalable: null,
                                                maintainAspectRatio: null,
                                            };
                                            (t.id = e.getAttribute("id")),
                                                (t.fileURL = N.parseNodeText(e)),
                                                (t.deliveryType = e.getAttribute("delivery")),
                                                (t.codec = e.getAttribute("codec")),
                                                (t.mimeType = e.getAttribute("type")),
                                                (t.mediaType = e.getAttribute("mediaType") || "2D"),
                                                (t.apiFramework = e.getAttribute("apiFramework")),
                                                (t.fileSize = parseInt(e.getAttribute("fileSize") || 0)),
                                                (t.bitrate = parseInt(e.getAttribute("bitrate") || 0)),
                                                (t.minBitrate = parseInt(e.getAttribute("minBitrate") || 0)),
                                                (t.maxBitrate = parseInt(e.getAttribute("maxBitrate") || 0)),
                                                (t.width = parseInt(e.getAttribute("width") || 0)),
                                                (t.height = parseInt(e.getAttribute("height") || 0));
                                            var r = e.getAttribute("scalable");
                                            r && "string" == typeof r && (t.scalable = N.parseBoolean(r));
                                            var i = e.getAttribute("maintainAspectRatio");
                                            return i && "string" == typeof i && (t.maintainAspectRatio = N.parseBoolean(i)), t;
                                        })(e)
                                    );
                                });
                                var t = N.childByName(e, "InteractiveCreativeFile");
                                t &&
                                    (i.interactiveCreativeFile = (function (e) {
                                        var t = (function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            return { type: e.type || null, apiFramework: e.apiFramework || null, variableDuration: N.parseBoolean(e.variableDuration), fileURL: null };
                                        })(N.parseAttributes(e));
                                        return (t.fileURL = N.parseNodeText(e)), t;
                                    })(t));
                                var r = N.childByName(e, "ClosedCaptionFiles");
                                r &&
                                    N.childrenByName(r, "ClosedCaptionFile").forEach(function (e) {
                                        var t = (function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            return { type: e.type || null, language: e.language || null, fileURL: null };
                                        })(N.parseAttributes(e));
                                        (t.fileURL = N.parseNodeText(e)), i.closedCaptionFiles.push(t);
                                    });
                                var n,
                                    a,
                                    o,
                                    s = N.childByName(e, "Mezzanine"),
                                    l =
                                        ((n = s),
                                        (a = {}),
                                        (o = !1),
                                        ["delivery", "type", "width", "height"].forEach(function (e) {
                                            n && n.getAttribute(e) ? (a[e] = n.getAttribute(e)) : (o = !0);
                                        }),
                                        o ? null : a);
                                if (l) {
                                    var c = { id: null, fileURL: null, delivery: null, codec: null, type: null, width: 0, height: 0, fileSize: 0, mediaType: "2D" };
                                    (c.id = s.getAttribute("id")),
                                        (c.fileURL = N.parseNodeText(s)),
                                        (c.delivery = l.delivery),
                                        (c.codec = s.getAttribute("codec")),
                                        (c.type = l.type),
                                        (c.width = parseInt(l.width, 10)),
                                        (c.height = parseInt(l.height, 10)),
                                        (c.fileSize = parseInt(s.getAttribute("fileSize"), 10)),
                                        (c.mediaType = s.getAttribute("mediaType") || "2D"),
                                        (i.mezzanine = c);
                                }
                            });
                        var c = N.childByName(e, "Icons");
                        return (
                            c &&
                                N.childrenByName(c, "Icon").forEach(function (e) {
                                    i.icons.push(
                                        (function (e) {
                                            var t = {
                                                program: null,
                                                height: 0,
                                                width: 0,
                                                xPosition: 0,
                                                yPosition: 0,
                                                apiFramework: null,
                                                offset: null,
                                                duration: 0,
                                                type: null,
                                                staticResource: null,
                                                htmlResource: null,
                                                iframeResource: null,
                                                pxratio: "1",
                                                iconClickThroughURLTemplate: null,
                                                iconClickTrackingURLTemplates: [],
                                                iconViewTrackingURLTemplate: null,
                                            };
                                            (t.program = e.getAttribute("program")),
                                                (t.height = parseInt(e.getAttribute("height") || 0)),
                                                (t.width = parseInt(e.getAttribute("width") || 0)),
                                                (t.xPosition = (function (e) {
                                                    return -1 !== ["left", "right"].indexOf(e) ? e : parseInt(e || 0);
                                                })(e.getAttribute("xPosition"))),
                                                (t.yPosition = (function (e) {
                                                    return -1 !== ["top", "bottom"].indexOf(e) ? e : parseInt(e || 0);
                                                })(e.getAttribute("yPosition"))),
                                                (t.apiFramework = e.getAttribute("apiFramework")),
                                                (t.pxratio = e.getAttribute("pxratio") || "1"),
                                                (t.offset = N.parseDuration(e.getAttribute("offset"))),
                                                (t.duration = N.parseDuration(e.getAttribute("duration"))),
                                                N.childrenByName(e, "HTMLResource").forEach(function (e) {
                                                    (t.type = e.getAttribute("creativeType") || "text/html"), (t.htmlResource = N.parseNodeText(e));
                                                }),
                                                N.childrenByName(e, "IFrameResource").forEach(function (e) {
                                                    (t.type = e.getAttribute("creativeType") || 0), (t.iframeResource = N.parseNodeText(e));
                                                }),
                                                N.childrenByName(e, "StaticResource").forEach(function (e) {
                                                    (t.type = e.getAttribute("creativeType") || 0), (t.staticResource = N.parseNodeText(e));
                                                });
                                            var r = N.childByName(e, "IconClicks");
                                            return (
                                                r &&
                                                    ((t.iconClickThroughURLTemplate = N.parseNodeText(N.childByName(r, "IconClickThrough"))),
                                                    N.childrenByName(r, "IconClickTracking").forEach(function (e) {
                                                        t.iconClickTrackingURLTemplates.push({ id: e.getAttribute("id") || null, url: N.parseNodeText(e) });
                                                    })),
                                                (t.iconViewTrackingURLTemplate = N.parseNodeText(N.childByName(e, "IconViewTracking"))),
                                                t
                                            );
                                        })(e)
                                    );
                                }),
                            i
                        );
                    }
                    function S(e, t) {
                        var r = (function () {
                            var e = v(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {});
                            return { id: e.id, adId: e.adId, sequence: e.sequence, apiFramework: e.apiFramework, type: "nonlinear", variations: [], trackingEvents: {} };
                        })(t);
                        return (
                            N.childrenByName(e, "TrackingEvents").forEach(function (e) {
                                var t, i;
                                N.childrenByName(e, "Tracking").forEach(function (e) {
                                    (t = e.getAttribute("event")), (i = N.parseNodeText(e)), t && i && (Array.isArray(r.trackingEvents[t]) || (r.trackingEvents[t] = []), r.trackingEvents[t].push(i));
                                });
                            }),
                            N.childrenByName(e, "NonLinear").forEach(function (e) {
                                var t = {
                                    id: null,
                                    width: 0,
                                    height: 0,
                                    expandedWidth: 0,
                                    expandedHeight: 0,
                                    scalable: !0,
                                    maintainAspectRatio: !0,
                                    minSuggestedDuration: 0,
                                    apiFramework: "static",
                                    adType: "nonLinearAd",
                                    type: null,
                                    staticResource: null,
                                    htmlResource: null,
                                    iframeResource: null,
                                    nonlinearClickThroughURLTemplate: null,
                                    nonlinearClickTrackingURLTemplates: [],
                                    adParameters: null,
                                };
                                (t.id = e.getAttribute("id") || null),
                                    (t.width = e.getAttribute("width")),
                                    (t.height = e.getAttribute("height")),
                                    (t.expandedWidth = e.getAttribute("expandedWidth")),
                                    (t.expandedHeight = e.getAttribute("expandedHeight")),
                                    (t.scalable = N.parseBoolean(e.getAttribute("scalable"))),
                                    (t.maintainAspectRatio = N.parseBoolean(e.getAttribute("maintainAspectRatio"))),
                                    (t.minSuggestedDuration = N.parseDuration(e.getAttribute("minSuggestedDuration"))),
                                    (t.apiFramework = e.getAttribute("apiFramework")),
                                    N.childrenByName(e, "HTMLResource").forEach(function (e) {
                                        (t.type = e.getAttribute("creativeType") || "text/html"), (t.htmlResource = N.parseNodeText(e));
                                    }),
                                    N.childrenByName(e, "IFrameResource").forEach(function (e) {
                                        (t.type = e.getAttribute("creativeType") || 0), (t.iframeResource = N.parseNodeText(e));
                                    }),
                                    N.childrenByName(e, "StaticResource").forEach(function (e) {
                                        (t.type = e.getAttribute("creativeType") || 0), (t.staticResource = N.parseNodeText(e));
                                    });
                                var i = N.childByName(e, "AdParameters");
                                i && (t.adParameters = N.parseNodeText(i)),
                                    (t.nonlinearClickThroughURLTemplate = N.parseNodeText(N.childByName(e, "NonLinearClickThrough"))),
                                    N.childrenByName(e, "NonLinearClickTracking").forEach(function (e) {
                                        t.nonlinearClickTrackingURLTemplates.push({ id: e.getAttribute("id") || null, url: N.parseNodeText(e) });
                                    }),
                                    r.variations.push(t);
                            }),
                            r
                        );
                    }
                    function x(e) {
                        var t = [];
                        return (
                            e.forEach(function (e) {
                                var r = D(e);
                                r && t.push(r);
                            }),
                            t
                        );
                    }
                    function D(e) {
                        if ("#comment" === e.nodeName) return null;
                        var t,
                            r = { name: null, value: null, attributes: {}, children: [] },
                            i = e.attributes,
                            n = e.childNodes;
                        if (((r.name = e.nodeName), e.attributes))
                            for (var a in i)
                                if (i.hasOwnProperty(a)) {
                                    var o = i[a];
                                    o.nodeName && o.nodeValue && (r.attributes[o.nodeName] = o.nodeValue);
                                }
                        for (var s in n)
                            if (n.hasOwnProperty(s)) {
                                var l = D(n[s]);
                                l && r.children.push(l);
                            }
                        if (0 === r.children.length || (1 === r.children.length && ["#cdata-section", "#text"].indexOf(r.children[0].name) >= 0)) {
                            var c = N.parseNodeText(e);
                            "" !== c && (r.value = c), (r.children = []);
                        }
                        return null === (t = r).value && 0 === Object.keys(t.attributes).length && 0 === t.children.length ? null : r;
                    }
                    function O(e) {
                        var t = [];
                        return (
                            e.forEach(function (e) {
                                var r,
                                    i = { id: e.getAttribute("id") || null, adId: V(e), sequence: e.getAttribute("sequence") || null, apiFramework: e.getAttribute("apiFramework") || null },
                                    n = [];
                                N.childrenByName(e, "UniversalAdId").forEach(function (e) {
                                    var t = { idRegistry: e.getAttribute("idRegistry") || "unknown", value: N.parseNodeText(e) };
                                    n.push(t);
                                });
                                var a = N.childByName(e, "CreativeExtensions");
                                for (var o in (a && (r = x(N.childrenByName(a, "CreativeExtension"))), e.childNodes)) {
                                    var s = e.childNodes[o],
                                        l = void 0;
                                    switch (s.nodeName) {
                                        case "Linear":
                                            l = I(s, i);
                                            break;
                                        case "NonLinearAds":
                                            l = S(s, i);
                                            break;
                                        case "CompanionAds":
                                            l = C(s, i);
                                    }
                                    l && (n && (l.universalAdIds = n), r && (l.creativeExtensions = r), t.push(l));
                                }
                            }),
                            t
                        );
                    }
                    function V(e) {
                        return e.getAttribute("AdID") || e.getAttribute("adID") || e.getAttribute("adId") || null;
                    }
                    var P = {
                        Wrapper: { subElements: ["VASTAdTagURI", "Impression"] },
                        BlockedAdCategories: { attributes: ["authority"] },
                        InLine: { subElements: ["AdSystem", "AdTitle", "Impression", "AdServingId", "Creatives"] },
                        Category: { attributes: ["authority"] },
                        Pricing: { attributes: ["model", "currency"] },
                        Verification: { oneOfinLineResources: ["JavaScriptResource", "ExecutableResource"], attributes: ["vendor"] },
                        UniversalAdId: { attributes: ["idRegistry"] },
                        JavaScriptResource: { attributes: ["apiFramework", "browserOptional"] },
                        ExecutableResource: { attributes: ["apiFramework", "type"] },
                        Tracking: { attributes: ["event"] },
                        Creatives: { subElements: ["Creative"] },
                        Creative: { subElements: ["UniversalAdId"] },
                        Linear: { subElements: ["MediaFiles", "Duration"] },
                        MediaFiles: { subElements: ["MediaFile"] },
                        MediaFile: { attributes: ["delivery", "type", "width", "height"] },
                        Mezzanine: { attributes: ["delivery", "type", "width", "height"] },
                        NonLinear: { oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"], attributes: ["width", "height"] },
                        Companion: { oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"], attributes: ["width", "height"] },
                        StaticResource: { attributes: ["creativeType"] },
                        Icons: { subElements: ["Icon"] },
                        Icon: { oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"] },
                    };
                    function M(e, t) {
                        if (P[e.nodeName] && P[e.nodeName].attributes) {
                            var r = P[e.nodeName].attributes.filter(function (t) {
                                return !e.getAttribute(t);
                            });
                            r.length > 0 && F({ name: e.nodeName, parentName: e.parentNode.nodeName, attributes: r }, t);
                        }
                    }
                    function _(e, t, r) {
                        var i = P[e.nodeName],
                            n = !r && "Wrapper" !== e.nodeName;
                        if (i && !n) {
                            if (i.subElements) {
                                var a = i.subElements.filter(function (t) {
                                    return !N.childByName(e, t);
                                });
                                a.length > 0 && F({ name: e.nodeName, parentName: e.parentNode.nodeName, subElements: a }, t);
                            }
                            r &&
                                i.oneOfinLineResources &&
                                (i.oneOfinLineResources.some(function (t) {
                                    return N.childByName(e, t);
                                }) ||
                                    F({ name: e.nodeName, parentName: e.parentNode.nodeName, oneOfResources: i.oneOfinLineResources }, t));
                        }
                    }
                    function B(e) {
                        return e.children && 0 !== e.children.length;
                    }
                    function F(e, t) {
                        var r = e.name,
                            i = e.parentName,
                            n = e.attributes,
                            a = e.subElements,
                            o = e.oneOfResources,
                            s = "Element '".concat(r, "'");
                        t("VAST-warning", {
                            message: (s += n
                                ? " missing required attribute(s) '".concat(n.join(", "), "' ")
                                : a
                                ? " missing required sub element(s) '".concat(a.join(", "), "' ")
                                : o
                                ? " must provide one of the following '".concat(o.join(", "), "' ")
                                : " is empty"),
                            parentElement: i,
                            specVersion: 4.1,
                        });
                    }
                    var j = {
                        verifyRequiredValues: function e(t, r, i) {
                            if (t && t.nodeName)
                                if (("InLine" === t.nodeName && (i = !0), M(t, r), B(t))) {
                                    _(t, r, i);
                                    for (var n = 0; n < t.children.length; n++) e(t.children[n], r, i);
                                } else 0 === N.parseNodeText(t).length && F({ name: t.nodeName, parentName: t.parentNode.nodeName }, r);
                        },
                        hasSubElements: B,
                        emitMissingValueWarning: F,
                        verifyRequiredAttributes: M,
                        verifyRequiredSubElements: _,
                    };
                    function W(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = r.allowMultipleAds,
                            n = r.followAdditionalWrappers,
                            a = e.childNodes;
                        for (var o in a) {
                            var s = a[o];
                            if (-1 !== ["Wrapper", "InLine"].indexOf(s.nodeName) && ("Wrapper" !== s.nodeName || !1 !== n)) {
                                if ((N.copyNodeAttribute("id", e, s), N.copyNodeAttribute("sequence", e, s), N.copyNodeAttribute("adType", e, s), "Wrapper" === s.nodeName)) return { ad: z(s, t), type: "WRAPPER" };
                                if ("InLine" === s.nodeName) return { ad: H(s, t, { allowMultipleAds: i }), type: "INLINE" };
                            }
                        }
                    }
                    function H(e, t) {
                        return !1 === (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).allowMultipleAds && e.getAttribute("sequence") ? null : q(e, t);
                    }
                    function q(e, t) {
                        var r = [];
                        t && j.verifyRequiredValues(e, t);
                        var i = e.childNodes,
                            n = (function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return {
                                    id: e.id || null,
                                    sequence: e.sequence || null,
                                    adType: e.adType || null,
                                    adServingId: null,
                                    categories: [],
                                    expires: null,
                                    viewableImpression: [],
                                    system: null,
                                    title: null,
                                    description: null,
                                    advertiser: null,
                                    pricing: null,
                                    survey: null,
                                    errorURLTemplates: [],
                                    impressionURLTemplates: [],
                                    creatives: [],
                                    extensions: [],
                                    adVerifications: [],
                                    blockedAdCategories: [],
                                    followAdditionalWrappers: !0,
                                    allowMultipleAds: !1,
                                    fallbackOnNoAd: null,
                                };
                            })(N.parseAttributes(e));
                        for (var a in i) {
                            var o = i[a];
                            switch (o.nodeName) {
                                case "Error":
                                    n.errorURLTemplates.push(N.parseNodeText(o));
                                    break;
                                case "Impression":
                                    n.impressionURLTemplates.push({ id: o.getAttribute("id") || null, url: N.parseNodeText(o) });
                                    break;
                                case "Creatives":
                                    n.creatives = O(N.childrenByName(o, "Creative"));
                                    break;
                                case "Extensions":
                                    var s = N.childrenByName(o, "Extension");
                                    (n.extensions = x(s)), n.adVerifications.length || (r = Q(s));
                                    break;
                                case "AdVerifications":
                                    n.adVerifications = G(N.childrenByName(o, "Verification"));
                                    break;
                                case "AdSystem":
                                    n.system = { value: N.parseNodeText(o), version: o.getAttribute("version") || null };
                                    break;
                                case "AdTitle":
                                    n.title = N.parseNodeText(o);
                                    break;
                                case "AdServingId":
                                    n.adServingId = N.parseNodeText(o);
                                    break;
                                case "Category":
                                    n.categories.push({ authority: o.getAttribute("authority") || null, value: N.parseNodeText(o) });
                                    break;
                                case "Expires":
                                    n.expires = parseInt(N.parseNodeText(o), 10);
                                    break;
                                case "ViewableImpression":
                                    n.viewableImpression.push(X(o));
                                    break;
                                case "Description":
                                    n.description = N.parseNodeText(o);
                                    break;
                                case "Advertiser":
                                    n.advertiser = { id: o.getAttribute("id") || null, value: N.parseNodeText(o) };
                                    break;
                                case "Pricing":
                                    n.pricing = { value: N.parseNodeText(o), model: o.getAttribute("model") || null, currency: o.getAttribute("currency") || null };
                                    break;
                                case "Survey":
                                    n.survey = N.parseNodeText(o);
                                    break;
                                case "BlockedAdCategories":
                                    n.blockedAdCategories.push({ authority: o.getAttribute("authority") || null, value: N.parseNodeText(o) });
                            }
                        }
                        return r.length && (n.adVerifications = n.adVerifications.concat(r)), n;
                    }
                    function z(e, t) {
                        var r = q(e, t),
                            i = e.getAttribute("followAdditionalWrappers"),
                            n = e.getAttribute("allowMultipleAds"),
                            a = e.getAttribute("fallbackOnNoAd");
                        (r.followAdditionalWrappers = !i || N.parseBoolean(i)), (r.allowMultipleAds = !!n && N.parseBoolean(n)), (r.fallbackOnNoAd = a ? N.parseBoolean(a) : null);
                        var o = N.childByName(e, "VASTAdTagURI");
                        if (
                            (o ? (r.nextWrapperURL = N.parseNodeText(o)) : (o = N.childByName(e, "VASTAdTagURL")) && (r.nextWrapperURL = N.parseNodeText(N.childByName(o, "URL"))),
                            r.creatives.forEach(function (e) {
                                if (-1 !== ["linear", "nonlinear"].indexOf(e.type)) {
                                    if (e.trackingEvents) {
                                        r.trackingEvents || (r.trackingEvents = {}), r.trackingEvents[e.type] || (r.trackingEvents[e.type] = {});
                                        var t = function (t) {
                                            var i = e.trackingEvents[t];
                                            Array.isArray(r.trackingEvents[e.type][t]) || (r.trackingEvents[e.type][t] = []),
                                                i.forEach(function (i) {
                                                    r.trackingEvents[e.type][t].push(i);
                                                });
                                        };
                                        for (var i in e.trackingEvents) t(i);
                                    }
                                    e.videoClickTrackingURLTemplates &&
                                        (Array.isArray(r.videoClickTrackingURLTemplates) || (r.videoClickTrackingURLTemplates = []),
                                        e.videoClickTrackingURLTemplates.forEach(function (e) {
                                            r.videoClickTrackingURLTemplates.push(e);
                                        })),
                                        e.videoClickThroughURLTemplate && (r.videoClickThroughURLTemplate = e.videoClickThroughURLTemplate),
                                        e.videoCustomClickURLTemplates &&
                                            (Array.isArray(r.videoCustomClickURLTemplates) || (r.videoCustomClickURLTemplates = []),
                                            e.videoCustomClickURLTemplates.forEach(function (e) {
                                                r.videoCustomClickURLTemplates.push(e);
                                            }));
                                }
                            }),
                            r.nextWrapperURL)
                        )
                            return r;
                    }
                    function G(e) {
                        var t = [];
                        return (
                            e.forEach(function (e) {
                                var r = { resource: null, vendor: null, browserOptional: !1, apiFramework: null, type: null, parameters: null, trackingEvents: {} },
                                    i = e.childNodes;
                                for (var n in (N.assignAttributes(e.attributes, r), i)) {
                                    var a = i[n];
                                    switch (a.nodeName) {
                                        case "JavaScriptResource":
                                        case "ExecutableResource":
                                            (r.resource = N.parseNodeText(a)), N.assignAttributes(a.attributes, r);
                                            break;
                                        case "VerificationParameters":
                                            r.parameters = N.parseNodeText(a);
                                    }
                                }
                                var o = N.childByName(e, "TrackingEvents");
                                o &&
                                    N.childrenByName(o, "Tracking").forEach(function (e) {
                                        var t = e.getAttribute("event"),
                                            i = N.parseNodeText(e);
                                        t && i && (Array.isArray(r.trackingEvents[t]) || (r.trackingEvents[t] = []), r.trackingEvents[t].push(i));
                                    }),
                                    t.push(r);
                            }),
                            t
                        );
                    }
                    function Q(e) {
                        var t = null,
                            r = [];
                        return (
                            e.some(function (e) {
                                return (t = N.childByName(e, "AdVerifications"));
                            }),
                            t && (r = G(N.childrenByName(t, "Verification"))),
                            r
                        );
                    }
                    function X(e) {
                        var t = {};
                        t.id = e.getAttribute("id") || null;
                        var r = e.childNodes;
                        for (var i in r) {
                            var n = r[i],
                                a = n.nodeName,
                                o = N.parseNodeText(n);
                            if (("Viewable" === a || "NotViewable" === a || "ViewUndetermined" === a) && o) {
                                var s = a.toLowerCase();
                                Array.isArray(t[s]) || (t[s] = []), t[s].push(o);
                            }
                        }
                        return t;
                    }
                    var Y = (function () {
                            function e() {
                                n(this, e), (this._handlers = []);
                            }
                            return (
                                o(e, [
                                    {
                                        key: "on",
                                        value: function (e, t) {
                                            if ("function" != typeof t) throw new TypeError("The handler argument must be of type Function. Received type ".concat(i(t)));
                                            if (!e) throw new TypeError("The event argument must be of type String. Received type ".concat(i(e)));
                                            return this._handlers.push({ event: e, handler: t }), this;
                                        },
                                    },
                                    {
                                        key: "once",
                                        value: function (e, t) {
                                            return this.on(
                                                e,
                                                (function (e, t, r) {
                                                    var i = { fired: !1, wrapFn: void 0 };
                                                    function n() {
                                                        i.fired || (e.off(t, i.wrapFn), (i.fired = !0), r.bind(e).apply(void 0, arguments));
                                                    }
                                                    return (i.wrapFn = n), n;
                                                })(this, e, t)
                                            );
                                        },
                                    },
                                    {
                                        key: "off",
                                        value: function (e, t) {
                                            return (
                                                (this._handlers = this._handlers.filter(function (r) {
                                                    return r.event !== e || r.handler !== t;
                                                })),
                                                this
                                            );
                                        },
                                    },
                                    {
                                        key: "emit",
                                        value: function (e) {
                                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                                            var n = !1;
                                            return (
                                                this._handlers.forEach(function (t) {
                                                    "*" === t.event && ((n = !0), t.handler.apply(t, [e].concat(r))), t.event === e && ((n = !0), t.handler.apply(t, r));
                                                }),
                                                n
                                            );
                                        },
                                    },
                                    {
                                        key: "removeAllListeners",
                                        value: function (e) {
                                            return e
                                                ? ((this._handlers = this._handlers.filter(function (t) {
                                                      return t.event !== e;
                                                  })),
                                                  this)
                                                : ((this._handlers = []), this);
                                        },
                                    },
                                    {
                                        key: "listenerCount",
                                        value: function (e) {
                                            return this._handlers.filter(function (t) {
                                                return t.event === e;
                                            }).length;
                                        },
                                    },
                                    {
                                        key: "listeners",
                                        value: function (e) {
                                            return this._handlers.reduce(function (t, r) {
                                                return r.event === e && t.push(r.handler), t;
                                            }, []);
                                        },
                                    },
                                    {
                                        key: "eventNames",
                                        value: function () {
                                            return this._handlers.map(function (e) {
                                                return e.event;
                                            });
                                        },
                                    },
                                ]),
                                e
                            );
                        })(),
                        K = {
                            get: function (e, t, r) {
                                r(new Error("Please bundle the library for node to use the node urlHandler"));
                            },
                        },
                        J = 12e4;
                    function $() {
                        try {
                            var e = new window.XMLHttpRequest();
                            return "withCredentials" in e ? e : null;
                        } catch (e) {
                            return null;
                        }
                    }
                    function Z(e, t, r) {
                        var i = r ? 408 : e.status,
                            n = r ? "XHRURLHandler: Request timed out after ".concat(e.timeout, " ms (").concat(i, ")") : "XHRURLHandler: ".concat(e.statusText, " (").concat(i, ")");
                        t(new Error(n), null, { statusCode: i });
                    }
                    var ee = {
                            get: function (e, t, r) {
                                if ("https:" === window.location.protocol && 0 === e.indexOf("http://")) return r(new Error("XHRURLHandler: Cannot go from HTTPS to HTTP."));
                                try {
                                    var i = $();
                                    i.open("GET", e),
                                        (i.timeout = t.timeout || J),
                                        (i.withCredentials = t.withCredentials || !1),
                                        i.overrideMimeType && i.overrideMimeType("text/xml"),
                                        (i.onload = function () {
                                            return (function (e, t) {
                                                200 === e.status ? t(null, e.responseXML, { byteLength: e.response.length, statusCode: e.status }) : Z(e, t, !1);
                                            })(i, r);
                                        }),
                                        (i.onerror = function () {
                                            return Z(i, r, !1);
                                        }),
                                        (i.onabort = function () {
                                            return Z(i, r, !1);
                                        }),
                                        (i.ontimeout = function () {
                                            return Z(i, r, !0);
                                        }),
                                        i.send();
                                } catch (e) {
                                    r(new Error("XHRURLHandler: Unexpected error"));
                                }
                            },
                            supported: function () {
                                return !!$();
                            },
                        },
                        te = {
                            get: function (e, t, r) {
                                return (
                                    r || ("function" == typeof t && (r = t), (t = {})),
                                    "undefined" == typeof window || null === window
                                        ? K.get(e, t, r)
                                        : ee.supported()
                                        ? ee.get(e, t, r)
                                        : r(new Error("Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"))
                                );
                            },
                        },
                        re = 0,
                        ie = 0,
                        ne = function (e, t) {
                            !e || !t || e <= 0 || t <= 0 || (ie = (ie * re + (8 * e) / t) / ++re);
                        },
                        ae = { ERRORCODE: 900, extensions: [] },
                        oe = (function (e) {
                            l(r, e);
                            var t = p(r);
                            function r() {
                                var e;
                                return (
                                    n(this, r),
                                    ((e = t.call(this)).remainingAds = []),
                                    (e.parentURLs = []),
                                    (e.errorURLTemplates = []),
                                    (e.rootErrorURLTemplates = []),
                                    (e.maxWrapperDepth = null),
                                    (e.URLTemplateFilters = []),
                                    (e.fetchingOptions = {}),
                                    (e.parsingOptions = {}),
                                    e
                                );
                            }
                            return (
                                o(r, [
                                    {
                                        key: "addURLTemplateFilter",
                                        value: function (e) {
                                            "function" == typeof e && this.URLTemplateFilters.push(e);
                                        },
                                    },
                                    {
                                        key: "removeURLTemplateFilter",
                                        value: function () {
                                            this.URLTemplateFilters.pop();
                                        },
                                    },
                                    {
                                        key: "countURLTemplateFilters",
                                        value: function () {
                                            return this.URLTemplateFilters.length;
                                        },
                                    },
                                    {
                                        key: "clearURLTemplateFilters",
                                        value: function () {
                                            this.URLTemplateFilters = [];
                                        },
                                    },
                                    {
                                        key: "trackVastError",
                                        value: function (e, t) {
                                            for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++) i[n - 2] = arguments[n];
                                            this.emit("VAST-error", Object.assign.apply(Object, [{}, ae, t].concat(i))), w.track(e, t);
                                        },
                                    },
                                    {
                                        key: "getErrorURLTemplates",
                                        value: function () {
                                            return this.rootErrorURLTemplates.concat(this.errorURLTemplates);
                                        },
                                    },
                                    {
                                        key: "getEstimatedBitrate",
                                        value: function () {
                                            return ie;
                                        },
                                    },
                                    {
                                        key: "fetchVAST",
                                        value: function (e) {
                                            var t = this,
                                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                            return new Promise(function (a, o) {
                                                t.URLTemplateFilters.forEach(function (t) {
                                                    e = t(e);
                                                }),
                                                    t.parentURLs.push(e);
                                                var s = Date.now();
                                                t.emit("VAST-resolving", { url: e, previousUrl: i, wrapperDepth: r, maxWrapperDepth: t.maxWrapperDepth, timeout: t.fetchingOptions.timeout, wrapperAd: n }),
                                                    t.urlHandler.get(e, t.fetchingOptions, function (n, l) {
                                                        var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                                            u = Math.round(Date.now() - s),
                                                            d = Object.assign({ url: e, previousUrl: i, wrapperDepth: r, error: n, duration: u }, c);
                                                        t.emit("VAST-resolved", d), ne(c.byteLength, u), n ? o(n) : a(l);
                                                    });
                                            });
                                        },
                                    },
                                    {
                                        key: "initParsingStatus",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            (this.errorURLTemplates = []),
                                                (this.fetchingOptions = { timeout: e.timeout || J, withCredentials: e.withCredentials }),
                                                (this.maxWrapperDepth = e.wrapperLimit || 10),
                                                (this.parentURLs = []),
                                                (this.parsingOptions = { allowMultipleAds: e.allowMultipleAds }),
                                                (this.remainingAds = []),
                                                (this.rootErrorURLTemplates = []),
                                                (this.rootURL = ""),
                                                (this.urlHandler = e.urlHandler || e.urlhandler || te),
                                                (this.vastVersion = null),
                                                ne(e.byteLength, e.requestDuration);
                                        },
                                    },
                                    {
                                        key: "getRemainingAds",
                                        value: function (e) {
                                            var t = this;
                                            if (0 === this.remainingAds.length) return Promise.reject(new Error("No more ads are available for the given VAST"));
                                            var r = e ? w.flatten(this.remainingAds) : this.remainingAds.shift();
                                            return (
                                                (this.errorURLTemplates = []),
                                                (this.parentURLs = []),
                                                this.resolveAds(r, { wrapperDepth: 0, url: this.rootURL }).then(function (e) {
                                                    return t.buildVASTResponse(e);
                                                })
                                            );
                                        },
                                    },
                                    {
                                        key: "getAndParseVAST",
                                        value: function (e) {
                                            var t = this,
                                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            return (
                                                this.initParsingStatus(r),
                                                this.URLTemplateFilters.forEach(function (t) {
                                                    e = t(e);
                                                }),
                                                (this.rootURL = e),
                                                this.fetchVAST(e).then(function (i) {
                                                    return (
                                                        (r.previousUrl = e),
                                                        (r.isRootVAST = !0),
                                                        (r.url = e),
                                                        t.parse(i, r).then(function (e) {
                                                            return t.buildVASTResponse(e);
                                                        })
                                                    );
                                                })
                                            );
                                        },
                                    },
                                    {
                                        key: "parseVAST",
                                        value: function (e) {
                                            var t = this,
                                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            return (
                                                this.initParsingStatus(r),
                                                (r.isRootVAST = !0),
                                                this.parse(e, r).then(function (e) {
                                                    return t.buildVASTResponse(e);
                                                })
                                            );
                                        },
                                    },
                                    {
                                        key: "buildVASTResponse",
                                        value: function (e) {
                                            var t,
                                                r = { ads: (t = { ads: e, errorURLTemplates: this.getErrorURLTemplates(), version: this.vastVersion }).ads || [], errorURLTemplates: t.errorURLTemplates || [], version: t.version || null };
                                            return this.completeWrapperResolving(r), r;
                                        },
                                    },
                                    {
                                        key: "parseVastXml",
                                        value: function (e, t) {
                                            var r = t.isRootVAST,
                                                i = void 0 !== r && r,
                                                n = t.url,
                                                a = void 0 === n ? null : n,
                                                o = t.wrapperDepth,
                                                s = void 0 === o ? 0 : o,
                                                l = t.allowMultipleAds,
                                                c = t.followAdditionalWrappers;
                                            if (!e || !e.documentElement || "VAST" !== e.documentElement.nodeName) throw (this.emit("VAST-ad-parsed", { type: "ERROR", url: a, wrapperDepth: s }), new Error("Invalid VAST XMLDocument"));
                                            var u = [],
                                                d = e.documentElement.childNodes,
                                                p = e.documentElement.getAttribute("version");
                                            for (var h in (i && p && (this.vastVersion = p), d)) {
                                                var f = d[h];
                                                if ("Error" === f.nodeName) {
                                                    var v = N.parseNodeText(f);
                                                    i ? this.rootErrorURLTemplates.push(v) : this.errorURLTemplates.push(v);
                                                } else if ("Ad" === f.nodeName) {
                                                    if (this.vastVersion && parseFloat(this.vastVersion) < 3) l = !0;
                                                    else if (!1 === l && u.length > 1) break;
                                                    var m = W(f, this.emit.bind(this), { allowMultipleAds: l, followAdditionalWrappers: c });
                                                    m.ad
                                                        ? (u.push(m.ad), this.emit("VAST-ad-parsed", { type: m.type, url: a, wrapperDepth: s, adIndex: u.length - 1, vastVersion: p }))
                                                        : this.trackVastError(this.getErrorURLTemplates(), { ERRORCODE: 101 });
                                                }
                                            }
                                            return u;
                                        },
                                    },
                                    {
                                        key: "parse",
                                        value: function (e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                r = t.url,
                                                i = void 0 === r ? null : r,
                                                n = t.resolveAll,
                                                a = void 0 === n || n,
                                                o = t.wrapperSequence,
                                                s = void 0 === o ? null : o,
                                                l = t.previousUrl,
                                                c = void 0 === l ? null : l,
                                                u = t.wrapperDepth,
                                                d = void 0 === u ? 0 : u,
                                                p = t.isRootVAST,
                                                h = void 0 !== p && p,
                                                f = t.followAdditionalWrappers,
                                                v = t.allowMultipleAds,
                                                m = [];
                                            this.vastVersion && parseFloat(this.vastVersion) < 3 && h && (v = !0);
                                            try {
                                                m = this.parseVastXml(e, { isRootVAST: h, url: i, wrapperDepth: d, allowMultipleAds: v, followAdditionalWrappers: f });
                                            } catch (e) {
                                                return Promise.reject(e);
                                            }
                                            return (
                                                1 === m.length && null != s && (m[0].sequence = s),
                                                !1 === a && ((this.remainingAds = N.splitVAST(m)), (m = this.remainingAds.shift())),
                                                this.resolveAds(m, { wrapperDepth: d, previousUrl: c, url: i })
                                            );
                                        },
                                    },
                                    {
                                        key: "resolveAds",
                                        value: function () {
                                            var e = this,
                                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                r = arguments.length > 1 ? arguments[1] : void 0,
                                                i = r.wrapperDepth,
                                                n = r.previousUrl,
                                                a = r.url,
                                                o = [];
                                            return (
                                                (n = a),
                                                t.forEach(function (t) {
                                                    var r = e.resolveWrappers(t, i, n);
                                                    o.push(r);
                                                }),
                                                Promise.all(o).then(function (t) {
                                                    var r = w.flatten(t);
                                                    if (!r && e.remainingAds.length > 0) {
                                                        var o = e.remainingAds.shift();
                                                        return e.resolveAds(o, { wrapperDepth: i, previousUrl: n, url: a });
                                                    }
                                                    return r;
                                                })
                                            );
                                        },
                                    },
                                    {
                                        key: "resolveWrappers",
                                        value: function (e, t, r) {
                                            var i = this;
                                            return new Promise(function (n) {
                                                var a;
                                                if ((t++, !e.nextWrapperURL)) return delete e.nextWrapperURL, n(e);
                                                if (t >= i.maxWrapperDepth || -1 !== i.parentURLs.indexOf(e.nextWrapperURL)) return (e.errorCode = 302), delete e.nextWrapperURL, n(e);
                                                (e.nextWrapperURL = N.resolveVastAdTagURI(e.nextWrapperURL, r)),
                                                    i.URLTemplateFilters.forEach(function (t) {
                                                        e.nextWrapperURL = t(e.nextWrapperURL);
                                                    });
                                                var o = null !== (a = i.parsingOptions.allowMultipleAds) && void 0 !== a ? a : e.allowMultipleAds,
                                                    s = e.sequence;
                                                i.fetchVAST(e.nextWrapperURL, t, r, e)
                                                    .then(function (a) {
                                                        return i
                                                            .parse(a, { url: e.nextWrapperURL, previousUrl: r, wrapperSequence: s, wrapperDepth: t, followAdditionalWrappers: e.followAdditionalWrappers, allowMultipleAds: o })
                                                            .then(function (t) {
                                                                if ((delete e.nextWrapperURL, 0 === t.length)) return (e.creatives = []), n(e);
                                                                t.forEach(function (t) {
                                                                    t && N.mergeWrapperAdData(t, e);
                                                                }),
                                                                    n(t);
                                                            });
                                                    })
                                                    .catch(function (t) {
                                                        (e.errorCode = 301), (e.errorMessage = t.message), n(e);
                                                    });
                                            });
                                        },
                                    },
                                    {
                                        key: "completeWrapperResolving",
                                        value: function (e) {
                                            if (0 === e.ads.length) this.trackVastError(e.errorURLTemplates, { ERRORCODE: 303 });
                                            else
                                                for (var t = e.ads.length - 1; t >= 0; t--) {
                                                    var r = e.ads[t];
                                                    (r.errorCode || 0 === r.creatives.length) &&
                                                        (this.trackVastError(
                                                            r.errorURLTemplates.concat(e.errorURLTemplates),
                                                            { ERRORCODE: r.errorCode || 303 },
                                                            { ERRORMESSAGE: r.errorMessage || "" },
                                                            { extensions: r.extensions },
                                                            { system: r.system }
                                                        ),
                                                        e.ads.splice(t, 1));
                                                }
                                        },
                                    },
                                ]),
                                r
                            );
                        })(Y),
                        se = null,
                        le = {
                            data: {},
                            length: 0,
                            getItem: function (e) {
                                return this.data[e];
                            },
                            setItem: function (e, t) {
                                (this.data[e] = t), (this.length = Object.keys(this.data).length);
                            },
                            removeItem: function (e) {
                                delete this.data[e], (this.length = Object.keys(this.data).length);
                            },
                            clear: function () {
                                (this.data = {}), (this.length = 0);
                            },
                        },
                        ce = (function () {
                            function e() {
                                n(this, e), (this.storage = this.initStorage());
                            }
                            return (
                                o(e, [
                                    {
                                        key: "initStorage",
                                        value: function () {
                                            if (se) return se;
                                            try {
                                                se = "undefined" != typeof window && null !== window ? window.localStorage || window.sessionStorage : null;
                                            } catch (e) {
                                                se = null;
                                            }
                                            return (se && !this.isStorageDisabled(se)) || (se = le).clear(), se;
                                        },
                                    },
                                    {
                                        key: "isStorageDisabled",
                                        value: function (e) {
                                            var t = "__VASTStorage__";
                                            try {
                                                if ((e.setItem(t, t), e.getItem(t) !== t)) return e.removeItem(t), !0;
                                            } catch (e) {
                                                return !0;
                                            }
                                            return e.removeItem(t), !1;
                                        },
                                    },
                                    {
                                        key: "getItem",
                                        value: function (e) {
                                            return this.storage.getItem(e);
                                        },
                                    },
                                    {
                                        key: "setItem",
                                        value: function (e, t) {
                                            return this.storage.setItem(e, t);
                                        },
                                    },
                                    {
                                        key: "removeItem",
                                        value: function (e) {
                                            return this.storage.removeItem(e);
                                        },
                                    },
                                    {
                                        key: "clear",
                                        value: function () {
                                            return this.storage.clear();
                                        },
                                    },
                                ]),
                                e
                            );
                        })(),
                        ue = (function () {
                            function e(t, r, i) {
                                n(this, e),
                                    (this.cappingFreeLunch = t || 0),
                                    (this.cappingMinimumTimeInterval = r || 0),
                                    (this.defaultOptions = { withCredentials: !1, timeout: 0 }),
                                    (this.vastParser = new oe()),
                                    (this.storage = i || new ce()),
                                    void 0 === this.lastSuccessfulAd && (this.lastSuccessfulAd = 0),
                                    void 0 === this.totalCalls && (this.totalCalls = 0),
                                    void 0 === this.totalCallsTimeout && (this.totalCallsTimeout = 0);
                            }
                            return (
                                o(e, [
                                    {
                                        key: "getParser",
                                        value: function () {
                                            return this.vastParser;
                                        },
                                    },
                                    {
                                        key: "lastSuccessfulAd",
                                        get: function () {
                                            return this.storage.getItem("vast-client-last-successful-ad");
                                        },
                                        set: function (e) {
                                            this.storage.setItem("vast-client-last-successful-ad", e);
                                        },
                                    },
                                    {
                                        key: "totalCalls",
                                        get: function () {
                                            return this.storage.getItem("vast-client-total-calls");
                                        },
                                        set: function (e) {
                                            this.storage.setItem("vast-client-total-calls", e);
                                        },
                                    },
                                    {
                                        key: "totalCallsTimeout",
                                        get: function () {
                                            return this.storage.getItem("vast-client-total-calls-timeout");
                                        },
                                        set: function (e) {
                                            this.storage.setItem("vast-client-total-calls-timeout", e);
                                        },
                                    },
                                    {
                                        key: "hasRemainingAds",
                                        value: function () {
                                            return this.vastParser.remainingAds.length > 0;
                                        },
                                    },
                                    {
                                        key: "getNextAds",
                                        value: function (e) {
                                            return this.vastParser.getRemainingAds(e);
                                        },
                                    },
                                    {
                                        key: "get",
                                        value: function (e) {
                                            var t = this,
                                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                i = Date.now();
                                            return (
                                                (r = Object.assign({}, this.defaultOptions, r)).hasOwnProperty("resolveAll") || (r.resolveAll = !1),
                                                this.totalCallsTimeout < i ? ((this.totalCalls = 1), (this.totalCallsTimeout = i + 36e5)) : this.totalCalls++,
                                                new Promise(function (n, a) {
                                                    if (t.cappingFreeLunch >= t.totalCalls) return a(new Error("VAST call canceled – FreeLunch capping not reached yet ".concat(t.totalCalls, "/").concat(t.cappingFreeLunch)));
                                                    var o = i - t.lastSuccessfulAd;
                                                    if (o < 0) t.lastSuccessfulAd = 0;
                                                    else if (o < t.cappingMinimumTimeInterval) return a(new Error("VAST call canceled – (".concat(t.cappingMinimumTimeInterval, ")ms minimum interval reached")));
                                                    t.vastParser
                                                        .getAndParseVAST(e, r)
                                                        .then(function (e) {
                                                            return n(e);
                                                        })
                                                        .catch(function (e) {
                                                            return a(e);
                                                        });
                                                })
                                            );
                                        },
                                    },
                                ]),
                                e
                            );
                        })(),
                        de = (function (e) {
                            l(a, e);
                            var t = p(a);
                            function a(e, r, i) {
                                var o,
                                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                for (var l in (n(this, a),
                                ((o = t.call(this)).ad = r),
                                (o.creative = i),
                                (o.variation = s),
                                (o.muted = !1),
                                (o.impressed = !1),
                                (o.skippable = !1),
                                (o.trackingEvents = {}),
                                (o.lastPercentage = 0),
                                (o._alreadyTriggeredQuartiles = {}),
                                (o.emitAlwaysEvents = ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "resume", "pause", "rewind", "skip", "closeLinear", "close"]),
                                o.creative.trackingEvents)) {
                                    var c = o.creative.trackingEvents[l];
                                    o.trackingEvents[l] = c.slice(0);
                                }
                                return (
                                    U(o.creative) ? o._initLinearTracking() : o._initVariationTracking(),
                                    e &&
                                        o.on("start", function () {
                                            e.lastSuccessfulAd = Date.now();
                                        }),
                                    o
                                );
                            }
                            return (
                                o(a, [
                                    {
                                        key: "_initLinearTracking",
                                        value: function () {
                                            (this.linear = !0),
                                                (this.skipDelay = this.creative.skipDelay),
                                                this.setDuration(this.creative.duration),
                                                (this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate),
                                                (this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates);
                                        },
                                    },
                                    {
                                        key: "_initVariationTracking",
                                        value: function () {
                                            if (((this.linear = !1), (this.skipDelay = -1), this.variation)) {
                                                for (var e in this.variation.trackingEvents) {
                                                    var t = this.variation.trackingEvents[e];
                                                    this.trackingEvents[e] ? (this.trackingEvents[e] = this.trackingEvents[e].concat(t.slice(0))) : (this.trackingEvents[e] = t.slice(0));
                                                }
                                                "nonLinearAd" === this.variation.adType
                                                    ? ((this.clickThroughURLTemplate = this.variation.nonlinearClickThroughURLTemplate),
                                                      (this.clickTrackingURLTemplates = this.variation.nonlinearClickTrackingURLTemplates),
                                                      this.setDuration(this.variation.minSuggestedDuration))
                                                    : (function (e) {
                                                          return "companionAd" === e.adType;
                                                      })(this.variation) &&
                                                      ((this.clickThroughURLTemplate = this.variation.companionClickThroughURLTemplate), (this.clickTrackingURLTemplates = this.variation.companionClickTrackingURLTemplates));
                                            }
                                        },
                                    },
                                    {
                                        key: "setDuration",
                                        value: function (e) {
                                            w.isValidTimeValue(e) &&
                                                ((this.assetDuration = e),
                                                (this.quartiles = { firstQuartile: Math.round(25 * this.assetDuration) / 100, midpoint: Math.round(50 * this.assetDuration) / 100, thirdQuartile: Math.round(75 * this.assetDuration) / 100 }));
                                        },
                                    },
                                    {
                                        key: "setProgress",
                                        value: function (e) {
                                            var t = this,
                                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            if (w.isValidTimeValue(e) && "object" === i(r)) {
                                                var n = this.skipDelay || -1;
                                                if ((-1 === n || this.skippable || (n > e ? this.emit("skip-countdown", n - e) : ((this.skippable = !0), this.emit("skip-countdown", 0))), this.assetDuration > 0)) {
                                                    var a = Math.round((e / this.assetDuration) * 100),
                                                        o = [];
                                                    if (e > 0) {
                                                        o.push("start");
                                                        for (var s = this.lastPercentage; s < a; s++) o.push("progress-".concat(s + 1, "%"));
                                                        for (var l in (o.push("progress-".concat(Math.round(e))), this.quartiles)) this.isQuartileReached(l, this.quartiles[l], e) && (o.push(l), (this._alreadyTriggeredQuartiles[l] = !0));
                                                        this.lastPercentage = a;
                                                    }
                                                    o.forEach(function (e) {
                                                        t.track(e, { macros: r, once: !0 });
                                                    }),
                                                        e < this.progress && this.track("rewind", { macros: r });
                                                }
                                                this.progress = e;
                                            }
                                        },
                                    },
                                    {
                                        key: "isQuartileReached",
                                        value: function (e, t, r) {
                                            var i = !1;
                                            return t <= r && !this._alreadyTriggeredQuartiles[e] && (i = !0), i;
                                        },
                                    },
                                    {
                                        key: "setMuted",
                                        value: function (e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            "boolean" == typeof e && "object" === i(t) && (this.muted !== e && this.track(e ? "mute" : "unmute", { macros: t }), (this.muted = e));
                                        },
                                    },
                                    {
                                        key: "setPaused",
                                        value: function (e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            "boolean" == typeof e && "object" === i(t) && (this.paused !== e && this.track(e ? "pause" : "resume", { macros: t }), (this.paused = e));
                                        },
                                    },
                                    {
                                        key: "setFullscreen",
                                        value: function (e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            "boolean" == typeof e && "object" === i(t) && (this.fullscreen !== e && this.track(e ? "fullscreen" : "exitFullscreen", { macros: t }), (this.fullscreen = e));
                                        },
                                    },
                                    {
                                        key: "setExpand",
                                        value: function (e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            "boolean" == typeof e &&
                                                "object" === i(t) &&
                                                (this.expanded !== e && (this.track(e ? "expand" : "collapse", { macros: t }), this.track(e ? "playerExpand" : "playerCollapse", { macros: t })), (this.expanded = e));
                                        },
                                    },
                                    {
                                        key: "setSkipDelay",
                                        value: function (e) {
                                            w.isValidTimeValue(e) && (this.skipDelay = e);
                                        },
                                    },
                                    {
                                        key: "trackImpression",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            "object" === i(e) && (this.impressed || ((this.impressed = !0), this.trackURLs(this.ad.impressionURLTemplates, e), this.track("creativeView", { macros: e })));
                                        },
                                    },
                                    {
                                        key: "error",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                            "object" === i(e) && "boolean" == typeof t && this.trackURLs(this.ad.errorURLTemplates, e, { isCustomCode: t });
                                        },
                                    },
                                    {
                                        key: "errorWithCode",
                                        value: function (e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                            "string" == typeof e && "boolean" == typeof t && (this.error({ ERRORCODE: e }, t), console.log("The method errorWithCode is deprecated, please use vast tracker error method instead"));
                                        },
                                    },
                                    {
                                        key: "complete",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            "object" === i(e) && this.track("complete", { macros: e });
                                        },
                                    },
                                    {
                                        key: "notUsed",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            "object" === i(e) && (this.track("notUsed", { macros: e }), (this.trackingEvents = []));
                                        },
                                    },
                                    {
                                        key: "otherAdInteraction",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            "object" === i(e) && this.track("otherAdInteraction", { macros: e });
                                        },
                                    },
                                    {
                                        key: "acceptInvitation",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            "object" === i(e) && this.track("acceptInvitation", { macros: e });
                                        },
                                    },
                                    {
                                        key: "adExpand",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            "object" === i(e) && this.track("adExpand", { macros: e });
                                        },
                                    },
                                    {
                                        key: "adCollapse",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            "object" === i(e) && this.track("adCollapse", { macros: e });
                                        },
                                    },
                                    {
                                        key: "minimize",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            "object" === i(e) && this.track("minimize", { macros: e });
                                        },
                                    },
                                    {
                                        key: "verificationNotExecuted",
                                        value: function (e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            if ("string" == typeof e && "object" === i(t)) {
                                                if (!this.ad || !this.ad.adVerifications || !this.ad.adVerifications.length) throw new Error("No adVerifications provided");
                                                if (!e) throw new Error("No vendor provided, unable to find associated verificationNotExecuted");
                                                var r = this.ad.adVerifications.find(function (t) {
                                                    return t.vendor === e;
                                                });
                                                if (!r) throw new Error("No associated verification element found for vendor: ".concat(e));
                                                var n = r.trackingEvents;
                                                if (n && n.verificationNotExecuted) {
                                                    var a = n.verificationNotExecuted;
                                                    this.trackURLs(a, t), this.emit("verificationNotExecuted", { trackingURLTemplates: a });
                                                }
                                            }
                                        },
                                    },
                                    {
                                        key: "overlayViewDuration",
                                        value: function (e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            "string" == typeof e && "object" === i(t) && ((t.ADPLAYHEAD = e), this.track("overlayViewDuration", { macros: t }));
                                        },
                                    },
                                    {
                                        key: "close",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            "object" === i(e) && this.track(this.linear ? "closeLinear" : "close", { macros: e });
                                        },
                                    },
                                    {
                                        key: "skip",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            "object" === i(e) && this.track("skip", { macros: e });
                                        },
                                    },
                                    {
                                        key: "load",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            "object" === i(e) && this.track("loaded", { macros: e });
                                        },
                                    },
                                    {
                                        key: "click",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            if ((null === e || "string" == typeof e) && "object" === i(t)) {
                                                this.clickTrackingURLTemplates && this.clickTrackingURLTemplates.length && this.trackURLs(this.clickTrackingURLTemplates, t);
                                                var n = this.clickThroughURLTemplate || e,
                                                    a = r({}, t);
                                                if (n) {
                                                    this.progress && (a.ADPLAYHEAD = this.progressFormatted());
                                                    var o = w.resolveURLTemplates([n], a)[0];
                                                    this.emit("clickthrough", o);
                                                }
                                            }
                                        },
                                    },
                                    {
                                        key: "track",
                                        value: function (e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                r = t.macros,
                                                n = void 0 === r ? {} : r,
                                                a = t.once,
                                                o = void 0 !== a && a;
                                            if ("object" === i(n)) {
                                                "closeLinear" === e && !this.trackingEvents[e] && this.trackingEvents.close && (e = "close");
                                                var s = this.trackingEvents[e],
                                                    l = this.emitAlwaysEvents.indexOf(e) > -1;
                                                s ? (this.emit(e, { trackingURLTemplates: s }), this.trackURLs(s, n)) : l && this.emit(e, null),
                                                    o && (delete this.trackingEvents[e], l && this.emitAlwaysEvents.splice(this.emitAlwaysEvents.indexOf(e), 1));
                                            }
                                        },
                                    },
                                    {
                                        key: "trackURLs",
                                        value: function (e) {
                                            var t,
                                                i,
                                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                                a = r({}, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
                                            this.linear &&
                                                (this.creative && this.creative.mediaFiles && this.creative.mediaFiles[0] && this.creative.mediaFiles[0].fileURL && (a.ASSETURI = this.creative.mediaFiles[0].fileURL),
                                                this.progress && (a.ADPLAYHEAD = this.progressFormatted())),
                                                null !== (t = this.creative) &&
                                                    void 0 !== t &&
                                                    null !== (i = t.universalAdIds) &&
                                                    void 0 !== i &&
                                                    i.length &&
                                                    (a.UNIVERSALADID = this.creative.universalAdIds
                                                        .map(function (e) {
                                                            return e.idRegistry.concat(" ", e.value);
                                                        })
                                                        .join(",")),
                                                this.ad &&
                                                    (this.ad.sequence && (a.PODSEQUENCE = this.ad.sequence),
                                                    this.ad.adType && (a.ADTYPE = this.ad.adType),
                                                    this.ad.adServingId && (a.ADSERVINGID = this.ad.adServingId),
                                                    this.ad.categories &&
                                                        this.ad.categories.length &&
                                                        (a.ADCATEGORIES = this.ad.categories
                                                            .map(function (e) {
                                                                return e.value;
                                                            })
                                                            .join(",")),
                                                    this.ad.blockedAdCategories && this.ad.blockedAdCategories.length && (a.BLOCKEDADCATEGORIES = this.ad.blockedAdCategories)),
                                                w.track(e, a, n);
                                        },
                                    },
                                    {
                                        key: "convertToTimecode",
                                        value: function (e) {
                                            if (!w.isValidTimeValue(e)) return "";
                                            var t = 1e3 * e,
                                                r = Math.floor(t / 36e5),
                                                i = Math.floor((t / 6e4) % 60),
                                                n = Math.floor((t / 1e3) % 60),
                                                a = Math.floor(t % 1e3);
                                            return "".concat(w.addLeadingZeros(r, 2), ":").concat(w.addLeadingZeros(i, 2), ":").concat(w.addLeadingZeros(n, 2), ".").concat(w.addLeadingZeros(a, 3));
                                        },
                                    },
                                    {
                                        key: "progressFormatted",
                                        value: function () {
                                            return this.convertToTimecode(this.progress);
                                        },
                                    },
                                ]),
                                a
                            );
                        })(Y);
                    (e.VASTClient = ue), (e.VASTParser = oe), (e.VASTTracker = de), Object.defineProperty(e, "__esModule", { value: !0 });
                })(t);
            },
            144: (e, t, r) => {
                var i,
                    n = void 0 !== r.g ? r.g : "undefined" != typeof window ? window : {},
                    a = r(893);
                "undefined" != typeof document ? (i = document) : (i = n["__GLOBAL_DOCUMENT_CACHE@4"]) || (i = n["__GLOBAL_DOCUMENT_CACHE@4"] = a), (e.exports = i);
            },
            908: (e, t, r) => {
                var i;
                (i = "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {}), (e.exports = i);
            },
            596: (e) => {
                "use strict";
                var t = ["handshakeVersion", "initAd", "startAd", "stopAd", "skipAd", "resizeAd", "pauseAd", "resumeAd", "expandAd", "collapseAd", "subscribe", "unsubscribe"];
                function r(e, t, r) {}
                (r.prototype.handshakeVersion = function (e, t) {}),
                    (r.prototype.initAd = function (e, t, r, i, n, a, o) {}),
                    (r.prototype.startAd = function (e) {}),
                    (r.prototype.stopAd = function (e) {}),
                    (r.prototype.skipAd = function (e) {}),
                    (r.prototype.resizeAd = function (e, t, r, i) {}),
                    (r.prototype.pauseAd = function (e) {}),
                    (r.prototype.resumeAd = function (e) {}),
                    (r.prototype.expandAd = function (e) {}),
                    (r.prototype.collapseAd = function (e) {}),
                    (r.prototype.subscribe = function (e, t, r) {}),
                    (r.prototype.unsubscribe = function (e, t) {}),
                    (r.prototype.getAdLinear = function (e) {}),
                    (r.prototype.getAdWidth = function (e) {}),
                    (r.prototype.getAdHeight = function (e) {}),
                    (r.prototype.getAdExpanded = function (e) {}),
                    (r.prototype.getAdSkippableState = function (e) {}),
                    (r.prototype.getAdRemainingTime = function (e) {}),
                    (r.prototype.getAdDuration = function (e) {}),
                    (r.prototype.getAdVolume = function (e) {}),
                    (r.prototype.getAdCompanions = function (e) {}),
                    (r.prototype.getAdIcons = function (e) {}),
                    (r.prototype.setAdVolume = function (e, t) {}),
                    n(r, "METHODS", t),
                    n(r, "GETTERS", ["getAdLinear", "getAdWidth", "getAdHeight", "getAdExpanded", "getAdSkippableState", "getAdRemainingTime", "getAdDuration", "getAdVolume", "getAdCompanions", "getAdIcons"]),
                    n(r, "SETTERS", ["setAdVolume"]),
                    n(r, "EVENTS", [
                        "AdLoaded",
                        "AdStarted",
                        "AdStopped",
                        "AdSkipped",
                        "AdSkippableStateChange",
                        "AdSizeChange",
                        "AdLinearChange",
                        "AdDurationChange",
                        "AdExpandedChange",
                        "AdRemainingTimeChange",
                        "AdVolumeChange",
                        "AdImpression",
                        "AdVideoStart",
                        "AdVideoFirstQuartile",
                        "AdVideoMidpoint",
                        "AdVideoThirdQuartile",
                        "AdVideoComplete",
                        "AdClickThru",
                        "AdInteraction",
                        "AdUserAcceptInvitation",
                        "AdUserMinimize",
                        "AdUserClose",
                        "AdPaused",
                        "AdPlaying",
                        "AdLog",
                        "AdError",
                    ]);
                var i = t.filter(function (e) {
                    return -1 === ["skipAd"].indexOf(e);
                });
                function n(e, t, r) {
                    Object.defineProperty(e, t, { writable: !1, configurable: !1, value: r });
                }
                n(r, "checkVPAIDInterface", function (e) {
                    return i.every(function (t) {
                        return "function" == typeof e[t];
                    });
                }),
                    (e.exports = r);
            },
            13: (e, t, r) => {
                "use strict";
                var i = r(596),
                    n = r(437),
                    a = i.checkVPAIDInterface,
                    o = r(77),
                    s = (i.METHODS, "AdClickThru"),
                    l = i.EVENTS.filter(function (e) {
                        return e != s;
                    });
                function c(e, t, r, i) {
                    (this._isValid = a(e)), this._isValid && ((this._creative = e), (this._el = t), (this._videoEl = r), (this._iframe = i), (this._subscribers = new n()), o.setFullSizeStyle(t), u.call(this));
                }
                function u() {
                    if (
                        (l.forEach(
                            function (e) {
                                this._creative.subscribe(p.bind(this, e), e);
                            }.bind(this)
                        ),
                        this._creative.subscribe(d.bind(this), s),
                        this._videoEl)
                    ) {
                        var e = this._iframe.contentDocument.documentElement,
                            t = this._videoEl;
                        e.addEventListener("click", function (r) {
                            r.target === e && t.click();
                        });
                    }
                }
                function d(e, t, r) {
                    this._subscribers.triggerSync(s, { url: e, id: t, playerHandles: r });
                }
                function p(e) {
                    this._subscribers.trigger.apply(this._subscribers, Array.prototype.slice.call(arguments));
                }
                function h(e, t, r, i) {
                    e ? e(r, i) : r && t.trigger("AdError", r);
                }
                (c.prototype = Object.create(i.prototype)),
                    (c.prototype.isValidVPAIDAd = function () {
                        return this._isValid;
                    }),
                    i.METHODS.forEach(function (e) {
                        -1 === ["subscribe", "unsubscribe", "initAd"].indexOf(e) &&
                            (c.prototype[e] = function () {
                                var t = i.prototype[e].length,
                                    r = Array.prototype.slice.call(arguments),
                                    n = t === r.length ? r.pop() : void 0;
                                setTimeout(
                                    function () {
                                        var t,
                                            i = null;
                                        try {
                                            t = this._creative[e].apply(this._creative, r);
                                        } catch (e) {
                                            i = e;
                                        }
                                        h(n, this._subscribers, i, t);
                                    }.bind(this),
                                    0
                                );
                            });
                    }),
                    (c.prototype.initAd = function (e, t, r, i, n, a, s) {
                        (n = n || {}),
                            (a = o.extend({ slot: this._el, videoSlot: this._videoEl }, a || {})),
                            setTimeout(
                                function () {
                                    var o;
                                    try {
                                        this._creative.initAd(e, t, r, i, n, a);
                                    } catch (e) {
                                        o = e;
                                    }
                                    h(s, this._subscribers, o);
                                }.bind(this),
                                0
                            );
                    }),
                    (c.prototype.subscribe = function (e, t, r) {
                        this._subscribers.subscribe(t, e, r);
                    }),
                    (c.prototype.unsubscribe = function (e, t) {
                        this._subscribers.unsubscribe(t, e);
                    }),
                    (c.prototype.on = c.prototype.subscribe),
                    (c.prototype.off = c.prototype.unsubscribe),
                    i.GETTERS.forEach(function (e) {
                        c.prototype[e] = function (t) {
                            setTimeout(
                                function () {
                                    var r,
                                        i = null;
                                    try {
                                        r = this._creative[e]();
                                    } catch (e) {
                                        i = e;
                                    }
                                    h(t, this._subscribers, i, r);
                                }.bind(this),
                                0
                            );
                        };
                    }),
                    (c.prototype.setAdVolume = function (e, t) {
                        setTimeout(
                            function () {
                                var r,
                                    i = null;
                                try {
                                    this._creative.setAdVolume(e), (r = this._creative.getAdVolume());
                                } catch (e) {
                                    i = e;
                                }
                                i || (i = o.validate(r === e, "failed to apply volume: " + e)), h(t, this._subscribers, i, r);
                            }.bind(this),
                            0
                        );
                    }),
                    (c.prototype._destroy = function () {
                        this.stopAd(), this._subscribers.unsubscribeAll();
                    }),
                    (e.exports = c);
            },
            178: (e, t, r) => {
                "use strict";
                var i = r(77),
                    n = i.unique("vpaidIframe"),
                    a = r(13);
                function o(e, t, r, a) {
                    (r = r || {}),
                        (this._id = n()),
                        (this._destroyed = !1),
                        (this._frameContainer = i.createElementInEl(e, "div")),
                        (this._videoEl = t),
                        (this._vpaidOptions = a || { timeout: 1e4 }),
                        (this._templateConfig = {
                            template:
                                r.template ||
                                '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body style="margin:0;padding:0"><div class="ad-element"></div><script type="text/javascript" src="{{iframeURL_JS}}"></script><script type="text/javascript">window.parent.postMessage(\'{"event": "ready", "id": "{{iframeID}}"}\', \'{{origin}}\');</script></body></html>',
                            extraOptions: r.extraOptions || {},
                        });
                }
                function s(e) {
                    var t = this[e];
                    t && t.parentNode && (t.parentNode.removeChild(t), delete this[e]);
                }
                function l() {
                    u.call(this), delete this._adUnit;
                }
                function c() {
                    u.call(this), p.call(this);
                }
                function u() {
                    s.call(this, "_frame"), d.call(this);
                }
                function d() {
                    this._onLoad && (window.removeEventListener("message", this._onLoad), delete this._onLoad);
                }
                function p() {
                    this._adUnit && (this._adUnit.stopAd(), delete this._adUnit);
                }
                function h() {
                    if (this._destroyed) throw new Error("VPAIDHTML5Client already destroyed!");
                }
                function f() {
                    return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
                }
                (o.prototype.destroy = function () {
                    this._destroyed || ((this._destroyed = !0), c.call(this));
                }),
                    (o.prototype.isDestroyed = function () {
                        return this._destroyed;
                    }),
                    (o.prototype.loadAdUnit = function (e, t) {
                        if (!this._onLoad) {
                            h.call(this), c.call(this);
                            var r = this,
                                n = i.createIframeWithContent(this._frameContainer, this._templateConfig.template, i.extend({ iframeURL_JS: e, iframeID: this.getID(), origin: f() }, this._templateConfig.extraOptions));
                            (this._frame = n),
                                (this._onLoad = i.callbackTimeout(
                                    this._vpaidOptions.timeout,
                                    function (e) {
                                        if (e.origin !== f()) return;
                                        var n, o, s, c;
                                        try {
                                            n = JSON.parse(e.data);
                                        } catch (e) {
                                            throw e;
                                        }
                                        if (n.id !== r.getID()) return;
                                        r._frame.contentWindow
                                            ? ((c = r._frame.contentWindow.getVPAIDAd), (s = i.validate("function" == typeof c, "the ad didn't return a function to create an ad")))
                                            : (s = "the iframe is not anymore in the DOM tree");
                                        if (!s) {
                                            var u = r._frame.contentWindow.document.querySelector(".ad-element");
                                            (o = new a(c(), u, r._videoEl, r._frame)).subscribe("AdStopped", l.bind(r)), (s = i.validate(o.isValidVPAIDAd(), "the add is not fully complaint with VPAID specification"));
                                        }
                                        return (r._adUnit = o), d.call(r), t(s, s ? null : o), !0;
                                    }.bind(this),
                                    function () {
                                        t("timeout", null);
                                    }.bind(this)
                                )),
                                window.addEventListener("message", this._onLoad);
                        }
                    }),
                    (o.prototype.unloadAdUnit = function () {
                        c.call(this);
                    }),
                    (o.prototype.getID = function () {
                        return this._id;
                    }),
                    (e.exports = o),
                    (window.VPAIDHTML5Client = o);
            },
            437: (e) => {
                "use strict";
                function t() {
                    this._subscribers = {};
                }
                (t.prototype.subscribe = function (e, t, r) {
                    this.isHandlerAttached(e, t) || this.get(t).push({ handler: e, context: r, eventName: t });
                }),
                    (t.prototype.unsubscribe = function (e, t) {
                        this._subscribers[t] = this.get(t).filter(function (t) {
                            return e !== t.handler;
                        });
                    }),
                    (t.prototype.unsubscribeAll = function () {
                        this._subscribers = {};
                    }),
                    (t.prototype.trigger = function (e, t) {
                        var r = this;
                        this.get(e)
                            .concat(this.get("*"))
                            .forEach(function (e) {
                                setTimeout(function () {
                                    r.isHandlerAttached(e.handler, e.eventName) && e.handler.call(e.context, t);
                                }, 0);
                            });
                    }),
                    (t.prototype.triggerSync = function (e, t) {
                        this.get(e)
                            .concat(this.get("*"))
                            .forEach(function (e) {
                                e.handler.call(e.context, t);
                            });
                    }),
                    (t.prototype.get = function (e) {
                        return this._subscribers[e] || (this._subscribers[e] = []), this._subscribers[e];
                    }),
                    (t.prototype.isHandlerAttached = function (e, t) {
                        return this.get(t).some(function (t) {
                            return e === t.handler;
                        });
                    }),
                    (e.exports = t);
            },
            77: (e) => {
                "use strict";
                function t() {}
                function r(e, t, r) {
                    var n = document.createElement("iframe");
                    return (
                        (n.src = t || "about:blank"),
                        (n.marginWidth = "0"),
                        (n.marginHeight = "0"),
                        (n.frameBorder = "0"),
                        (n.width = "100%"),
                        (n.height = "100%"),
                        i(n),
                        r && (n.style.zIndex = r),
                        n.setAttribute("SCROLLING", "NO"),
                        (e.innerHTML = ""),
                        e.appendChild(n),
                        n
                    );
                }
                function i(e) {
                    e && ((e.style.position = "absolute"), (e.style.left = "0"), (e.style.top = "0"), (e.style.margin = "0px"), (e.style.padding = "0px"), (e.style.border = "none"), (e.style.width = "100%"), (e.style.height = "100%"));
                }
                function n(e, t) {
                    return (
                        Object.keys(t).forEach(function (r) {
                            var i = "object" == typeof i ? JSON.stringify(t[r]) : t[r];
                            e = e.replace(new RegExp("{{" + r + "}}", "g"), i);
                        }),
                        e
                    );
                }
                function a(e, t) {
                    var r = e.contentWindow && e.contentWindow.document;
                    return !!r && (r.write(t), !0);
                }
                e.exports = {
                    noop: t,
                    validate: function (e, t) {
                        return e ? null : new Error(t);
                    },
                    callbackTimeout: function (e, r, i) {
                        var n;
                        return (
                            (n = setTimeout(function () {
                                (r = t), i();
                            }, e)),
                            function () {
                                var e = Array.prototype.slice.call(arguments);
                                r.apply(this, e) && clearTimeout(n);
                            }
                        );
                    },
                    createElementInEl: function (e, t, r) {
                        var i = document.createElement(t);
                        return r && (i.id = r), e.appendChild(i), i;
                    },
                    createIframeWithContent: function (e, t, i) {
                        var o = r(e, null, i.zIndex);
                        if (a(o, n(t, i))) return o;
                    },
                    createIframe: r,
                    setFullSizeStyle: i,
                    simpleTemplate: n,
                    setIframeContent: a,
                    extend: function (e, t) {
                        return (
                            Object.keys(t).forEach(function (r) {
                                e[r] = t[r];
                            }),
                            e
                        );
                    },
                    unique: function (e) {
                        var t = -1;
                        return function () {
                            return e + "_" + ++t;
                        };
                    },
                };
            },
            893: () => {},
        },
        t = {};
    function r(i) {
        var n = t[i];
        if (void 0 !== n) return n.exports;
        var a = (t[i] = { exports: {} });
        return e[i].call(a.exports, a, a.exports, r), a.exports;
    }
    (r.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, { a: t }), t;
    }),
        (r.d = (e, t) => {
            for (var i in t) r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        }),
        (r.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            "use strict";
            const e = videojs;
            var t = r.n(e),
                i = r(248),
                n = r(144),
                a = r.n(n),
                o = r(908),
                s = r.n(o);
            class l extends t().EventTarget {
                constructor(e, t) {
                    super(), (this.player = e), (this.options = t), (this.duration = 0), (this.originalState = { controlsEnabled: e.controls(), seekEnabled: e.controlBar.progressControl.enabled() });
                }
                setUp() {
                    const e = this.player,
                        t = this.options;
                    e.controls(t.controlsEnabled),
                        t.seekEnabled ? e.controlBar.progressControl.enable() : e.controlBar.progressControl.disable(),
                        (() => {
                            const t = (this.blocker = s().document.createElement("div"));
                            (t.className = "vast-blocker"),
                                (t.onclick = () => {
                                    if (e.paused()) return e.play(), !1;
                                    this.trigger("click");
                                }),
                                e.el().insertBefore(t, e.controlBar.el());
                        })(),
                        (() => {
                            const t = (this.skipButtonElement = s().document.createElement("div"));
                            (t.className = "vast-skip-button"),
                                (t.style.display = "none"),
                                e.el().appendChild(t),
                                e.one("adplay", this.#e),
                                (t.onclick = (e) => {
                                    if (((" " + t.className + " ").indexOf(" enabled ") >= 0 && this.trigger("skip"), void 0 === s().Event.prototype.stopPropagation)) return !1;
                                    e.stopPropagation();
                                });
                        })();
                }
                tearDown() {
                    const e = this.player,
                        t = this.originalState;
                    e.controls(t.controlsEnabled),
                        t.seekEnabled ? e.controlBar.progressControl.enable() : e.controlBar.progressControl.disable(),
                        this.blocker.parentElement.removeChild(this.blocker),
                        this.skipButtonElement.parentElement.removeChild(this.skipButtonElement),
                        e.off("adtimeupdate", this.#t),
                        e.off("adplay", this.#e);
                }
                #e = () => {
                    const e = this.options.skip,
                        t = this.player;
                    e > 0 && (t.duration() || this.duration) >= e && ((this.skipButtonElement.style.display = "block"), t.on("adtimeupdate", this.#t)), (t.loadingSpinner.el().style.display = "none");
                };
                #t = () => {
                    this.player.loadingSpinner.el().style.display = "none";
                    const e = Math.ceil(this.options.skip - this.player.currentTime());
                    var t;
                    e > 0
                        ? (c((t = this.skipButtonElement)) && (t.className = t.className.replace(" enabled ", "")), (this.skipButtonElement.innerHTML = window.skipTextBefore + e.toString() + window.skipTextAfter))
                        : (!(function (e) {
                              c(e) || (e.className += " enabled ");
                          })(this.skipButtonElement),
                          (this.skipButtonElement.innerHTML = window.skipText));
                };
            }
            function c(e) {
                return (" " + e.className + " ").indexOf(" enabled ") > -1;
            }
            function u(e) {
                return "linear" === e.type && e.mediaFiles.length;
            }
            function d(e) {
                return "companion" === e.type;
            }
            class p {
                #r;
                #i;
                #n;
                constructor(e, t) {
                    (this.#r = e), (this.#i = t), (this.#n = !1);
                }
                get linearCreative() {
                    return this.#r.creative;
                }
                get linearAdTracker() {
                    return this.#r;
                }
                get companionTracker() {
                    return this.#i;
                }
                get skipAfterDuration() {
                    return this.#n;
                }
                set skipAfterDuration(e) {
                    this.#n = e;
                }
                hasVideoMedia() {
                    return this.linearCreative.mediaFiles.some((e) => e && null == e.apiFramework);
                }
            }
            class h {
                #a;
                #o;
                #s;
                #l;
                constructor(e, t, r, i) {
                    (this.#a = e), (this.#o = t), (this.#l = r), (this.#s = i);
                }
                loadAds() {
                    return new Promise((e, t) => {
                        const { url: r, xml: i } = this.#s;
                        if (!r && !i) throw new Error("xml or url option must be set");
                        (r ? this.loadAdsWithUrl(r) : this.loadAdsWithXml(i)).then(e).catch(t);
                    });
                }
                loadAdsWithXml(e) {
                    return new Promise((t, r) => {
                        let i;
                        if (e.constructor === s().XMLDocument) i = e;
                        else {
                            if (e.constructor !== String) throw new Error("xml config option must be a String or XMLDocument");
                            i = new (s().DOMParser)().parseFromString(e, "text/xml");
                        }
                        this.#o.parseVAST(i).then(this.#l.selectAds).then(this.#c).then(t).catch(r);
                    });
                }
                loadAdsWithUrl(e) {
                    return new Promise((t, r) => {
                        this.#a.get(e, { withCredentials: this.#s.withCredentials, wrapperLimit: this.#s.wrapperLimit }).then(this.#l.selectAds).then(this.#c).then(t).catch(r);
                    });
                }
                #c = (e) =>
                    e.map((e) => {
                        const t = new i.VASTTracker(this.#a, e, e.creatives.find(u), e.creatives.find(d));
                        t.on("clickthrough", f);
                        let r = null;
                        const n = e.creatives.find(d);
                        if (n) {
                            const t = this.#s,
                                a = n.variations
                                    .filter((e) => e.staticResource)
                                    .filter((e) => 0 === e.type.indexOf("image"))
                                    .find((e) => parseInt(e.width, 10) <= t.companion.maxWidth && parseInt(e.height, 10) <= t.companion.maxHeight);
                            a && ((r = new i.VASTTracker(this.#a, e, n, a)), r.on("clickthrough", f));
                        }
                        return new p(t, r);
                    });
            }
            function f(e) {
                s().open(e, "_blank");
            }
            class v {
                selectAds(e) {
                    if (!e.ads || 0 === e.ads.length) throw new Error("no ads found in VAST");
                    const t = e.ads.filter((e) => e.creatives.some(u));
                    if (!t.length) throw new Error("no linear ads found in VAST");
                    const r = t.filter((e) => e.sequence);
                    if (r.length) return r.sort((e, t) => e.sequence - t.sequence);
                    return t.filter((e) => !r.includes(e)).slice(0, 1);
                }
            }
            var m = r(178),
                g = r.n(m);
            function y(e) {
                if (e) {
                    const t = e.ad,
                        r = e.creative;
                    return { mediaFiles: r.mediaFiles.map((e) => Object.assign({}, e)), adSequenceId: t.sequence, adId: t.id, creativeAdId: r.id };
                }
            }
            const A = ["application/x-javascript", "text/javascript", "application/javascript"];
            class T {
                #u;
                #d;
                #p;
                #h;
                #s;
                #f;
                constructor(e, t) {
                    (this.#h = e), (this.#s = t), (this.#f = new videojs.EventTarget());
                }
                handle(e) {
                    return (
                        (this.#d = !1),
                        (this.#p = !1),
                        (this.#u = !1),
                        new Promise((t, r) => {
                            const i = this.#s,
                                n = this.#h;
                            let o = null,
                                l = {},
                                c = !1;
                            const u = e.creative,
                                d = u.mediaFiles.find(
                                    (e) =>
                                        "VPAID" === e.apiFramework &&
                                        (function (e) {
                                            return A.indexOf(e.mimeType.trim()) > -1;
                                        })(e)
                                );
                            if (!d) throw new Error("Invalid VPAID media file: only JavaScript is supported");
                            const p = n.el().querySelector(".vjs-tech");
                            (o = (function (e) {
                                const t = e.vpaid.containerId,
                                    r = e.vpaid.containerClass;
                                let i = a().getElementById(t);
                                i || (i = a().getElementsByClassName(r)[0]);
                                return i;
                            })(i)),
                                o
                                    ? (c = !0)
                                    : ((o = (function (e) {
                                          const t = e.vpaid.containerId,
                                              r = e.vpaid.containerClass,
                                              i = a().createElement("div");
                                          t && i.setAttribute("id", t);
                                          r && i.classList.add(r);
                                          return i;
                                      })(i)),
                                      (c = !1)),
                                (l = b(o)),
                                n.el().insertBefore(o, n.controlBar.el());
                            const h = new (g())(o, p, {});
                            h.loadAdUnit(d.fileURL, (a, d) => {
                                let p;
                                if (a) return void r(a);
                                const f = () => {
                                    m(), t(), n.trigger("vpaid.AdStopped"), n.trigger({ type: "vast.adEnd", vast: y(e) });
                                };
                                d.subscribe("AdStopped", f);
                                const v = (e) => {
                                    if (d && !this.#u) {
                                        d.unsubscribe("AdStopped", f);
                                        const t = () => {
                                            (this.#u = !0), m(), r(e), n.trigger("vpaid.AdStopped");
                                        };
                                        E(d, "AdStopped", t, t), d.stopAd();
                                    } else (this.#u = !0), r(e);
                                };
                                if ((this.#f.on("forceStopAd", v), this.#d)) return void v("Received cancel signal from player");
                                function m() {
                                    if ((n.controlBar.show(), n.off("playerresize", T), "new" === i.vpaid.videoInstance && p.parentElement && p.parentElement.removeChild(p), h.destroy(), o)) {
                                        if (c) {
                                            o.innerHTML = "";
                                            const e = l,
                                                t = b(o);
                                            for (const [r, i] of Object.entries(t)) e.hasOwnProperty(r) ? e[r] !== i && o.setAttribute(r, e[r]) : o.removeAttribute(r);
                                            for (const [r, i] of Object.entries(e)) t.hasOwnProperty(r) || o.setAttribute(r, i);
                                        } else o.parentElement && o.parentElement.removeChild(o);
                                        o = null;
                                    }
                                }
                                const g = () => {
                                        if (this.#d) return void v("Received cancel signal");
                                        d.subscribe("AdSkipped", () => {
                                            e.skip(), n.trigger("vpaid.AdSkipped"), n.trigger({ type: "vast.adSkip", vast: y(e) });
                                        }),
                                            d.subscribe("AdVolumeChange", () => {
                                                const t = n.volume();
                                                d.getAdVolume((r, i) => {
                                                    r || (0 === i && t > 0 ? e.setMuted(!0) : i > 0 && 0 === t && e.setMuted(!1), n.volume(i), n.trigger("vpaid.AdVolumeChange"));
                                                });
                                            }),
                                            d.subscribe("AdImpression", () => {
                                                e.trackImpression(), n.trigger("vpaid.AdImpression");
                                            }),
                                            d.subscribe("AdClickThru", (t, r, i) => {
                                                i &&
                                                    e.once("clickthrough", (e) => {
                                                        s().open(e, "_blank");
                                                    }),
                                                    e.click(t),
                                                    n.trigger("vpaid.AdClickThru");
                                            }),
                                            d.subscribe("AdVideoFirstQuartile", () => {
                                                e.track("firstQuartile"), n.trigger("vpaid.AdVideoFirstQuartile");
                                            }),
                                            d.subscribe("AdVideoMidpoint", () => {
                                                e.track("midpoint"), n.trigger("vpaid.AdVideoMidpoint");
                                            }),
                                            d.subscribe("AdVideoThirdQuartile", () => {
                                                e.track("thirdQuartile"), n.trigger("vpaid.AdVideoThirdQuartile");
                                            }),
                                            d.subscribe("AdVideoComplete", () => {
                                                e.track("complete"), n.trigger("vpaid.AdVideoComplete");
                                            }),
                                            d.subscribe("AdUserAcceptInvitation", () => {
                                                e.acceptInvitation(), n.trigger("vpaid.AdUserAcceptInvitation");
                                            }),
                                            d.subscribe("AdUserMinimize", () => {
                                                e.minimize(), n.trigger("vpaid.AdUserMinimize");
                                            }),
                                            d.subscribe("AdUserClose", () => {
                                                e.close(), n.trigger("vpaid.AdUserClose");
                                            }),
                                            d.subscribe("AdPaused", () => {
                                                e.setPaused(!0), n.trigger("vpaid.AdPaused");
                                            }),
                                            d.subscribe("AdPlaying", () => {
                                                e.setPaused(!1), n.trigger("vpaid.AdPlaying");
                                            }),
                                            d.getAdLinear(
                                                k(
                                                    (e, r) => {
                                                        this.#d ? v("Received cancel signal") : e ? v(e) : r ? t() : v("Non-linear not supported");
                                                    },
                                                    () => {
                                                        v("Unable to get mode of operation: linear or non-linear");
                                                    }
                                                )
                                            );
                                        const t = () => {
                                            n.controlBar.hide();
                                            const e = (function (e, t = null) {
                                                let r;
                                                return function () {
                                                    return e && ((r = e.apply(t || this, arguments)), (e = null)), r;
                                                };
                                            })(A);
                                            E(d, "AdStarted", e, v), d.startAd();
                                        };
                                    },
                                    A = () => {
                                        this.#d ? v("Received cancel signal") : ((this.#p = !0), e.track("start"), n.on("playerresize", T), n.trigger("ads-ad-started"), n.trigger({ type: "vast.adStart", vast: y(e) }));
                                    },
                                    T = () => {
                                        d.resizeAd(n.currentWidth(), n.currentHeight(), n.isFullscreen() ? "fullscreen" : "normal");
                                    };
                                d.handshakeVersion("2.0", (t, a) => {
                                    if (t) return log.console(t), void v("Error on VPAID handshake");
                                    const l = { AdParameters: u.adParameters || "" },
                                        c = i.vpaid.videoInstance;
                                    "same" === c
                                        ? (p = n.tech({ kindaKnowWhatImDoing: !0 }).el())
                                        : "new" === c
                                        ? ((p = s().document.createElement("video")), (p.style.cssText = "position:absolute; top:0; left:0; z-index:2 !important;"), o.appendChild(p))
                                        : ("none" !== c && console.log(`${c} is an invalid videoInstance value. Defaulting to 'none'.`), (p = null));
                                    const h = { slot: o, videoSlot: p };
                                    E(d, "AdLoaded", g, v);
                                    const f = n.isFullscreen() ? "fullscreen" : "normal";
                                    d.subscribe("AdError", (t) => {
                                        e.error({ ERRORCODE: 901 }), (this.#u = !0), m(), r(`Fatal VPAID Error: ${"object" == typeof t ? JSON.stringify(t) : t}`), n.trigger({ type: "vpaid.AdError", error: t });
                                    }),
                                        d.initAd(n.currentWidth(), n.currentHeight(), f, -1, l, h);
                                });
                            });
                        })
                    );
                }
                cancel() {
                    (this.#d = !0), this.#p && this.#f.trigger("forceStopAd");
                }
            }
            function b(e) {
                const t = {};
                for (const r of e.attributes) t[r.name] = r.value;
                return t;
            }
            function k(e, t = null) {
                const r = setTimeout(() => {
                    (e = () => {}), t && t();
                }, 1e4);
                return function () {
                    clearTimeout(r), e.apply(null, arguments);
                };
            }
            function E(e, t, r, i) {
                const n = k(r, () => {
                    i && i(new Error(`Timeout while waiting for ${t} event.`));
                });
                e.subscribe(t, n);
            }
            const R = t().getPlugin("plugin"),
                w = Object.freeze({
                    seekEnabled: !1,
                    controlsEnabled: !1,
                    wrapperLimit: 10,
                    withCredentials: !0,
                    skip: 0,
                    vpaid: { containerId: void 0, containerClass: "vjs-vpaid-container", videoInstance: "none" },
                    companion: { elementId: null, maxWidth: 0, maxHeight: 0 },
                });
            t().registerPlugin(
                "vast",
                class extends R {
                    constructor(e, r) {
                        super(e), "function" == typeof e.ads && e.ads({ debug: !1, liveCuePoints: !1 }), console.log("videojsx-vast-plugin running"), (r = t().mergeOptions(w, r || {}));
                        const n = new i.VASTClient(),
                            o = [];
                        let s = null,
                            c = -1;
                        const u = new T(e, r);
                        let d = !1;
                        const p = e.autoplay();
                        e.on("adtimeout", () => {
                            d = !0;
                        });
                        const f = new l(e, r);
                        function m() {
                            s?.hasVideoMedia() && (s.linearAdTracker.skip(), e.trigger({ type: "vast.skipAd", vast: y(s.linearAdTracker) }), A());
                        }
                        f.on("skip", m),
                            f.on("click", () => {
                                s.linearAdTracker.click();
                            }),
                            e.on("readyforpreroll", () => {
                                R();
                            });
                        new h(n, new i.VASTParser(), new v(), r)
                            .loadAds()
                            .then((t) => {
                                if (d) throw new Error("Ad load took too long.");
                                o.push(...t), (s = null), e.trigger("adsready");
                            })
                            .catch((t) => {
                                console.log(`Ad cancelled: ${t.message}`), e.trigger("nopreroll");
                            })
                            .finally(() => {
                                p && e.play();
                            });
                        const g = (e) => e.filter((e) => null == e.apiFramework).map((e) => ({ type: e.mimeType, src: e.fileURL })),
                            A = () => {
                                const t = o[c + 1];
                                if ((t?.hasVideoMedia() ? s?.hasVideoMedia() || f.setUp() : s?.hasVideoMedia() && f.tearDown(), t)) {
                                    if (((s = t), c++, console.log(`Playing ad ${c + 1}/${o.length}`), s.hasVideoMedia())) {
                                        const t = s.linearCreative.mediaFiles,
                                            r = t.filter((e) => "streaming" === e.deliveryType),
                                            i = t.filter((e) => "streaming" !== e.deliveryType);
                                        if (i.length > 0) e.src(g(i));
                                        else if (r.length > 0) {
                                            let t = s.linearAdTracker.assetDuration;
                                            if (null == t || t < 1) return console.log("Streaming ads must have a duration"), void A();
                                            e.src(g(r)), (s.skipAfterDuration = !0);
                                        }
                                        f.duration = s.linearAdTracker.assetDuration || 0;
                                    } else
                                        u.handle(s.linearAdTracker)
                                            .then(() => {
                                                A();
                                            })
                                            .catch((e) => {
                                                console.log(e), A();
                                            });
                                    E();
                                } else (s = null), (c = -1), L();
                            },
                            { setUpEvents: b, tearDownEvents: k } = (() => {
                                const t = () => {
                                        if (s.skipAfterDuration) {
                                            const e = s;
                                            setTimeout(() => {
                                                s === e && m();
                                            }, 1e3 * e.linearAdTracker.assetDuration);
                                        }
                                        !s.linearAdTracker.impressed && s.hasVideoMedia() && (s.linearAdTracker.trackImpression(), e.trigger({ type: "vast.adStart", vast: y(s.linearAdTracker) }));
                                    },
                                    r = () => {
                                        s && (isNaN(s.linearAdTracker.assetDuration) && (s.linearAdTracker.assetDuration = e.duration()), s.linearAdTracker.setProgress(e.currentTime()));
                                    },
                                    i = () => {
                                        e.remainingTime() > 0 &&
                                            (s.linearAdTracker.setPaused(!0),
                                            e.one("adplay", () => {
                                                s.linearAdTracker.setPaused(!1);
                                            }));
                                    },
                                    n = () => {
                                        s.linearAdTracker.error({ ERRORCODE: 405 }), e.error(null), A();
                                    },
                                    a = () => {
                                        s.linearAdTracker.setFullscreen(e.isFullscreen());
                                    },
                                    o = (() => {
                                        let t = e.muted(),
                                            r = e.volume();
                                        return () => {
                                            const i = e.volume(),
                                                n = e.muted();
                                            t !== n ? (s.linearAdTracker.setMuted(n), (t = n)) : r !== i && (r > 0 && 0 === i ? s.linearAdTracker.setMuted(!0) : 0 === r && i > 0 && s.linearAdTracker.setMuted(!1), (r = i));
                                        };
                                    })(),
                                    l = () => {
                                        s.hasVideoMedia() && (s.linearAdTracker.complete(), e.trigger({ type: "vast.adEnd", vast: y(s.linearAdTracker) }), A());
                                    };
                                return {
                                    setUpEvents: () => {
                                        e.on("adended", l), e.on("adplay", t), e.on("adtimeupdate", r), e.on("adpause", i), e.on("aderror", n), e.on("advolumechange", o), e.on("fullscreenchange", a);
                                    },
                                    tearDownEvents: () => {
                                        e.off("adended", l), e.off("adplay", t), e.off("adtimeupdate", r), e.off("adpause", i), e.off("aderror", n), e.off("advolumechange", o), e.off("fullscreenchange", a);
                                    },
                                };
                            })(),
                            E = () => {
                                const e = s.companionTracker,
                                    t = a().getElementById(r.companion.elementId);
                                if (e && e.variation && t) {
                                    const r = e.variation,
                                        i = () => {
                                            e.click();
                                        },
                                        n = a().createElement("a");
                                    (n.src = "#"), n.addEventListener("click", i);
                                    const o = a().createElement("img");
                                    (o.src = r.staticResource), n.appendChild(o), (t.innerHTML = ""), t.appendChild(n);
                                } else t && (t.innerHTML = "");
                            },
                            R = () => {
                                console.log(`Playing ${o.length} ads`), e.ads.startLinearAdMode(), b(), A();
                            },
                            L = () => {
                                e.ads.endLinearAdMode(), k(), console.log("Playing content");
                            };
                    }
                }
            );
        })();
})();