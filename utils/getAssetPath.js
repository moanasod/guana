// Helper function to get the correct asset path with basePath
export function getAssetPath(path) {
  const basePath = process.env.NODE_ENV === 'production' ? '/guana' : '';
  return `${basePath}${path}`;
}

