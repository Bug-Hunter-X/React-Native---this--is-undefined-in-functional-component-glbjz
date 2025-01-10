```javascript
import React, { useState } from 'react';
import { View, Text } from 'react-native';

const MyComponent = (props) => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Text>Name: {props.name}</Text> 
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </View>
  );
};

export default MyComponent;
```