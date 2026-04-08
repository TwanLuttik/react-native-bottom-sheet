import type React from 'react';
import type { ViewProps } from 'react-native';
import type { AnimatedProps } from 'react-native-reanimated';
import type {
  BottomSheetVariables,
  NullableAccessibilityProps,
} from '../../types';

export interface BottomSheetHandleProps extends BottomSheetVariables {}

export interface BottomSheetDefaultHandleProps
  extends BottomSheetHandleProps,
    NullableAccessibilityProps {
  /**
   * View style to be applied to the handle container.
   * @type Animated.AnimateStyle<ViewStyle> | ViewStyle
   * @default undefined
   */
  style?: AnimatedProps<ViewProps>['style'];
  /**
   * View style to be applied to the handle indicator.
   * @type Animated.AnimateStyle<ViewStyle> | ViewStyle
   * @default undefined
   */
  indicatorStyle?: AnimatedProps<ViewProps>['style'];
  /**
   * Content to be added below the indicator.
   * @type React.ReactNode | React.ReactNode[];
   * @default undefined
   */
  children?: React.ReactNode | React.ReactNode[];
}
