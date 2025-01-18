const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  env: {
    googleVerification: 'p0W2wGC8bo4bj51FxdxghfL2_mXM_dn8TOMgs9llGmk',
  },
  
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});

