function getStyle(name, scope, style) {
  switch (scope) {
    case 'button':
      switch (name) {
        case 'primary':
          return {color: 'red', backgroundColor: 'blue'};
        // ...
      }
    case 'input':
      switch (name) {
        case 'error':
          return {borderColor: 'red', backgroundColor: '#f7f7f7'};
        // ...
      }
    // ...
  }
  return style[name];
}
