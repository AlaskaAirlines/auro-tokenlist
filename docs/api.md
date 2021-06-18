# auro-color-avatar

auro-color-avatar provides users a way to illustrate Design Token colors and their related data for text, border, alert, interactive or icon uses.

## Attributes

| Attribute | Type      | Description                             |
|-----------|-----------|-----------------------------------------|
| `ondark`  | `Boolean` | Defines if color state is to be on-dark |

## Properties

| Property     | Attribute    | Type     | Description                                      |
|--------------|--------------|----------|--------------------------------------------------|
| `avatartype` | `avatartype` | `String` | Pass in `font`, `border`, `alert`, `ui`, `icon` string to illustrate preferred avatar type |
| `colorname`  | `colorname`  | `String` | Pass in `-`(dash) to delimitated name of color token |


# auro-swatch-list

auro-swatch-list provides users a way to illustrate Design Token colors and their related data and usage in a table.

## Attributes

| Attribute | Type      | Description                             |
|-----------|-----------|-----------------------------------------|
| `ondark`  | `Boolean` | Defines if color state is to be on-dark |

## Properties

| Property        | Attribute       | Type    | Description                                      |
|-----------------|-----------------|---------|--------------------------------------------------|
| `componentData` | `componentData` | `Array` | Pass in `backgroundcolor`, `colorname`, `wcag` & `usage` |


# auro-swatch

auro-swatch provides users a way to ... (it would be great if you fill this out)

## Attributes

| Attribute | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `fixed`   | `Boolean` | Uses fixed pixel values for element shape |

## Properties

| Property   | Attribute  | Type     | Description                                      |
|------------|------------|----------|--------------------------------------------------|
| `cssClass` | `cssClass` | `String` | Applies designated CSS class to demo element - you want to delete me! |


# auro-tokens-list

auro-tokens-list provides users a way to display a table of design token names and values.

## Properties

| Property        | Attribute       | Type      | Description                                      |
|-----------------|-----------------|-----------|--------------------------------------------------|
| `circle`        | `circle`        | `Boolean` | Adds swatch--circle class to last column of token table |
| `componentData` | `componentData` | `Array`   | Pass in `tokenvalue`, `token`                    |
| `deprecated`    | `deprecated`    | `Boolean` | Use deprecated display table                     |
| `swatch`        | `swatch`        | `Boolean` | Adds the swatch css class to last column of token table |
| `version`       | `version`       | `String`  | Pass in token `version` for deprecated auro token table |
