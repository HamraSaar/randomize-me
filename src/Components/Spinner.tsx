import React from 'react'
import { ActivityIndicator, StyleSheet, View, ActivityIndicatorProps } from 'react-native'
import theme from '../Themes/Theme'

interface Props extends ActivityIndicatorProps {
  isLoading?: boolean
}

const Spinner = (props: Props) => (
  props.isLoading ?
    <View style={styles.loading}>
      <ActivityIndicator size='large' color={theme.colors.loadingIndicator} />
    </View>
    :
    null
)

export default Spinner

const styles = StyleSheet.create({
  loading: {
    ...StyleSheet.absoluteFill as {},
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.loadingBackground,
    zIndex: 1,
  }
})
