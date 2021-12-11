module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      width: {
       0.1 : "0.1rem",
      },
			colors: {
        aws: {
          100: "#232f3e",
          200: "#1e73be",
        },
        timeline: {
          100: "#dbdbdb",
          200: "#3298dc",
        },
			},
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}