import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { RootStackNavProps, ROUTE_NAMES } from '../Navigation/navigationTypes'
import { useStores } from '../Stores/hooks/useStores'
import { Contact } from '../Types/types'
import { LOADERS } from '../utils/loaders'
import Spinner from '../Components/Spinner'
import ContactsList from '../Components/ContactsScreen/ContactsList/ContactsList'

const CONTACTS_AMOUNT = 10

const ContactsScreen: FC<RootStackNavProps<ROUTE_NAMES.CONTACTS>> = ({ navigation }) => {
  const { contactStore } = useStores()

  useEffect(() => {
    if (contactStore.contacts.length < CONTACTS_AMOUNT) {
      contactStore.fetchContacts(CONTACTS_AMOUNT)
    }
  }, [])

  const navigateToContact = (contact: Contact) => {
    navigation.navigate(ROUTE_NAMES.CONTACT_DETAILS, { contact: contact })
  }

  const isLoading = contactStore.loadingQueue.has(LOADERS.GET_CONTACTS)

  return (
    <SafeAreaView style={styles.container}>
      <Spinner isLoading={isLoading} />
      <ContactsList contacts={contactStore.contacts} onItemPress={navigateToContact} />
    </SafeAreaView>
  )
}

export default observer(ContactsScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
