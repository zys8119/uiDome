import { withInstall, withNoopInstall } from '@wisdom-plus/utils/with-install'

import Checkbox from './src/checkbox.vue'
import CheckboxButton from './src/checkbox-button.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup,
})
export default ElCheckbox

export const ElCheckboxButton = withNoopInstall(CheckboxButton)
export const ElCheckboxGroup = withNoopInstall(CheckboxGroup)
