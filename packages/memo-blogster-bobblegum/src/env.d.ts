/// <reference types="astro/client" />

declare module 'fs-exists-cached' {
  function exists(path: string): boolean;
  function sync(path: string): boolean;
  export default { exists, sync };
}
