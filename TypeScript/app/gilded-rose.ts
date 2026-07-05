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

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  private increaseQuality(item: Item): void {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  private decreaseQuality(item: Item): void {
    if (item.quality > 0) {
      item.quality--;
    }
  }

  private updateItem(item: Item): void {
    if (item.name === 'Sulfuras, Hand of Ragnaros') {
      return;
    }

    if (item.name === 'Aged Brie') {
      this.increaseQuality(item);
      item.sellIn--;
      if (item.sellIn < 0) {
        this.increaseQuality(item);
      }
      return;
    }

    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this.increaseQuality(item);
      if (item.sellIn <= 10) {
        this.increaseQuality(item);
      }
      if (item.sellIn <= 5) {
        this.increaseQuality(item);
      }
      item.sellIn--;
      if (item.sellIn < 0) {
        item.quality = 0;
      }
      return;
    }

    this.decreaseQuality(item);
    item.sellIn--;
    if (item.sellIn < 0) {
      this.decreaseQuality(item);
    }
  }

  updateQuality() {
    for (const item of this.items) {
      this.updateItem(item);
    }
    return this.items;
  }
}
