export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

function increaseQuality(item : Item) : void {
    if (item.quality < 50) {
        item.quality += 1;
    }
}

function decrementQuality(item : Item) : void {
    if (item.sellIn < 0) {
        item.quality = Math.max(item.quality - 1, 0);
        item.quality = Math.max(item.quality - 1, 0);
    } else {
        item.quality = Math.max(item.quality - 1, 0);
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items : Item[] = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() : Item[] {
        const keywords : string[] = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros', 'Conjured'];

        this.items.forEach((item : Item) : void => {
            if (item.name === keywords[2]) {
                return;
            }

            item.sellIn -= 1;

            if (!keywords.slice(0, 2).includes(item.name)) {
                decrementQuality(item);
                if (item.name === keywords[3]) {
                    decrementQuality(item);
                }
            } else {
                increaseQuality(item);
                if (item.name == keywords[1]) {
                    if (item.sellIn < 10) {
                        increaseQuality(item);
                    }
                    if (item.sellIn < 5) {
                        increaseQuality(item);
                    }
                    if (item.sellIn < 0) {
                        item.quality = 0;
                    }
                } else if (item.sellIn < 0) {
                    increaseQuality(item);
                }
            }
        });

        return this.items;
    }
}
/*

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                this.items[i].quality = this.items[i].quality - 1
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }

        return this.items;
    }
}
*/
