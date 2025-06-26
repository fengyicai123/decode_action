//Thu Jun 26 2025 07:33:21 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("慈晓");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(N) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (R) {
      return typeof R;
    } : function (R) {
      return R && "function" == typeof Symbol && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
    };
    return b(N);
  }
  function c(N, O) {
    var Q = "undefined" != typeof Symbol && N[Symbol.iterator] || N["@@iterator"];
    if (!Q) {
      if (Array.isArray(N) || (Q = d(N)) || O && N && "number" == typeof N.length) {
        Q && (N = Q);
        var R = 0,
          S = function () {};
        return {
          s: S,
          n: function () {
            var Y = {
              done: !0
            };
            return R >= N.length ? Y : {
              done: !1,
              value: N[R++]
            };
          },
          e: function (Y) {
            throw Y;
          },
          f: S
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var T,
      U = !0,
      V = !1;
    return {
      s: function () {
        Q = Q.call(N);
      },
      n: function () {
        var Y = Q.next();
        U = Y.done;
        return Y;
      },
      e: function (Y) {
        V = !0;
        T = Y;
      },
      f: function () {
        try {
          U || null == Q.return || Q.return();
        } finally {
          if (V) {
            throw T;
          }
        }
      }
    };
  }
  function d(N, O) {
    if (N) {
      if ("string" == typeof N) {
        return f(N, O);
      }
      var Q = {}.toString.call(N).slice(8, -1);
      "Object" === Q && N.constructor && (Q = N.constructor.name);
      return "Map" === Q || "Set" === Q ? Array.from(N) : "Arguments" === Q || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q) ? f(N, O) : void 0;
    }
  }
  function f(N, O) {
    (null == O || O > N.length) && (O = N.length);
    for (var P = 0, Q = Array(O); P < O; P++) {
      Q[P] = N[P];
    }
    return Q;
  }
  function g() {
    'use strict';

    g = function () {
      return P;
    };
    var O,
      P = {},
      Q = Object.prototype,
      T = Q.hasOwnProperty,
      V = Object.defineProperty || function (an, ao, ap) {
        an[ao] = ap.value;
      },
      W = "function" == typeof Symbol ? Symbol : {},
      X = W.iterator || "@@iterator",
      Y = W.asyncIterator || "@@asyncIterator",
      Z = W.toStringTag || "@@toStringTag";
    function a0(an, ao, ap) {
      var ar = {};
      ar.value = ap;
      ar.enumerable = !0;
      ar.configurable = !0;
      ar.writable = !0;
      Object.defineProperty(an, ao, ar);
      return an[ao];
    }
    try {
      a0({}, "");
    } catch (ao) {
      a0 = function (ap, aq, ar) {
        return ap[aq] = ar;
      };
    }
    function a1(aq, ar, as, at) {
      var au = ar && ar.prototype instanceof a8 ? ar : a8,
        av = Object.create(au.prototype),
        aw = new al(at || []);
      V(av, "_invoke", {
        value: ah(aq, as, aw)
      });
      return av;
    }
    function a2(aq, ar, as) {
      try {
        return {
          type: "normal",
          arg: aq.call(ar, as)
        };
      } catch (ax) {
        var au = {};
        au.type = "throw";
        au.arg = ax;
        return au;
      }
    }
    P.wrap = a1;
    var a3 = "suspendedStart",
      a4 = "suspendedYield",
      a5 = "executing",
      a6 = "completed",
      a7 = {};
    function a8() {}
    function a9() {}
    function aa() {}
    var ab = {};
    a0(ab, X, function () {
      return this;
    });
    var ac = Object.getPrototypeOf,
      ad = ac && ac(ac(am([])));
    ad && ad !== Q && T.call(ad, X) && (ab = ad);
    aa.prototype = a8.prototype = Object.create(ab);
    var ae = aa.prototype;
    function af(aq) {
      ["next", "throw", "return"].forEach(function (at) {
        a0(aq, at, function (au) {
          return this._invoke(at, au);
        });
      });
    }
    function ag(aq, ar) {
      function av(aw, ax, ay, az) {
        var aB = a2(aq[aw], aq, ax);
        if ("throw" !== aB.type) {
          var aC = aB.arg,
            aD = aC.value;
          return aD && "object" == b(aD) && T.call(aD, "__await") ? ar.resolve(aD.__await).then(function (aG) {
            av("next", aG, ay, az);
          }, function (aG) {
            av("throw", aG, ay, az);
          }) : ar.resolve(aD).then(function (aG) {
            aC.value = aG;
            ay(aC);
          }, function (aG) {
            return av("throw", aG, ay, az);
          });
        }
        az(aB.arg);
      }
      var at;
      V(this, "_invoke", {
        value: function (aw, ax) {
          function aA() {
            return new ar(function (aC, aD) {
              av(aw, ax, aC, aD);
            });
          }
          return at = at ? at.then(aA, aA) : aA();
        }
      });
    }
    function ah(aq, ar, as) {
      var au = a3;
      return function (av, aw) {
        if (au === a5) {
          throw Error("Generator is already running");
        }
        if (au === a6) {
          if ("throw" === av) {
            throw aw;
          }
          var ay = {
            value: O,
            done: !0
          };
          return ay;
        }
        for (as.method = av, as.arg = aw;;) {
          var az = as.delegate;
          if (az) {
            var aA = ai(az, as);
            if (aA) {
              if (aA === a7) {
                continue;
              }
              return aA;
            }
          }
          if ("next" === as.method) {
            as.sent = as._sent = as.arg;
          } else {
            if ("throw" === as.method) {
              if (au === a3) {
                throw au = a6, as.arg;
              }
              as.dispatchException(as.arg);
            } else {
              "return" === as.method && as.abrupt("return", as.arg);
            }
          }
          au = a5;
          var aB = a2(aq, ar, as);
          if ("normal" === aB.type) {
            if (au = as.done ? a6 : a4, aB.arg === a7) {
              continue;
            }
            var aC = {};
            aC.value = aB.arg;
            aC.done = as.done;
            return aC;
          }
          "throw" === aB.type && (au = a6, as.method = "throw", as.arg = aB.arg);
        }
      };
    }
    function ai(aq, ar) {
      var aw = ar.method,
        ax = aq.iterator[aw];
      if (ax === O) {
        ar.delegate = null;
        "throw" === aw && aq.iterator.return && (ar.method = "return", ar.arg = O, ai(aq, ar), "throw" === ar.method) || "return" !== aw && (ar.method = "throw", ar.arg = new TypeError("The iterator does not provide a '" + aw + "' method"));
        return a7;
      }
      var au = a2(ax, aq.iterator, ar.arg);
      if ("throw" === au.type) {
        ar.method = "throw";
        ar.arg = au.arg;
        ar.delegate = null;
        return a7;
      }
      var av = au.arg;
      return av ? av.done ? (ar[aq.resultName] = av.value, ar.next = aq.nextLoc, "return" !== ar.method && (ar.method = "next", ar.arg = O), ar.delegate = null, a7) : av : (ar.method = "throw", ar.arg = new TypeError("iterator result is not an object"), ar.delegate = null, a7);
    }
    function aj(aq) {
      var ar = {
        tryLoc: aq[0]
      };
      var as = ar;
      1 in aq && (as.catchLoc = aq[1]);
      2 in aq && (as.finallyLoc = aq[2], as.afterLoc = aq[3]);
      this.tryEntries.push(as);
    }
    function ak(aq) {
      var as = aq.completion || {};
      as.type = "normal";
      delete as.arg;
      aq.completion = as;
    }
    function al(aq) {
      var ar = {
        tryLoc: "root"
      };
      this.tryEntries = [ar];
      aq.forEach(aj, this);
      this.reset(!0);
    }
    function am(aq) {
      if (aq || "" === aq) {
        var as = aq[X];
        if (as) {
          return as.call(aq);
        }
        if ("function" == typeof aq.next) {
          return aq;
        }
        if (!isNaN(aq.length)) {
          var at = -1,
            au = function aw() {
              for (; ++at < aq.length;) {
                if (T.call(aq, at)) {
                  aw.value = aq[at];
                  aw.done = !1;
                  return aw;
                }
              }
              aw.value = O;
              aw.done = !0;
              return aw;
            };
          return au.next = au;
        }
      }
      throw new TypeError(b(aq) + " is not iterable");
    }
    a9.prototype = aa;
    V(ae, "constructor", {
      value: aa,
      configurable: !0
    });
    V(aa, "constructor", {
      value: a9,
      configurable: !0
    });
    a9.displayName = a0(aa, Z, "GeneratorFunction");
    P.isGeneratorFunction = function (aq) {
      var at = "function" == typeof aq && aq.constructor;
      return !!at && (at === a9 || "GeneratorFunction" === (at.displayName || at.name));
    };
    P.mark = function (aq) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aq, aa) : (aq.__proto__ = aa, a0(aq, Z, "GeneratorFunction"));
      aq.prototype = Object.create(ae);
      return aq;
    };
    P.awrap = function (aq) {
      var ar = {
        __await: aq
      };
      return ar;
    };
    af(ag.prototype);
    a0(ag.prototype, Y, function () {
      return this;
    });
    P.AsyncIterator = ag;
    P.async = function (aq, ar, as, at, au) {
      void 0 === au && (au = Promise);
      var aw = new ag(a1(aq, ar, as, at), au);
      return P.isGeneratorFunction(ar) ? aw : aw.next().then(function (ay) {
        return ay.done ? ay.value : aw.next();
      });
    };
    af(ae);
    a0(ae, Z, "Generator");
    a0(ae, X, function () {
      return this;
    });
    a0(ae, "toString", function () {
      return "[object Generator]";
    });
    P.keys = function (aq) {
      var as = Object(aq),
        at = [];
      for (var au in as) at.push(au);
      at.reverse();
      return function aw() {
        for (; at.length;) {
          var ax = at.pop();
          if (ax in as) {
            aw.value = ax;
            aw.done = !1;
            return aw;
          }
        }
        aw.done = !0;
        return aw;
      };
    };
    P.values = am;
    al.prototype = {
      constructor: al,
      reset: function (aq) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = O, this.done = !1, this.delegate = null, this.method = "next", this.arg = O, this.tryEntries.forEach(ak), !aq) {
          for (var as in this) "t" === as.charAt(0) && T.call(this, as) && !isNaN(+as.slice(1)) && (this[as] = O);
        }
      },
      stop: function () {
        this.done = !0;
        var aq = this.tryEntries[0].completion;
        if ("throw" === aq.type) {
          throw aq.arg;
        }
        return this.rval;
      },
      dispatchException: function (aq) {
        if (this.done) {
          throw aq;
        }
        var as = this;
        function ay(az, aA) {
          av.type = "throw";
          av.arg = aq;
          as.next = az;
          aA && (as.method = "next", as.arg = O);
          return !!aA;
        }
        for (var at = this.tryEntries.length - 1; at >= 0; --at) {
          var au = this.tryEntries[at],
            av = au.completion;
          if ("root" === au.tryLoc) {
            return ay("end");
          }
          if (au.tryLoc <= this.prev) {
            var aw = T.call(au, "catchLoc"),
              ax = T.call(au, "finallyLoc");
            if (aw && ax) {
              if (this.prev < au.catchLoc) {
                return ay(au.catchLoc, !0);
              }
              if (this.prev < au.finallyLoc) {
                return ay(au.finallyLoc);
              }
            } else {
              if (aw) {
                if (this.prev < au.catchLoc) {
                  return ay(au.catchLoc, !0);
                }
              } else {
                if (!ax) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < au.finallyLoc) {
                  return ay(au.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aq, ar) {
        for (var au = this.tryEntries.length - 1; au >= 0; --au) {
          var av = this.tryEntries[au];
          if (av.tryLoc <= this.prev && T.call(av, "finallyLoc") && this.prev < av.finallyLoc) {
            var aw = av;
            break;
          }
        }
        aw && ("break" === aq || "continue" === aq) && aw.tryLoc <= ar && ar <= aw.finallyLoc && (aw = null);
        var ax = aw ? aw.completion : {};
        ax.type = aq;
        ax.arg = ar;
        return aw ? (this.method = "next", this.next = aw.finallyLoc, a7) : this.complete(ax);
      },
      complete: function (aq, ar) {
        if ("throw" === aq.type) {
          throw aq.arg;
        }
        "break" === aq.type || "continue" === aq.type ? this.next = aq.arg : "return" === aq.type ? (this.rval = this.arg = aq.arg, this.method = "return", this.next = "end") : "normal" === aq.type && ar && (this.next = ar);
        return a7;
      },
      finish: function (aq) {
        for (var ar = this.tryEntries.length - 1; ar >= 0; --ar) {
          var as = this.tryEntries[ar];
          if (as.finallyLoc === aq) {
            this.complete(as.completion, as.afterLoc);
            ak(as);
            return a7;
          }
        }
      },
      catch: function (aq) {
        for (var as = this.tryEntries.length - 1; as >= 0; --as) {
          var at = this.tryEntries[as];
          if (at.tryLoc === aq) {
            var au = at.completion;
            if ("throw" === au.type) {
              var av = au.arg;
              ak(at);
            }
            return av;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aq, ar, as) {
        this.delegate = {
          iterator: am(aq),
          resultName: ar,
          nextLoc: as
        };
        "next" === this.method && (this.arg = O);
        return a7;
      }
    };
    return P;
  }
  function h(N, O, P, Q, R, S, T) {
    try {
      var V = N[S](T),
        W = V.value;
    } catch (Y) {
      return void P(Y);
    }
    V.done ? O(W) : Promise.resolve(W).then(Q, R);
  }
  function i(N) {
    return function () {
      var Q = this,
        R = arguments;
      return new Promise(function (S, T) {
        var V = N.apply(Q, R);
        function W(Y) {
          h(V, S, T, W, X, "next", Y);
        }
        function X(Y) {
          h(V, S, T, W, X, "throw", Y);
        }
        W(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.CiXiao : $.getdata("CiXiao")) || "",
    k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top",
    l = "false" !== ($.isNode() ? process.env.CiXiao_Draw : $.getdata("CiXiao_Draw")),
    m = void 0,
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "";
  function t() {
    return u.apply(this, arguments);
  }
  function u() {
    u = i(g().mark(function O() {
      var a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY;
      return g().wrap(function (aZ) {
        for (;;) {
          switch (aZ.prev = aZ.next) {
            case 0:
              if (j) {
                aZ.next = 5;
                break;
              }
              console.log("先填写账号token");
              aZ.next = 4;
              return L("先填写账号token");
            case 4:
              return aZ.abrupt("return");
            case 5:
              aZ.next = 7;
              return H();
            case 7:
              m = aZ.sent;
              a1 = j.split(" ");
              a2 = c(a1.slice(0, 10));
              aZ.prev = 10;
              a2.s();
            case 12:
              if ((a3 = a2.n()).done) {
                aZ.next = 230;
                break;
              }
              a4 = a3.value;
              aZ.prev = 14;
              phone_number = a4.split("&")[0];
              q = a4.split("&")[1];
              o = a4.split("&")[2] || G();
              console.log("用户：".concat(phone_number, "开始任务"));
              console.log("获取userinfoId");
              a5 = Date.now().toString() + C(5) + D();
              a6 = m.md5("@#@$AXdm123%)(ds".concat(a5, "api/UserInfo/GetRedNumberModel"));
              aZ.next = 24;
              return x("/api/UserInfo/GetRedNumberModel?newspapergroupId=15403&sign=".concat(a6, "&stamp=").concat(a5));
            case 24:
              if (a7 = aZ.sent, a7.success) {
                aZ.next = 29;
                break;
              }
              aZ.next = 28;
              return L("用户：".concat(phone_number, "\ntoken已过期，请重新获取"));
            case 28:
              return aZ.abrupt("continue", 228);
            case 29:
              if (p = a7.data.userinfo.Id, console.log(p), s && r) {
                aZ.next = 39;
                break;
              }
              console.log("获取现金和抽奖Id");
              a5 = Date.now().toString() + C(5) + D();
              a6 = m.md5("@#@$AXdm123%)(ds".concat(a5, "api/News/GetColumn"));
              aZ.next = 37;
              return x("/api/News/GetColumn?newspapergroupId=15403&columnLocation=1&sign=".concat(a6, "&stamp=").concat(a5));
            case 37:
              a8 = aZ.sent;
              a8.success ? (a9 = /ScoreMall\/Detail\?id=(\d+)/, aa = JSON.stringify(a8).match(a9), aa && (s = aa[1]), a9 = /Prize\/Index\?ClientInfoId=15403&ActivityId=(\d+)/, aa = JSON.stringify(a8).match(a9), aa && (r = aa[1]), console.log("现金ID：".concat(s, ", 抽奖ID：").concat(r))) : console.log(a8.message);
            case 39:
              if (!s) {
                aZ.next = 47;
                break;
              }
              console.log("积分兑换现金");
              a5 = Date.now().toString() + C(5) + D();
              a6 = m.md5("@#@$AXdm123%)(ds".concat(a5, "api/ScoreMall/Exchange"));
              aZ.next = 45;
              return x("/api/ScoreMall/Exchange?goodsId=".concat(s, "&newspapergroupId=15403&sign=").concat(a6, "&deviceKey=").concat(o, "&stamp=").concat(a5));
            case 45:
              ab = aZ.sent;
              console.log("兑换结果：".concat(ab.message));
            case 47:
              a5 = Date.now().toString() + C(5) + D();
              a6 = m.md5("@#@$AXdm123%)(ds".concat(a5, "api/ScoreMall/MyScoreOrders"));
              aZ.next = 52;
              return x("/api/ScoreMall/MyScoreOrders?newspapergroupId=15403&sign=".concat(a6, "&stamp=").concat(a5, "&page=1&state=1"));
            case 52:
              ac = aZ.sent;
              ad = c(ac.data);
              aZ.prev = 54;
              ad.s();
            case 56:
              if ((af = ad.n()).done) {
                aZ.next = 68;
                break;
              }
              ag = af.value;
              console.log(ag.goods.title);
              a5 = Date.now().toString() + C(5) + D();
              a6 = m.md5("@#@$AXdm123%)(ds".concat(a5, "api/ScoreMall/GrantCashAward"));
              aZ.next = 64;
              return x("/api/ScoreMall/GrantCashAward?orderId=".concat(ag.ordreId, "&newspapergroupId=15403&sign=").concat(a6, "&stamp=").concat(a5));
            case 64:
              ah = aZ.sent;
              console.log("提现结果：".concat(ah.message));
            case 66:
              aZ.next = 56;
              break;
            case 68:
              aZ.next = 73;
              break;
            case 70:
              aZ.prev = 70;
              aZ.t0 = aZ.catch(54);
              ad.e(aZ.t0);
            case 73:
              aZ.prev = 73;
              ad.f();
              return aZ.finish(73);
            case 76:
              if (!r) {
                aZ.next = 88;
                break;
              }
              if (!l) {
                aZ.next = 88;
                break;
              }
              console.log("积分抽奖");
              ai = !0;
            case 80:
              if (!ai) {
                aZ.next = 88;
                break;
              }
              aZ.next = 83;
              return z("/Prize/DrawPrize?activeid=".concat(r, "&token=").concat(q));
            case 83:
              aj = aZ.sent;
              console.log("抽奖结果：".concat(aj.prize));
              ai = aj.result;
              aZ.next = 80;
              break;
            case 88:
              aZ.next = 90;
              return z("/Prize/GetActivePrizeLog?pageindex=1&UserInfoId=".concat(p, "&prizeType=1&token=").concat(q));
            case 90:
              ak = aZ.sent;
              al = c(ak.data);
              aZ.prev = 92;
              al.s();
            case 94:
              if ((am = al.n()).done) {
                aZ.next = 105;
                break;
              }
              if (an = am.value, 3 != an.AwardState) {
                aZ.next = 103;
                break;
              }
              console.log("奖品：".concat(an.LevelName, " ").concat(an.Prize));
              aZ.next = 100;
              return z("/Prize/GrantCashAward?userActivePrizeId=".concat(an.Id, "&token=").concat(q));
            case 100:
              ao = aZ.sent;
              console.log("领取结果：".concat(ao.message));
              n += "用户：".concat(phone_number, " 奖品：").concat(an.Prize, " 领取结果：").concat(ao.message, "\n");
            case 103:
              aZ.next = 94;
              break;
            case 105:
              aZ.next = 110;
              break;
            case 107:
              aZ.prev = 107;
              aZ.t1 = aZ.catch(92);
              al.e(aZ.t1);
            case 110:
              aZ.prev = 110;
              al.f();
              return aZ.finish(110);
            case 113:
              console.log("阅读抽奖");
              aZ.next = 116;
              return v("/ReadActivityTaskList?json=true");
            case 116:
              ap = aZ.sent;
              aq = c(ap.data);
              aZ.prev = 118;
              aq.s();
            case 120:
              if ((ar = aq.n()).done) {
                aZ.next = 188;
                break;
              }
              as = ar.value;
              console.log(as.activityTypeName);
              aZ.next = 125;
              return v("/ReadActivityTaskData?yunyingActivityTaskId=".concat(as.yunyingActivityTaskId, "&json=true"));
            case 125:
              if (at = aZ.sent, at) {
                aZ.next = 128;
                break;
              }
              return aZ.abrupt("continue", 186);
            case 128:
              if (at.data.totalCount != at.data.completedCount) {
                aZ.next = 131;
                break;
              }
              console.log("已完成");
              return aZ.abrupt("continue", 186);
            case 131:
              au = c(at.data.taskDetails);
              aZ.prev = 132;
              au.s();
            case 134:
              if ((av = au.n()).done) {
                aZ.next = 155;
                break;
              }
              if (aw = av.value, !aw.isComplete) {
                aZ.next = 138;
                break;
              }
              return aZ.abrupt("continue", 153);
            case 138:
              for (console.log("文章：".concat(aw.title)), ax = aw.url.split("?")[1], ay = {}, az = ax.split("&"), aA = 0, aB = az.length; aA < aB; aA++) {
                aC = az[aA].split("=");
                ay[aC[0]] = aC[1];
              }
              aD = Date.now().toString() + C(5) + D();
              aE = m.md5("@#@$AXdm123%)(ds".concat(aD, "api/Yunying/ReadArticle"));
              aZ.next = 147;
              return x("api/Yunying/ReadArticle?articleType=1&newspapergroupId=".concat(ay.NewspaperGroupId, "&sign=").concat(aE, "&stamp=").concat(aD, "&ArticleId=").concat(aw.articleId, "&taskDetailId=").concat(aw.taskDetailId));
            case 147:
              aF = aZ.sent;
              console.log(aF.message);
              aZ.next = 151;
              return v("/ChceckCompleteTaskDetail?taskDetailId=".concat(aw.taskDetailId, "&yunyingActivityTaskId=").concat(as.yunyingActivityTaskId, "&round=").concat(as.round, "&json=true"));
            case 151:
              aG = aZ.sent;
              console.log(aG.success);
            case 153:
              aZ.next = 134;
              break;
            case 155:
              aZ.next = 160;
              break;
            case 157:
              aZ.prev = 157;
              aZ.t2 = aZ.catch(132);
              au.e(aZ.t2);
            case 160:
              aZ.prev = 160;
              au.f();
              return aZ.finish(160);
            case 163:
              aZ.next = 165;
              return v("/CanDrawPrizeList?json=true");
            case 165:
              aH = aZ.sent;
              console.log("拥有".concat(aH.data.length, "次抽奖"));
              aI = c(aH.data);
              aZ.prev = 168;
              aI.s();
            case 170:
              if ((aJ = aI.n()).done) {
                aZ.next = 178;
                break;
              }
              aK = aJ.value;
              aZ.next = 174;
              return v("/DrawAward?awardRecordId=".concat(aK.awardRecordId, "&json=true"));
            case 174:
              aL = aZ.sent;
              1 == aL.data.awardType ? (console.log("抽奖获得：".concat(null == aL || null === (aM = aL.data) || void 0 === aM ? void 0 : aM.award).concat(null == aL || null === (aN = aL.data) || void 0 === aN ? void 0 : aN.name)), n += "用户：".concat(phone_number, " 抽奖获得：").concat(null == aL || null === (aO = aL.data) || void 0 === aO ? void 0 : aO.award).concat(null == aL || null === (aP = aL.data) || void 0 === aP ? void 0 : aP.name, "\n")) : 2 == aL.data.awardType ? (console.log("抽奖获得：".concat(null == aL || null === (aQ = aL.data) || void 0 === aQ ? void 0 : aQ.scoreAward).concat(null == aL || null === (aR = aL.data) || void 0 === aR ? void 0 : aR.name)), n += "用户：".concat(phone_number, " 抽奖获得：").concat(null == aL || null === (aS = aL.data) || void 0 === aS ? void 0 : aS.scoreAward).concat(null == aL || null === (aT = aL.data) || void 0 === aT ? void 0 : aT.name, "\n")) : (console.log("谢谢参与"), n += "用户：".concat(phone_number, " 抽奖获得：谢谢参与\n"));
            case 176:
              aZ.next = 170;
              break;
            case 178:
              aZ.next = 183;
              break;
            case 180:
              aZ.prev = 180;
              aZ.t3 = aZ.catch(168);
              aI.e(aZ.t3);
            case 183:
              aZ.prev = 183;
              aI.f();
              return aZ.finish(183);
            case 186:
              aZ.next = 120;
              break;
            case 188:
              aZ.next = 193;
              break;
            case 190:
              aZ.prev = 190;
              aZ.t4 = aZ.catch(118);
              aq.e(aZ.t4);
            case 193:
              aZ.prev = 193;
              aq.f();
              return aZ.finish(193);
            case 196:
              aZ.next = 198;
              return v("/MyAwardList?page=1&json=true");
            case 198:
              if (aU = aZ.sent, null == aU || !aU.data) {
                aZ.next = 223;
                break;
              }
              aV = c(aU.data);
              aZ.prev = 201;
              aV.s();
            case 203:
              if ((aW = aV.n()).done) {
                aZ.next = 215;
                break;
              }
              if (aX = aW.value, 1 != aX.awardType || 4 == aX.awardState) {
                aZ.next = 213;
                break;
              }
              console.log("奖品：".concat(aX.award).concat(aX.name));
              console.log("领取奖品");
              aZ.next = 210;
              return v("/GrantAward?awardRecordId=".concat(aX.awardRecordId, "&json=true"));
            case 210:
              aY = aZ.sent;
              console.log("领取结果：".concat(aY.message));
              n += "用户：".concat(phone_number, " 奖品：").concat(aX.award).concat(aX.name, " 领取结果：").concat(aY.message, "\n");
            case 213:
              aZ.next = 203;
              break;
            case 215:
              aZ.next = 220;
              break;
            case 217:
              aZ.prev = 217;
              aZ.t5 = aZ.catch(201);
              aV.e(aZ.t5);
            case 220:
              aZ.prev = 220;
              aV.f();
              return aZ.finish(220);
            case 223:
              aZ.next = 228;
              break;
            case 225:
              aZ.prev = 225;
              aZ.t6 = aZ.catch(14);
              console.log(aZ.t6);
            case 228:
              aZ.next = 12;
              break;
            case 230:
              aZ.next = 235;
              break;
            case 232:
              aZ.prev = 232;
              aZ.t7 = aZ.catch(10);
              a2.e(aZ.t7);
            case 235:
              aZ.prev = 235;
              a2.f();
              return aZ.finish(235);
            case 238:
              if (!n) {
                aZ.next = 241;
                break;
              }
              aZ.next = 241;
              return L(n);
            case 241:
            case "end":
              return aZ.stop();
          }
        }
      }, O, null, [[10, 232, 235, 238], [14, 225], [54, 70, 73, 76], [92, 107, 110, 113], [118, 190, 193, 196], [132, 157, 160, 163], [168, 180, 183, 186], [201, 217, 220, 223]]);
    }));
    return u.apply(this, arguments);
  }
  function v(N) {
    return w.apply(this, arguments);
  }
  function w() {
    w = i(g().mark(function O(P) {
      return g().wrap(function (Q) {
        for (;;) {
          switch (Q.prev = Q.next) {
            case 0:
              return Q.abrupt("return", new Promise(function (S) {
                var U = {
                  url: "https://cxh5.xiaodingkeji.com/h5api/api/YunyingV720".concat(P),
                  headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache",
                    accept: "application/json, text/plain, */*",
                    "x-token": q,
                    "x-requested-with": "XMLHttpRequest",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 GdyBridgeWebView;xdinformation;x-token:[" + q + "];x-userinfoId:[" + p + "];x-device:[" + o + "]"
                  }
                };
                $.get(U, function () {
                  var W = i(g().mark(function X(Y, Z, a0) {
                    return g().wrap(function (a1) {
                      for (;;) {
                        switch (a1.prev = a1.next) {
                          case 0:
                            if (a1.prev = 0, !Y) {
                              a1.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(Y)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a1.next = 9;
                            break;
                          case 6:
                            a1.next = 8;
                            return $.wait(2000);
                          case 8:
                            S(JSON.parse(a0));
                          case 9:
                            a1.next = 14;
                            break;
                          case 11:
                            a1.prev = 11;
                            a1.t0 = a1.catch(0);
                            $.logErr(a1.t0, Z);
                          case 14:
                            a1.prev = 14;
                            S();
                            return a1.finish(14);
                          case 17:
                          case "end":
                            return a1.stop();
                        }
                      }
                    }, X, null, [[0, 11, 14, 17]]);
                  }));
                  return function (Y, Z, a0) {
                    return W.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Q.stop();
          }
        }
      }, O);
    }));
    return w.apply(this, arguments);
  }
  function x(N) {
    return y.apply(this, arguments);
  }
  function y() {
    y = i(g().mark(function O(P) {
      return g().wrap(function (Q) {
        for (;;) {
          switch (Q.prev = Q.next) {
            case 0:
              return Q.abrupt("return", new Promise(function (S) {
                var U = {
                  url: "https://cxapi.xiaodingkeji.com/".concat(P),
                  headers: {
                    "accept-version": "200",
                    "x-version": "730",
                    version: "7.19.0",
                    "x-token": q,
                    Connection: "Keep-Alive",
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/3.11.0"
                  }
                };
                $.get(U, function () {
                  var W = i(g().mark(function X(Y, Z, a0) {
                    return g().wrap(function (a2) {
                      for (;;) {
                        switch (a2.prev = a2.next) {
                          case 0:
                            if (a2.prev = 0, !Y) {
                              a2.next = 12;
                              break;
                            }
                            if (!a0) {
                              a2.next = 8;
                              break;
                            }
                            a2.next = 5;
                            return $.wait(2000);
                          case 5:
                            S(JSON.parse(a0));
                            a2.next = 10;
                            break;
                          case 8:
                            console.log("".concat(JSON.stringify(Y)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                          case 10:
                            a2.next = 15;
                            break;
                          case 12:
                            a2.next = 14;
                            return $.wait(2000);
                          case 14:
                            S(JSON.parse(a0));
                          case 15:
                            a2.next = 20;
                            break;
                          case 17:
                            a2.prev = 17;
                            a2.t0 = a2.catch(0);
                            $.logErr(a2.t0, Z);
                          case 20:
                            a2.prev = 20;
                            S();
                            return a2.finish(20);
                          case 23:
                          case "end":
                            return a2.stop();
                        }
                      }
                    }, X, null, [[0, 17, 20, 23]]);
                  }));
                  return function (Y, Z, a0) {
                    return W.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Q.stop();
          }
        }
      }, O);
    }));
    return y.apply(this, arguments);
  }
  function z(N) {
    return A.apply(this, arguments);
  }
  function A() {
    A = i(g().mark(function N(O) {
      return g().wrap(function (Q) {
        for (;;) {
          switch (Q.prev = Q.next) {
            case 0:
              return Q.abrupt("return", new Promise(function (S) {
                var T = {
                  url: "https://cxjfsc.xiaodingkeji.com/".concat(O),
                  headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache",
                    accept: "application/json, text/plain, */*",
                    "x-requested-with": "XMLHttpRequest",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 GdyBridgeWebView;xdinformation;x-token:[" + q + "];x-userinfoId:[" + p + "];x-device:[" + o + "]"
                  }
                };
                $.get(T, function () {
                  var V = i(g().mark(function W(X, Y, Z) {
                    return g().wrap(function (a1) {
                      for (;;) {
                        switch (a1.prev = a1.next) {
                          case 0:
                            if (a1.prev = 0, !X) {
                              a1.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(X)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a1.next = 9;
                            break;
                          case 6:
                            a1.next = 8;
                            return $.wait(2000);
                          case 8:
                            S(JSON.parse(Z));
                          case 9:
                            a1.next = 14;
                            break;
                          case 11:
                            a1.prev = 11;
                            a1.t0 = a1.catch(0);
                            $.logErr(a1.t0, Y);
                          case 14:
                            a1.prev = 14;
                            S();
                            return a1.finish(14);
                          case 17:
                          case "end":
                            return a1.stop();
                        }
                      }
                    }, W, null, [[0, 11, 14, 17]]);
                  }));
                  return function (X, Y, Z) {
                    return V.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Q.stop();
          }
        }
      }, N);
    }));
    return A.apply(this, arguments);
  }
  function B() {
    var N = new Date(),
      O = function (V) {
        return V.toString().padStart(2, "0");
      },
      P = N.getFullYear(),
      Q = O(N.getMonth() + 1),
      R = O(N.getDate()),
      S = O(N.getHours()),
      T = O(N.getMinutes()),
      U = O(N.getSeconds());
    return "".concat(P).concat(Q).concat(R).concat(S).concat(T).concat(U);
  }
  function C(N) {
    for (var O = "abcdefghijklmnopqrstuvwxyz0123456789", P = "", Q = 0; Q < N; Q++) {
      P += O.charAt(Math.floor(36 * Math.random()));
    }
    return P;
  }
  function D() {
    var N = B();
    N || (N = C(8));
    return C(2) + N.substring(3) + C(3);
  }
  function E() {
    for (var N = "", O = 0; O < 16; O++) {
      var P = Math.floor(16 * Math.random());
      N += "0123456789abcdef"[P];
    }
    return N;
  }
  function F() {
    return "xxxxxxxx-xxxx-6xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (O) {
      var P = 16 * Math.random() | 0,
        Q = "x" === O ? P : 3 & P | 8;
      return Q.toString(16);
    });
  }
  function G() {
    var N = E(),
      O = F().replace(/-/g, ""),
      P = m.createCryptoJS();
    return P.SHA1("".concat(N, "|unknown|").concat(O)).toString().toUpperCase();
  }
  function H() {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function O() {
      var Q;
      return g().wrap(function R(S) {
        for (;;) {
          switch (S.prev = S.next) {
            case 0:
              if (Q = $.getdata("Utils_Code") || "", !Q || !Object.keys(Q).length) {
                S.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(Q);
              return S.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return S.abrupt("return", new Promise(function () {
                var U = i(g().mark(function V(W) {
                  return g().wrap(function Y(Z) {
                    for (;;) {
                      switch (Z.prev = Z.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (a1) {
                            $.setdata(a1, "Utils_Code");
                            eval(a1);
                            console.log("✅ Utils加载成功, 请继续");
                            W(creatUtils());
                          });
                        case 1:
                        case "end":
                          return Z.stop();
                      }
                    }
                  }, V);
                }));
                return function (W) {
                  return U.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return S.stop();
          }
        }
      }, O);
    }));
    return I.apply(this, arguments);
  }
  function J() {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function O() {
      return g().wrap(function (R) {
        for (;;) {
          switch (R.prev = R.next) {
            case 0:
              return R.abrupt("return", new Promise(function (T) {
                var U = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(U, function () {
                  var W = i(g().mark(function X(Y, Z, a0) {
                    return g().wrap(function (a1) {
                      for (;;) {
                        switch (a1.prev = a1.next) {
                          case 0:
                            try {
                              Y ? (console.log("".concat(JSON.stringify(Y))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(a0).notice);
                            } catch (a2) {
                              $.logErr(a2, Z);
                            } finally {
                              T();
                            }
                          case 1:
                          case "end":
                            return a1.stop();
                        }
                      }
                    }, X);
                  }));
                  return function (Y, Z, a0) {
                    return W.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return R.stop();
          }
        }
      }, O);
    }));
    return K.apply(this, arguments);
  }
  function L(N) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function O(P) {
      return g().wrap(function (Q) {
        for (;;) {
          switch (Q.prev = Q.next) {
            case 0:
              if (!$.isNode()) {
                Q.next = 5;
                break;
              }
              Q.next = 3;
              return notify.sendNotify($.name, P);
            case 3:
              Q.next = 6;
              break;
            case 5:
              $.msg($.name, "", P);
            case 6:
            case "end":
              return Q.stop();
          }
        }
      }, O);
    }));
    return M.apply(this, arguments);
  }
  i(g().mark(function N() {
    return g().wrap(function (O) {
      for (;;) {
        switch (O.prev = O.next) {
          case 0:
            O.next = 2;
            return J();
          case 2:
            O.next = 4;
            return t();
          case 4:
          case "end":
            return O.stop();
        }
      }
    }, N);
  }))().catch(function (O) {
    $.log(O);
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