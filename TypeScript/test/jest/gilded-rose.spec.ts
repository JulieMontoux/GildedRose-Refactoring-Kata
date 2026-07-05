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

  it('la qualité de Aged Brie ne dépasse jamais 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 7, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  // Sulfuras Item
  it('Sulfuras ne change jamais de qualité', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 4, 8)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });
  
  it('Sulfuras ne change jamais de qualité', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 4, 8)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
  });

  // Backstage Item
  it('Backstage pass augmente la qualité de 1 quand plus de 10 jours restants', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 8)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });

  it('Backstage pass augmente la qualité de 2 quand égal à 10 jours', () => {
    // 10 jours
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 8)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(10);
  });
  
  it('Backstage pass augmente la qualité de 2 quand moins de 10 jours', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 9, 8)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(10);
  });

  it('Backstage pass augmente la qualité de 3 quand égal à 5 jours', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 8)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });

  it('Backstage pass augmente la qualité de 3 quand moins de 5 jours', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 8)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });

  it('la qualité du Backstage pass tombe à 0 après le concert', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('la qualité du Backstage pass ne dépasse jamais 50', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});
