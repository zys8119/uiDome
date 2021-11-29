import { series, parallel } from 'gulp'
import {buildModules} from './modules'
export default series(
    parallel(
        buildModules
    ),
)

