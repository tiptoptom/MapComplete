[//]: # (WARNING: this file is automatically generated. Please find the sources at the bottom and edit those sources)

# doctors

This layer shows doctor offices

 - This layer is shown at zoomlevel **10** and higher

## Table of contents

1. [Themes using this layer](#themes-using-this-layer)
2. [Presets](#presets)
3. [Basic tags for this layer](#basic-tags-for-this-layer)
4. [Supported attributes](#supported-attributes)
  - [images](#images)
  - [name](#name)
  - [opening_hours_by_appointment](#opening_hours_by_appointment)
  - [Opening hours](#opening-hours)
  - [phone](#phone)
  - [email](#email)
  - [website](#website)
  - [specialty](#specialty)
  - [leftover-questions](#leftover-questions)
  - [move-button](#move-button)
  - [delete-button](#delete-button)
  - [lod](#lod)
5. [Filters](#filters)

## Themes using this layer

 - [disaster_response](https://mapcomplete.org/disaster_response)
 - [healthcare](https://mapcomplete.org/healthcare)
 - [onwheels](https://mapcomplete.org/onwheels)
 - [personal](https://mapcomplete.org/personal)

## Presets

The following options to create new points are included:

 - **a doctors office** which has the following tags:<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Ddoctors' target='_blank'>doctors</a>

## Basic tags for this layer

Elements must match the expression **<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Ddoctors' target='_blank'>doctors</a>**

[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B%28%20%20%20%20nwr%5B%22amenity%22%3D%22doctors%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%29%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)

## Supported attributes

**Warning:**,this quick overview is incomplete,

| attribute | type | values which are supported by this layer |
-----|-----|----- |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/name#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/name/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [name](https://wiki.openstreetmap.org/wiki/Key:name) | [string](../SpecialInputElements.md#string) |  |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/opening_hours#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/opening_hours/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | ["by appointment"](https://wiki.openstreetmap.org/wiki/Tag:opening_hours%3D"by appointment") |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/phone#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/phone/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [phone](https://wiki.openstreetmap.org/wiki/Key:phone) | [phone](../SpecialInputElements.md#phone) |  |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/email#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/email/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [email](https://wiki.openstreetmap.org/wiki/Key:email) | [email](../SpecialInputElements.md#email) |  |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/website#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/website/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [website](https://wiki.openstreetmap.org/wiki/Key:website) | [url](../SpecialInputElements.md#url) |  |
| <a target="_blank" href='https://taginfo.openstreetmap.org/keys/healthcare:speciality#values'><img src='https://mapcomplete.org/assets/svg/search.svg' height='18px'></a> <a target="_blank" href='https://taghistory.raifer.tech/?#***/healthcare%3Aspeciality/'><img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'></a> [healthcare:speciality](https://wiki.openstreetmap.org/wiki/Key:healthcare:speciality) | [string](../SpecialInputElements.md#string) | [general](https://wiki.openstreetmap.org/wiki/Tag:healthcare:speciality%3Dgeneral) [gynaecology](https://wiki.openstreetmap.org/wiki/Tag:healthcare:speciality%3Dgynaecology) [psychiatry](https://wiki.openstreetmap.org/wiki/Tag:healthcare:speciality%3Dpsychiatry) [paediatrics](https://wiki.openstreetmap.org/wiki/Tag:healthcare:speciality%3Dpaediatrics) |

### images
This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images
_This tagrendering has no question and is thus read-only_
*{image_carousel()}{image_upload()}*

### name

The question is `What is the name of this doctors place?`
*This doctors place is called {name}* is shown if `name` is set

### opening_hours_by_appointment

The question is `What are the opening hours of {title()}?`
*<h3>Opening hours</h3>{opening_hours_table(opening_hours)}* is shown if `opening_hours` is set

 -  *Only by appointment* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:opening_hours' target='_blank'>opening_hours</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:opening_hours%3D"by appointment"' target='_blank'>"by appointment"</a>
 -  *Only by appointment* is shown if with opening_hours~^("by appointment"|by appointment)$. _This option cannot be chosen as answer_
 -  *Marked as closed for an unspecified time* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:opening_hours' target='_blank'>opening_hours</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:opening_hours%3Dclosed' target='_blank'>closed</a>. _This option cannot be chosen as answer_

### phone

The question is `What is the phone number of {title()}?`
*{link(&LBRACEphone&RBRACE,tel:&LBRACEphone&RBRACE,,,,)}* is shown if `phone` is set

 - <img src='https://raw.githubusercontent.com/pietervdvn/MapComplete/develop/./assets/layers/questions/phone.svg' style='width: 3rem; height: 3rem'> *{link(&LBRACEcontact:phone&RBRACE,tel:&LBRACEcontact:phone&RBRACE,,,,)}* is shown if with contact:phone~.+. _This option cannot be chosen as answer_

This tagrendering has labels 
`contact`

### email

The question is `What is the email address of {title()}?`
*<a href='mailto:{email}' target='_blank' rel='noopener'>{email}</a>* is shown if `email` is set

 - <img src='https://raw.githubusercontent.com/pietervdvn/MapComplete/develop/./assets/svg/envelope.svg' style='width: 3rem; height: 3rem'> *<a href='mailto:{contact:email}' target='_blank' rel='noopener'>{contact:email}</a>* is shown if with contact:email~.+. _This option cannot be chosen as answer_
 - <img src='https://raw.githubusercontent.com/pietervdvn/MapComplete/develop/./assets/svg/envelope.svg' style='width: 3rem; height: 3rem'> *<a href='mailto:{operator:email}' target='_blank' rel='noopener'>{operator:email}</a>* is shown if with operator:email~.+. _This option cannot be chosen as answer_

This tagrendering has labels 
`contact`

### website

The question is `What is the website of {title()}?`
*<a href='{website}' rel='nofollow noopener noreferrer' target='_blank'>{website}</a>* is shown if `website` is set

 - <img src='https://raw.githubusercontent.com/pietervdvn/MapComplete/develop/./assets/layers/icons/website.svg' style='width: 3rem; height: 3rem'> *<a href='{contact:website}' rel='nofollow noopener noreferrer' target='_blank'>{contact:website}</a>* is shown if with contact:website~.+. _This option cannot be chosen as answer_

This tagrendering has labels 
`contact`

### specialty

The question is `What is this doctor specialized in?`
*This doctor is specialized in {healthcare:speciality}* is shown if `healthcare:speciality` is set

 -  *This is a general practitioner* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:healthcare:speciality' target='_blank'>healthcare:speciality</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:healthcare:speciality%3Dgeneral' target='_blank'>general</a>
 -  *This is a gynaecologist* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:healthcare:speciality' target='_blank'>healthcare:speciality</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:healthcare:speciality%3Dgynaecology' target='_blank'>gynaecology</a>
 -  *This is a psychiatrist* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:healthcare:speciality' target='_blank'>healthcare:speciality</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:healthcare:speciality%3Dpsychiatry' target='_blank'>psychiatry</a>
 -  *This is a paediatrician* is shown if with <a href='https://wiki.openstreetmap.org/wiki/Key:healthcare:speciality' target='_blank'>healthcare:speciality</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:healthcare:speciality%3Dpaediatrics' target='_blank'>paediatrics</a>

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
| specialty.0 | *What is this doctor specialized in?* (default) |  |
| specialty.1 | This is a general practitioner | healthcare:speciality~^(.+;)?general(;.+)$ |
| specialty.2 | This is a gynaecologist | healthcare:speciality~^(.+;)?gynaecology(;.+)$ |
| specialty.3 | This is a psychiatrist | healthcare:speciality~^(.+;)?psychiatry(;.+)$ |
| specialty.4 | This is a paediatrician | healthcare:speciality~^(.+;)?paediatrics(;.+)$ |



This document is autogenerated from [assets/layers/doctors/doctors.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/doctors/doctors.json)
