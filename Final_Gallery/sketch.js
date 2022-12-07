// IMG Source: https://www.metmuseum.org/art/collection/search/467642?searchField=All&amp;sortBy=relevance&amp;showOnly=openAccess&amp;ft=unicorn+in+a+garden&amp;offset=0&amp;rpp=40&amp;pos=1

// Defining Tile Variables
let tileWidth = 85; //width of tile
let tileHeight = 85; //height of tile
let frame = 0; // amount of space on border
let padding = 4; //distance between tiles
let img; //img = image.image
let tilespin = 360;

function preload() {
  // Loading Image
  //img = loadImage('assets/Seurat.jpg')}
  //img = loadImage('assets/RetroQuilt.jpg')}
  //img = loadImage('assets/RetroQuilt 2.jpg')}
  //img = loadImage("assets/UnicornInAGarden.jpg");}
//img = loadImage("assets/StrawHatPortrait.jpg");}
  img = loadImage("assets/nat.jpg");}
//img = loadImage('assets/floral.png')}
//img = loadImage('assets/cranial.jpg')}
//img = loadImage('assets/nat.jpg')} // Plate for the ‘Atlas Anatomico’ (unpublished)
//img = loadImage('assets/bluebeet.jpg')}
//img = loadImage('assets/dunes.jpg')}
//img = loadImage('assets/Van_Gogh.jpg')}
//img = loadImage('assets/flcranium.jpg')}
//img = loadImage("assets/templeflora.jpg");}

function setup() {
  // Setup for Canvas:
  let windowRatio = windowWidth / windowHeight;
  let imageRatio = img.width / img.height;
  // If the window ratio is greater than the image LxW then image is resized to fit
  if (windowRatio > imageRatio) {
    img.resize(0, windowHeight - 15);
  } else {
    img.resize(windowWidth - 15, 0);
  }
  createCanvas(windowWidth - 20, windowHeight - 20);
  background('#F5F5DCF7');
  //background(250, 158, 94);
  //background(20,40,95);
  //image(img,windowHeight*2,windowWidth*2)
  //image(img,windowHeight*2,windowWidth*2)

  let tilesAcross = floor((width - frame * 2) / (tileWidth + padding)); // x axis
  let tilesDown = floor((height - frame * 2) / (tileHeight + padding)); // y axis
  let canvas2 = createGraphics(width, height);
  canvas2.angleMode(DEGREES);
  //extraWidth accounts for extra padding
  let extraWidth = round(
    (width - (tilesAcross * (tileWidth + padding) + frame * 2 - padding)) / 2
  );
  //extraHeight accounts for extra padding
  let extraHeight = round(
    (height - (tilesDown * (tileHeight + padding) + frame * 2 - padding)) / 2
  );
  // for loops: continue towards edge of tiles for X & Y of image
  for (i = 0; i < tilesAcross; i++) {
    tileOffset = random(-12, 12); //tileOffset for Situational

    for (j = 0; j < tilesDown; j++) {
      tileOffset2 = random(-12, 12); //tileOffset for Situational

      //using .get to get sample starting from the leftmost side of img
      //Reference: image(img, x, y, [width], [height])
      let tile = img.get(
        floor(random(img.width - tileWidth)),
        floor(random(img.height - tileHeight)),
        tileWidth,
        tileHeight
      );

      let x =
        i * (tileWidth + padding) +
        frame +
        extraWidth+tileOffset+tileOffset2;
      let y =
        j * (tileHeight + padding) +
        frame +
        extraHeight+tileOffset+tileOffset2;

      //Canvas 2 tile spin based on information from original
      canvas2.push();
      canvas2.translate(x + tileWidth / 2, y + tileHeight / 2);
      canvas2.rotate(random(-tilespin, tilespin));
      canvas2.image(tile, -tileWidth / 2, tileHeight / 2);
      canvas2.pop();

      //image(tile, x, y);
      canvas2.image(tile, x, y); //canvas2 is created using original
    }
  }
  //background(77,69,29);
  image(canvas2, 0, 0); // canvas2 is placed on top of original
}

