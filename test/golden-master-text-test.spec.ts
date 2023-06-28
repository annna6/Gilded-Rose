import { Item, GildedRose } from '../app/gilded-rose';
import {assert, expect} from "chai";

describe('updateQuality() Test', function (): void {

    it('updates all Gilded Rose items correctly - one iteration', function() : void {
        const roseItems: Item[] = [];

        roseItems.push(new Item("Aged Brie", 0, 0));
        roseItems.push(new Item("Aged Brie", 12, 5));
        roseItems.push(new Item("Aged Brie", 4, 8));
        roseItems.push(new Item("Aged Brie", -30, 8));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 20, 10));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 11, 4));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", 25, 80));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", 5, 80));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", -1, 80));
        roseItems.push(new Item("other1", 8, 40));
        roseItems.push(new Item("other2", -5, 0));
        roseItems.push(new Item("other3", 20, 30));

        const gildedRose: GildedRose = new GildedRose(roseItems);

        const updatedItems: Item[] = gildedRose.updateQuality();

        const referenceItems: Item[] = [];

        referenceItems.push(new Item("Aged Brie", -1, 2));
        referenceItems.push(new Item("Aged Brie", 11, 6));
        referenceItems.push(new Item("Aged Brie", 3, 9));
        referenceItems.push(new Item("Aged Brie", -31, 10));
        referenceItems.push(new Item('Backstage passes to a TAFKAL80ETC concert', 19, 11));
        referenceItems.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 22));
        referenceItems.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5));
        referenceItems.push(new Item('Sulfuras, Hand of Ragnaros', 25, 80));
        referenceItems.push(new Item('Sulfuras, Hand of Ragnaros', 5, 80));
        referenceItems.push(new Item('Sulfuras, Hand of Ragnaros', -1, 80));
        referenceItems.push(new Item('other1', 7, 39));
        referenceItems.push(new Item('other2', -6, 0));
        referenceItems.push(new Item('other3', 19, 29));

        assert.deepEqual(updatedItems, referenceItems);
    });

    it('updates all Gilded Rose items correctly - three iterations', function() : void {
        const roseItems: Item[] = [];

        roseItems.push(new Item("Aged Brie", -4, 30));
        roseItems.push(new Item("Aged Brie", 12, 0));
        roseItems.push(new Item("Aged Brie", 3, 25));
        roseItems.push(new Item("Aged Brie", -30, 40));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 100, 20));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", -50, 4));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", 60, 80));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", 5, 80));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", -1, 80));
        roseItems.push(new Item("other1", 8, 40));
        roseItems.push(new Item("other2", -5, 20));
        roseItems.push(new Item("other3", 20, 15));

        const gildedRose : GildedRose = new GildedRose(roseItems);

        let updatedItems: Item[] = gildedRose.updateQuality();
        updatedItems = (new GildedRose(updatedItems)).updateQuality();
        updatedItems = (new GildedRose(updatedItems)).updateQuality();

        const referenceItems: Item[] = [];

        referenceItems.push(new Item("Aged Brie", -7, 36));
        referenceItems.push(new Item("Aged Brie", 9, 3));
        referenceItems.push(new Item("Aged Brie", 0, 28));
        referenceItems.push(new Item("Aged Brie", -33, 46));
        referenceItems.push(new Item('Backstage passes to a TAFKAL80ETC concert', 1, 19));
        referenceItems.push(new Item('Backstage passes to a TAFKAL80ETC concert', 97, 23));
        referenceItems.push(new Item('Backstage passes to a TAFKAL80ETC concert', -53, 0));
        referenceItems.push(new Item('Sulfuras, Hand of Ragnaros', 60, 80));
        referenceItems.push(new Item('Sulfuras, Hand of Ragnaros', 5, 80));
        referenceItems.push(new Item('Sulfuras, Hand of Ragnaros', -1, 80));
        referenceItems.push(new Item('other1', 5, 37));
        referenceItems.push(new Item('other2', -8, 14));
        referenceItems.push(new Item('other3', 17, 12));

        assert.deepEqual(updatedItems, referenceItems);
    });

    it('Aged Brie - quality increases as sellIn day approaches and drops to zero after concert', function() : void {
        const roseItems: Item[] = [];

        roseItems.push(new Item("Aged Brie", 4, 49));
        roseItems.push(new Item("Aged Brie", 2, 0));
        roseItems.push(new Item("Aged Brie", 8, 13));
        roseItems.push(new Item("Aged Brie", 5, 12));
        roseItems.push(new Item("Aged Brie", 11, 7));
        roseItems.push(new Item("Aged Brie", 6, 30));
        roseItems.push(new Item("Aged Brie", 14, 40));
        roseItems.push(new Item("Aged Brie", 20, 40));
        roseItems.push(new Item("Aged Brie", 50, 0));
        roseItems.push(new Item("Aged Brie", 100, 5));

        const gildedRose : GildedRose = new GildedRose(roseItems);

        let updatedItems: Item[] = gildedRose.updateQuality();

        const referenceItems: Item[] = [];

        referenceItems.push(new Item("Aged Brie", 3, 50));
        referenceItems.push(new Item("Aged Brie", 1, 1));
        referenceItems.push(new Item("Aged Brie", 7, 14));
        referenceItems.push(new Item("Aged Brie", 4, 13));
        referenceItems.push(new Item("Aged Brie", 10, 8));
        referenceItems.push(new Item("Aged Brie", 5, 31));
        referenceItems.push(new Item("Aged Brie", 13, 41));
        referenceItems.push(new Item("Aged Brie", 19, 41));
        referenceItems.push(new Item("Aged Brie", 49, 1));
        referenceItems.push(new Item("Aged Brie", 99, 6));

        assert.deepEqual(updatedItems, referenceItems);
    });

    it("checks that quality degrades twice as fast for normal items once the sell date passes, but remains positive", function() : void {
        const roseItems: Item[] = [];

        roseItems.push(new Item("other", 4, 49));
        roseItems.push(new Item("other", 1, 0));
        roseItems.push(new Item("other", 3, 13));
        roseItems.push(new Item("other", 2, 12));
        roseItems.push(new Item("other", 4, 7));

        const gildedRose : GildedRose = new GildedRose(roseItems);

        let updatedItems: Item[] = gildedRose.updateQuality();
        updatedItems = (new GildedRose(updatedItems)).updateQuality();
        updatedItems = (new GildedRose(updatedItems)).updateQuality();
        updatedItems = (new GildedRose(updatedItems)).updateQuality();

        const referenceItems: Item[] = [];

        referenceItems.push(new Item("other", 0, 45));
        referenceItems.push(new Item("other", -3, 0));
        referenceItems.push(new Item("other", -1, 8));
        referenceItems.push(new Item("other", -2, 6));
        referenceItems.push(new Item("other", 0, 3));

        assert.deepEqual(referenceItems, updatedItems);
    });

    it("checks that Sulfuras doesn't modify sellIn or quality, which is 80", function() : void {
        const roseItems: Item[] = [];

        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", 4, 80));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", 1, 80));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", 3, 80));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", 2, 80));
        roseItems.push(new Item("Sulfuras, Hand of Ragnaros", 11, 80));

        const gildedRose : GildedRose = new GildedRose(roseItems);

        let updatedItems: Item[] = gildedRose.updateQuality();
        updatedItems = (new GildedRose(updatedItems)).updateQuality();
        updatedItems = (new GildedRose(updatedItems)).updateQuality();
        updatedItems = (new GildedRose(updatedItems)).updateQuality();

        const referenceItems: Item[] = [];

        referenceItems.push(new Item("Sulfuras, Hand of Ragnaros", 4, 80));
        referenceItems.push(new Item("Sulfuras, Hand of Ragnaros", 1, 80));
        referenceItems.push(new Item("Sulfuras, Hand of Ragnaros", 3, 80));
        referenceItems.push(new Item("Sulfuras, Hand of Ragnaros", 2, 80));
        referenceItems.push(new Item("Sulfuras, Hand of Ragnaros", 11, 80));

        assert.deepEqual(referenceItems, updatedItems);
    });

    it('Backstage Pass - quality quickly increases as sellin day approaches and drops to zero after concert', function() : void {
        const roseItems: Item[] = [];

        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 4, 40));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 2, 0));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 8, 13));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 12));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 11, 7));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 6, 30));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 14, 40));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 20, 40));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 50, 0));
        roseItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 100, 5));

        const gildedRose : GildedRose = new GildedRose(roseItems);

        let updatedItems: Item[] = gildedRose.updateQuality();
        updatedItems = (new GildedRose(updatedItems)).updateQuality();
        updatedItems = (new GildedRose(updatedItems)).updateQuality();
        updatedItems = (new GildedRose(updatedItems)).updateQuality();

        const referenceItems: Item[] = [];

        referenceItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50));
        referenceItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0));
        referenceItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 4, 22));
        referenceItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 1, 24));
        referenceItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 7, 14));
        referenceItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 2, 41));
        referenceItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 44));
        referenceItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 16, 44));
        referenceItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 46, 4));
        referenceItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 96, 9));

        assert.deepEqual(updatedItems, referenceItems);
    });
});
