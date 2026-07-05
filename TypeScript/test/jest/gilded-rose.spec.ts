import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  // Normal Item
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('baisse la qualité de 1 par jour', () => {
    const gildedRose = new GildedRose([new Item('foo', 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });

  it('baisse le sellIn de 1 par jour', () => {
    const gildedRose = new GildedRose([new Item('foo', 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
  });

  it('la qualité ne descend jamais en dessous de 0', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('dégrade la qualité deux fois plus vite après la date de vente', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  // Aged Brie item
  it('Aged Brie augmente la qualité de 1 par jour', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5, 8)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });

  it('Aged Brie augmente la qualité de 1 par jour', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 8)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(10);
  });
});
