import { Item, GildedRose } from '../app/gilded-rose';
import {assert, expect} from "chai";

describe('updateQuality() Test', function (): void {

    it('updates Gilded Rose items correctly', function() : void {

        /*
        sellin: 6, 15
*/
        /*
                quality : 0, ..
        */

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

        console.log(updatedItems);

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
});
