import AppButton from './AppButton'
import React, { memo, useEffect } from 'react'
import {
  Image,
  ImageSourcePropType,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native'
import AppText from './AppText'
import Padding from './Padding'
import { Colors } from './Colors'

interface AppDiaLogProps {
  title?: string
  message?: string
  dialogIcon?: ImageSourcePropType
  titleColor?: string
  messageColor?: string
  messageStyle?: TextStyle
  customMessage?: React.ReactNode
  buttonText?: string
  buttonCustom?: React.ReactNode
  showTime?: number
  footer?: React.ReactNode
  hideCloseButton?: boolean
  backdropForClosing?: boolean
  onClose: () => void
  onPress: () => void
}

const AppDiaLog = ({
  onClose,
  onPress,
  title,
  message,
  messageStyle,
  customMessage,
  dialogIcon,
  titleColor,
  buttonText,
  buttonCustom,
  showTime,
  footer,
  hideCloseButton = false,
  backdropForClosing,
}: AppDiaLogProps) => {
  useEffect(() => {
    if (showTime) {
      const action = setTimeout(() => {
        onClose()
      }, showTime)
      return () => clearTimeout(action)
    }
    return () => {}
  }, [])
  return (
    <Modal animationType="fade" transparent visible>
      <View style={styles.rootContainer}>
        <Pressable
          disabled={!backdropForClosing}
          onPress={onClose}
          style={styles.blurView}
        />
        <View style={styles.container}>
          {!hideCloseButton && (
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text>Close</Text>
            </TouchableOpacity>
          )}
          <Padding top={50} />
          {!!title && (
            <AppText
              style={[
                styles.titleTxt,
                {
                  color: titleColor,
                  marginTop: dialogIcon ? 20 : -30,
                },
              ]}
            >
              {title.toUpperCase()}
            </AppText>
          )}
          {!!message && (
            <AppText style={[styles.messageTxt, messageStyle]}>
              {message}
            </AppText>
          )}
          {!!customMessage && customMessage}
          <Padding vertical={10} />
          {footer}
          {!!buttonText && (
            <View style={styles.footerContainer}>
              <AppButton
                onPress={onPress}
                style={styles.mainBtn}
                textStyle={styles.mainBtnTxt}
                backgroundColor={Colors.primary}
                text={buttonText.toUpperCase()}
              />
            </View>
          )}
          {!!buttonCustom && buttonCustom}
          {!!dialogIcon && (
            <Image source={dialogIcon} style={styles.dialogIcon} />
          )}
        </View>
      </View>
    </Modal>
  )
}
const widthScreen = Dimensions.get('window').width

const styles = StyleSheet.create({
  dialogIcon: {
    width: 98,
    height: 120,
    position: 'absolute',
    top: -60,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  closeIcon: {
    width: 32,
    height: 32,
  },
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 0.9 * widthScreen,
    justifyContent: 'flex-end',
    backgroundColor: Colors.white,
    borderRadius: 16,
  },
  footerContainer: {
    justifyContent: 'flex-end',
    padding: 20,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
  },
  mainBtn: {},
  mainBtnTxt: {
    color: Colors.white,
    fontSize: 16,
  },
  titleTxt: {
    fontSize: 19,
    textAlign: 'center',
  },
  messageTxt: {
    fontSize: 13,
    marginTop: 20,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  iconClose: {
    width: 22,
    height: 22,
  },
  closeBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 10,
  },
  blurView: {
    zIndex: -1,
  },
})
export default memo(AppDiaLog)
