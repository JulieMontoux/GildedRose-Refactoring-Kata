# Gilded Rose - Todo
  
  ## 1. Comprendre le code
  - [x] Lire `app/gilded-rose.ts`
  - [x] Lire `GildedRoseRequirements.md`

  ## 2. Écrire les tests
  - [x] Normal item : quality baisse de 1 par jour
  - [x] Normal item : sellIn baisse de 1 par jour
  - [x] Normal item : quality baisse de 2 après sell by
   date
  - [x] Normal item : quality jamais < 0
  - [x] Aged Brie : quality monte de 1
  - [x] Aged Brie : quality monte de 2 après sell by
  date
  - [x] Aged Brie : quality jamais > 50
  - [x] Sulfuras : quality ne change jamais
  - [x] Sulfuras : sellIn ne change jamais
  - [x] Backstage pass : quality +1 quand > 10 jours
  - [x] Backstage pass : quality +2 quand ≤ 10 jours
  - [x] Backstage pass : quality +3 quand ≤ 5 jours
  - [x] Backstage pass : quality → 0 après concert
  - [x] Backstage pass : quality jamais > 50
  - [ ] Conjured : quality -2 par jour
  - [ ] Conjured : quality jamais < 0

  ## 3. Refactorer `gilded-rose.ts`
  - [ ] Extraire `increaseQuality` / `decreaseQuality`
  - [ ] Extraire `updateItem` par type
  - [ ] Simplifier `updateQuality` avec `for...of`

  ## 4. Implémenter Conjured
  - [ ] Ajouter bloc Conjured dans `updateItem`
  - [ ] Vérifier tests Conjured verts