import React, { FC } from 'react'
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { Contact } from '../../../Types/types';
import ContactCard from './ContactCard';

const NUM_COLUMNS = 2
const LIST_CONTAINER_PADDING = 10
const CELL_SIZE = Dimensions.get('window').width / NUM_COLUMNS - LIST_CONTAINER_PADDING * 2

interface Props {
  contacts: Contact[]
  onItemPress: (contact: Contact) => void
}

const ContactsList: FC<Props> = ({ contacts, onItemPress }) => {
  const renderContactCard = ({ item }: { item: Contact }) => {
    return <ContactCard contact={item} onPress={onItemPress} containerProps={{ style: styles.itemContainerStyle }} />
  }

  return (
    <FlatList
      style={styles.listContainerStyle}
      columnWrapperStyle={styles.listContentStyle}
      data={contacts}
      keyExtractor={(item: Contact, index: number) => item.id.name}
      renderItem={renderContactCard}
      numColumns={NUM_COLUMNS}
      initialNumToRender={8}
      maxToRenderPerBatch={20}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<View />}
      ListFooterComponentStyle={styles.listFooterStyle}
    />
  )
}

export default ContactsList

const styles = StyleSheet.create({
  listContainerStyle: {
    flex: 1,
    padding: LIST_CONTAINER_PADDING
  },
  listContentStyle: {
    flex: 1,
  },
  itemContainerStyle: {
    width: CELL_SIZE,
    height: CELL_SIZE
  },
  listFooterStyle: {
    height: 100,
  },
})
