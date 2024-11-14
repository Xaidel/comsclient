
import typescript from "@rollup/plugin-typescript";
import { obfuscator } from "rollup-obfuscator";

export default {
	input: 'src/main.ts',
	output: {
		file: 'build/bundle.js',
		format: 'es'
	},
    plugins: [
		typescript(),
        obfuscator(),
    ]
};