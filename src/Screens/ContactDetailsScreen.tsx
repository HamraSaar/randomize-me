import React, { FC, useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TextProps, View } from 'react-native'
import { RootStackNavProps, ROUTE_NAMES } from '../Navigation/navigationTypes'
import { Contact } from '../Types/types'
import theme from '../Themes/Theme'
import Spinner from '../Components/Spinner'

const IMAGE_SIZE = Dimensions.get('screen').width / 2.5

const DetailsText: FC<TextProps> = (props) => (
  <Text style={styles.text} ellipsizeMode='head' numberOfLines={1} {...props}>
    {props.children}
  </Text>
)

const ContactDetailsScreen: FC<RootStackNavProps<ROUTE_NAMES.CONTACT_DETAILS>> = ({ navigation, route }) => {
  const contact: Contact = route.params.contact
  const [loadingImage, setLoadingImage] = useState<boolean>(true)

  useEffect(() => {
    navigation.setOptions({ title: `${contact.name.first} ${contact.name.last}` })
  })
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {loadingImage && <Spinner isLoading={loadingImage} size='small' />}
        <Image
          style={styles.image}
          source={{ uri: contact.picture.large }}
          resizeMode='contain'
          
          onLoadEnd={() => setLoadingImage(false)}
          onLoadStart={() => setLoadingImage(true)}
        />
      </View>
      <View style={styles.detailsContainer}>
        <DetailsText>{`${contact.name.first} ${contact.name.last}`}</DetailsText>
        <DetailsText>{`${contact.phone}`}</DetailsText>
        <DetailsText>{`${contact.email}`}</DetailsText>
        <DetailsText>{`${contact.location.street.number} ${contact.location.street.name}, ${contact.location.state} ${contact.location.country}`}</DetailsText>
      </View>
    </View>
  )
}

export default ContactDetailsScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  imageContainer: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  image: {
    flex: 1,
  },
  detailsContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  }
})
