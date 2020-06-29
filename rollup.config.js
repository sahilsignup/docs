// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
    input: 'src/validation-endpoint.js',
    output: {
        file: 'api/validation-endpoint.js',
        format: 'cjs',
        name: 'validation-endpoint.js'
    },
    plugins: [
        resolve(),
        commonjs(),
        json(),
    ]
};
