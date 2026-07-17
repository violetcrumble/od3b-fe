// Inserts Cloudinary's auto-quality/auto-format transform into a stored media URL.
// Needed anywhere a Cloudinary URL is used directly (og:image, JSON-LD) since those
// bypass next/image's own optimizer, which only re-compresses images it serves itself.
export default function cloudinaryOptimize(url) {
  if (!url || !url.includes('res.cloudinary.com') || !url.includes('/upload/')) return url;
  return url.replace('/upload/', '/upload/q_auto,f_auto/');
}
