import React from 'react'
import { RootStore } from '../rootStore'

// add more stores in RootStore class, then add to context below
const rootStore = new RootStore()

export const storesContext = React.createContext({
  rootStore: rootStore,
  contactStore: rootStore.contactStore,
})
