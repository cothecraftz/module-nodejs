## Callback API

```js
import fs from 'fs';

fs.readFile('temp.txt', 'utf-8', (err, data) => {
  if (err) return console.error(err);
  console.info(data);
});
```

## Promise

```js
import fs from 'fs/promise';

const text = await fs.readFile('temp.txt', 'utf-8');
console.info(text);
```

## Synchronous API

```js
import fs from 'fs';

const text = fs.readFileSync('temp.txt', 'utf-8');
console.info(text);
```
