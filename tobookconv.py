import base64
from PIL import Image
import os

f = open("dumped_pages.txt", "r")
f = f.read().split(",data:image/png")

if not os.path.exists('bookf'):
   os.makedirs('bookf')
if not os.path.exists('bookm'):
   os.makedirs('bookm')

for i in range(1, len(f)):
    predec = f[i].replace('\n', '').replace(";base64,", "")
    decoding= predec + "=" * ((4 - len(predec) % 4) % 4)
    g = open("bookm/"+str(i)+".png", "wb")
    g.write((base64.b64decode(decoding + "=" * 4)))
    g.close()

for b in range(1, len(f), 6):
    images_list = ["bookm/"+str(m+b)+".png" for m in range(0, 6)]
    imgs = [Image.open(i).convert("RGBA") for i in images_list]

    min_img_width = min(i.width for i in imgs)

    total_height = 0
    for i, img in enumerate(imgs):
        if img.width > min_img_width:
            imgs[i] = img.resize((min_img_width, int(img.height / img.width * min_img_width)), Image.ANTIALIAS)
        total_height += imgs[i].height

    img_merge = Image.new(imgs[0].mode, (min_img_width, total_height))
    y = 0
    for img in imgs:
        img_merge.paste(img, (0, y))

        y += img.height
    img_merge.save("bookf/"+str(int((b-1)/6))+'_page.png')
