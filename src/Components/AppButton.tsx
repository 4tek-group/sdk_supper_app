import React, { memo } from 'react'
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import AppText, { AppTextProps } from './AppText'
import Padding from './Padding'
import { Colors } from './Colors'

export interface AppButtonProps {
  text?: string
  icon?: ImageSourcePropType
  svgIcon?: React.ReactNode
  onPress?: () => void
  disabled?: boolean
  backgroundColor?: string
  colors?: (string | number)[]
  disabledBackgroundColor?: string
  disabledTextColor?: string
  textColor?: string
  textStyle?: StyleProp<TextStyle>
  iconStyle?: StyleProp<ImageStyle>
  opacity?: number
  iconDirection?: 'left' | 'right'
  style?: StyleProp<ViewStyle> | ViewStyle
  radius?: number
  spaceBetween?: number
  shadowColor?: string
  textProps?: Omit<AppTextProps, 'children'>
  shadowOpacity?: number
  shadowSize?: number
  center?: boolean
}

const AppButton = ({
  radius = 8,
  backgroundColor = Colors.primary,
  colors,
  disabled,
  disabledBackgroundColor = Colors.gray,
  disabledTextColor = Colors.white,
  icon,
  svgIcon,
  iconStyle,
  onPress,
  opacity = 0.8,
  text,
  textStyle,
  iconDirection = 'right',
  textColor = Colors.white,
  style,
  spaceBetween = 10,
  center = true,
  textProps: { style: extraTextStyle, ...restTextProps } = {},
  ...restProps
}: AppButtonProps) => {
  const styles = StyleSheet.create({
    baseBtn: {
      flexDirection: iconDirection === 'right' ? 'row' : 'row-reverse',
      alignItems: 'center',
      justifyContent: center ? 'center' : 'flex-start',
      paddingHorizontal: 16,
      height: 44,
      borderRadius: radius,
      backgroundColor: disabled ? disabledBackgroundColor : backgroundColor,
      overflow: 'hidden',
    },
    baseTxt: {
      color: disabled ? disabledTextColor : textColor,
    },
    btnBg: {
      ...StyleSheet.absoluteFillObject,
      zIndex: -1,
      backgroundColor: Colors.gray,
    },
    baseIc: {
      height: 24,
      width: 24,
    },
  })
  return (
    <TouchableOpacity
      {...restProps}
      disabled={disabled}
      style={[styles.baseBtn, style]}
      activeOpacity={opacity}
      onPress={onPress}
    >
      {!!colors && <View style={styles.btnBg} />}
      <AppText
        {...restTextProps}
        style={[styles.baseTxt, textStyle, extraTextStyle]}
      >
        {text}
      </AppText>
      {(!!icon || !!svgIcon) && (
        <>
          <Padding left={spaceBetween} />
          {svgIcon ? (
            svgIcon
          ) : (
            <Image source={icon} style={[styles.baseIc, iconStyle]} />
          )}
        </>
      )}
    </TouchableOpacity>
  )
}

export default memo(AppButton)
