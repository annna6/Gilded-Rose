import { Item, GildedRose } from '../app/gilded-rose';
import {assert, expect} from "chai";

describe('updateQuality() Test', function (): void {

    it('updates all Gilded Rose items correctly - one iteration', function() : void {
        const roseItems: Item[] = [];

        roseItems.push(new Item("Aged Brie", 0, 0));
        roseItems.push(new Item("Aged Brie", 12, -5));
        roseItems.push(new Item("Aged Brie", 4, 8));
        roseItems.push(new Item("Aged Brie", -30, 8));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 20, 10));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 11, -7));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", 25, 35));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", 5, 50));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", -1, 100));
        roseItems.push(new Item("other1", 8, 40));
        roseItems.push(new Item("other2", -5, -20));
        roseItems.push(new Item("other3", 20, 100));

        const gildedRose: GildedRose = new GildedRose(roseItems);

        const updatedItems: Item[] = gildedRose.updateQuality();

        const referenceItems: Item[] = [];

        referenceItems.push(new Item("Aged Brie", -1, 2));
        referenceItems.push(new Item("Aged Brie", 11, -4));
        referenceItems.push(new Item("Aged Brie", 3, 9));
        referenceItems.push(new Item("Aged Brie", -31, 10));
        referenceItems.push(new Item('Backstage passes to a TAFKAL80ETC concert', 19, 11));
        referenceItems.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 22));
        referenceItems.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, -6));
        referenceItems.push(new Item('Sulfuras, Hand of Ragnaros', 25, 35));
        referenceItems.push(new Item('Sulfuras, Hand of Ragnaros', 5, 50));
        referenceItems.push(new Item('Sulfuras, Hand of Ragnaros', -1, 100));
        referenceItems.push(new Item('other1', 7, 39));
        referenceItems.push(new Item('other2', -6, -20));
        referenceItems.push(new Item('other3', 19, 99));

        assert.deepEqual(updatedItems, referenceItems);
    });

    it('updates all Gilded Rose items correctly - three iterations', function() : void {
        const roseItems: Item[] = [];

        roseItems.push(new Item("Aged Brie", -4, 60));
        roseItems.push(new Item("Aged Brie", 12, -3));
        roseItems.push(new Item("Aged Brie", 3, 25));
        roseItems.push(new Item("Aged Brie", -30, 100));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 100, 20));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", -50, -7));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", 60, -35));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", 5, 5));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", -1, 70));
        roseItems.push(new Item("other1", 8, 40));
        roseItems.push(new Item("other2", -5, -20));
        roseItems.push(new Item("other3", 20, 100));

        const gildedRose : GildedRose = new GildedRose(roseItems);

        let updatedItems: Item[] = gildedRose.updateQuality();
        updatedItems = (new GildedRose(updatedItems)).updateQuality();
        updatedItems = (new GildedRose(updatedItems)).updateQuality();

        console.log(updatedItems);

        const referenceItems: Item[] = [];

        referenceItems.push(new Item("Aged Brie", -7, 60));
        referenceItems.push(new Item("Aged Brie", 9, 0));
        referenceItems.push(new Item("Aged Brie", 0, 28));
        referenceItems.push(new Item("Aged Brie", -33, 100));
        referenceItems.push(new Item('Backstage passes to a TAFKAL80ETC concert', 1, 19));
        referenceItems.push(new Item('Backstage passes to a TAFKAL80ETC concert', 97, 23));
        referenceItems.push(new Item('Backstage passes to a TAFKAL80ETC concert', -53, 0));
        referenceItems.push(new Item('Sulfuras, Hand of Ragnaros', 60, -35));
        referenceItems.push(new Item('Sulfuras, Hand of Ragnaros', 5, 5));
        referenceItems.push(new Item('Sulfuras, Hand of Ragnaros', -1, 70));
        referenceItems.push(new Item('other1', 5, 37));
        referenceItems.push(new Item('other2', -8, -20));
        referenceItems.push(new Item('other3', 17, 97));

        assert.deepEqual(updatedItems, referenceItems);
    });

    it('updates Aged Brie properly', function() : void {
        const roseItems: Item[] = [];

        roseItems.push(new Item("Aged Brie", -4, -50));
        roseItems.push(new Item("Aged Brie", 0, 0));
        roseItems.push(new Item("Aged Brie", -3, 51));
        roseItems.push(new Item("Aged Brie", 5, 12));
        roseItems.push(new Item("Aged Brie", 11, 7));
        roseItems.push(new Item("Aged Brie", 6, 100));
        roseItems.push(new Item("Aged Brie", 14, 80));
        roseItems.push(new Item("Aged Brie", 20, -40));
        roseItems.push(new Item("Aged Brie", 50, 0));
        roseItems.push(new Item("Aged Brie", 100, -30));

        const gildedRose : GildedRose = new GildedRose(roseItems);

        let updatedItems: Item[] = gildedRose.updateQuality();

        console.log(updatedItems);

        const referenceItems: Item[] = [];

        referenceItems.push(new Item("Aged Brie", -5, -48));
        referenceItems.push(new Item("Aged Brie", -1, 2));
        referenceItems.push(new Item("Aged Brie", -4, 51));
        referenceItems.push(new Item("Aged Brie", 4, 13));
        referenceItems.push(new Item("Aged Brie", 10, 8));
        referenceItems.push(new Item("Aged Brie", 5, 100));
        referenceItems.push(new Item("Aged Brie", 13, 80));
        referenceItems.push(new Item("Aged Brie", 19, -39));
        referenceItems.push(new Item("Aged Brie", 49, 1));
        referenceItems.push(new Item("Aged Brie", 99, -29));


        assert.deepEqual(updatedItems, referenceItems);
    });
});
