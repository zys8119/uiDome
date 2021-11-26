import { series, parallel, task } from 'gulp'
import {buildModules} from './modules'
export default series(
    parallel(
        buildModules
    ),
)

