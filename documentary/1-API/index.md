## API

The package is available by importing its default function:

```js
import deepEqual from '@zoroaster/deep-equal'
```

%~%

```## deepEqual
[
  ["actual", "?"],
  ["expected", "?"],
  ["message?", "string|!Error"]
]
```

Calls `assert.deepStrictEqual` and then creates a visual representation of the difference between objects if it throws.

%EXAMPLE: example, ../src => @zoroaster/deep-equal%

<table>
<table>
<tr><td>

%FORK example%
</td></tr><tr><td>

![Deep Equal With Color](doc/doc.png)
</td></tr>
</table>

%~%