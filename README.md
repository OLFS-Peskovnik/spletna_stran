# Spletna stran Peskovnika - Odprtega laboratorija
V tem repozitoriju se nahaja spletna stran Peskovnika - Odprtega laboratorija Fakultete za Strojništvo, Univerze v Ljubljani.
## Navodila za uporabo
Za urejanje spletne strani potrebujemo naslednja orodja:
- urejevalnik teksta (priporočamo VS Code, Notepad++,...)
- sistem Git
V kolikor si želimo pred pošiljanjem sprememb na stržnik ogledati narejene spremembe moramo namestiti tudi program Hugo.
### Kratek uvod v Hugo
Hugo je sistem za generiranje statičnih spletnih strani ' to so spletne strani. Vsebino spletne strani dodajamo v obliki markdown (`.md`) datotek.
### Novo obvestilo:
#### Ukazna vrstica (npr.: Git Bash)

```bash
./hugo.exe new --kind obvestila obvestila/<ime-mapice>
```
#### Ročno kreiranje datotek
- Ustvarimo novo mapico znotraj mape obvestila, z reprezentativnim imenom (npr.: `delavnice-20-4-2023`)
- Znotraj nove mapice ustvarimo datoteko `index.md` in v prve vrstice datoteke zapišemo naslednje:
```
---
title: "<Naslov obvestila>"
date: 2023-02-01T14:00:07+01:00
description: "<Opis obvestila, ki se prikaže ob naslovu.>"
---
```
Pazimo da je datum zapisan v naslednjem formatu:
`YYYY-MM-DDThh:mm:ss+01:00`
| oznaka | pomen |
| :-- | :-- |
| Y | **leto** (npr.: `2023`) |
| M | **mesec** (npr.: `02` za februar) |
| D | **dan** (npr.: `01` za prvi dan v mesecu) |
| h | **ura** (npr.: `16` za četrto uro popoldne) |
| m | **minuta** (npr.: `05` za pet minut) |
| s | **sekunda** (npr.: `00`) |
Ker ure, še posebej pa minute in sekunda niso tako pomembne lahko v njihova polja vpišemo `00`, **pomembno pa je da se držimo predpisanega formata in jih ne izpustimo!** Torej na primer: `2023-04-20T00:00:00+01:00`