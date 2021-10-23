# auro-tokenlist

The auro-tokenlist element provides users a way to display a table of design token names and values.

## Properties

| Property        | Attribute       | Type      | Description                                      |
|-----------------|-----------------|-----------|--------------------------------------------------|
| `componentData` | `componentData` | `Array`   | Pass in `tokenvalue`, `token`. Include a new `reference` and `version` number with a deprecated token table as applicable. |
| `swatchType`    | `swatchType`    | `Boolean` | Sets the swatch display type for a current type tokens list. Allowed options are `rectangle` or `circle`. If given value is not allowed or set, defaults to none. |
| `type`          | `type`          | `String`  | Selects tokens-list `type`. Allowed options are `current` and `deprecated` for displaying deprecated tokens and their current equivalents. If given value is not allowed or set, defaults to `current`. |
| `version`       | `version`       | `String`  | Displays the current token `version` number in a deprecated type tokens list. |
