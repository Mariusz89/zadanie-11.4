function Phone(brand, price, color, ram, internalStorage) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.ram = ram;
	this.internalStorage = internalStorage;

	Phone.prototype.printInfo = function() {
		console.log("The phone is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". The RAM is " + this.ram + " GB" +
					" and internal storage is " + this.internalStorage + " GB.");
	}
}

var SamsungGalaxyS6 = new Phone("Samsung", 1200, "black", 3, 64);
var iPhone6 = new Phone("Apple", 2000, "grey", 4, 64);
var OnePlusOne = new Phone("OnePlus", 500, "red", 1, 16);

SamsungGalaxyS6.printInfo();
iPhone6.printInfo();
OnePlusOne.printInfo();



















