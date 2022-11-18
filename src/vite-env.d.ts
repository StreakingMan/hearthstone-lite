/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<Record<any, any>, Record<any, any>, any>;
    export default component;
}
