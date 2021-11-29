import { buildProps, definePropType, mutable } from '@wisdom-plus/utils/props'
import type { TabsPaneContext } from '@wisdom-plus/tokens'
import type { ExtractPropTypes } from 'vue'

export const tabBar = buildProps({
  tabs: {
    type: definePropType<TabsPaneContext[]>(Array),
    default: () => mutable([] as const),
  },
} as const)

export type TabBar = ExtractPropTypes<typeof tabBar>
