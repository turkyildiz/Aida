# AIDA Logistics — brand assets

Vector reconstructions of the official AIDA Logistics logo (LogoAI logo id 3143957).
The LogoAI download package wasn't accessible on this account, so the lockup was
rebuilt path-for-path from the brand page's inline SVG — geometry is identical to
the original; all files here are true vectors unless noted.

## Palette (from the LogoAI brand identity page)

| Role        | Hex       |
|-------------|-----------|
| Main        | `#ff0844` |
| Auxiliary 1 | `#0a0619` |
| Background  | `#ffffff` |

Fonts: logo wordmark **Quantify**; brand text font **SourceSans** (site uses Source Sans 3).

## Files

| File | Use |
|---|---|
| `aida-logo.svg` | Main lockup, red/navy on transparent (tight crop) |
| `aida-logo-on-white.svg` | Main lockup on white 340×250 canvas |
| `aida-logo-inverted.svg` | All-white lockup on brand-red canvas |
| `aida-logo-on-navy.svg` | All-white lockup on navy canvas |
| `aida-logo-white.svg` | All-white lockup, transparent — for dark backgrounds |
| `aida-mark.svg` / `aida-mark-white.svg` | Flower mark alone (red / white) |
| `aida-logo-original-170px.png` | Original raster recovered from the old WordPress site |
| `png/` | High-res (2000px) PNG/JPG renders of each variant |

Regenerate rasters: `node -e "require('sharp')('brand-assets/<file>.svg',{density:300}).resize({width:2000}).png().toFile('out.png')"`
