import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import { useCssVar } from '..'

describe('usecssvar', () => {
  test('Set css var on rootElement', () => {
    mount({
      template: `
        <span></span>
      `,
      setup() {
        const themeVars = ref({
          '--el-button-default-bg-color': '#f44336',
          '--el-button-default-text-color': '#2196f3',
        })

        useCssVar(themeVars)
      },
    })

    const rootElement = window.document.documentElement

    expect(
      rootElement.style.getPropertyValue('--el-button-default-bg-color')
    ).toBe('#f44336')
    expect(
      rootElement.style.getPropertyValue('--el-button-default-text-color')
    ).toBe('#2196f3')
  })

  test('Set css var on custom Element', () => {
    const wrapper = mount({
      template: `
        <span ref="elRef"></span>
      `,
      setup() {
        const themeVars = ref({
          '--el-span-default-bg-color': '#f44336',
          '--el-span-default-text-color': '#2196f3',
        })
        const elRef = ref(null)

        useCssVar(themeVars, elRef)

        return {
          elRef,
        }
      },
    })

    const customElement = wrapper.find('span').element

    expect(
      customElement.style.getPropertyValue('--el-span-default-bg-color')
    ).toBe('#f44336')
    expect(
      customElement.style.getPropertyValue('--el-span-default-text-color')
    ).toBe('#2196f3')
  })
})
