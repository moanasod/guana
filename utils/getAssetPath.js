// Helper function to get the correct asset path
export function getAssetPath(path) {
  // If path is empty or undefined, return it as is
  if (!path) return path;
  
  // If path is an external URL (starts with http:// or https://), return it as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // For custom domain (guana.info), no basePath needed - just return the path
  return path;
}

