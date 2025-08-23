//Sat Aug 23 2025 13:12:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("温度新闻");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a5) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a7) {
      return typeof a7;
    } : function (a7) {
      return a7 && "function" == typeof Symbol && a7.constructor === Symbol && a7 !== Symbol.prototype ? "symbol" : typeof a7;
    };
    return b(a5);
  }
  function c(a5, a6) {
    var a8 = "undefined" != typeof Symbol && a5[Symbol.iterator] || a5["@@iterator"];
    if (!a8) {
      if (Array.isArray(a5) || (a8 = d(a5)) || a6 && a5 && "number" == typeof a5.length) {
        a8 && (a5 = a8);
        var a9 = 0,
          aa = function () {};
        return {
          s: aa,
          n: function () {
            var ae = {};
            ae.done = !0;
            return a9 >= a5.length ? ae : {
              done: !1,
              value: a5[a9++]
            };
          },
          e: function (ae) {
            throw ae;
          },
          f: aa
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ab,
      ac = !0,
      ad = !1;
    return {
      s: function () {
        a8 = a8.call(a5);
      },
      n: function () {
        var ah = a8.next();
        ac = ah.done;
        return ah;
      },
      e: function (ag) {
        ad = !0;
        ab = ag;
      },
      f: function () {
        try {
          ac || null == a8.return || a8.return();
        } finally {
          if (ad) {
            throw ab;
          }
        }
      }
    };
  }
  function d(a5, a6) {
    if (a5) {
      if ("string" == typeof a5) {
        return f(a5, a6);
      }
      var a8 = {}.toString.call(a5).slice(8, -1);
      "Object" === a8 && a5.constructor && (a8 = a5.constructor.name);
      return "Map" === a8 || "Set" === a8 ? Array.from(a5) : "Arguments" === a8 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a8) ? f(a5, a6) : void 0;
    }
  }
  function f(a5, a6) {
    (null == a6 || a6 > a5.length) && (a6 = a5.length);
    for (var a8 = 0, a9 = Array(a6); a8 < a6; a8++) {
      a9[a8] = a5[a8];
    }
    return a9;
  }
  function g() {
    'use strict';

    g = function () {
      return a7;
    };
    var a6,
      a7 = {},
      a8 = Object.prototype,
      a9 = a8.hasOwnProperty,
      aa = Object.defineProperty || function (aC, aD, aE) {
        aC[aD] = aE.value;
      },
      ab = "function" == typeof Symbol ? Symbol : {},
      ac = ab.iterator || "@@iterator",
      ad = ab.asyncIterator || "@@asyncIterator",
      ae = ab.toStringTag || "@@toStringTag";
    function af(aC, aD, aE) {
      var aF = {
        value: aE,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aC, aD, aF);
      return aC[aD];
    }
    try {
      af({}, "");
    } catch (aD) {
      af = function (aF, aG, aH) {
        return aF[aG] = aH;
      };
    }
    function ag(aF, aG, aH, aI) {
      var aJ = aG && aG.prototype instanceof an ? aG : an,
        aK = Object.create(aJ.prototype),
        aL = new aA(aI || []);
      aa(aK, "_invoke", {
        value: aw(aF, aH, aL)
      });
      return aK;
    }
    function ah(aF, aG, aH) {
      try {
        return {
          type: "normal",
          arg: aF.call(aG, aH)
        };
      } catch (aN) {
        var aK = {};
        aK.type = "throw";
        aK.arg = aN;
        return aK;
      }
    }
    a7.wrap = ag;
    var ai = "suspendedStart",
      aj = "suspendedYield",
      ak = "executing",
      al = "completed",
      am = {};
    function an() {}
    function ao() {}
    function ap() {}
    var aq = {};
    af(aq, ac, function () {
      return this;
    });
    var ar = Object.getPrototypeOf,
      as = ar && ar(ar(aB([])));
    as && as !== a8 && a9.call(as, ac) && (aq = as);
    ap.prototype = an.prototype = Object.create(aq);
    var at = ap.prototype;
    function au(aF) {
      ["next", "throw", "return"].forEach(function (aI) {
        af(aF, aI, function (aK) {
          return this._invoke(aI, aK);
        });
      });
    }
    function av(aF, aG) {
      function aJ(aK, aL, aM, aN) {
        var aP = ah(aF[aK], aF, aL);
        if ("throw" !== aP.type) {
          var aQ = aP.arg,
            aR = aQ.value;
          return aR && "object" == b(aR) && a9.call(aR, "__await") ? aG.resolve(aR.__await).then(function (aT) {
            aJ("next", aT, aM, aN);
          }, function (aT) {
            aJ("throw", aT, aM, aN);
          }) : aG.resolve(aR).then(function (aT) {
            aQ.value = aT;
            aM(aQ);
          }, function (aT) {
            return aJ("throw", aT, aM, aN);
          });
        }
        aN(aP.arg);
      }
      var aI;
      aa(this, "_invoke", {
        value: function (aK, aL) {
          function aO() {
            return new aG(function (aR, aS) {
              aJ(aK, aL, aR, aS);
            });
          }
          return aI = aI ? aI.then(aO, aO) : aO();
        }
      });
    }
    function aw(aF, aG, aH) {
      var aJ = ai;
      return function (aK, aL) {
        if (aJ === ak) {
          throw Error("Generator is already running");
        }
        if (aJ === al) {
          if ("throw" === aK) {
            throw aL;
          }
          var aN = {
            value: a6,
            done: !0
          };
          return aN;
        }
        for (aH.method = aK, aH.arg = aL;;) {
          var aO = aH.delegate;
          if (aO) {
            var aP = ax(aO, aH);
            if (aP) {
              if (aP === am) {
                continue;
              }
              return aP;
            }
          }
          if ("next" === aH.method) {
            aH.sent = aH._sent = aH.arg;
          } else {
            if ("throw" === aH.method) {
              if (aJ === ai) {
                throw aJ = al, aH.arg;
              }
              aH.dispatchException(aH.arg);
            } else {
              "return" === aH.method && aH.abrupt("return", aH.arg);
            }
          }
          aJ = ak;
          var aQ = ah(aF, aG, aH);
          if ("normal" === aQ.type) {
            if (aJ = aH.done ? al : aj, aQ.arg === am) {
              continue;
            }
            var aR = {};
            aR.value = aQ.arg;
            aR.done = aH.done;
            return aR;
          }
          "throw" === aQ.type && (aJ = al, aH.method = "throw", aH.arg = aQ.arg);
        }
      };
    }
    function ax(aF, aG) {
      var aH = aG.method,
        aI = aF.iterator[aH];
      if (aI === a6) {
        aG.delegate = null;
        "throw" === aH && aF.iterator.return && (aG.method = "return", aG.arg = a6, ax(aF, aG), "throw" === aG.method) || "return" !== aH && (aG.method = "throw", aG.arg = new TypeError("The iterator does not provide a '" + aH + "' method"));
        return am;
      }
      var aJ = ah(aI, aF.iterator, aG.arg);
      if ("throw" === aJ.type) {
        aG.method = "throw";
        aG.arg = aJ.arg;
        aG.delegate = null;
        return am;
      }
      var aK = aJ.arg;
      return aK ? aK.done ? (aG[aF.resultName] = aK.value, aG.next = aF.nextLoc, "return" !== aG.method && (aG.method = "next", aG.arg = a6), aG.delegate = null, am) : aK : (aG.method = "throw", aG.arg = new TypeError("iterator result is not an object"), aG.delegate = null, am);
    }
    function ay(aF) {
      var aH = {
        tryLoc: aF[0]
      };
      var aI = aH;
      1 in aF && (aI.catchLoc = aF[1]);
      2 in aF && (aI.finallyLoc = aF[2], aI.afterLoc = aF[3]);
      this.tryEntries.push(aI);
    }
    function az(aF) {
      var aG = aF.completion || {};
      aG.type = "normal";
      delete aG.arg;
      aF.completion = aG;
    }
    function aA(aF) {
      var aG = {
        tryLoc: "root"
      };
      this.tryEntries = [aG];
      aF.forEach(ay, this);
      this.reset(!0);
    }
    function aB(aF) {
      if (aF || "" === aF) {
        var aH = aF[ac];
        if (aH) {
          return aH.call(aF);
        }
        if ("function" == typeof aF.next) {
          return aF;
        }
        if (!isNaN(aF.length)) {
          var aI = -1,
            aJ = function aK() {
              for (; ++aI < aF.length;) {
                if (a9.call(aF, aI)) {
                  aK.value = aF[aI];
                  aK.done = !1;
                  return aK;
                }
              }
              aK.value = a6;
              aK.done = !0;
              return aK;
            };
          return aJ.next = aJ;
        }
      }
      throw new TypeError(b(aF) + " is not iterable");
    }
    ao.prototype = ap;
    aa(at, "constructor", {
      value: ap,
      configurable: !0
    });
    aa(ap, "constructor", {
      value: ao,
      configurable: !0
    });
    ao.displayName = af(ap, ae, "GeneratorFunction");
    a7.isGeneratorFunction = function (aF) {
      var aG = "function" == typeof aF && aF.constructor;
      return !!aG && (aG === ao || "GeneratorFunction" === (aG.displayName || aG.name));
    };
    a7.mark = function (aF) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aF, ap) : (aF.__proto__ = ap, af(aF, ae, "GeneratorFunction"));
      aF.prototype = Object.create(at);
      return aF;
    };
    a7.awrap = function (aF) {
      var aG = {
        __await: aF
      };
      return aG;
    };
    au(av.prototype);
    af(av.prototype, ad, function () {
      return this;
    });
    a7.AsyncIterator = av;
    a7.async = function (aF, aG, aH, aI, aJ) {
      void 0 === aJ && (aJ = Promise);
      var aK = new av(ag(aF, aG, aH, aI), aJ);
      return a7.isGeneratorFunction(aG) ? aK : aK.next().then(function (aL) {
        return aL.done ? aL.value : aK.next();
      });
    };
    au(at);
    af(at, ae, "Generator");
    af(at, ac, function () {
      return this;
    });
    af(at, "toString", function () {
      return "[object Generator]";
    });
    a7.keys = function (aF) {
      var aH = Object(aF),
        aI = [];
      for (var aJ in aH) aI.push(aJ);
      aI.reverse();
      return function aK() {
        for (; aI.length;) {
          var aL = aI.pop();
          if (aL in aH) {
            aK.value = aL;
            aK.done = !1;
            return aK;
          }
        }
        aK.done = !0;
        return aK;
      };
    };
    a7.values = aB;
    aA.prototype = {
      constructor: aA,
      reset: function (aF) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a6, this.done = !1, this.delegate = null, this.method = "next", this.arg = a6, this.tryEntries.forEach(az), !aF) {
          for (var aH in this) "t" === aH.charAt(0) && a9.call(this, aH) && !isNaN(+aH.slice(1)) && (this[aH] = a6);
        }
      },
      stop: function () {
        this.done = !0;
        var aF = this.tryEntries[0].completion;
        if ("throw" === aF.type) {
          throw aF.arg;
        }
        return this.rval;
      },
      dispatchException: function (aF) {
        if (this.done) {
          throw aF;
        }
        var aH = this;
        function aN(aO, aP) {
          aK.type = "throw";
          aK.arg = aF;
          aH.next = aO;
          aP && (aH.method = "next", aH.arg = a6);
          return !!aP;
        }
        for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
          var aJ = this.tryEntries[aI],
            aK = aJ.completion;
          if ("root" === aJ.tryLoc) {
            return aN("end");
          }
          if (aJ.tryLoc <= this.prev) {
            var aL = a9.call(aJ, "catchLoc"),
              aM = a9.call(aJ, "finallyLoc");
            if (aL && aM) {
              if (this.prev < aJ.catchLoc) {
                return aN(aJ.catchLoc, !0);
              }
              if (this.prev < aJ.finallyLoc) {
                return aN(aJ.finallyLoc);
              }
            } else {
              if (aL) {
                if (this.prev < aJ.catchLoc) {
                  return aN(aJ.catchLoc, !0);
                }
              } else {
                if (!aM) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aJ.finallyLoc) {
                  return aN(aJ.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aF, aG) {
        for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
          var aI = this.tryEntries[aH];
          if (aI.tryLoc <= this.prev && a9.call(aI, "finallyLoc") && this.prev < aI.finallyLoc) {
            var aJ = aI;
            break;
          }
        }
        aJ && ("break" === aF || "continue" === aF) && aJ.tryLoc <= aG && aG <= aJ.finallyLoc && (aJ = null);
        var aK = aJ ? aJ.completion : {};
        aK.type = aF;
        aK.arg = aG;
        return aJ ? (this.method = "next", this.next = aJ.finallyLoc, am) : this.complete(aK);
      },
      complete: function (aF, aG) {
        if ("throw" === aF.type) {
          throw aF.arg;
        }
        "break" === aF.type || "continue" === aF.type ? this.next = aF.arg : "return" === aF.type ? (this.rval = this.arg = aF.arg, this.method = "return", this.next = "end") : "normal" === aF.type && aG && (this.next = aG);
        return am;
      },
      finish: function (aF) {
        for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
          var aH = this.tryEntries[aG];
          if (aH.finallyLoc === aF) {
            this.complete(aH.completion, aH.afterLoc);
            az(aH);
            return am;
          }
        }
      },
      catch: function (aF) {
        for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
          var aI = this.tryEntries[aH];
          if (aI.tryLoc === aF) {
            var aJ = aI.completion;
            if ("throw" === aJ.type) {
              var aK = aJ.arg;
              az(aI);
            }
            return aK;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aF, aG, aH) {
        this.delegate = {
          iterator: aB(aF),
          resultName: aG,
          nextLoc: aH
        };
        "next" === this.method && (this.arg = a6);
        return am;
      }
    };
    return a7;
  }
  function h(a5, a6, a7, a8, a9, aa, ab) {
    try {
      var ad = a5[aa](ab),
        ae = ad.value;
    } catch (ag) {
      return void a7(ag);
    }
    ad.done ? a6(ae) : Promise.resolve(ae).then(a8, a9);
  }
  function i(a5) {
    return function () {
      var a8 = this,
        a9 = arguments;
      return new Promise(function (aa, ab) {
        var ad = a5.apply(a8, a9);
        function ae(ag) {
          h(ad, aa, ab, ae, af, "next", ag);
        }
        function af(ag) {
          h(ad, aa, ab, ae, af, "throw", ag);
        }
        ae(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.WDXW : $.getdata("WDXW")) || "",
    k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top",
    l = $.getjson("WDXW_Device") || [],
    m = void 0,
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "",
    w = "",
    x = "",
    y = "",
    z = "5c5555d0f9c249de9de7c46904b506b1";
  function A() {
    return B.apply(this, arguments);
  }
  function B() {
    B = i(g().mark(function a6() {
      var a8, a9, aa, ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd;
      return g().wrap(function (be) {
        for (;;) {
          switch (be.prev = be.next) {
            case 0:
              if (j) {
                be.next = 5;
                break;
              }
              console.log("先填写账号密码");
              be.next = 4;
              return a3("先填写账号密码");
            case 4:
              return be.abrupt("return");
            case 5:
              be.next = 7;
              return Z();
            case 7:
              m = be.sent;
              a8 = j.split(" ");
              a9 = c(a8);
              be.prev = 10;
              a9.s();
            case 12:
              if ((aa = a9.n()).done) {
                be.next = 288;
                break;
              }
              if (ab = aa.value, be.prev = 14, t = ab.split("&")[0], u = ab.split("&")[1], w = ab.split("&")[2], console.log("用户：".concat(t, "开始任务")), ad = l.findIndex(function (bl) {
                return bl.id == t;
              }), -1 === ad) {
                be.next = 28;
                break;
              }
              console.log("从缓存中取UA");
              n = l[ad].ua;
              o = l[ad].device;
              console.log(n);
              console.log(o);
              be.next = 36;
              break;
            case 28:
              console.log("随机生成UA");
              af = Y();
              n = af.ua;
              o = af.device;
              console.log(n);
              console.log(o);
              be.next = 36;
              return C();
            case 36:
              v = "";
              console.log("获取publicKey");
              be.next = 40;
              return E("/wzrbapp/app/sys/publicKey");
            case 40:
              ag = be.sent;
              q = ag.data.publicKey;
              r = ag.data.key;
              console.log(q);
              ah = new (m.loadJSEncrypt())();
              ah.setPublicKey(r);
              u = ah.encrypt(u);
              console.log("登录");
              be.next = 50;
              return G("/wzrbapp/app/sys/login/byPassword", "rasPassword=".concat(encodeURIComponent(u), "&username=").concat(t, "&publicKey=").concat(q, "&inviteCode=&longlat=,"));
            case 50:
              if (ai = be.sent, 200 == ai.code) {
                be.next = 54;
                break;
              }
              console.log(ai.message);
              return be.abrupt("continue", 286);
            case 54:
              console.log("登录成功");
              v = ai.data.paAuthority;
              x = ai.data.userId;
              console.log("————————————");
              aj = new Date().getTime() + "";
              ak = aj.split("").reverse().slice(0, 8).reverse().join("");
              al = T({
                redirectUrl: "https://activity.xinhuamm.net/statics/earn-coins2-h5/#/",
                appId: z,
                data: {
                  accessToken: v
                }
              }, "b557ddda1bf5e414".concat(ak), "0000000000000000");
              am = "----WebKitFormBoundary2V9BQiXoV3SzDQqC";
              an = "--".concat(am, "\r\n") + "Content-Disposition: form-data; name=\"timeStamp\"\r\n\r\n" + "".concat(aj, "\r\n") + "--".concat(am, "\r\n") + "Content-Disposition: form-data; name=\"params\"\r\n\r\n" + "".concat(al, "\r\n") + "--".concat(am, "--\r\n");
              be.next = 65;
              return I("https://ryapi.xinhuamm.net/token/api/token/getTokenInfo", an, am);
            case 65:
              ao = be.sent;
              ap = U(ao.obj, "414e5fb1addd755b", "0000000000000000");
              y = ap.token;
              be.next = 70;
              return M("https://mkapi2.xinhuamm.net/coinApi2/clapi/statistics/getStaticsInfo", {});
            case 70:
              aq = be.sent;
              console.log("今日获得暖暖币：".concat(aq.obj.todayCoin, " 我的零钱：").concat(aq.obj.balance, "元 邀请人数：").concat(aq.obj.totalInviteCount));
              console.log("开启宝箱");
              be.next = 75;
              return M("https://mkapi2.xinhuamm.net/coinApi2/clapi/coin/openTreasureBox", {});
            case 75:
              ar = be.sent;
              console.log(ar.msg);
              console.log("任务进度");
              console.log("阅读：".concat(aq.obj.visitNum, " 点赞：").concat(aq.obj.supportNum, " 评论：").concat(aq.obj.commentNum, " 分享：").concat(aq.obj.shareNum));
              be.next = 81;
              return M("https://mkapi2.xinhuamm.net/coinApi2/clapi/content/getHighContentList", {});
            case 81:
              as = be.sent;
              be.next = 84;
              return M("https://mkapi2.xinhuamm.net/coinApi2/clapi/content/getUserContentInfo", {});
            case 84:
              at = be.sent;
              au = c(as.list);
              be.prev = 86;
              au.s();
            case 88:
              if ((av = au.n()).done) {
                be.next = 113;
                break;
              }
              if (aw = av.value, console.log("文章：".concat(aw.title)), at.obj.visitList.includes(aw.contentId)) {
                be.next = 96;
                break;
              }
              be.next = 94;
              return G("/hybapp/c/docs/cbyd/event", "eventId=2&docId=".concat(aw.contentId));
            case 94:
              ax = be.sent;
              console.log("阅读：".concat(ax.msg));
            case 96:
              if (at.obj.supportList.includes(aw.contentId)) {
                be.next = 101;
                break;
              }
              be.next = 99;
              return G("/hybapp/c/docs/cbyd/event", "eventId=5&docId=".concat(aw.contentId));
            case 99:
              ay = be.sent;
              console.log("点赞：".concat(ay.msg));
            case 101:
              if (at.obj.commentList.includes(aw.contentId)) {
                be.next = 106;
                break;
              }
              be.next = 104;
              return G("/hybapp/c/docs/cbyd/event", "eventId=4&docId=".concat(aw.contentId));
            case 104:
              az = be.sent;
              console.log("评论：".concat(az.msg));
            case 106:
              if (at.obj.shareList.includes(aw.contentId)) {
                be.next = 111;
                break;
              }
              be.next = 109;
              return G("/hybapp/c/docs/cbyd/event", "eventId=3&docId=".concat(aw.contentId));
            case 109:
              aA = be.sent;
              console.log("分享：".concat(aA.msg));
            case 111:
              be.next = 88;
              break;
            case 113:
              be.next = 118;
              break;
            case 115:
              be.prev = 115;
              be.t0 = be.catch(86);
              au.e(be.t0);
            case 118:
              be.prev = 118;
              au.f();
              return be.finish(118);
            case 121:
              be.next = 123;
              return M("https://mkapi2.xinhuamm.net/coinApi2/clapi/global/config/getConfig", {});
            case 123:
              for (aB = be.sent, aC = aB.obj.inviteLotteryPath, aD = aC.split("?")[1], aE = {}, aF = aD.split("&"), aG = 0, aH = aF.length; aG < aH; aG++) {
                aI = aF[aG].split("=");
                aE[aI[0]] = aI[1];
              }
              console.log("————————————");
              console.log("每日抽奖");
              be.next = 133;
              return K("https://mediacloud-pub-oss.xinhuamm.net/lottery/activity/".concat(z, "/").concat(aE.id, "/index.json?timestamp=").concat(Date.now()));
            case 133:
              aJ = be.sent;
              be.next = 136;
              return K("https://ryapi.xinhuamm.net/lotteryapi/lottery/expandInfo/".concat(aE.id));
            case 136:
              aK = be.sent;
              console.log("剩余抽奖次数：".concat(aK.data.availableJoinCount));
              aL = g().mark(function bs() {
                var bu, bv;
                return g().wrap(function (bw) {
                  for (;;) {
                    switch (bw.prev = bw.next) {
                      case 0:
                        bw.next = 2;
                        return K("https://ryapi.xinhuamm.net/lotteryapi/lottery/draw?id=".concat(aE.id, "&appId=").concat(z, "&password=&idcard="));
                      case 2:
                        bu = bw.sent;
                        bv = aJ.lotteryItems.findIndex(function (bz) {
                          return bz.id == bu.data.prizeItemId;
                        });
                        console.log("抽奖获得：".concat(aJ.lotteryItems[bv].code));
                      case 5:
                      case "end":
                        return bw.stop();
                    }
                  }
                }, bs);
              });
              aM = 0;
            case 140:
              if (!(aM < aK.data.availableJoinCount)) {
                be.next = 145;
                break;
              }
              return be.delegateYield(aL(), "t1", 142);
            case 142:
              aM++;
              be.next = 140;
              break;
            case 145:
              be.next = 147;
              return M("https://ryapi.xinhuamm.net/lotteryapi/lottery/my/winningRecord/".concat(z, "/").concat(aE.id, "?pageNum=1&pageSize=20"), {});
            case 147:
              if (aN = be.sent, null == aN || null === (ac = aN.data) || void 0 === ac || !ac.list) {
                be.next = 176;
                break;
              }
              aO = c(aN.data.list);
              be.prev = 150;
              aO.s();
            case 152:
              if ((aP = aO.n()).done) {
                be.next = 168;
                break;
              }
              if (aQ = aP.value, 3 != aQ.itemType || 0 != aQ.redpackReceiveStatus) {
                be.next = 166;
                break;
              }
              if (console.log("奖品：".concat(aQ.itemCode)), !w) {
                be.next = 165;
                break;
              }
              console.log("领取奖品：".concat(aQ.winningPrize.exchangeCode));
              be.next = 160;
              return O({
                token: w,
                ticket: aQ.winningPrize.exchangeCode
              });
            case 160:
              aR = be.sent;
              console.log("领取结果：".concat(aR.msg));
              s += "用户：".concat(t, " 抽奖获得：").concat(aQ.itemCode, " 领取结果：").concat(aR.msg, "\n");
              be.next = 166;
              break;
            case 165:
              console.log("请配置wxToken");
            case 166:
              be.next = 152;
              break;
            case 168:
              be.next = 173;
              break;
            case 170:
              be.prev = 170;
              be.t2 = be.catch(150);
              aO.e(be.t2);
            case 173:
              be.prev = 173;
              aO.f();
              return be.finish(173);
            case 176:
              for (console.log("————————————"), console.log("每日签到"), aC = aB.obj.inviteSignPath, aD = aC.split("?")[1], aE = {}, aF = aD.split("&"), aS = 0, aT = aF.length; aS < aT; aS++) {
                aU = aF[aS].split("=");
                aE[aU[0]] = aU[1];
              }
              be.next = 185;
              return K("https://mediacloud-pub-oss.xinhuamm.net/sign/activity/".concat(z, "/").concat(aE.activityId, "/publish/index.json?device=brower").concat(Math.floor(new Date().getTime() / 1000)));
            case 185:
              aV = be.sent;
              be.next = 188;
              return M("https://signapi.xinhuamm.net/signapi/sign/getSignInfoById", {
                id: aV.id
              });
            case 188:
              if (aW = be.sent, 1 != aW.obj.currentSign) {
                be.next = 194;
                break;
              }
              console.log("今日已签到");
              console.log("连续签到：".concat(aW.obj.continuityDays, "天"));
              be.next = 199;
              break;
            case 194:
              var bg = {};
              bg.activityId = aV.id;
              be.next = 196;
              return M("https://signapi.xinhuamm.net/signapi/sign/sign", bg);
            case 196:
              aY = be.sent;
              console.log(aY.msg);
              console.log("连续签到：".concat(null == aY || null === (aX = aY.obj) || void 0 === aX ? void 0 : aX.continuityDays, "天"));
            case 199:
              be.next = 201;
              return M("https://signapi.xinhuamm.net/signapi/sign/getSevenDayAwardList", {});
            case 201:
              aZ = be.sent;
              b0 = c(aZ.list);
              be.prev = 203;
              b0.s();
            case 205:
              if ((b1 = b0.n()).done) {
                be.next = 252;
                break;
              }
              b3 = b1.value;
              console.log("活动：".concat(b3.activityName));
              be.next = 210;
              return K("https://ryapi.xinhuamm.net/lotteryapi/lottery/expandInfo/".concat(b3.signLotteryJoinId));
            case 210:
              b4 = be.sent;
              console.log("剩余抽奖次数：".concat(b4.data.availableJoinCount));
              b5 = g().mark(function bA() {
                var bB, bC;
                return g().wrap(function (bD) {
                  for (;;) {
                    switch (bD.prev = bD.next) {
                      case 0:
                        bD.next = 2;
                        return K("https://mediacloud-pub-oss.xinhuamm.net/lottery/activity/".concat(z, "/").concat(b3.signLotteryJoinId, "/index.json?timestamp=").concat(Date.now()));
                      case 2:
                        aJ = bD.sent;
                        bD.next = 5;
                        return K("https://ryapi.xinhuamm.net/lotteryapi/lottery/draw?id=".concat(b3.signLotteryJoinId, "&appId=").concat(z, "&password=&idcard="));
                      case 5:
                        bB = bD.sent;
                        bC = aJ.lotteryItems.findIndex(function (bF) {
                          return bF.id == bB.data.prizeItemId;
                        });
                        console.log("抽奖获得：".concat(aJ.lotteryItems[bC].code));
                      case 8:
                      case "end":
                        return bD.stop();
                    }
                  }
                }, bA);
              });
              b6 = 0;
            case 214:
              if (!(b6 < b4.data.availableJoinCount)) {
                be.next = 219;
                break;
              }
              return be.delegateYield(b5(), "t3", 216);
            case 216:
              b6++;
              be.next = 214;
              break;
            case 219:
              be.next = 221;
              return M("https://ryapi.xinhuamm.net/lotteryapi/lottery/my/winningRecord/".concat(z, "/").concat(b3.signLotteryJoinId), {});
            case 221:
              if (b7 = be.sent, null == b7 || null === (b2 = b7.data) || void 0 === b2 || !b2.list) {
                be.next = 250;
                break;
              }
              b8 = c(b7.data.list);
              be.prev = 224;
              b8.s();
            case 226:
              if ((b9 = b8.n()).done) {
                be.next = 242;
                break;
              }
              if (ba = b9.value, 3 != ba.itemType || 0 != ba.redpackReceiveStatus) {
                be.next = 240;
                break;
              }
              if (console.log("奖品：".concat(ba.itemCode)), !w) {
                be.next = 239;
                break;
              }
              console.log("领取奖品：".concat(ba.winningPrize.exchangeCode));
              be.next = 234;
              return O({
                token: w,
                ticket: ba.winningPrize.exchangeCode
              });
            case 234:
              bb = be.sent;
              console.log("领取结果：".concat(bb.msg));
              s += "用户：".concat(t, " 抽奖获得：").concat(ba.itemCode, " 领取结果：").concat(bb.msg, "\n");
              be.next = 240;
              break;
            case 239:
              console.log("请配置wxToken");
            case 240:
              be.next = 226;
              break;
            case 242:
              be.next = 247;
              break;
            case 244:
              be.prev = 244;
              be.t4 = be.catch(224);
              b8.e(be.t4);
            case 247:
              be.prev = 247;
              b8.f();
              return be.finish(247);
            case 250:
              be.next = 205;
              break;
            case 252:
              be.next = 257;
              break;
            case 254:
              be.prev = 254;
              be.t5 = be.catch(203);
              b0.e(be.t5);
            case 257:
              be.prev = 257;
              b0.f();
              return be.finish(257);
            case 260:
              console.log("————————————");
              console.log("查询零钱");
              be.next = 264;
              return M("https://mkapi2.xinhuamm.net/coinApi2/clapi/statistics/getStaticsInfo", {});
            case 264:
              if (aq = be.sent, !(aq.obj.balance >= 10)) {
                be.next = 279;
                break;
              }
              var bh = {};
              bh.amount = aq.obj.balance;
              console.log("提现");
              be.next = 269;
              return M("https://mkapi2.xinhuamm.net/coinApi2/clapi/account/withdrawal", bh);
            case 269:
              if (bc = be.sent, 200 != bc.status) {
                be.next = 278;
                break;
              }
              var bi = {};
              bi.token = w;
              bi.ticket = bc.obj.ticket;
              be.next = 273;
              return Q(bi);
            case 273:
              bd = be.sent;
              console.log("提现结果：".concat(bd.msg));
              s += "用户：".concat(t, " 提现：").concat(aq.obj.balance, " 提现结果：").concat(bd.msg, "\n");
              be.next = 279;
              break;
            case 278:
              console.log(bc.msg);
            case 279:
              console.log("今日获得暖暖币：".concat(aq.obj.todayCoin, " 我的零钱：").concat(aq.obj.balance, "元 邀请人数：").concat(aq.obj.totalInviteCount));
              s += "用户：".concat(t, " 零钱：").concat(aq.obj.balance, "\n");
              be.next = 286;
              break;
            case 283:
              be.prev = 283;
              be.t6 = be.catch(14);
              console.log(be.t6);
            case 286:
              be.next = 12;
              break;
            case 288:
              be.next = 293;
              break;
            case 290:
              be.prev = 290;
              be.t7 = be.catch(10);
              a9.e(be.t7);
            case 293:
              be.prev = 293;
              a9.f();
              return be.finish(293);
            case 296:
              if (!s) {
                be.next = 299;
                break;
              }
              be.next = 299;
              return a3(s);
            case 299:
            case "end":
              return be.stop();
          }
        }
      }, a6, null, [[10, 290, 293, 296], [14, 283], [86, 115, 118, 121], [150, 170, 173, 176], [203, 254, 257, 260], [224, 244, 247, 250]]);
    }));
    return B.apply(this, arguments);
  }
  function C() {
    return D.apply(this, arguments);
  }
  function D() {
    D = i(g().mark(function a7() {
      var a9, aa, ab;
      return g().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              var ae = {};
              ae.id = t;
              ae.device = o;
              ae.ua = n;
              if (a9 = $.getjson("WDXW_Device") || [], aa = ae, ab = a9.findIndex(function (ag) {
                return ag.id == aa.id;
              }), -1 === ab) {
                ac.next = 12;
                break;
              }
              if (a9[ab].device != aa.device || a9[ab].ua != aa.ua) {
                ac.next = 8;
                break;
              }
              return ac.abrupt("return");
            case 8:
              a9[ab] = aa;
              console.log("🎉用户".concat(aa.id, "更新ua成功!"));
            case 10:
              ac.next = 14;
              break;
            case 12:
              a9.push(aa);
              console.log("🎉用户".concat(aa.id, "新增ua成功!"));
            case 14:
              $.setjson(a9, "WDXW_Device");
            case 15:
            case "end":
              return ac.stop();
          }
        }
      }, a7);
    }));
    return D.apply(this, arguments);
  }
  function E(a5) {
    return F.apply(this, arguments);
  }
  function F() {
    F = i(g().mark(function a7(a8) {
      var aa;
      return g().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              aa = S();
              return ac.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "https://wdappapi.wzrb.com.cn".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-DEVICE-ID": o,
                    "X-TIMESTAMP": aa.time,
                    APPWEBWZAUTHORITY: "",
                    "X-SITE-UID": "S_WDXW",
                    "X-SIGNATURE": aa.signature,
                    "X-USER-ID": "",
                    "X-REQUEST-ID": aa.uuid,
                    "X-SESSION-ID": "",
                    "X-TENANT-UID": "T_GOV",
                    "Accept-Encoding": "gzip",
                    "USER-AGENT": n
                  }
                };
                $.get(ag, function () {
                  var aj = i(g().mark(function ak(al, am, an) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            try {
                              al ? (console.log("".concat(JSON.stringify(al))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ae(JSON.parse(an));
                            } catch (ar) {
                              $.logErr(ar, am);
                            } finally {
                              ae();
                            }
                          case 1:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, ak);
                  }));
                  return function (al, am, an) {
                    return aj.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ac.stop();
          }
        }
      }, a7);
    }));
    return F.apply(this, arguments);
  }
  function G(a5, a6) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function a6(a7, a8) {
      var a9;
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              a9 = S();
              return aa.abrupt("return", new Promise(function (ac) {
                var af = {
                  url: "https://wdappapi.wzrb.com.cn".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-DEVICE-ID": o,
                    "X-TIMESTAMP": a9.time,
                    APPWEBWZAUTHORITY: v,
                    "X-SITE-UID": "S_WDXW",
                    "X-SIGNATURE": a9.signature,
                    "X-USER-ID": x,
                    "X-REQUEST-ID": a9.uuid,
                    "X-SESSION-ID": v,
                    "X-TENANT-UID": "T_GOV",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "gzip",
                    "USER-AGENT": n
                  },
                  body: a8
                };
                $.post(af, function () {
                  var ah = i(g().mark(function ai(aj, ak, al) {
                    return g().wrap(function (ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            try {
                              aj ? (console.log("".concat(JSON.stringify(aj))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(al));
                            } catch (as) {
                              $.logErr(as, ak);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return ao.stop();
                        }
                      }
                    }, ai);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aa.stop();
          }
        }
      }, a6);
    }));
    return H.apply(this, arguments);
  }
  function I(a5, a6, a7) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function a6(a7, a8, a9) {
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              return ab.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    "Content-Type": "multipart/form-data; boundary=".concat(a9),
                    Accept: "*/*",
                    Origin: "https://activity.xinhuamm.net",
                    "X-Requested-With": "com.wznews.news.app",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://activity.xinhuamm.net/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; ".concat(p, " Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36/trs;trs_app")
                  },
                  body: a8
                };
                $.post(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ak));
                            } catch (am) {
                              $.logErr(am, aj);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ah);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ab.stop();
          }
        }
      }, a6);
    }));
    return J.apply(this, arguments);
  }
  function K(a5) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function a6(a7) {
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ac) {
                var ad = {
                  url: "".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    dn: o,
                    token: y,
                    cookie: "token=".concat(y),
                    Accept: "*/*",
                    Origin: "https://activity.xinhuamm.net",
                    "X-Requested-With": "com.wznews.news.app",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://activity.xinhuamm.net/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; ".concat(p, " Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36/trs;trs_app")
                  }
                };
                $.get(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(aj));
                            } catch (am) {
                              $.logErr(am, ai);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ag);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a6);
    }));
    return L.apply(this, arguments);
  }
  function M(a5, a6) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function a5(a6, a7) {
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    dn: o,
                    token: y,
                    cookie: "token=".concat(y),
                    "Content-Type": "application/json",
                    Accept: "*/*",
                    Origin: "https://activity.xinhuamm.net",
                    "X-Requested-With": "com.wznews.news.app",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://activity.xinhuamm.net/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; ".concat(p, " Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36/trs;trs_app")
                  },
                  body: JSON.stringify(a7)
                };
                $.post(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            try {
                              ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(aj));
                            } catch (al) {
                              $.logErr(al, ai);
                            } finally {
                              ab();
                            }
                          case 1:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, ag);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a5);
    }));
    return N.apply(this, arguments);
  }
  function O(a5) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function a6(a7) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://ryapi.xinhuamm.net/lotteryapi/noLogin/redpack/redeem",
                  headers: {
                    Connection: "Keep-Alive",
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json",
                    Referer: "https://servicewechat.com/wxe413e839239656fd/9/page-frame.html",
                    "Accept-Encoding": "gzip,compress,br,deflate",
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.50(0x18003237) NetType/WIFI Language/zh_CN"
                  },
                  body: JSON.stringify(a7)
                };
                $.post(ac, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            try {
                              ag ? (console.log("".concat(JSON.stringify(ag))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(ai));
                            } catch (ak) {
                              $.logErr(ak, ah);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, af);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a6);
    }));
    return P.apply(this, arguments);
  }
  function Q(a5) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function a5(a6) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://mkapi.xinhuamm.net/coinApi/cvapi/account/withdrawal/callback",
                  headers: {
                    Connection: "Keep-Alive",
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json",
                    Referer: "https://servicewechat.com/wxe413e839239656fd/9/page-frame.html",
                    "Accept-Encoding": "gzip,compress,br,deflate",
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.50(0x18003237) NetType/WIFI Language/zh_CN"
                  },
                  body: JSON.stringify(a6)
                };
                $.post(ac, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            try {
                              ag ? (console.log("".concat(JSON.stringify(ag))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(ai));
                            } catch (ak) {
                              $.logErr(ak, ah);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, af);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a5);
    }));
    return R.apply(this, arguments);
  }
  function S() {
    var a5 = V(),
      a6 = Date.now(),
      a7 = m.createCryptoJS(),
      a8 = a7.SHA256("T_GOV&&S_WDXW&&".concat(a5, "&&").concat(v, "&&").concat(a6, "&&35c782a2")).toString(),
      a9 = {
        uuid: a5,
        time: a6,
        signature: a8
      };
    return a9;
  }
  function T(a5, a6, a7) {
    var a8 = m.createCryptoJS(),
      a9 = a8.enc.Utf8.parse(a6),
      aa = a8.enc.Utf8.parse(a7),
      ab = a8.enc.Utf8.parse(JSON.stringify(a5)),
      ac = a8.AES.encrypt(ab, a9, {
        iv: aa,
        mode: a8.mode.CBC,
        padding: a8.pad.Pkcs7
      });
    return a8.enc.Base64.stringify(ac.ciphertext);
  }
  function U(a5, a6, a7) {
    var a8 = m.createCryptoJS(),
      a9 = a8.enc.Utf8.parse(a6),
      aa = a8.enc.Utf8.parse(a7),
      ab = a5,
      ac = a8.AES.decrypt(ab, a9, {
        iv: aa,
        mode: a8.mode.CBC,
        padding: a8.pad.Pkcs7
      });
    return JSON.parse(ac.toString(a8.enc.Utf8));
  }
  function V() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a6) {
      var a7 = 16 * Math.random() | 0,
        a8 = "x" === a6 ? a7 : 3 & a7 | 8;
      return a8.toString(16);
    });
  }
  function W() {
    for (var a5 = "", a6 = 0; a6 < 16; a6++) {
      var a7 = Math.floor(16 * Math.random());
      a5 += "0123456789abcdef"[a7];
    }
    return a5;
  }
  function X(a5) {
    return a5[Math.floor(Math.random() * a5.length)];
  }
  function Y() {
    p = X(["M2103K19C", "M2104K10AC", "21121119SC", "21091116AC", "21091116C", "2201116SC", "21091116UC", "22101317C", "22101316C", "22101316UCP", "2312DRAABC", "2312DRA50C", "23090RA98C"]);
    var a5 = W(),
      a6 = "3565961356" + p.length % 10 + 19 + a5,
      a7 = m.md5(a6).toUpperCase(),
      a8 = "8.2.3;".concat(a7, ";Redmi/").concat(p, ";ANDROID;11;"),
      a9 = {
        ua: a8,
        device: a7
      };
    return a9;
  }
  function Z() {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function a6() {
      var a7;
      return g().wrap(function a8(a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              if (a7 = $.getdata("Utils_Code") || "", !a7 || !Object.keys(a7).length) {
                a9.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a7);
              return a9.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a9.abrupt("return", new Promise(function () {
                var ab = i(g().mark(function ac(ad) {
                  return g().wrap(function ag(ah) {
                    for (;;) {
                      switch (ah.prev = ah.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (aj) {
                            $.setdata(aj, "Utils_Code");
                            eval(aj);
                            console.log("✅ Utils加载成功, 请继续");
                            ad(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ah.stop();
                      }
                    }
                  }, ac);
                }));
                return function (ad) {
                  return ab.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a9.stop();
          }
        }
      }, a6);
    }));
    return a0.apply(this, arguments);
  }
  function a1() {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function a7() {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(ac, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            try {
                              af ? (console.log("".concat(JSON.stringify(af))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(ah).notice);
                            } catch (al) {
                              $.logErr(al, ag);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, ae);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a7);
    }));
    return a2.apply(this, arguments);
  }
  function a3(a5) {
    return a4.apply(this, arguments);
  }
  function a4() {
    a4 = i(g().mark(function a6(a7) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              if (!$.isNode()) {
                a8.next = 5;
                break;
              }
              a8.next = 3;
              return notify.sendNotify($.name, a7);
            case 3:
              a8.next = 6;
              break;
            case 5:
              $.msg($.name, "", a7);
            case 6:
            case "end":
              return a8.stop();
          }
        }
      }, a6);
    }));
    return a4.apply(this, arguments);
  }
  i(g().mark(function a5() {
    return g().wrap(function (a7) {
      for (;;) {
        switch (a7.prev = a7.next) {
          case 0:
            a7.next = 2;
            return a1();
          case 2:
            a7.next = 4;
            return A();
          case 4:
          case "end":
            return a7.stop();
        }
      }
    }, a5);
  }))().catch(function (a6) {
    $.log(a6);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}