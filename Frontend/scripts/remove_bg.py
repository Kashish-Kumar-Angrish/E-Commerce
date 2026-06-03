from PIL import Image, ImageStat
import sys
from pathlib import Path

# Simple background removal by color distance threshold
ASSETS_DIR = Path(__file__).resolve().parents[1] / 'src' / 'assets'
INPUT = ASSETS_DIR / 'Logo.png'
OUTPUT = ASSETS_DIR / 'Logo_transparent.png'

def get_bg_color(img):
    # sample corners and take average
    w, h = img.size
    corners = [img.getpixel((0,0)), img.getpixel((w-1,0)), img.getpixel((0,h-1)), img.getpixel((w-1,h-1))]
    # if image has alpha, ignore alpha channel
    corners_rgb = [c[:3] for c in corners]
    avg = tuple(sum(xs)//len(xs) for xs in zip(*corners_rgb))
    return avg

def color_dist(c1, c2):
    return sum((a-b)**2 for a,b in zip(c1,c2))**0.5


def main(threshold=30):
    if not INPUT.exists():
        print(f"Input not found: {INPUT}")
        sys.exit(1)
    img = Image.open(INPUT).convert('RGBA')
    bg = get_bg_color(img)
    px = img.load()
    w,h = img.size
    for y in range(h):
        for x in range(w):
            r,g,b,a = px[x,y]
            if color_dist((r,g,b), bg) <= threshold:
                px[x,y] = (r,g,b,0)
    img.save(OUTPUT)
    print(f"Saved transparent image to {OUTPUT}")

if __name__ == '__main__':
    t = 30
    if len(sys.argv) > 1:
        try:
            t = int(sys.argv[1])
        except:
            pass
    main(t)
