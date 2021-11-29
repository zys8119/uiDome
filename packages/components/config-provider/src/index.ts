import { provide, defineComponent } from 'vue'
import { useLocale } from '@wisdom-plus/hooks'
import { configProviderContextKey } from '@wisdom-plus/tokens'
import { configProviderProps } from './config-provider'

export const ConfigProvider = defineComponent({
  name: 'ElConfigProvider',
  props: configProviderProps,
  setup(props, { slots }) {
    useLocale()
    provide(configProviderContextKey, props)
    return () => slots.default?.()
  },
})
