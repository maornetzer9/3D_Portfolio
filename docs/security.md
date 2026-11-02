# Dependency Security Notes

Assessment date: 2026-11-03. These notes describe the current local dependency graph and the portfolio's static deployment architecture. They do not claim that every installed advisory is exploitable or that an audit is a complete security assessment.

## Audit Results

| Severity | Original release graph | Previous local remediation | Current graph |
| --- | ---: | ---: | ---: |
| Critical | 1 | 0 | 0 |
| High | 22 | 2 | 2 |
| Moderate | 12 | 5 | 2 |
| Low | 2 | 0 | 0 |
| Total | 37 | 7 | 4 |

These are npm audit package entries, including affected parent packages. The four current entries represent three distinct advisories. Both `npm audit` and `npm audit --omit=dev` report the same current totals. The original production-only graph had 21 entries: 13 high, 7 moderate, and 1 low.

The critical Babel Traverse finding remains resolved with installed `@babel/traverse@7.29.12`. The previous Vite, Babel, PostCSS, Rollup, glob-tool, and 3D transitive dependency improvements are retained.

## Removed Static-Server Dependency

The unused `serve` package, its `npm start` script, and its scoped compression override were removed. This removes `serve-handler` and `minimatch` from the installed graph and clears [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249).

Before removal, the existing Render service was verified as a Static Site connected to this repository's `main` branch, with build command `npm install --legacy-peer-deps && npm run build` and publish directory `./dist`. There is no runtime start command. Local preview remains available through `npm run preview`. No hosting settings were changed.

## Residual Findings

### Drei / lodash.pick — High

- Installed chain: `@react-three/drei@9.56.27` → `lodash.pick@4.4.0`.
- Advisory: [GHSA-p6mc-m468-83gw](https://github.com/advisories/GHSA-p6mc-m468-83gw), prototype pollution through attacker-controlled property paths.
- Audit entries: two, for the vulnerable package and its affected direct parent.
- There is no patched standalone `lodash.pick` release. Drei 9.96.3 removes it, but requires `three-mesh-bvh@^0.7.0`, whose peer dependency requires Three.js >=0.151.0. The current Three.js version is 0.149.0; the latest evaluated Drei 9.122.0 also uses the incompatible BVH chain.
- Retain the existing working 3D stack. Do not force peers or upgrade Three.js solely for audit counts.
- Production bundle inspection confirms `lodash.pick` contributes no rendered code to the current browser output. The application does not import Drei TransformControls, which uses it. No reachable exploit path was identified in the current portfolio.

### React Router — Moderate

- Installed chain: `react-router-dom@6.30.6` → `react-router@6.30.6`.
- Advisories: [GHSA-wrjc-x8rr-h8h6](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6), open redirects through attacker-supplied navigation targets; [GHSA-337j-9hxr-rhxg](https://github.com/advisories/GHSA-337j-9hxr-rhxg), constructor injection during SSR error hydration.
- Audit entries: two affected packages. The latest published 6.x release remains 6.30.6; the advisory fixes start at 7.18.0.
- The portfolio uses `BrowserRouter` and a fixed `Link` destination of `/`. Other section links are fixed URL fragments. It does not use attacker-controlled navigation targets, SSR, or hydration of server errors.
- Router code is present in the browser bundle, but the vulnerable flows are not used by this application. A Router 7 migration solely to remove these findings is deferred.

## Verification and Reassessment

```bash
npm ci
npm run build
npm audit
npm audit --omit=dev
npm ls --all
```

Audit commands exit nonzero while residual findings remain; do not disable checks or use `npm audit fix --force` to conceal them. The project currently has no automated test, lint, or type-check scripts.

Reassess these findings before adding user-controlled router destinations, server rendering, Drei TransformControls, or a Node.js production runtime. Recheck available compatible releases before the next dependency update. Contact-form delivery and the separate T-shirt project's AI service require separate service-level verification.
