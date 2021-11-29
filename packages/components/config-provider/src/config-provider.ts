import { useLocaleProps } from '@wisdom-plus/hooks'
import { buildProp, definePropType, mutable } from '@wisdom-plus/utils/props'
import type { ButtonConfigContext } from '@wisdom-plus/components/button'

export const configProviderProps = {
  ...useLocaleProps,
  // Add more configs
  button: buildProp({
    type: definePropType<ButtonConfigContext>(Object),
    default: () => {
      return mutable({
        autoInsertSpace: true,
      } as const)
    },
  }),
}
