module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'csp-xss': 'warn',
        'categoriess:performace': ['error', { minScore: 0.93 }],
        'categoriess:accessibility': ['error', { minScore: 0.93 }],
        'categoriess:best-practice': ['error', { minScore: 0.9 }],
        'categoriess:seo': ['error', { minScore: 0.9 }],
      },
    },
  },
};
