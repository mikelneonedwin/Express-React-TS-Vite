import { build } from 'esbuild';

console.log('building app.cjs...');

await build({
    entryPoints: ['server/app.ts'],
    write: true,
    bundle: true,
    minify: true,
    platform: 'node',
    outfile: 'server/app.cjs'
})

console.log('app.cjs build complete!');