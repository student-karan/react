/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @generated SignedSource<<8059dbaad39c17fd2df36f1b57304c46>>
 */

"use strict";
"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  "function" ===
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
var dynamicFlagsUntyped = require("ReactNativeInternalFeatureFlags"),
  REACT_ELEMENT_TYPE = Symbol.for("react.element"),
  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
  REACT_PROVIDER_TYPE = Symbol.for("react.provider"),
  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
  REACT_MEMO_TYPE = Symbol.for("react.memo"),
  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
  REACT_SCOPE_TYPE = Symbol.for("react.scope"),
  REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode"),
  REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
  REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden"),
  REACT_TRACING_MARKER_TYPE = Symbol.for("react.tracing_marker"),
  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
var ReactNoopUpdateQueue = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  assign = Object.assign,
  emptyObject = {};
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
Component.prototype.isReactComponent = {};
Component.prototype.setState = function (partialState, callback) {
  if (
    "object" !== typeof partialState &&
    "function" !== typeof partialState &&
    null != partialState
  )
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, partialState, callback, "setState");
};
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
};
function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = !0;
var isArrayImpl = Array.isArray,
  enableAsyncActions = dynamicFlagsUntyped.enableAsyncActions,
  enableRenderableContext = dynamicFlagsUntyped.enableRenderableContext,
  ReactCurrentDispatcher = { current: null },
  ReactCurrentCache = { current: null },
  ReactCurrentBatchConfig = { transition: null },
  ReactSharedInternals = {
    ReactCurrentDispatcher: ReactCurrentDispatcher,
    ReactCurrentCache: ReactCurrentCache,
    ReactCurrentBatchConfig: ReactCurrentBatchConfig,
    ReactCurrentOwner: { current: null }
  },
  hasOwnProperty = Object.prototype.hasOwnProperty,
  ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
function ReactElement(type, key, _ref, self, source, owner, props) {
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key,
    ref: _ref,
    props: props,
    _owner: owner
  };
}
function jsxProd(type, config, maybeKey) {
  var propName,
    props = {},
    key = null,
    ref = null;
  void 0 !== maybeKey && (key = "" + maybeKey);
  void 0 !== config.key && (key = "" + config.key);
  void 0 !== config.ref && (ref = config.ref);
  for (propName in config)
    hasOwnProperty.call(config, propName) &&
      "key" !== propName &&
      "ref" !== propName &&
      (props[propName] = config[propName]);
  if (type && type.defaultProps)
    for (propName in ((config = type.defaultProps), config))
      void 0 === props[propName] && (props[propName] = config[propName]);
  return ReactElement(
    type,
    key,
    ref,
    void 0,
    void 0,
    ReactCurrentOwner.current,
    props
  );
}
function cloneAndReplaceKey(oldElement, newKey) {
  return ReactElement(
    oldElement.type,
    newKey,
    oldElement.ref,
    void 0,
    void 0,
    oldElement._owner,
    oldElement.props
  );
}
function isValidElement(object) {
  return (
    "object" === typeof object &&
    null !== object &&
    object.$$typeof === REACT_ELEMENT_TYPE
  );
}
function escape(key) {
  var escaperLookup = { "=": "=0", ":": "=2" };
  return (
    "$" +
    key.replace(/[=:]/g, function (match) {
      return escaperLookup[match];
    })
  );
}
var userProvidedKeyEscapeRegex = /\/+/g;
function getElementKey(element, index) {
  return "object" === typeof element && null !== element && null != element.key
    ? escape("" + element.key)
    : index.toString(36);
}
function noop$1() {}
function resolveThenable(thenable) {
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw thenable.reason;
    default:
      switch (
        ("string" === typeof thenable.status
          ? thenable.then(noop$1, noop$1)
          : ((thenable.status = "pending"),
            thenable.then(
              function (fulfilledValue) {
                "pending" === thenable.status &&
                  ((thenable.status = "fulfilled"),
                  (thenable.value = fulfilledValue));
              },
              function (error) {
                "pending" === thenable.status &&
                  ((thenable.status = "rejected"), (thenable.reason = error));
              }
            )),
        thenable.status)
      ) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
      }
  }
  throw thenable;
}
function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;
  if ("undefined" === type || "boolean" === type) children = null;
  var invokeCallback = !1;
  if (null === children) invokeCallback = !0;
  else
    switch (type) {
      case "bigint":
      case "string":
      case "number":
        invokeCallback = !0;
        break;
      case "object":
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = !0;
            break;
          case REACT_LAZY_TYPE:
            return (
              (invokeCallback = children._init),
              mapIntoArray(
                invokeCallback(children._payload),
                array,
                escapedPrefix,
                nameSoFar,
                callback
              )
            );
        }
    }
  if (invokeCallback)
    return (
      (callback = callback(children)),
      (invokeCallback =
        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),
      isArrayImpl(callback)
        ? ((escapedPrefix = ""),
          null != invokeCallback &&
            (escapedPrefix =
              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
          mapIntoArray(callback, array, escapedPrefix, "", function (c) {
            return c;
          }))
        : null != callback &&
          (isValidElement(callback) &&
            (callback = cloneAndReplaceKey(
              callback,
              escapedPrefix +
                (!callback.key || (children && children.key === callback.key)
                  ? ""
                  : ("" + callback.key).replace(
                      userProvidedKeyEscapeRegex,
                      "$&/"
                    ) + "/") +
                invokeCallback
            )),
          array.push(callback)),
      1
    );
  invokeCallback = 0;
  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
  if (isArrayImpl(children))
    for (var i = 0; i < children.length; i++)
      (nameSoFar = children[i]),
        (type = nextNamePrefix + getElementKey(nameSoFar, i)),
        (invokeCallback += mapIntoArray(
          nameSoFar,
          array,
          escapedPrefix,
          type,
          callback
        ));
  else if (((i = getIteratorFn(children)), "function" === typeof i))
    for (
      children = i.call(children), i = 0;
      !(nameSoFar = children.next()).done;

    )
      (nameSoFar = nameSoFar.value),
        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
        (invokeCallback += mapIntoArray(
          nameSoFar,
          array,
          escapedPrefix,
          type,
          callback
        ));
  else if ("object" === type) {
    if ("function" === typeof children.then)
      return mapIntoArray(
        resolveThenable(children),
        array,
        escapedPrefix,
        nameSoFar,
        callback
      );
    array = String(children);
    throw Error(
      "Objects are not valid as a React child (found: " +
        ("[object Object]" === array
          ? "object with keys {" + Object.keys(children).join(", ") + "}"
          : array) +
        "). If you meant to render a collection of children, use an array instead."
    );
  }
  return invokeCallback;
}
function mapChildren(children, func, context) {
  if (null == children) return children;
  var result = [],
    count = 0;
  mapIntoArray(children, result, "", "", function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
function lazyInitializer(payload) {
  if (-1 === payload._status) {
    var ctor = payload._result;
    ctor = ctor();
    ctor.then(
      function (moduleObject) {
        if (0 === payload._status || -1 === payload._status)
          (payload._status = 1), (payload._result = moduleObject);
      },
      function (error) {
        if (0 === payload._status || -1 === payload._status)
          (payload._status = 2), (payload._result = error);
      }
    );
    -1 === payload._status && ((payload._status = 0), (payload._result = ctor));
  }
  if (1 === payload._status) return payload._result.default;
  throw payload._result;
}
var reportGlobalError =
  "function" === typeof reportError
    ? reportError
    : function (error) {
        if (
          "object" === typeof window &&
          "function" === typeof window.ErrorEvent
        ) {
          var event = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              "object" === typeof error &&
              null !== error &&
              "string" === typeof error.message
                ? String(error.message)
                : String(error),
            error: error
          });
          if (!window.dispatchEvent(event)) return;
        } else if (
          "object" === typeof process &&
          "function" === typeof process.emit
        ) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      };
function noop() {}
exports.Children = {
  map: mapChildren,
  forEach: function (children, forEachFunc, forEachContext) {
    mapChildren(
      children,
      function () {
        forEachFunc.apply(this, arguments);
      },
      forEachContext
    );
  },
  count: function (children) {
    var n = 0;
    mapChildren(children, function () {
      n++;
    });
    return n;
  },
  toArray: function (children) {
    return (
      mapChildren(children, function (child) {
        return child;
      }) || []
    );
  },
  only: function (children) {
    if (!isValidElement(children))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return children;
  }
};
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
  ReactSharedInternals;
exports.act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
exports.cache = function (fn) {
  return function () {
    return fn.apply(null, arguments);
  };
};
exports.cloneElement = function (element, config, children) {
  if (null === element || void 0 === element)
    throw Error(
      "The argument must be a React element, but you passed " + element + "."
    );
  var props = assign({}, element.props),
    key = element.key,
    ref = element.ref,
    owner = element._owner;
  if (null != config) {
    void 0 !== config.ref &&
      ((ref = config.ref), (owner = ReactCurrentOwner.current));
    void 0 !== config.key && (key = "" + config.key);
    if (element.type && element.type.defaultProps)
      var defaultProps = element.type.defaultProps;
    for (propName in config)
      hasOwnProperty.call(config, propName) &&
        "key" !== propName &&
        "ref" !== propName &&
        "__self" !== propName &&
        "__source" !== propName &&
        (props[propName] =
          void 0 === config[propName] && void 0 !== defaultProps
            ? defaultProps[propName]
            : config[propName]);
  }
  var propName = arguments.length - 2;
  if (1 === propName) props.children = children;
  else if (1 < propName) {
    defaultProps = Array(propName);
    for (var i = 0; i < propName; i++) defaultProps[i] = arguments[i + 2];
    props.children = defaultProps;
  }
  return ReactElement(element.type, key, ref, void 0, void 0, owner, props);
};
exports.createContext = function (defaultValue) {
  defaultValue = {
    $$typeof: REACT_CONTEXT_TYPE,
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  enableRenderableContext
    ? ((defaultValue.Provider = defaultValue),
      (defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      }))
    : ((defaultValue.Provider = {
        $$typeof: REACT_PROVIDER_TYPE,
        _context: defaultValue
      }),
      (defaultValue.Consumer = defaultValue));
  return defaultValue;
};
exports.createElement = function (type, config, children) {
  var propName,
    props = {},
    key = null,
    ref = null;
  if (null != config)
    for (propName in (void 0 !== config.ref && (ref = config.ref),
    void 0 !== config.key && (key = "" + config.key),
    config))
      hasOwnProperty.call(config, propName) &&
        "key" !== propName &&
        "ref" !== propName &&
        "__self" !== propName &&
        "__source" !== propName &&
        (props[propName] = config[propName]);
  var childrenLength = arguments.length - 2;
  if (1 === childrenLength) props.children = children;
  else if (1 < childrenLength) {
    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  if (type && type.defaultProps)
    for (propName in ((childrenLength = type.defaultProps), childrenLength))
      void 0 === props[propName] &&
        (props[propName] = childrenLength[propName]);
  return ReactElement(
    type,
    key,
    ref,
    void 0,
    void 0,
    ReactCurrentOwner.current,
    props
  );
};
exports.createRef = function () {
  return { current: null };
};
exports.experimental_useEffectEvent = function (callback) {
  return ReactCurrentDispatcher.current.useEffectEvent(callback);
};
exports.forwardRef = function (render) {
  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
};
exports.isValidElement = isValidElement;
exports.jsx = jsxProd;
exports.jsxDEV = void 0;
exports.jsxs = jsxProd;
exports.lazy = function (ctor) {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _payload: { _status: -1, _result: ctor },
    _init: lazyInitializer
  };
};
exports.memo = function (type, compare) {
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: void 0 === compare ? null : compare
  };
};
exports.startTransition = function (scope) {
  var prevTransition = ReactCurrentBatchConfig.transition,
    callbacks = new Set();
  ReactCurrentBatchConfig.transition = { _callbacks: callbacks };
  var currentTransition = ReactCurrentBatchConfig.transition;
  if (enableAsyncActions)
    try {
      var returnValue = scope();
      "object" === typeof returnValue &&
        null !== returnValue &&
        "function" === typeof returnValue.then &&
        (callbacks.forEach(function (callback) {
          return callback(currentTransition, returnValue);
        }),
        returnValue.then(noop, reportGlobalError));
    } catch (error) {
      reportGlobalError(error);
    } finally {
      ReactCurrentBatchConfig.transition = prevTransition;
    }
  else
    try {
      scope();
    } finally {
      ReactCurrentBatchConfig.transition = prevTransition;
    }
};
exports.unstable_Activity = REACT_OFFSCREEN_TYPE;
exports.unstable_DebugTracingMode = REACT_DEBUG_TRACING_MODE_TYPE;
exports.unstable_LegacyHidden = REACT_LEGACY_HIDDEN_TYPE;
exports.unstable_Scope = REACT_SCOPE_TYPE;
exports.unstable_SuspenseList = REACT_SUSPENSE_LIST_TYPE;
exports.unstable_TracingMarker = REACT_TRACING_MARKER_TYPE;
exports.unstable_getCacheForType = function (resourceType) {
  var dispatcher = ReactCurrentCache.current;
  return dispatcher ? dispatcher.getCacheForType(resourceType) : resourceType();
};
exports.unstable_useCacheRefresh = function () {
  return ReactCurrentDispatcher.current.useCacheRefresh();
};
exports.unstable_useMemoCache = function (size) {
  return ReactCurrentDispatcher.current.useMemoCache(size);
};
exports.use = function (usable) {
  return ReactCurrentDispatcher.current.use(usable);
};
exports.useActionState = function (action, initialState, permalink) {
  if (enableAsyncActions)
    return ReactCurrentDispatcher.current.useActionState(
      action,
      initialState,
      permalink
    );
  throw Error("Not implemented.");
};
exports.useCallback = function (callback, deps) {
  return ReactCurrentDispatcher.current.useCallback(callback, deps);
};
exports.useContext = function (Context) {
  return ReactCurrentDispatcher.current.useContext(Context);
};
exports.useDebugValue = function () {};
exports.useDeferredValue = function (value, initialValue) {
  return ReactCurrentDispatcher.current.useDeferredValue(value, initialValue);
};
exports.useEffect = function (create, deps) {
  return ReactCurrentDispatcher.current.useEffect(create, deps);
};
exports.useId = function () {
  return ReactCurrentDispatcher.current.useId();
};
exports.useImperativeHandle = function (ref, create, deps) {
  return ReactCurrentDispatcher.current.useImperativeHandle(ref, create, deps);
};
exports.useInsertionEffect = function (create, deps) {
  return ReactCurrentDispatcher.current.useInsertionEffect(create, deps);
};
exports.useLayoutEffect = function (create, deps) {
  return ReactCurrentDispatcher.current.useLayoutEffect(create, deps);
};
exports.useMemo = function (create, deps) {
  return ReactCurrentDispatcher.current.useMemo(create, deps);
};
exports.useOptimistic = function (passthrough, reducer) {
  return ReactCurrentDispatcher.current.useOptimistic(passthrough, reducer);
};
exports.useReducer = function (reducer, initialArg, init) {
  return ReactCurrentDispatcher.current.useReducer(reducer, initialArg, init);
};
exports.useRef = function (initialValue) {
  return ReactCurrentDispatcher.current.useRef(initialValue);
};
exports.useState = function (initialState) {
  return ReactCurrentDispatcher.current.useState(initialState);
};
exports.useSyncExternalStore = function (
  subscribe,
  getSnapshot,
  getServerSnapshot
) {
  return ReactCurrentDispatcher.current.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
};
exports.useTransition = function () {
  return ReactCurrentDispatcher.current.useTransition();
};
exports.version = "19.0.0-canary-2454820c";
"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  "function" ===
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
