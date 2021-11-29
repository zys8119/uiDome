import { inject } from 'vue'
import { elPaginationKey } from '@wisdom-plus/tokens'

export const usePagination = () => inject(elPaginationKey, {})
