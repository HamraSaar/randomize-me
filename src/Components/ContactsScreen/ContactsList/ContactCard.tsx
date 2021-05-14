import React, { FC } from 'react'
import { StyleSheet, Text, View, ViewProps, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import theme from '../../../Themes/Theme'
import { Contact } from '../../../Types/types'

interface Props {
  contact: Contact
  onPress: (contact: Contact) => void
  containerProps?: ViewProps
}
const ContactCard: FC<Props> = ({ contact, onPress, containerProps }) => {
  return (
    <TouchableOpacity onPress={() => onPress(contact)}>
      <View style={[containerProps?.style, styles.container]}>
        <Image
          style={styles.image}
          source={{ uri: contact.picture.thumbnail }}
        />
        <Text style={styles.title}>{`${contact.name.first} ${contact.name.last}`}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ContactCard

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: theme.colors.text,
  },
  image: {
    height: '70%',
    width: '70%',
  },
  title: {
    marginTop: 5,
    fontSize: 20,
    color: theme.colors.black,
  }
})
