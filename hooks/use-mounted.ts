"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,   // کلاینت (بعد از hydration)
    () => false   // سرور و اولین رندر hydration
  );
}