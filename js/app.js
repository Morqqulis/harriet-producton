(() => {
    var __webpack_modules__ = {
        716: function(module) {
            !function(t, n) {
                true ? module.exports = n() : 0;
            }(0, function() {
                "use strict";
                function t(t, n) {
                    var e = void 0;
                    return function() {
                        e && clearTimeout(e), e = setTimeout(t, n);
                    };
                }
                function n(t, n) {
                    for (var e = t.length, r = e, o = []; e--; ) o.push(n(t[r - e - 1]));
                    return o;
                }
                function e(t, n) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (window.Promise) return A(t, n, e);
                    t.recalculate(!0, !0);
                }
                function r(t) {
                    for (var n = t.options, e = t.responsiveOptions, r = t.keys, o = t.docWidth, i = void 0, s = 0; s < r.length; s++) {
                        var a = parseInt(r[s], 10);
                        o >= a && (i = n.breakAt[a], O(i, e));
                    }
                    return e;
                }
                function o(t) {
                    for (var n = t.options, e = t.responsiveOptions, r = t.keys, o = t.docWidth, i = void 0, s = r.length - 1; s >= 0; s--) {
                        var a = parseInt(r[s], 10);
                        o <= a && (i = n.breakAt[a], O(i, e));
                    }
                    return e;
                }
                function i(t) {
                    var n = t.useContainerForBreakpoints ? t.container.clientWidth : window.innerWidth, e = {
                        columns: t.columns
                    };
                    b(t.margin) ? e.margin = {
                        x: t.margin.x,
                        y: t.margin.y
                    } : e.margin = {
                        x: t.margin,
                        y: t.margin
                    };
                    var i = Object.keys(t.breakAt);
                    return t.mobileFirst ? r({
                        options: t,
                        responsiveOptions: e,
                        keys: i,
                        docWidth: n
                    }) : o({
                        options: t,
                        responsiveOptions: e,
                        keys: i,
                        docWidth: n
                    });
                }
                function s(t) {
                    return i(t).columns;
                }
                function a(t) {
                    return i(t).margin;
                }
                function c(t) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], e = s(t), r = a(t).x, o = 100 / e;
                    if (!n) return o;
                    if (1 === e) return "100%";
                    var i = "px";
                    if ("string" == typeof r) {
                        var c = parseFloat(r);
                        i = r.replace(c, ""), r = c;
                    }
                    return r = (e - 1) * r / e, "%" === i ? o - r + "%" : "calc(" + o + "% - " + r + i + ")";
                }
                function u(t, n) {
                    var e = s(t.options), r = 0, o = void 0, i = void 0;
                    if (1 === ++n) return 0;
                    i = a(t.options).x;
                    var u = "px";
                    if ("string" == typeof i) {
                        var l = parseFloat(i, 10);
                        u = i.replace(l, ""), i = l;
                    }
                    return o = (i - (e - 1) * i / e) * (n - 1), r += c(t.options, !1) * (n - 1), "%" === u ? r + o + "%" : "calc(" + r + "% + " + o + u + ")";
                }
                function l(t) {
                    var n = 0, e = t.container, r = t.rows;
                    v(r, function(t) {
                        n = t > n ? t : n;
                    }), e.style.height = n + "px";
                }
                function p(t, n) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], o = s(t.options), i = a(t.options).y;
                    M(t, o, e), v(n, function(n) {
                        var e = 0, o = parseInt(n.offsetHeight, 10);
                        isNaN(o) || (t.rows.forEach(function(n, r) {
                            n < t.rows[e] && (e = r);
                        }), n.style.position = "absolute", n.style.top = t.rows[e] + "px", n.style.left = "" + t.cols[e], 
                        t.rows[e] += isNaN(o) ? 0 : o + i, r && (n.dataset.macyComplete = 1));
                    }), r && (t.tmpRows = null), l(t);
                }
                function f(t, n) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], o = s(t.options), i = a(t.options).y;
                    M(t, o, e), v(n, function(n) {
                        t.lastcol === o && (t.lastcol = 0);
                        var e = C(n, "height");
                        e = parseInt(n.offsetHeight, 10), isNaN(e) || (n.style.position = "absolute", n.style.top = t.rows[t.lastcol] + "px", 
                        n.style.left = "" + t.cols[t.lastcol], t.rows[t.lastcol] += isNaN(e) ? 0 : e + i, 
                        t.lastcol += 1, r && (n.dataset.macyComplete = 1));
                    }), r && (t.tmpRows = null), l(t);
                }
                var h = function t(n, e) {
                    if (!(this instanceof t)) return new t(n, e);
                    if (n && n.nodeName) return n;
                    if (n = n.replace(/^\s*/, "").replace(/\s*$/, ""), e) return this.byCss(n, e);
                    for (var r in this.selectors) if (e = r.split("/"), new RegExp(e[1], e[2]).test(n)) return this.selectors[r](n);
                    return this.byCss(n);
                };
                h.prototype.byCss = function(t, n) {
                    return (n || document).querySelectorAll(t);
                }, h.prototype.selectors = {}, h.prototype.selectors[/^\.[\w\-]+$/] = function(t) {
                    return document.getElementsByClassName(t.substring(1));
                }, h.prototype.selectors[/^\w+$/] = function(t) {
                    return document.getElementsByTagName(t);
                }, h.prototype.selectors[/^\#[\w\-]+$/] = function(t) {
                    return document.getElementById(t.substring(1));
                };
                var v = function(t, n) {
                    for (var e = t.length, r = e; e--; ) n(t[r - e - 1]);
                }, m = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.running = !1, this.events = [], this.add(t);
                };
                m.prototype.run = function() {
                    if (!this.running && this.events.length > 0) {
                        var t = this.events.shift();
                        this.running = !0, t(), this.running = !1, this.run();
                    }
                }, m.prototype.add = function() {
                    var t = this, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return !!n && (Array.isArray(n) ? v(n, function(n) {
                        return t.add(n);
                    }) : (this.events.push(n), void this.run()));
                }, m.prototype.clear = function() {
                    this.events = [];
                };
                var d = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.instance = t, this.data = n, this;
                }, y = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.events = {}, this.instance = t;
                };
                y.prototype.on = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return !(!t || !n) && (Array.isArray(this.events[t]) || (this.events[t] = []), this.events[t].push(n));
                }, y.prototype.emit = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!t || !Array.isArray(this.events[t])) return !1;
                    var e = new d(this.instance, n);
                    v(this.events[t], function(t) {
                        return t(e);
                    });
                };
                var g = function(t) {
                    return !("naturalHeight" in t && t.naturalHeight + t.naturalWidth === 0) || t.width + t.height !== 0;
                }, E = function(t, n) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return new Promise(function(t, e) {
                        if (n.complete) return g(n) ? t(n) : e(n);
                        n.addEventListener("load", function() {
                            return g(n) ? t(n) : e(n);
                        }), n.addEventListener("error", function() {
                            return e(n);
                        });
                    }).then(function(n) {
                        e && t.emit(t.constants.EVENT_IMAGE_LOAD, {
                            img: n
                        });
                    }).catch(function(n) {
                        return t.emit(t.constants.EVENT_IMAGE_ERROR, {
                            img: n
                        });
                    });
                }, w = function(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n(e, function(n) {
                        return E(t, n, r);
                    });
                }, A = function(t, n) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return Promise.all(w(t, n, e)).then(function() {
                        t.emit(t.constants.EVENT_IMAGE_COMPLETE);
                    });
                }, I = function(n) {
                    return t(function() {
                        n.emit(n.constants.EVENT_RESIZE), n.queue.add(function() {
                            return n.recalculate(!0, !0);
                        });
                    }, 100);
                }, N = function(t) {
                    if (t.container = h(t.options.container), t.container instanceof h || !t.container) return !!t.options.debug && console.error("Error: Container not found");
                    t.container.length && (t.container = t.container[0]), t.options.container = t.container, 
                    t.container.style.position = "relative";
                }, T = function(t) {
                    t.queue = new m, t.events = new y(t), t.rows = [], t.resizer = I(t);
                }, L = function(t) {
                    var n = h("img", t.container);
                    window.addEventListener("resize", t.resizer), t.on(t.constants.EVENT_IMAGE_LOAD, function() {
                        return t.recalculate(!1, !1);
                    }), t.on(t.constants.EVENT_IMAGE_COMPLETE, function() {
                        return t.recalculate(!0, !0);
                    }), t.options.useOwnImageLoader || e(t, n, !t.options.waitForImages), t.emit(t.constants.EVENT_INITIALIZED);
                }, _ = function(t) {
                    N(t), T(t), L(t);
                }, b = function(t) {
                    return t === Object(t) && "[object Array]" !== Object.prototype.toString.call(t);
                }, O = function(t, n) {
                    b(t) || (n.columns = t), b(t) && t.columns && (n.columns = t.columns), b(t) && t.margin && !b(t.margin) && (n.margin = {
                        x: t.margin,
                        y: t.margin
                    }), b(t) && t.margin && b(t.margin) && t.margin.x && (n.margin.x = t.margin.x), 
                    b(t) && t.margin && b(t.margin) && t.margin.y && (n.margin.y = t.margin.y);
                }, C = function(t, n) {
                    return window.getComputedStyle(t, null).getPropertyValue(n);
                }, M = function(t, n) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (t.lastcol || (t.lastcol = 0), t.rows.length < 1 && (e = !0), e) {
                        t.rows = [], t.cols = [], t.lastcol = 0;
                        for (var r = n - 1; r >= 0; r--) t.rows[r] = 0, t.cols[r] = u(t, r);
                    } else if (t.tmpRows) {
                        t.rows = [];
                        for (r = n - 1; r >= 0; r--) t.rows[r] = t.tmpRows[r];
                    } else {
                        t.tmpRows = [];
                        for (r = n - 1; r >= 0; r--) t.tmpRows[r] = t.rows[r];
                    }
                }, V = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], e = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r = n ? t.container.children : h(':scope > *:not([data-macy-complete="1"])', t.container);
                    r = Array.from(r).filter(function(t) {
                        return null !== t.offsetParent;
                    });
                    var o = c(t.options);
                    return v(r, function(t) {
                        n && (t.dataset.macyComplete = 0), t.style.width = o;
                    }), t.options.trueOrder ? (f(t, r, n, e), t.emit(t.constants.EVENT_RECALCULATED)) : (p(t, r, n, e), 
                    t.emit(t.constants.EVENT_RECALCULATED));
                }, R = function() {
                    return !!window.Promise;
                }, x = Object.assign || function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    }
                    return t;
                };
                Array.from || (Array.from = function(t) {
                    for (var n = 0, e = []; n < t.length; ) e.push(t[n++]);
                    return e;
                });
                var k = {
                    columns: 4,
                    margin: 2,
                    trueOrder: !1,
                    waitForImages: !1,
                    useImageLoader: !0,
                    breakAt: {},
                    useOwnImageLoader: !1,
                    onInit: !1,
                    cancelLegacy: !1,
                    useContainerForBreakpoints: !1
                };
                !function() {
                    try {
                        document.createElement("a").querySelector(":scope *");
                    } catch (t) {
                        !function() {
                            function t(t) {
                                return function(e) {
                                    if (e && n.test(e)) {
                                        var r = this.getAttribute("id");
                                        r || (this.id = "q" + Math.floor(9e6 * Math.random()) + 1e6), arguments[0] = e.replace(n, "#" + this.id);
                                        var o = t.apply(this, arguments);
                                        return null === r ? this.removeAttribute("id") : r || (this.id = r), o;
                                    }
                                    return t.apply(this, arguments);
                                };
                            }
                            var n = /:scope\b/gi, e = t(Element.prototype.querySelector);
                            Element.prototype.querySelector = function(t) {
                                return e.apply(this, arguments);
                            };
                            var r = t(Element.prototype.querySelectorAll);
                            Element.prototype.querySelectorAll = function(t) {
                                return r.apply(this, arguments);
                            };
                        }();
                    }
                }();
                var q = function t() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k;
                    if (!(this instanceof t)) return new t(n);
                    this.options = {}, x(this.options, k, n), this.options.cancelLegacy && !R() || _(this);
                };
                return q.init = function(t) {
                    return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "), 
                    new q(t);
                }, q.prototype.recalculateOnImageLoad = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return e(this, h("img", this.container), !t);
                }, q.prototype.runOnImageLoad = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = h("img", this.container);
                    return this.on(this.constants.EVENT_IMAGE_COMPLETE, t), n && this.on(this.constants.EVENT_IMAGE_LOAD, t), 
                    e(this, r, n);
                }, q.prototype.recalculate = function() {
                    var t = this, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return e && this.queue.clear(), this.queue.add(function() {
                        return V(t, n, e);
                    });
                }, q.prototype.remove = function() {
                    window.removeEventListener("resize", this.resizer), v(this.container.children, function(t) {
                        t.removeAttribute("data-macy-complete"), t.removeAttribute("style");
                    }), this.container.removeAttribute("style");
                }, q.prototype.reInit = function() {
                    this.recalculate(!0, !0), this.emit(this.constants.EVENT_INITIALIZED), window.addEventListener("resize", this.resizer), 
                    this.container.style.position = "relative";
                }, q.prototype.on = function(t, n) {
                    this.events.on(t, n);
                }, q.prototype.emit = function(t, n) {
                    this.events.emit(t, n);
                }, q.constants = {
                    EVENT_INITIALIZED: "macy.initialized",
                    EVENT_RECALCULATED: "macy.recalculated",
                    EVENT_IMAGE_LOAD: "macy.image.load",
                    EVENT_IMAGE_ERROR: "macy.image.error",
                    EVENT_IMAGE_COMPLETE: "macy.images.complete",
                    EVENT_RESIZE: "macy.resize"
                }, q.prototype.constants = q.constants, q;
            });
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP(function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            });
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout(() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout(() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }, delay);
                bodyLockStatus = false;
                setTimeout(function() {
                    bodyLockStatus = true;
                }, delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout(function() {
                    bodyLockStatus = true;
                }, delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                });
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach(mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    });
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach(spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    });
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter(item => item.closest("[data-spollers]") === spollersBlock);
                        spollerTitles.forEach(spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        });
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach(spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        if (spollersBlock.classList.contains("_spoller-init")) {
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        }
                    });
                });
            }
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                });
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach(mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    });
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach(tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter(item => item.closest("[data-tabs]") === tabsMediaItem);
                    tabsContentItems = Array.from(tabsContentItems).filter(item => item.closest("[data-tabs]") === tabsMediaItem);
                    tabsContentItems.forEach((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    });
                });
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter(item => item.closest("[data-tabs]") === tabsBlock);
                    tabsTitles = Array.from(tabsTitles).filter(item => item.closest("[data-tabs]") === tabsBlock);
                    tabsContent.forEach((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    });
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter(item => item.closest("[data-tabs]") === tabsBlock);
                    tabsTitles = Array.from(tabsTitles).filter(item => item.closest("[data-tabs]") === tabsBlock);
                    tabsContent.forEach((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    });
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter(item => item.closest("[data-tabs]") === tabsBlock) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            });
        }
        function uniqArray(array) {
            return array.filter(function(item, index, self) {
                return self.indexOf(item) === index;
            });
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter(function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            });
            if (media.length) {
                const breakpointsArray = [];
                media.forEach(item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                });
                let mdQueries = breakpointsArray.map(function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                });
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach(breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter(function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        });
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    });
                    return mdQueriesArray;
                }
            }
        }
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }, this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            });
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function(item) {
                    return item.breakpoint === mediaBreakpoint;
                });
                matchMedia.addListener(function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                });
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            }); else {
                Array.prototype.sort.call(arr, function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                });
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        var macy = __webpack_require__(716);
        const header = document.querySelector(".header");
        const currentPage = window.location.pathname;
        if (currentPage !== "/" && currentPage !== "/index.html") header.classList.add("header_padding");
        const moreBtn = document.querySelector(".about__more-btn");
        if (moreBtn) moreBtn.addEventListener("click", () => {
            const more = document.querySelector(".about__more");
            more.classList.toggle("about__more_active");
        });
        let macyInstances = new Map;
        let resizeTimeout = null;
        function initMacy(container) {
            if (macyInstances.has(container)) return macyInstances.get(container);
            const macyInstance = macy({
                container,
                columns: 3,
                margin: {
                    x: 48,
                    y: 64
                },
                breakAt: {
                    768: {
                        columns: 1,
                        margin: {
                            x: 24,
                            y: 32
                        }
                    },
                    1024: {
                        columns: 2,
                        margin: {
                            x: 34,
                            y: 48
                        }
                    }
                },
                align: "left",
                waitForImages: true,
                useOwnImageLoader: false
            });
            macyInstances.set(container, macyInstance);
            return macyInstance;
        }
        function initMacyForActiveTab() {
            const activeTab = document.querySelector(".tabs__body:not([hidden])");
            if (activeTab) {
                const articlesContainer = activeTab.querySelector(".tabs__articles");
                if (articlesContainer) initMacy(articlesContainer);
            }
        }
        function recalculateAllMacy() {
            macyInstances.forEach(instance => {
                if (instance && typeof instance.recalculate === "function") try {
                    instance.recalculate();
                } catch (error) {
                    console.warn("Macy recalculate error:", error);
                }
            });
        }
        function destroyInactiveMacy() {
            const activeTab = document.querySelector(".tabs__body:not([hidden])");
            const activeContainer = activeTab?.querySelector(".tabs__articles");
            macyInstances.forEach((instance, container) => {
                if (container !== activeContainer && instance) try {
                    instance.destroy();
                    macyInstances.delete(container);
                } catch (error) {
                    console.warn("Macy destroy error:", error);
                }
            });
        }
        initMacyForActiveTab();
        document.addEventListener("click", e => {
            if (e.target.closest("[data-tabs-title]")) {
                const tabTitle = e.target.closest("[data-tabs-title]");
                const tabsBlock = tabTitle.closest("[data-tabs]");
                if (tabsBlock) {
                    const currentActiveTab = tabsBlock.querySelector(".tabs__body:not([hidden])");
                    if (currentActiveTab) {
                        currentActiveTab.style.opacity = "0";
                        currentActiveTab.style.transform = "translateY(10px)";
                    }
                    setTimeout(() => {
                        destroyInactiveMacy();
                        initMacyForActiveTab();
                        const newActiveTab = tabsBlock.querySelector(".tabs__body:not([hidden])");
                        if (newActiveTab) {
                            newActiveTab.style.opacity = "1";
                            newActiveTab.style.transform = "translateY(0)";
                        }
                    }, 150);
                }
            }
        });
        window.addEventListener("resize", () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                recalculateAllMacy();
            }, 250);
        });
        document.addEventListener("DOMContentLoaded", () => {
            const images = document.querySelectorAll(".tabs__articles img");
            images.forEach(img => {
                if (img.complete) img.classList.add("loaded"); else img.addEventListener("load", () => {
                    img.classList.add("loaded");
                    recalculateAllMacy();
                });
            });
        });
        window["FLS"] = true;
        isWebp();
        menuInit();
        spollers();
        tabs();
    })();
})();