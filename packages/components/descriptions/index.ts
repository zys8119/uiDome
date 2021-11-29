import { withInstall, withNoopInstall } from '@wisdom-plus/utils/with-install'

import Descriptions from './src/index.vue'
import DescriptionsItem from './src/description-item'

export const ElDescriptions = withInstall(Descriptions, {
  DescriptionsItem,
})
export default ElDescriptions

export const ElDescriptionsItem = withNoopInstall(DescriptionsItem)
