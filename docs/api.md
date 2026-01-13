# auro-tokenavatar

The auro-tokenavatar element provides users a way to illustrate design token colors and their related data for text, border, alert, interactive or icon uses.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                                                      | Default   | Description                                                                                 |
| ---------- | ---------- | --------- | --------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------- |
| appearance | appearance |           | 'default' \| 'inverse' \| string                          | "default" | Defines whether this component should be light colored for use on dark backgrounds.         |
| avatartype | avatartype |           | 'font' \| 'border' \| 'alert' \| 'ui' \| 'icon' \| string |           | Pass in `font`, `border`, `alert`, `ui`, `icon` string to illustrate preferred avatar type. |
| colorname  | colorname  |           | string                                                    |           | Pass in `-`(dash) to delimitated name of color token.                                       |
|            | ondark     |           | Boolean                                                   |           | DEPRECATED - use `appearance` instead.                                                      |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

# auro-tokendisplay

The auro-tokendisplay element provides users a way to illustrate design token colors and their related data and usage in a table.

### Properties & Attributes

| Properties    | Attributes    | Modifiers | Type                                                 | Default   | Description                                                                         |
| ------------- | ------------- | --------- | ---------------------------------------------------- | --------- | ----------------------------------------------------------------------------------- |
| appearance    | appearance    |           | 'default' \| 'inverse' \| string                     | 'default' | Defines whether this component should be light colored for use on dark backgrounds. |
| componentData | componentData |           | 'backgroundcolor' \| 'colorname' \| 'usage' \| array |           | Pass in `backgroundcolor`, `colorname` & `usage`.                                   |
| ondark        | ondark        |           | boolean                                              |           | DEPRECATED - use `appearance` instead.                                              |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

# auro-tokenlist

The auro-tokenlist element provides users a way to display a table of design token names and values.

### Properties & Attributes

| Properties    | Attributes    | Modifiers | Type                                                 | Default | Description                                                                                                                                                                                             |
| ------------- | ------------- | --------- | ---------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| componentData | componentData |           | 'backgroundcolor' \| 'colorname' \| 'usage' \| array |         | Pass in `backgroundcolor`, `colorname` & `usage`.                                                                                                                                                       |
| swatchType    | swatchType    |           | 'rectangle' \| 'circle' \| string                    |         | Sets the swatch display type for a current type tokens list. Allowed options are `rectangle` or `circle`. If given value is not allowed or set, defaults to none.                                       |
| type          | type          |           | 'current' \| 'deprecated' \| string                  |         | Selects tokens-list `type`. Allowed options are `current` and `deprecated` for displaying deprecated tokens and their current equivalents. If given value is not allowed or set, defaults to `current`. |
| unit          | unit          |           | string                                               |         | Add context to a value if unit is not output by default.                                                                                                                                                |
| version       | version       |           | boolean                                              |         | Displays the current token `version` number in a deprecated type tokens list.                                                                                                                           |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |