module.exports = {
  useRouter: () => ({ push: jest.fn() }),
  usePathname: () => '/',
  Stack: 'Stack',
};
