module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'csp-xss': 'warn',
        'categories:performance': ['error', { minScore: 0.93 }],
        'categories:accessibility': ['error', { minScore: 0.93 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 1 }],
      },
    },
  },
};
