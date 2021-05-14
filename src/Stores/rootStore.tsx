import { observable, action } from 'mobx'
import { ContactStore } from "./contactStore";
import { create } from 'mobx-persist'
import AsyncStorage from '@react-native-community/async-storage';

export enum STORES_STORAGE_KEYS {
  CONTACT = '@atnt:contactStore',
}

export class RootStore {
  contactStore: ContactStore = new ContactStore(this)

  @observable appInitialized = false
  @action setAppInitialized = (value: boolean) => this.appInitialized = value

  @action init = async () => {
    try {
      await this.hydrateStores()

      this.setAppInitialized(true)
    } catch (error) {
      console.log('error in init root store:', { error })
    }
  }

  @action hydrateStores = async () => {
    try {
      const hydrate = create({ storage: AsyncStorage })
      const stores: any = [
        { name: STORES_STORAGE_KEYS.CONTACT, store: this.contactStore },
      ]
      const storesToInitialize = stores.map(async (store: any) => await hydrate(store.name, store.store))
      await Promise.all(storesToInitialize)
    } catch (error) {
      console.log('error hydrating stores:', { error })
    }
  }
}
