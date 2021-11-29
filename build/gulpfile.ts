import { series, parallel } from 'gulp'
import { run } from './utils/process'
import { withTaskName } from './utils/gulp'
const runTask = (name: string) =>
    withTaskName(name, () => run(`pnpm run build ${name}`))
export default series(
    withTaskName('clean', () => run('pnpm run clean')),
    // parallel(
        // runTask('buildModules'),
        // runTask('buildFullBundle'),
        // runTask('generateTypesDefinitions'),
        // runTask('buildHelper'),
        // series(
        //     withTaskName('buildThemeChalk', () =>
        //         run('pnpm run -C packages/theme-chalk build')
        //     ),
        //     copyFullStyle
        // )
    // ),
)