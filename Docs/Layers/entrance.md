[//]: # (WARNING: this file is automatically generated. Please find the sources at the bottom and edit those sources)

# entrance

A layer showing entrances and offering capabilities to survey some advanced data which is important for e.g. wheelchair users (but also bicycle users, people who want to deliver, …)

 - This layer is shown at zoomlevel **14** and higher
 - This layer will automatically load  [walls_and_buildings](./walls_and_buildings.md)  into the layout as it depends on it:  preset `an entrance` snaps to this layer (entrance.presets[0])
 - This layer will automatically load  [pedestrian_path](./pedestrian_path.md)  into the layout as it depends on it:  preset `an entrance` snaps to this layer (entrance.presets[0])
 - This layer will automatically load  [indoors](./indoors.md)  into the layout as it depends on it:  preset `an indoor door` snaps to this layer (entrance.presets[1])
 - This layer is needed as dependency for layer [walls_and_buildings](#walls_and_buildings)

## Table of contents

1. [Themes using this layer](#themes-using-this-layer)
2. [Presets](#presets)
3. [Basic tags for this layer](#basic-tags-for-this-layer)
4. [Supported attributes](#supported-attributes)
  - [images](#images)
  - [repeated](#repeated)
  - [single_level](#single_level)
  - [Entrance type](#entrance-type)
  - [Door_type](#door_type)
  - [automatic_door](#automatic_door)
  - [width](#width)
  - [kerb-height](#kerb-height)
  - [leftover-questions](#leftover-questions)
  - [move-button](#move-button)
  - [lod](#lod)

## Themes using this layer

 - [indoors](https://mapcomplete.org/indoors)
 - [onwheels](https://mapcomplete.org/onwheels)
 - [personal](https://mapcomplete.org/personal)
 - [stations](https://mapcomplete.org/stations)
 - [walls_and_buildings](https://mapcomplete.org/walls_and_buildings)

## Presets

The following options to create new points are included:

 - **an entrance** which has the following tags:<a href='https://wiki.openstreetmap.org/wiki/Key:entrance' target='_blank'>entrance</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:entrance%3Dyes' target='_blank'>yes</a> (snaps to layers `walls_and_buildings`, `pedestrian_path`)
 - **an indoor door** which has the following tags:<a href='https://wiki.openstreetmap.org/wiki/Key:indoor' target='_blank'>indoor</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:indoor%3Ddoor' target='_blank'>door</a> (snaps to layers `indoors`)

## Basic tags for this layer

Elements must match **any** of the following expressions:

 - <a href='https://wiki.openstreetmap.org/wiki/Key:indoor' target='_blank'>indoor</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:indoor%3Ddoor' target='_blank'>door</a>
 - door~.+
 - entrance~.+

[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B%28%20%20%20%20nwr%5B%22indoor%22%3D%22door%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%20%20%20%20nwr%5B%22door%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%20%20%20%20nwr%5B%22entrance%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%29%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)

## Supported attributes

**Warning:**,this quick overview is incomplete,

| attribute | type | values which are supported by this layer |
-----|-----|----- |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/level#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/level/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [level](https://wiki.openstreetmap.org/wiki/Key:level) | [float](../SpecialInputElements.md#float) | [0](https://wiki.openstreetmap.org/wiki/Tag:level%3D0) [1](https://wiki.openstreetmap.org/wiki/Tag:level%3D1) [-1](https://wiki.openstreetmap.org/wiki/Tag:level%3D-1) |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/entrance#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/entrance/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [entrance](https://wiki.openstreetmap.org/wiki/Key:entrance) | Multiple choice | [](https://wiki.openstreetmap.org/wiki/Tag:entrance%3D) [main](https://wiki.openstreetmap.org/wiki/Tag:entrance%3Dmain) [secondary](https://wiki.openstreetmap.org/wiki/Tag:entrance%3Dsecondary) [service](https://wiki.openstreetmap.org/wiki/Tag:entrance%3Dservice) [exit](https://wiki.openstreetmap.org/wiki/Tag:entrance%3Dexit) [entrance](https://wiki.openstreetmap.org/wiki/Tag:entrance%3Dentrance) [emergency](https://wiki.openstreetmap.org/wiki/Tag:entrance%3Demergency) [home](https://wiki.openstreetmap.org/wiki/Tag:entrance%3Dhome) |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/door#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/door/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [door](https://wiki.openstreetmap.org/wiki/Key:door) | Multiple choice | [hinged](https://wiki.openstreetmap.org/wiki/Tag:door%3Dhinged) [revolving](https://wiki.openstreetmap.org/wiki/Tag:door%3Drevolving) [sliding](https://wiki.openstreetmap.org/wiki/Tag:door%3Dsliding) [overhead](https://wiki.openstreetmap.org/wiki/Tag:door%3Doverhead) [no](https://wiki.openstreetmap.org/wiki/Tag:door%3Dno) |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/automatic_door#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/automatic_door/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [automatic_door](https://wiki.openstreetmap.org/wiki/Key:automatic_door) | Multiple choice | [no](https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dno) [motion](https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dmotion) [floor](https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dfloor) [button](https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dbutton) [slowdown_button](https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dslowdown_button) [continuous](https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dcontinuous) [serviced_on_button_press](https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dserviced_on_button_press) [serviced_on_request](https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dserviced_on_request) |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/width#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/width/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [width](https://wiki.openstreetmap.org/wiki/Key:width) | [pfloat](../SpecialInputElements.md#pfloat) |  |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/kerb:height#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/kerb%3Aheight/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [kerb:height](https://wiki.openstreetmap.org/wiki/Key:kerb:height) | [pnat](../SpecialInputElements.md#pnat) | [0](https://wiki.openstreetmap.org/wiki/Tag:kerb:height%3D0) |

### images
This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images
_This tagrendering has no question and is thus read-only_
*{image_carousel()}{image_upload()}*

### repeated

_This tagrendering has no question and is thus read-only_
*Multiple, identical objects can be found on floors {repeat_on}.*

This tagrendering is only visible in the popup if the following condition is met: repeat_on~.+
This tagrendering has labels 
`level`

### single_level

The question is `On what level is this feature located?`
*Located on the {level}th floor* is shown if `level` is set

 -  *Located underground* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:location' target='_blank'>location</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:location%3Dunderground' target='_blank'>underground</a>. _This option cannot be chosen as answer_
 -  *Located on the ground floor* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:level' target='_blank'>level</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:level%3D0' target='_blank'>0</a>
 -  *Located on the ground floor* is shown if with level=. _This option cannot be chosen as answer_
 -  *Located on the first floor* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:level' target='_blank'>level</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:level%3D1' target='_blank'>1</a>
 -  *Located on the first basement level* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:level' target='_blank'>level</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:level%3D-1' target='_blank'>-1</a>

This tagrendering has labels 
`level`

### Entrance type

The question is `What type of entrance is this?`

 -  *No specific entrance type is known* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:entrance' target='_blank'>entrance</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:entrance%3Dyes' target='_blank'>yes</a>. _This option cannot be chosen as answer_
 -  *This is an indoor door, separating a room or a corridor within a single building* is shown if with entrance= & <a href='https://wiki.openstreetmap.org/wiki/Key:indoor' target='_blank'>indoor</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:indoor%3Ddoor' target='_blank'>door</a>
 -  *This is the main entrance* is shown if with indoor= & <a href='https://wiki.openstreetmap.org/wiki/Key:entrance' target='_blank'>entrance</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:entrance%3Dmain' target='_blank'>main</a>
 -  *This is a secondary entrance* is shown if with indoor= & <a href='https://wiki.openstreetmap.org/wiki/Key:entrance' target='_blank'>entrance</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:entrance%3Dsecondary' target='_blank'>secondary</a>
 -  *This is a service entrance - normally only used for employees, delivery, …* is shown if with indoor= & <a href='https://wiki.openstreetmap.org/wiki/Key:entrance' target='_blank'>entrance</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:entrance%3Dservice' target='_blank'>service</a>
 -  *This is an exit where one can not enter* is shown if with indoor= & <a href='https://wiki.openstreetmap.org/wiki/Key:entrance' target='_blank'>entrance</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:entrance%3Dexit' target='_blank'>exit</a>
 -  *This is an entrance where one can only enter (but not exit)* is shown if with indoor= & <a href='https://wiki.openstreetmap.org/wiki/Key:entrance' target='_blank'>entrance</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:entrance%3Dentrance' target='_blank'>entrance</a>
 -  *This is emergency exit* is shown if with indoor= & <a href='https://wiki.openstreetmap.org/wiki/Key:entrance' target='_blank'>entrance</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:entrance%3Demergency' target='_blank'>emergency</a>
 -  *This is the entrance to a private home* is shown if with indoor= & <a href='https://wiki.openstreetmap.org/wiki/Key:entrance' target='_blank'>entrance</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:entrance%3Dhome' target='_blank'>home</a>

### Door_type

The question is `What is the type of this door?`

 -  *The door type is not known* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:door' target='_blank'>door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:door%3Dyes' target='_blank'>yes</a>. _This option cannot be chosen as answer_
 -  *A classical, hinged door supported by joints* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:door' target='_blank'>door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:door%3Dhinged' target='_blank'>hinged</a>
 -  *A revolving door which hangs on a central shaft, rotating within a cylindrical enclosure* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:door' target='_blank'>door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:door%3Drevolving' target='_blank'>revolving</a>
 -  *A sliding door where the door slides sidewards, typically parallel with a wall* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:door' target='_blank'>door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:door%3Dsliding' target='_blank'>sliding</a>
 -  *A door which rolls from overhead, typically seen for garages* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:door' target='_blank'>door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:door%3Doverhead' target='_blank'>overhead</a>
 -  *This is an entrance without a physical door* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:door' target='_blank'>door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:door%3Dno' target='_blank'>no</a>

### automatic_door

The question is `Is this door automated?`

 -  *This is an automatic door* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:automatic_door' target='_blank'>automatic_door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dyes' target='_blank'>yes</a>. _This option cannot be chosen as answer_
 -  *This door is <b>not</b> automated* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:automatic_door' target='_blank'>automatic_door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dno' target='_blank'>no</a>
 -  *This door will open automatically when <b>motion</b> is detected* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:automatic_door' target='_blank'>automatic_door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dmotion' target='_blank'>motion</a>
 -  *This door will open automatically when a <b>sensor in the floor</b> is triggered* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:automatic_door' target='_blank'>automatic_door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dfloor' target='_blank'>floor</a>
 -  *This door will open automatically when a <b>button is pressed</b>* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:automatic_door' target='_blank'>automatic_door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dbutton' target='_blank'>button</a>
 -  *This door revolves automatically all the time, but has a <b>button to slow it down</b>, e.g. for wheelchair users* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:automatic_door' target='_blank'>automatic_door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dslowdown_button' target='_blank'>slowdown_button</a>
 -  *This door revolves automatically all the time* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:automatic_door' target='_blank'>automatic_door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dcontinuous' target='_blank'>continuous</a>
 -  *This door will be opened by staff when requested by <b>pressing a button</b>* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:automatic_door' target='_blank'>automatic_door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dserviced_on_button_press' target='_blank'>serviced_on_button_press</a>
 -  *This door will be opened by staff when requested* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:automatic_door' target='_blank'>automatic_door</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:automatic_door%3Dserviced_on_request' target='_blank'>serviced_on_request</a>

### width

The question is `What is the width of this door/entrance?`
*This door has a width of {canonical(width)}* is shown if `width` is set

### kerb-height

The question is `What is the height of this kerb?`
*The kerb height of this door is {kerb:height}* is shown if `kerb:height` is set

 -  *This door does not have a kerb* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:kerb:height' target='_blank'>kerb:height</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:kerb:height%3D0' target='_blank'>0</a>

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


This document is autogenerated from [assets/layers/entrance/entrance.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/entrance/entrance.json)
