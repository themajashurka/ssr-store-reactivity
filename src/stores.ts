import { setContext, getContext } from 'svelte'
import { writable, derived } from 'svelte/store'

const stores = (state?:any) => ({
  tutorial:writable<number>(state?.tutorial ?? 1)
} as const)

export function setStores() {
    const _stores = stores()
  for (const key in _stores) {
    setContext(key, _stores[key as keyof typeof stores])
  }
}

export function getStore<
  A extends ReturnType<(typeof stores)>,
  B extends keyof A,
  C extends A[B]
>(storeName: B) {
  return getContext<C>(storeName)
}