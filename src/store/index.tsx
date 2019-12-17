import { createStore, createTypedHooks, Actions, State } from 'easy-peasy'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// @ts-ignore
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import settings, { SettingsModel } from './settings'
import theme, { ThemeModel } from './theme'

interface StoreModel {
  settings: SettingsModel
  theme: ThemeModel

}

const model: StoreModel = {
  settings,
  theme,

}

const { useStoreActions, useStoreState } = createTypedHooks<StoreModel>()

const persistKey = process.env.REACT_APP_PERSIST_KEY || ''
const environment = process.env.REACT_APP_ENVIRONMENT || ''

// @ts-ignore
const store = createStore(model, {
  reducerEnhancer: (reducer: any): any =>
    persistReducer(
      {
        key: `${persistKey}-${environment}`,
        storage,
        stateReconciler: autoMergeLevel2,
        // TODO: Encrypt storage
      },
      reducer,
    ),
})

const persistor = persistStore(store)

export function resetStores(): void {
  Object.values(store.dispatch).forEach(
    (storeAction: any): void =>
      storeAction.resetStore && storeAction.resetStore(),
  )
}
export type IStateModel = State<StoreModel>
export type IActionModel = Actions<StoreModel>
export { persistor, useStoreActions, useStoreState }

export default store
