import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Contact } from "../Types/types"

export enum ROUTE_NAMES {
  CONTACTS = 'ContactsScreen',
  CONTACT_DETAILS = 'ContactDetailsScreen',
}

export type RootStackParamList = {
  ContactsScreen: {} | undefined
  ContactDetailsScreen: { contact: Contact }
}

export type RootStackNavProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>
  route: RouteProp<RootStackParamList, T>
}
