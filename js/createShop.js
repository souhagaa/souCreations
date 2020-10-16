class Product {
  constructor(name, path, altText, price, type='General') {
    this.name = name;
    this.path = path;
    this.altText = altText;
    this.price = price;
    this.type = type;
  }
}

class Hoop extends Product {
  constructor(name, path, altText, price, type, diameter) {
    super(name, path, altText, price, type);
    this.diameter = diameter;
  }
}

class Canvas extends Product {
  constructor(name, path, altText, price, type, length, width) {
    super(name, path, altText, price, type);
    this.length = length;
    this.width = width;
  }
}

function createShop(){
var paths = ["images/myWork/hoop.jpg",
            "images/myWork/mom.jpg",
            "images/myWork/instagram-img-02.jpg",
            "images/myWork/bear.jpg",
            "images/myWork/InShot_20201002_205102532.jpg",
            "images/myWork/InShot_20201004_214431130.jpg",
            "images/myWork/InShot_20201002_204658807.jpg",
            "images/myWork/InShot_20201002_203649597.jpg",
            "images/myWork/instagram-img-06.jpg",
          ];
var hoops_names = ["My happy place", "My mother", "JOY", "Little bear",
            "Cup of flowers", "Newborn", "Bottle of flowers", "Vintage cups",
            "Name with flowers"];
var hoop_types = ["Love", "General", "General", "New born", "Kitchen",
                  "New born", "Kitchen", "Kitchen", "General"]
var hoops_prices = [35, 40, 30, 35, 30, 50, 25, 60, 40];

for (var i=0; i < hoops_names.length; i++) {

}

}
