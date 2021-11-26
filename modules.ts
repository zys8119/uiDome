import { rollup } from 'rollup'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import filesize from 'rollup-plugin-filesize'
import glob from 'fast-glob'
import { epRoot, pkgRoot } from './build/utils/paths'
// import { ElementPlusAlias } from './plugins/element-plus-alias'
import { generateExternal, writeBundles } from './build/utils/rollup'
import { excludeFiles } from './build/utils/pkg'
import { reporter } from './build/plugins/size-reporter'
import { buildConfigEntries } from './build/build-info'
import type { OutputOptions } from 'rollup'
export const buildModules = async () => {
  const input = excludeFiles(
      await glob('**/*.{js,ts,vue}', {
        cwd: pkgRoot,
        absolute: true,
        onlyFiles: true,
      })
  )
  const bundle = await rollup({
    input,
    plugins: [
      // await ElementPlusAlias(),
      css(),
      vue({ target: 'browser' }),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: 'es2018',
      }),
      filesize({
        reporter
      }),
    ],
    external: await generateExternal({ full: false }),
    treeshake: false,
  })
  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: epRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      }
    })
  )
}
