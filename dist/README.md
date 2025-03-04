# Project Assets

This directory contains various assets for the CoreWerx Solutions website.

## Directories

- `/images` - Contains image assets like logos and icons
- `/videos` - Contains video assets for service sections
- `/models` - Contains 3D models and animations (if exported from Spline)

## Spline 3D Animation

If you've exported a Spline animation as a self-contained package:

1. Place the exported files in the `/public/models/spline/` directory
2. Update the SplineAnimation component to reference the local files

### Using Local Spline Files

To use a locally exported Spline scene:

1. Export your scene from Spline as a self-contained package
2. Create a directory: `/public/models/spline/your-scene-name/`
3. Extract all files from the exported package into this directory
4. Update the `splineSceneUrl` in `src/sections/Hero.tsx` to point to your local file:
   ```jsx
   const splineSceneUrl = '/models/spline/your-scene-name/scene.splinecode';
   ```

## Troubleshooting Spline Issues

If you encounter issues with Spline animations:

1. **Buffer errors**: These often occur with large or complex scenes. Try simplifying your scene in Spline.
2. **Loading failures**: Ensure your scene file is accessible and not corrupted.
3. **Performance issues**: The site automatically falls back to static images if Spline fails to load.
4. **Manual export**: If online Spline URLs don't work, try exporting and using local files.

## Notes

- Large binary files should be optimized for web use
- Consider using CDN for production deployment of large assets