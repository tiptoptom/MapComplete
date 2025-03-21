[//]: # (WARNING: this file is automatically generated. Please find the sources at the bottom and edit those sources)

# stairs

Layer showing stairs and escalators

 - This layer is shown at zoomlevel **17** and higher

## Table of contents

1. [Themes using this layer](#themes-using-this-layer)
2. [Basic tags for this layer](#basic-tags-for-this-layer)
3. [Supported attributes](#supported-attributes)
  - [images](#images)
  - [multilevels](#multilevels)
  - [conveying](#conveying)
  - [handrail](#handrail)
  - [tactile_writing](#tactile_writing)
  - [tactile_writing_language](#tactile_writing_language)
  - [ramp](#ramp)
  - [incline](#incline)
  - [leftover-questions](#leftover-questions)
  - [move-button](#move-button)
  - [lod](#lod)

## Themes using this layer

 - [blind_osm](https://mapcomplete.org/blind_osm)
 - [personal](https://mapcomplete.org/personal)
 - [stations](https://mapcomplete.org/stations)

## Basic tags for this layer

Elements must match the expression **<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps' target='_blank'>steps</a>**

[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B%28%20%20%20%20nwr%5B%22highway%22%3D%22steps%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%29%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)

## Supported attributes

**Warning:**,this quick overview is incomplete,

| attribute | type | values which are supported by this layer |
-----|-----|----- |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/level#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/level/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [level](https://wiki.openstreetmap.org/wiki/Key:level) | [string](../SpecialInputElements.md#string) | [0](https://wiki.openstreetmap.org/wiki/Tag:level%3D0) [1](https://wiki.openstreetmap.org/wiki/Tag:level%3D1) [-1](https://wiki.openstreetmap.org/wiki/Tag:level%3D-1) |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/conveying#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/conveying/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [conveying](https://wiki.openstreetmap.org/wiki/Key:conveying) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:conveying%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:conveying%3Dno) |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/handrail#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/handrail/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [handrail](https://wiki.openstreetmap.org/wiki/Key:handrail) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:handrail%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:handrail%3Dno) |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/tactile_writing#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/tactile_writing/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [tactile_writing](https://wiki.openstreetmap.org/wiki/Key:tactile_writing) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:tactile_writing%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:tactile_writing%3Dno) |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/incline#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/incline/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [incline](https://wiki.openstreetmap.org/wiki/Key:incline) | [slope](../SpecialInputElements.md#slope) |  |

### images
This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images
_This tagrendering has no question and is thus read-only_
*{image_carousel()}{image_upload()}*

### multilevels

The question is `Between which levels are these stairs?`
*These stairs are between the levels {level}* is shown if `level` is set

 -  *Located underground* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:location' target='_blank'>location</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:location%3Dunderground' target='_blank'>underground</a>. _This option cannot be chosen as answer_
 -  *Located on the ground floor* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:level' target='_blank'>level</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:level%3D0' target='_blank'>0</a>
 -  *Located on the ground floor* is shown if with level=. _This option cannot be chosen as answer_
 -  *Located on the first floor* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:level' target='_blank'>level</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:level%3D1' target='_blank'>1</a>
 -  *Located on the first basement level* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:level' target='_blank'>level</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:level%3D-1' target='_blank'>-1</a>

### conveying

_This tagrendering has no question and is thus read-only_

 -  *This is an escalator* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:conveying' target='_blank'>conveying</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:conveying%3Dyes' target='_blank'>yes</a>
 -  *This is not an escalator* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:conveying' target='_blank'>conveying</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:conveying%3Dno' target='_blank'>no</a>
 -  *This is not an escalator* is shown if with conveying=. _This option cannot be chosen as answer_

### handrail

The question is `Does this stair have a handrail?`

 -  *These stairs have a handrail* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:handrail' target='_blank'>handrail</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:handrail%3Dyes' target='_blank'>yes</a>
 -  *These stairs do <b>not</b> have a handrail* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:handrail' target='_blank'>handrail</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:handrail%3Dno' target='_blank'>no</a>

### tactile_writing

The question is `Do these stairs have tactile writing on the handrail?`

 -  *There is tactile writing on the handrail* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:tactile_writing' target='_blank'>tactile_writing</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:tactile_writing%3Dyes' target='_blank'>yes</a>
 -  *There is no tactile writing on the handrail* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:tactile_writing' target='_blank'>tactile_writing</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:tactile_writing%3Dno' target='_blank'>no</a>

This tagrendering is only visible in the popup if the following condition is met: <a href='https://wiki.openstreetmap.org/wiki/Key:handrail' target='_blank'>handrail</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:handrail%3Dyes' target='_blank'>yes</a> & conveying!=yes

### tactile_writing_language

_This tagrendering has no question and is thus read-only_
*{language_chooser(tactile_writing:braille,In which languages is there tactile writing &LPARENSbraille&RPARENS for navigation? <img src='./assets/layers/stairs/Braille_stairs.jpg' style='height: 300px; width: auto; display: block;' />,These stairs have tactile writing in &LBRACElanguage&LPARENS&RPARENS&RBRACE,These stairs have tactile writing in &LBRACElanguage&LPARENS&RPARENS&RBRACE,,)}*

This tagrendering is only visible in the popup if the following condition is met: <a href='https://wiki.openstreetmap.org/wiki/Key:tactile_writing' target='_blank'>tactile_writing</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:tactile_writing%3Dyes' target='_blank'>yes</a>

### ramp

The question is `Is there a ramp at these stairs?`

 -  *There is a ramp for bicycles here* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:ramp:bicycle' target='_blank'>ramp:bicycle</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:ramp:bicycle%3Dyes' target='_blank'>yes</a>. Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:ramp:bicycle' target='_blank'>ramp:bicycle</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:ramp:bicycle%3Dno' target='_blank'>no</a>
 -  *There is a ramp for wheelchairs here* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:ramp:wheelchair' target='_blank'>ramp:wheelchair</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:ramp:wheelchair%3Dyes' target='_blank'>yes</a>. Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:ramp:wheelchair' target='_blank'>ramp:wheelchair</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:ramp:wheelchair%3Dno' target='_blank'>no</a>
 -  *There is ramp for wheelchairs here, but it is shown separately on the map* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:ramp' target='_blank'>ramp</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:ramp%3Dseparate' target='_blank'>separate</a>. _This option cannot be chosen as answer_
 -  *There is a ramp for strollers here* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:ramp:stroller' target='_blank'>ramp:stroller</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:ramp:stroller%3Dyes' target='_blank'>yes</a>. Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:ramp:stroller' target='_blank'>ramp:stroller</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:ramp:stroller%3Dno' target='_blank'>no</a>
 -  *There is no ramp at these stairs* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:ramp' target='_blank'>ramp</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:ramp%3Dno' target='_blank'>no</a>. Unselecting this answer will add ramp=

### incline

The question is `What is the incline of these stairs?`
*These stairs have an incline of {incline}* is shown if `incline` is set

 -  *The upward direction is {direction_absolute()}* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:incline' target='_blank'>incline</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:incline%3Dup' target='_blank'>up</a>. _This option cannot be chosen as answer_
 -  *The downward direction is {direction_absolute()}* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:incline' target='_blank'>incline</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:incline%3Ddown' target='_blank'>down</a>. _This option cannot be chosen as answer_

### leftover-questions

_This tagrendering has no question and is thus read-only_
*{questions( ,)}*

### move-button

_This tagrendering has no question and is thus read-only_
*{move_button()}*

### lod

_This tagrendering has no question and is thus read-only_
*{linked_data_from_website()}*

This tagrendering has labels 
`added_by_default`


This document is autogenerated from [assets/layers/stairs/stairs.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/stairs/stairs.json)
