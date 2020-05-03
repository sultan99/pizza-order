module.exports = {
  bail: 1,
  verbose: true,
  moduleNameMapper: {
    '@/([^\/.]*)$': `<rootDir>/src/$1`,
  },
}
