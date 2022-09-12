## is-mounted-hook

**React hook for checking if the component is mounted.**

**Author**

- name: _Martik Avagyan_
- email: _<martikavagyan1@gmail.com>_
- github: _[m-avagyan](https://github.com/m-avagyan)_

## Getting started

**Installation**

`npm install is-mounted-hook` or `yarn add is-mounted-hook`

**Example**

```javascript
import React, { useState, useEffect } from 'react';
import useIsMounted from 'is-mounted-hook';

import { getCars } from '../../services/cars';

import Loader from '../loader/Loader';
import Error from '../error/Error';
import CarList from '../car-list/CarList';

function Example() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  const isMounted = useIsMounted();

  useEffect(() => {
    getCars()
      .catch((error) => setError(error.message))
      .then((data) => {
        if (!isMounted) {
          return;
        }

        setData(data);
      })
      .finally(() => setIsLoading(false));
  }, [isMounted]);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Error message={error} />
  ) : (
    <CarList data={data} />
  );
}

export default Example;
```

---

**Copyright (c) 2022 [Martik Avagyan](https://github.com/m-avagyan)**
