// Mocking the Window Object for jest tests
Object.defineProperty(window, 'crypto', {
  value: {
    randomUUID: jest.fn(() => 'test-id'),
  },
})
