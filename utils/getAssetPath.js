// Helper function to get the correct asset path with basePath
export function getAssetPath(path) {
  // If path is empty or undefined, return it as is
  if (!path) return path;
  
  // If path is an external URL (starts with http:// or https://), return it as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // If path already has the basePath, return it as is (prevent double application)
  const basePath = process.env.NODE_ENV === 'production' ? '/guana' : '';
  if (basePath && path.startsWith(basePath)) {
    return path;
  }
  
  // Add basePath to local assets
  return `${basePath}${path}`;
}

