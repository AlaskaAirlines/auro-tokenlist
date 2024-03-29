# auro-tokenavatar

The auro-tokenavatar element provides users a way to illustrate design token colors and their related data for text, border, alert, interactive or icon uses.

## Attributes

| Attribute | Type      | Description                             |
|-----------|-----------|-----------------------------------------|
| `ondark`  | `Boolean` | Defines if color state is to be on-dark |

## Properties

| Property     | Attribute    | Type     | Description                                      |
|--------------|--------------|----------|--------------------------------------------------|
| `avatartype` | `avatartype` | `String` | Pass in `font`, `border`, `alert`, `ui`, `icon` string to illustrate preferred avatar type |
| `colorname`  | `colorname`  | `String` | Pass in `-`(dash) to delimitated name of color token |


# auro-tokendisplay

The auro-tokendisplay element provides users a way to illustrate design token colors and their related data and usage in a table.

## Properties

| Property        | Attribute       | Type      | Description                                      |
|-----------------|-----------------|-----------|--------------------------------------------------|
| `componentData` | `componentData` | `Array`   | Pass in `backgroundcolor`, `colorname` & `usage` |
| `ondark`        | `ondark`        | `Boolean` | Defines if color state is to be on-dark          |


# auro-tokenlist

The auro-tokenlist element provides users a way to display a table of design token names and values.

## Properties

| Property        | Attribute       | Type      | Description                                      |
|-----------------|-----------------|-----------|--------------------------------------------------|
| `componentData` | `componentData` | `Array`   | Pass in `tokenvalue`, `token`. Include a new `reference` and `version` number with a deprecated token table as applicable. |
| `swatchType`    | `swatchType`    | `Boolean` | Sets the swatch display type for a current type tokens list. Allowed options are `rectangle` or `circle`. If given value is not allowed or set, defaults to none. |
| `type`          | `type`          | `String`  | Selects tokens-list `type`. Allowed options are `current` and `deprecated` for displaying deprecated tokens and their current equivalents. If given value is not allowed or set, defaults to `current`. |
| `unit`          | `unit`          | `String`  | Add context to a value if unit is not output by default. |
| `version`       | `version`       | `String`  | Displays the current token `version` number in a deprecated type tokens list. |
