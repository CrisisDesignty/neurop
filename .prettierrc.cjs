module.exports = {
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*/*astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
			options: {
				// Asegura que los archivos JS/TS usen el parser Babel o TypeScript
				parser: "typescript",
			},
		},
	],
};
