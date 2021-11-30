import { buttonType } from '@wisdom-plus/components/button'
import { QuestionFilled } from '@element-plus/icons'
import { buildProps, definePropType } from '@wisdom-plus/utils/props'

import type { Component, ExtractPropTypes } from 'vue'

export const popconfirmProps = buildProps({
  title: {
    type: String,
  },
  confirmButtonText: {
    type: String,
  },
  cancelButtonText: {
    type: String,
  },
  confirmButtonType: {
    type: String,
    values: buttonType,
    default: 'primary',
  },
  cancelButtonType: {
    type: String,
    values: buttonType,
    default: 'text',
  },
  icon: {
    type: definePropType<string | Component>([String, Object]),
    default: QuestionFilled as any,
  },
  iconColor: {
    type: String,
    default: '#f90',
  },
  hideIcon: {
    type: Boolean,
    default: false,
  },
} as const)
export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>

export const popconfirmEmits = {
  confirm: () => true,
  cancel: () => true,
}
export type PopconfirmEmits = typeof popconfirmEmits
