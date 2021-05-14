import { observable, action, computed } from 'mobx'
import { persist } from 'mobx-persist';
import api from '../Api/ApiMethods';
import { Contact } from '../Types/types';
import { LOADERS } from '../utils/loaders';
import { RootStore } from "./rootStore";

export class ContactStore {
  rootStore?: RootStore = undefined
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable loadingQueue: Set<string> = new Set<string>()

  @action setLoading = (loading: boolean, id: string) => {
    loading? this.loadingQueue.add(id) : this.loadingQueue.delete(id)
  }

  @computed get isLoading() {
    return this.loadingQueue.size > 0
  }

  @persist('list') @observable contacts: any[] = []

  @action setContacts = (contacts: Contact[]) => this.contacts = contacts

  @action private getContact = async () => {
    try {
      const res = await api.getContact()
      if (res.data.results.length > 0) {
        return res.data.results[0]
      }
    } catch (error) {
      console.log('contactStore getContacts error:', { error })
    }
  }

  @action fetchContacts = async (amount: number) => {
    try {
      this.setLoading(true, LOADERS.GET_CONTACTS)
      const promises: Promise<Contact>[] = []
      for (let i = 0; i < amount; i++) {
        promises.push(await this.getContact())
      }
      const contacts = await Promise.all(promises)
      this.setContacts(contacts)
    } catch (error) {
      console.log('ContactStore fetchContacts Error:', { error })
    } finally {
      this.setLoading(false, LOADERS.GET_CONTACTS)
    }
  }

}
