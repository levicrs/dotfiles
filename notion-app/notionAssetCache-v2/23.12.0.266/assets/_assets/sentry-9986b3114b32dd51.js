"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[2897],{98809:(e,t,n)=>{function r(e){const{request:t}=e;t&&(o(t,["url"]),o(t.headers,["Referer"]));const n="urls"in e&&Array.isArray(e.urls)?e.urls:void 0;return n&&function(e){for(let t=0;t<=e.length;t++){const n=e[t];"string"==typeof n&&(e[t]=a(n))}}(n),e}function a(e){if((e=e.replace(/([0-9A-Za-z\-]+)-([0-9a-f]+)/g,(function(e){return`[REDACTED]-${arguments.length<=2?void 0:arguments[2]}`}))).startsWith("/api/")){return new URL(e,"https://example.com").pathname}return e}function o(e,t){if(e&&"object"==typeof e)for(const n of t){const t=e[n];"string"==typeof t&&(e[n]=a(t))}}n.r(t),n.d(t,{default:()=>p});var i=n(94717),s=n(37253);const l=!1;let c=!1;function p(e){c||(c=!0,(0,i.qU)(),function(e){const{Sentry:t,config:n,getErrorsSampleRate:i,getTracesSampleRate:s,getReplaysSessionSampleRate:c,getReplaysOnErrorSampleRate:p,getIsProfilingEnabled:d,getProfilesSampleRate:u}=e,f=i(),g=s(),v=c(),y=p(),m=d(),R=u();t.init({dsn:"https://704fe3b1898d4ccda1d05fe1ee79a1f7@o324374.ingest.sentry.io/5741876",beforeBreadcrumb(e,t){const n=function(e){return"http"===e.type?o(e.data,["url"]):"navigation"===e.category&&o(e.data,["from","to"]),e}(e);return n},environment:n.env,release:n.version,attachStacktrace:!0,integrations:[new t.Integrations.GlobalHandlers({onerror:!0,onunhandledrejection:!1}),...g>0?[new t.BrowserTracing]:[],...v>0||y>0?[new t.Replay({beforeAddRecordingEvent:e=>{var t,n;const r=null==e||null===(t=e.data)||void 0===t?void 0:t.tag,o=null==e||null===(n=e.data)||void 0===n||null===(n=n.payload)||void 0===n?void 0:n.op;if("performanceSpan"===r&&"string"==typeof o&&o.startsWith("navigation")){var i;const t=null==e||null===(i=e.data)||void 0===i||null===(i=i.payload)||void 0===i?void 0:i.description;"string"==typeof t&&(e.data.payload.description=a(t))}return e}})]:[],...m?[new t.BrowserProfilingIntegration]:[]],sampleRate:f,tracesSampleRate:g,replaysSessionSampleRate:v,replaysOnErrorSampleRate:y,profilesSampleRate:R}),t.configureScope((e=>{e.setExtra("clientVersion",n.version)})),t.addGlobalEventProcessor((e=>{const t=r(e);return t})),l}(e),(0,i.Xc)(e.Sentry),s.Z.sdk=e.Sentry)}}}]);