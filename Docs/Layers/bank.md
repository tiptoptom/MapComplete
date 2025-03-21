[//]: # (WARNING: this file is automatically generated. Please find the sources at the bottom and edit those sources)

# bank

A financial institution to deposit money

 - This layer is shown at zoomlevel **0** and higher

## Table of contents

1. [Themes using this layer](#themes-using-this-layer)
2. [Basic tags for this layer](#basic-tags-for-this-layer)
3. [Supported attributes](#supported-attributes)
  - [images](#images)
  - [has_atm](#has_atm)
  - [leftover-questions](#leftover-questions)
  - [move-button](#move-button)
  - [delete-button](#delete-button)
  - [lod](#lod)
4. [Filters](#filters)

## Themes using this layer

 - [atm](https://mapcomplete.org/atm)
 - [personal](https://mapcomplete.org/personal)

## Basic tags for this layer

Elements must match the expression **<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dbank' target='_blank'>bank</a>**

[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B%28%20%20%20%20nwr%5B%22amenity%22%3D%22bank%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%29%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)

## Supported attributes

**Warning:**,this quick overview is incomplete,

| attribute | type | values which are supported by this layer |
-----|-----|----- |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/atm#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/atm/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [atm](https://wiki.openstreetmap.org/wiki/Key:atm) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:atm%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:atm%3Dno) [separate](https://wiki.openstreetmap.org/wiki/Tag:atm%3Dseparate) |

### images
This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images
_This tagrendering has no question and is thus read-only_
*{image_carousel()}{image_upload()}*

### has_atm

The question is `Does this bank have an ATM?`

 -  *This bank has an ATM* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:atm' target='_blank'>atm</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:atm%3Dyes' target='_blank'>yes</a>
 -  *This bank does <b>not</b> have an ATM* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:atm' target='_blank'>atm</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:atm%3Dno' target='_blank'>no</a>
 -  *This bank does have an ATM, but it is mapped as a different icon* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:atm' target='_blank'>atm</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:atm%3Dseparate' target='_blank'>separate</a>

### leftover-questions

_This tagrendering has no question and is thus read-only_
*{questions( ,)}*

### move-button

_This tagrendering has no question and is thus read-only_
*{move_button()}*

### delete-button

_This tagrendering has no question and is thus read-only_
*{delete_button()}*

### lod

_This tagrendering has no question and is thus read-only_
*{linked_data_from_website()}*

This tagrendering has labels 
`added_by_default`

## Filters

| id | question | osmTags |
-----|-----|----- |
| open_now.0 | Open now | _isOpen=yes |

| id | question | osmTags |
-----|-----|----- |
| has_atm.0 | With an ATM | atm=yes |



This document is autogenerated from [assets/layers/bank/bank.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/bank/bank.json)
