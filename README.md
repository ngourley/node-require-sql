node-require-sql
================

Allows for files with .sql extensions to be used with queries stored as plain text (no javascript multiline string non-sense).


#### Basic Example

```sql
// some-file.sql
SELECT
  *
FROM
  my_table
```

```javascript
require('require-sql');

var query = require('./some-query.sql');
```

#### Template Example

An example using Underscore.js to insert variables using the template function.

```sql
// some-query-with-params.sql
SELECT
  *
FROM
  my_table
WHERE
    name = <%- name %>
```

```javascript
var __ = require('underscore');
require('require-sql');

var query = require('./some-query-with-params.sql');
var queryWithParameters = __.template(query, {name: 'Bob'});

```
