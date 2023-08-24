# Example Using react-mapkit

https://github.com/chrisdrackett/react-mapkit

This is an out-of-the-box Vite (React + TypeScript) project. The only thing I added was `src/MapkitExample.tsx` which is used in `src/App.tsx`. When running, the app crashes with this error:

```
Failed to resolve entry for package "react-mapkit". The package may have incorrect main/module/exports specified in its package.json.
9:36:56 AM [vite] Internal server error: Failed to resolve entry for package "react-mapkit". The package may have incorrect main/module/exports specified in its package.json.
  Plugin: vite:import-analysis
  File: src/MapkitExample.tsx
```

To run:

1. `$ yarn install --frozen-lockfile`
2. `$ yarn dev`