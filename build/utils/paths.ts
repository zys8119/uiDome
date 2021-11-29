import { resolve } from 'path'

export const projRoot = resolve(__dirname, '..', '..')
export const pkgRoot = resolve(projRoot, 'packages')
export const epRoot = resolve(pkgRoot, 'element-plus')
//
/** dist */
export const buildOutput = resolve(projRoot, 'dist')
/** dist/element-plus */
export const epOutput = resolve(buildOutput, 'element-plus')
export const epPackage = resolve(epRoot, 'package.json')
