export const QUESTIONS = [
  {
    "id": "js-typeof-null",
    "category": "javascript-basics",
    "difficulty": "beginner",
    "prompt": "What does `typeof null` return in JavaScript?",
    "code": "typeof null",
    "choices": [
      "\"null\"",
      "\"object\"",
      "\"undefined\"",
      "\"number\""
    ],
    "correctIndex": 1,
    "explanation": "JavaScript reports null as \"object\" because of a historical language quirk; test null explicitly when it matters.",
    "rationales": [
      "Not quite. `\"null\"` does not match the rule being tested.",
      "Correct. JavaScript reports null as \"object\" because of a historical language quirk; test null explicitly when it matters.",
      "Not quite. `\"undefined\"` does not match the rule being tested.",
      "Not quite. `\"number\"` does not match the rule being tested."
    ],
    "tags": [
      "types",
      "null",
      "typeof"
    ]
  },
  {
    "id": "js-strict-equality",
    "category": "javascript-basics",
    "difficulty": "beginner",
    "prompt": "Which expression checks value and type without coercion?",
    "code": "",
    "choices": [
      "value == 5",
      "value === 5",
      "value = 5",
      "value != 5"
    ],
    "correctIndex": 1,
    "explanation": "Strict equality (`===`) compares type and value without converting either operand first.",
    "rationales": [
      "Not quite. `value == 5` does not match the rule being tested.",
      "Correct. Strict equality (`===`) compares type and value without converting either operand first.",
      "Not quite. `value = 5` does not match the rule being tested.",
      "Not quite. `value != 5` does not match the rule being tested."
    ],
    "tags": [
      "operators",
      "equality"
    ]
  },
  {
    "id": "js-const-object",
    "category": "javascript-basics",
    "difficulty": "intermediate",
    "prompt": "What happens when this code runs?",
    "code": "const settings = { theme: \"light\" };\nsettings.theme = \"dark\";",
    "choices": [
      "It throws because const makes objects immutable.",
      "The theme becomes \"dark\".",
      "A second object is created.",
      "settings becomes a string."
    ],
    "correctIndex": 1,
    "explanation": "`const` prevents reassignment of the binding, but it does not freeze the referenced object.",
    "rationales": [
      "Not quite. `It throws because const makes objects immutable.` does not match the rule being tested.",
      "Correct. `const` prevents reassignment of the binding, but it does not freeze the referenced object.",
      "Not quite. `A second object is created.` does not match the rule being tested.",
      "Not quite. `settings becomes a string.` does not match the rule being tested."
    ],
    "tags": [
      "const",
      "objects"
    ]
  },
  {
    "id": "js-block-scope",
    "category": "javascript-basics",
    "difficulty": "intermediate",
    "prompt": "Which declaration is block-scoped?",
    "code": "",
    "choices": [
      "var count = 0",
      "let count = 0",
      "count = 0",
      "window.count = 0"
    ],
    "correctIndex": 1,
    "explanation": "`let` and `const` are block-scoped; `var` is function-scoped.",
    "rationales": [
      "Not quite. `var count = 0` does not match the rule being tested.",
      "Correct. `let` and `const` are block-scoped; `var` is function-scoped.",
      "Not quite. `count = 0` does not match the rule being tested.",
      "Not quite. `window.count = 0` does not match the rule being tested."
    ],
    "tags": [
      "scope",
      "let"
    ]
  },
  {
    "id": "js-template-literal",
    "category": "javascript-basics",
    "difficulty": "beginner",
    "prompt": "Which syntax interpolates `name` in a template literal?",
    "code": "",
    "choices": [
      "\"Hello ${name}\"",
      "`Hello ${name}`",
      "'Hello + name'",
      "`Hello {name}`"
    ],
    "correctIndex": 1,
    "explanation": "Template literals use backticks and `${...}` interpolation.",
    "rationales": [
      "Not quite. `\"Hello ${name}\"` does not match the rule being tested.",
      "Correct. Template literals use backticks and `${...}` interpolation.",
      "Not quite. `'Hello + name'` does not match the rule being tested.",
      "Not quite. ``Hello {name}`` does not match the rule being tested."
    ],
    "tags": [
      "strings",
      "templates"
    ]
  },
  {
    "id": "js-optional-chaining",
    "category": "javascript-basics",
    "difficulty": "advanced",
    "prompt": "What is the benefit of `profile?.contact?.email`?",
    "code": "",
    "choices": [
      "It creates missing objects.",
      "It returns undefined instead of throwing on a nullish intermediate.",
      "It validates the email.",
      "It converts values to strings."
    ],
    "correctIndex": 1,
    "explanation": "Optional chaining stops and returns undefined when the value before `?.` is null or undefined.",
    "rationales": [
      "Not quite. `It creates missing objects.` does not match the rule being tested.",
      "Correct. Optional chaining stops and returns undefined when the value before `?.` is null or undefined.",
      "Not quite. `It validates the email.` does not match the rule being tested.",
      "Not quite. `It converts values to strings.` does not match the rule being tested."
    ],
    "tags": [
      "optional-chaining",
      "objects"
    ]
  },
  {
    "id": "fn-declaration-hoist",
    "category": "functions-scope",
    "difficulty": "intermediate",
    "prompt": "Why can this call work before the declaration appears?",
    "code": "sayHello();\nfunction sayHello() { return \"Hello\"; }",
    "choices": [
      "The browser runs bottom to top.",
      "Function declarations are hoisted with their definitions.",
      "sayHello is built in.",
      "Calls are always delayed."
    ],
    "correctIndex": 1,
    "explanation": "Function declarations are hoisted so their binding and body are available before the declaration line.",
    "rationales": [
      "Not quite. `The browser runs bottom to top.` does not match the rule being tested.",
      "Correct. Function declarations are hoisted so their binding and body are available before the declaration line.",
      "Not quite. `sayHello is built in.` does not match the rule being tested.",
      "Not quite. `Calls are always delayed.` does not match the rule being tested."
    ],
    "tags": [
      "functions",
      "hoisting"
    ]
  },
  {
    "id": "fn-closure-counter",
    "category": "functions-scope",
    "difficulty": "intermediate",
    "prompt": "What allows the returned function to keep reading `count`?",
    "code": "function counter() {\n  let count = 0;\n  return () => ++count;\n}",
    "choices": [
      "The DOM",
      "A closure",
      "JSON parsing",
      "Event bubbling"
    ],
    "correctIndex": 1,
    "explanation": "A closure retains access to the lexical environment in which the inner function was created.",
    "rationales": [
      "Not quite. `The DOM` does not match the rule being tested.",
      "Correct. A closure retains access to the lexical environment in which the inner function was created.",
      "Not quite. `JSON parsing` does not match the rule being tested.",
      "Not quite. `Event bubbling` does not match the rule being tested."
    ],
    "tags": [
      "closures",
      "scope"
    ]
  },
  {
    "id": "fn-arrow-this",
    "category": "functions-scope",
    "difficulty": "advanced",
    "prompt": "How does an arrow function handle `this`?",
    "code": "",
    "choices": [
      "It creates a new dynamic this.",
      "It captures this lexically from the surrounding scope.",
      "It always points to window.",
      "It makes this undefined in every context."
    ],
    "correctIndex": 1,
    "explanation": "Arrow functions do not bind their own `this`; they capture it lexically.",
    "rationales": [
      "Not quite. `It creates a new dynamic this.` does not match the rule being tested.",
      "Correct. Arrow functions do not bind their own `this`; they capture it lexically.",
      "Not quite. `It always points to window.` does not match the rule being tested.",
      "Not quite. `It makes this undefined in every context.` does not match the rule being tested."
    ],
    "tags": [
      "arrow-functions",
      "this"
    ]
  },
  {
    "id": "fn-default-parameter",
    "category": "functions-scope",
    "difficulty": "beginner",
    "prompt": "When is a default parameter used?",
    "code": "",
    "choices": [
      "Whenever the argument is falsy.",
      "When the argument is undefined or omitted.",
      "Only when it is null.",
      "Only in async functions."
    ],
    "correctIndex": 1,
    "explanation": "A default parameter is applied when the corresponding argument is omitted or evaluates to undefined.",
    "rationales": [
      "Not quite. `Whenever the argument is falsy.` does not match the rule being tested.",
      "Correct. A default parameter is applied when the corresponding argument is omitted or evaluates to undefined.",
      "Not quite. `Only when it is null.` does not match the rule being tested.",
      "Not quite. `Only in async functions.` does not match the rule being tested."
    ],
    "tags": [
      "parameters",
      "defaults"
    ]
  },
  {
    "id": "fn-rest-parameter",
    "category": "functions-scope",
    "difficulty": "intermediate",
    "prompt": "What does `...values` collect in a function parameter list?",
    "code": "",
    "choices": [
      "Remaining arguments in an array",
      "Object properties only",
      "The first argument",
      "A Promise"
    ],
    "correctIndex": 0,
    "explanation": "A rest parameter collects remaining arguments into a real array.",
    "rationales": [
      "Correct. A rest parameter collects remaining arguments into a real array.",
      "Not quite. `Object properties only` does not match the rule being tested.",
      "Not quite. `The first argument` does not match the rule being tested.",
      "Not quite. `A Promise` does not match the rule being tested."
    ],
    "tags": [
      "rest",
      "arguments"
    ]
  },
  {
    "id": "fn-async-return",
    "category": "functions-scope",
    "difficulty": "intermediate",
    "prompt": "What does an `async` function always return?",
    "code": "",
    "choices": [
      "A callback",
      "A Promise",
      "A generator",
      "A DOM node"
    ],
    "correctIndex": 1,
    "explanation": "An async function always returns a Promise, even when the returned expression is a plain value.",
    "rationales": [
      "Not quite. `A callback` does not match the rule being tested.",
      "Correct. An async function always returns a Promise, even when the returned expression is a plain value.",
      "Not quite. `A generator` does not match the rule being tested.",
      "Not quite. `A DOM node` does not match the rule being tested."
    ],
    "tags": [
      "async",
      "promises"
    ]
  },
  {
    "id": "array-map",
    "category": "arrays-objects",
    "difficulty": "beginner",
    "prompt": "Which method creates a new array by transforming every item?",
    "code": "",
    "choices": [
      "forEach",
      "map",
      "find",
      "some"
    ],
    "correctIndex": 1,
    "explanation": "`map` returns a new array containing the result of applying a callback to each item.",
    "rationales": [
      "Not quite. `forEach` does not match the rule being tested.",
      "Correct. `map` returns a new array containing the result of applying a callback to each item.",
      "Not quite. `find` does not match the rule being tested.",
      "Not quite. `some` does not match the rule being tested."
    ],
    "tags": [
      "arrays",
      "map"
    ]
  },
  {
    "id": "array-filter",
    "category": "arrays-objects",
    "difficulty": "beginner",
    "prompt": "Which method returns all items that pass a test?",
    "code": "",
    "choices": [
      "filter",
      "find",
      "reduce",
      "join"
    ],
    "correctIndex": 0,
    "explanation": "`filter` returns a new array containing every item whose callback result is truthy.",
    "rationales": [
      "Correct. `filter` returns a new array containing every item whose callback result is truthy.",
      "Not quite. `find` does not match the rule being tested.",
      "Not quite. `reduce` does not match the rule being tested.",
      "Not quite. `join` does not match the rule being tested."
    ],
    "tags": [
      "arrays",
      "filter"
    ]
  },
  {
    "id": "array-find",
    "category": "arrays-objects",
    "difficulty": "intermediate",
    "prompt": "What does `find` return when no item matches?",
    "code": "",
    "choices": [
      "An empty array",
      "false",
      "undefined",
      "-1"
    ],
    "correctIndex": 2,
    "explanation": "`find` returns the first matching element, or undefined when no element matches.",
    "rationales": [
      "Not quite. `An empty array` does not match the rule being tested.",
      "Not quite. `false` does not match the rule being tested.",
      "Correct. `find` returns the first matching element, or undefined when no element matches.",
      "Not quite. `-1` does not match the rule being tested."
    ],
    "tags": [
      "arrays",
      "find"
    ]
  },
  {
    "id": "object-destructure",
    "category": "arrays-objects",
    "difficulty": "beginner",
    "prompt": "What does this destructuring declaration create?",
    "code": "const { name, role } = user;",
    "choices": [
      "A variable named user",
      "Variables name and role",
      "A copied array",
      "A JSON string"
    ],
    "correctIndex": 1,
    "explanation": "Object destructuring creates local variables for the requested properties.",
    "rationales": [
      "Not quite. `A variable named user` does not match the rule being tested.",
      "Correct. Object destructuring creates local variables for the requested properties.",
      "Not quite. `A copied array` does not match the rule being tested.",
      "Not quite. `A JSON string` does not match the rule being tested."
    ],
    "tags": [
      "objects",
      "destructuring"
    ]
  },
  {
    "id": "object-spread-shallow",
    "category": "arrays-objects",
    "difficulty": "advanced",
    "prompt": "What kind of copy does `{ ...original }` create?",
    "code": "",
    "choices": [
      "A recursive deep copy",
      "A shallow copy",
      "No copy",
      "A frozen copy"
    ],
    "correctIndex": 1,
    "explanation": "Object spread copies own enumerable properties one level deep; nested objects remain shared references.",
    "rationales": [
      "Not quite. `A recursive deep copy` does not match the rule being tested.",
      "Correct. Object spread copies own enumerable properties one level deep; nested objects remain shared references.",
      "Not quite. `No copy` does not match the rule being tested.",
      "Not quite. `A frozen copy` does not match the rule being tested."
    ],
    "tags": [
      "objects",
      "spread"
    ]
  },
  {
    "id": "array-sort-mutates",
    "category": "arrays-objects",
    "difficulty": "intermediate",
    "prompt": "What should you remember about `array.sort()`?",
    "code": "",
    "choices": [
      "It always returns a new array.",
      "It mutates the original array.",
      "It only works on numbers.",
      "It is asynchronous."
    ],
    "correctIndex": 1,
    "explanation": "`sort` reorders the original array; copy first when mutation is not desired.",
    "rationales": [
      "Not quite. `It always returns a new array.` does not match the rule being tested.",
      "Correct. `sort` reorders the original array; copy first when mutation is not desired.",
      "Not quite. `It only works on numbers.` does not match the rule being tested.",
      "Not quite. `It is asynchronous.` does not match the rule being tested."
    ],
    "tags": [
      "arrays",
      "mutation"
    ]
  },
  {
    "id": "dom-query-null",
    "category": "dom-events",
    "difficulty": "beginner",
    "prompt": "What can `document.querySelector()` return when nothing matches?",
    "code": "",
    "choices": [
      "An empty element",
      "null",
      "undefined only",
      "false"
    ],
    "correctIndex": 1,
    "explanation": "`querySelector` returns the first matching Element or null, so code should check before using the result.",
    "rationales": [
      "Not quite. `An empty element` does not match the rule being tested.",
      "Correct. `querySelector` returns the first matching Element or null, so code should check before using the result.",
      "Not quite. `undefined only` does not match the rule being tested.",
      "Not quite. `false` does not match the rule being tested."
    ],
    "tags": [
      "dom",
      "queryselector"
    ]
  },
  {
    "id": "dom-event-delegation",
    "category": "dom-events",
    "difficulty": "intermediate",
    "prompt": "What is the main benefit of event delegation?",
    "code": "",
    "choices": [
      "It removes every listener.",
      "One ancestor listener can handle matching descendants, including later additions.",
      "It prevents bubbling.",
      "It makes all handlers synchronous."
    ],
    "correctIndex": 1,
    "explanation": "Event delegation handles bubbled events at a stable ancestor and identifies the relevant descendant.",
    "rationales": [
      "Not quite. `It removes every listener.` does not match the rule being tested.",
      "Correct. Event delegation handles bubbled events at a stable ancestor and identifies the relevant descendant.",
      "Not quite. `It prevents bubbling.` does not match the rule being tested.",
      "Not quite. `It makes all handlers synchronous.` does not match the rule being tested."
    ],
    "tags": [
      "events",
      "delegation"
    ]
  },
  {
    "id": "dom-prevent-default",
    "category": "dom-events",
    "difficulty": "beginner",
    "prompt": "What does `event.preventDefault()` do?",
    "code": "",
    "choices": [
      "Stops every listener",
      "Cancels the browser default action when cancelable",
      "Deletes the event",
      "Prevents propagation only"
    ],
    "correctIndex": 1,
    "explanation": "`preventDefault` cancels the browser default action, such as form navigation, without automatically stopping propagation.",
    "rationales": [
      "Not quite. `Stops every listener` does not match the rule being tested.",
      "Correct. `preventDefault` cancels the browser default action, such as form navigation, without automatically stopping propagation.",
      "Not quite. `Deletes the event` does not match the rule being tested.",
      "Not quite. `Prevents propagation only` does not match the rule being tested."
    ],
    "tags": [
      "events",
      "forms"
    ]
  },
  {
    "id": "dom-text-content",
    "category": "dom-events",
    "difficulty": "intermediate",
    "prompt": "Which property is safer for inserting untrusted plain text?",
    "code": "",
    "choices": [
      "innerHTML",
      "outerHTML",
      "textContent",
      "insertAdjacentHTML"
    ],
    "correctIndex": 2,
    "explanation": "`textContent` inserts text without parsing it as HTML, reducing injection risk.",
    "rationales": [
      "Not quite. `innerHTML` does not match the rule being tested.",
      "Not quite. `outerHTML` does not match the rule being tested.",
      "Correct. `textContent` inserts text without parsing it as HTML, reducing injection risk.",
      "Not quite. `insertAdjacentHTML` does not match the rule being tested."
    ],
    "tags": [
      "dom",
      "security",
      "rendering"
    ]
  },
  {
    "id": "dom-listener-once",
    "category": "dom-events",
    "difficulty": "advanced",
    "prompt": "Which listener option removes the listener after its first call?",
    "code": "",
    "choices": [
      "capture: true",
      "passive: true",
      "once: true",
      "signal: false"
    ],
    "correctIndex": 2,
    "explanation": "The `once` option automatically removes the listener after the first invocation.",
    "rationales": [
      "Not quite. `capture: true` does not match the rule being tested.",
      "Not quite. `passive: true` does not match the rule being tested.",
      "Correct. The `once` option automatically removes the listener after the first invocation.",
      "Not quite. `signal: false` does not match the rule being tested."
    ],
    "tags": [
      "events",
      "listeners"
    ]
  },
  {
    "id": "dom-live-region",
    "category": "dom-events",
    "difficulty": "intermediate",
    "prompt": "What does an `aria-live` region help announce?",
    "code": "",
    "choices": [
      "CSS colors",
      "Dynamic status updates to assistive technology",
      "Network headers",
      "JavaScript types"
    ],
    "correctIndex": 1,
    "explanation": "A live region announces important dynamic content such as validation, loading, or completion status.",
    "rationales": [
      "Not quite. `CSS colors` does not match the rule being tested.",
      "Correct. A live region announces important dynamic content such as validation, loading, or completion status.",
      "Not quite. `Network headers` does not match the rule being tested.",
      "Not quite. `JavaScript types` does not match the rule being tested."
    ],
    "tags": [
      "accessibility",
      "aria-live"
    ]
  },
  {
    "id": "api-local-storage-strings",
    "category": "web-apis-storage",
    "difficulty": "beginner",
    "prompt": "What type of value does localStorage store directly?",
    "code": "",
    "choices": [
      "Strings",
      "Functions",
      "DOM nodes",
      "Promises"
    ],
    "correctIndex": 0,
    "explanation": "Web Storage stores string values; structured values need serialization such as JSON.",
    "rationales": [
      "Correct. Web Storage stores string values; structured values need serialization such as JSON.",
      "Not quite. `Functions` does not match the rule being tested.",
      "Not quite. `DOM nodes` does not match the rule being tested.",
      "Not quite. `Promises` does not match the rule being tested."
    ],
    "tags": [
      "localstorage",
      "strings"
    ]
  },
  {
    "id": "api-json-parse-error",
    "category": "web-apis-storage",
    "difficulty": "intermediate",
    "prompt": "Why should parsing localStorage JSON use a fallback?",
    "code": "",
    "choices": [
      "JSON.parse is asynchronous.",
      "Malformed or old data can throw and break the page.",
      "Storage is always encrypted.",
      "It converts values to HTML."
    ],
    "correctIndex": 1,
    "explanation": "Malformed, manually edited, or old-version JSON can throw; catch errors and normalize to a safe schema.",
    "rationales": [
      "Not quite. `JSON.parse is asynchronous.` does not match the rule being tested.",
      "Correct. Malformed, manually edited, or old-version JSON can throw; catch errors and normalize to a safe schema.",
      "Not quite. `Storage is always encrypted.` does not match the rule being tested.",
      "Not quite. `It converts values to HTML.` does not match the rule being tested."
    ],
    "tags": [
      "json",
      "storage",
      "resilience"
    ]
  },
  {
    "id": "api-clear-interval",
    "category": "web-apis-storage",
    "difficulty": "beginner",
    "prompt": "How do you stop a repeating timer created by setInterval?",
    "code": "",
    "choices": [
      "clearInterval(id)",
      "clearTimeout() without an ID",
      "interval.stop()",
      "delete interval"
    ],
    "correctIndex": 0,
    "explanation": "Pass the interval identifier to `clearInterval` when the repeating work should stop.",
    "rationales": [
      "Correct. Pass the interval identifier to `clearInterval` when the repeating work should stop.",
      "Not quite. `clearTimeout() without an ID` does not match the rule being tested.",
      "Not quite. `interval.stop()` does not match the rule being tested.",
      "Not quite. `delete interval` does not match the rule being tested."
    ],
    "tags": [
      "timers",
      "interval"
    ]
  },
  {
    "id": "api-fetch-response-ok",
    "category": "web-apis-storage",
    "difficulty": "intermediate",
    "prompt": "Why check `response.ok` after fetch?",
    "code": "",
    "choices": [
      "fetch rejects on every HTTP 404.",
      "fetch can resolve successfully for HTTP error statuses.",
      "It parses JSON automatically.",
      "It caches the response."
    ],
    "correctIndex": 1,
    "explanation": "Fetch rejects on network failures, but ordinary HTTP 4xx and 5xx responses still resolve and must be checked.",
    "rationales": [
      "Not quite. `fetch rejects on every HTTP 404.` does not match the rule being tested.",
      "Correct. Fetch rejects on network failures, but ordinary HTTP 4xx and 5xx responses still resolve and must be checked.",
      "Not quite. `It parses JSON automatically.` does not match the rule being tested.",
      "Not quite. `It caches the response.` does not match the rule being tested."
    ],
    "tags": [
      "fetch",
      "errors"
    ]
  },
  {
    "id": "api-abort-controller",
    "category": "web-apis-storage",
    "difficulty": "advanced",
    "prompt": "What can AbortController provide for a fetch request?",
    "code": "",
    "choices": [
      "A timeout or cancellation signal",
      "Automatic JSON validation",
      "A database transaction",
      "A DOM event target selector"
    ],
    "correctIndex": 0,
    "explanation": "An AbortController signal lets the application cancel work, including enforcing a bounded timeout.",
    "rationales": [
      "Correct. An AbortController signal lets the application cancel work, including enforcing a bounded timeout.",
      "Not quite. `Automatic JSON validation` does not match the rule being tested.",
      "Not quite. `A database transaction` does not match the rule being tested.",
      "Not quite. `A DOM event target selector` does not match the rule being tested."
    ],
    "tags": [
      "fetch",
      "abortcontroller"
    ]
  },
  {
    "id": "api-url-search-params",
    "category": "web-apis-storage",
    "difficulty": "beginner",
    "prompt": "Which API safely encodes URL query parameters?",
    "code": "",
    "choices": [
      "URLSearchParams",
      "innerHTML",
      "eval",
      "setInterval"
    ],
    "correctIndex": 0,
    "explanation": "URLSearchParams creates and encodes query strings without manual string concatenation.",
    "rationales": [
      "Correct. URLSearchParams creates and encodes query strings without manual string concatenation.",
      "Not quite. `innerHTML` does not match the rule being tested.",
      "Not quite. `eval` does not match the rule being tested.",
      "Not quite. `setInterval` does not match the rule being tested."
    ],
    "tags": [
      "url",
      "query-parameters"
    ]
  },
  {
    "id": "a11y-native-button",
    "category": "accessibility-security",
    "difficulty": "beginner",
    "prompt": "Why prefer a native `<button>` for an action?",
    "code": "",
    "choices": [
      "It needs no keyboard support.",
      "It includes keyboard and semantic behaviour by default.",
      "It cannot be styled.",
      "It submits every form automatically."
    ],
    "correctIndex": 1,
    "explanation": "Native buttons provide semantics, focus and keyboard activation without recreating those behaviours.",
    "rationales": [
      "Not quite. `It needs no keyboard support.` does not match the rule being tested.",
      "Correct. Native buttons provide semantics, focus and keyboard activation without recreating those behaviours.",
      "Not quite. `It cannot be styled.` does not match the rule being tested.",
      "Not quite. `It submits every form automatically.` does not match the rule being tested."
    ],
    "tags": [
      "accessibility",
      "buttons"
    ]
  },
  {
    "id": "a11y-form-label",
    "category": "accessibility-security",
    "difficulty": "beginner",
    "prompt": "What connects a `<label for=\"email\">` to a field?",
    "code": "",
    "choices": [
      "The field class",
      "A matching field id",
      "The placeholder",
      "The form action"
    ],
    "correctIndex": 1,
    "explanation": "The label `for` value must match the form control `id` to create an accessible name relationship.",
    "rationales": [
      "Not quite. `The field class` does not match the rule being tested.",
      "Correct. The label `for` value must match the form control `id` to create an accessible name relationship.",
      "Not quite. `The placeholder` does not match the rule being tested.",
      "Not quite. `The form action` does not match the rule being tested."
    ],
    "tags": [
      "accessibility",
      "forms"
    ]
  },
  {
    "id": "a11y-unique-ids",
    "category": "accessibility-security",
    "difficulty": "intermediate",
    "prompt": "Why must HTML id values be unique?",
    "code": "",
    "choices": [
      "CSS cannot use classes.",
      "Labels, ARIA relationships and DOM lookup become ambiguous with duplicates.",
      "It improves compression.",
      "Browsers reject the page otherwise."
    ],
    "correctIndex": 1,
    "explanation": "Duplicate IDs make relationships and DOM lookup unpredictable, especially for labels and assistive technology.",
    "rationales": [
      "Not quite. `CSS cannot use classes.` does not match the rule being tested.",
      "Correct. Duplicate IDs make relationships and DOM lookup unpredictable, especially for labels and assistive technology.",
      "Not quite. `It improves compression.` does not match the rule being tested.",
      "Not quite. `Browsers reject the page otherwise.` does not match the rule being tested."
    ],
    "tags": [
      "accessibility",
      "html"
    ]
  },
  {
    "id": "security-target-blank",
    "category": "accessibility-security",
    "difficulty": "intermediate",
    "prompt": "What should accompany an untrusted external link using target=\"_blank\"?",
    "code": "",
    "choices": [
      "rel=\"noopener noreferrer\"",
      "autocomplete=\"off\"",
      "aria-hidden=\"true\"",
      "method=\"post\""
    ],
    "correctIndex": 0,
    "explanation": "`noopener` prevents the opened page from controlling the opener; `noreferrer` also limits referrer data.",
    "rationales": [
      "Correct. `noopener` prevents the opened page from controlling the opener; `noreferrer` also limits referrer data.",
      "Not quite. `autocomplete=\"off\"` does not match the rule being tested.",
      "Not quite. `aria-hidden=\"true\"` does not match the rule being tested.",
      "Not quite. `method=\"post\"` does not match the rule being tested."
    ],
    "tags": [
      "security",
      "links"
    ]
  },
  {
    "id": "security-csp",
    "category": "accessibility-security",
    "difficulty": "advanced",
    "prompt": "What is a primary purpose of Content Security Policy?",
    "code": "",
    "choices": [
      "Style every component",
      "Restrict which resources and scripts the browser may load or execute",
      "Store passwords",
      "Replace input validation"
    ],
    "correctIndex": 1,
    "explanation": "CSP reduces injection impact by restricting resource origins and script execution, but it complements rather than replaces validation.",
    "rationales": [
      "Not quite. `Style every component` does not match the rule being tested.",
      "Correct. CSP reduces injection impact by restricting resource origins and script execution, but it complements rather than replaces validation.",
      "Not quite. `Store passwords` does not match the rule being tested.",
      "Not quite. `Replace input validation` does not match the rule being tested."
    ],
    "tags": [
      "security",
      "csp"
    ]
  },
  {
    "id": "security-public-secret",
    "category": "accessibility-security",
    "difficulty": "beginner",
    "prompt": "Where should a private provider API key be used?",
    "code": "",
    "choices": [
      "A browser-prefixed environment variable",
      "Server-side code or a secure serverless function",
      "A data attribute",
      "A public JSON file"
    ],
    "correctIndex": 1,
    "explanation": "Private credentials must stay in trusted server-side environments and must not be shipped to browser code.",
    "rationales": [
      "Not quite. `A browser-prefixed environment variable` does not match the rule being tested.",
      "Correct. Private credentials must stay in trusted server-side environments and must not be shipped to browser code.",
      "Not quite. `A data attribute` does not match the rule being tested.",
      "Not quite. `A public JSON file` does not match the rule being tested."
    ],
    "tags": [
      "security",
      "secrets"
    ]
  }
];
