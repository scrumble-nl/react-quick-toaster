### Toaster

1. Import `withToaster` and `IToast` in the component where you want to create a toast.
2. Add `export default withToaster(Component)` to the file
3. Add toaster to your props interface:
```javascript
    toaster: {
        add(toast: IToast): void
    },
```

Finally, you can create a toast with the desired configuration from your component:
```javascript
this.props.toaster.add({content: 'A new toaster!'});
``` 
| Name         | Type                                                                                   | Required | Description                         |
|--------------|:----------------------------------------------------------------------------------------:|:----------:|:-------------------------------------|
| `content`      | string                                                                                 | *true*     | The content for the toast           |
| `header`       | string                                                                                 | *false*    | The header for the toast            |
| `variant`      | 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light' | *false*    | The toast type                      |
| `dismissTimer` | number                                                                                 | *false*    | Auto dismiss amount in milliseconds |
| `dismissible`  | boolean                                                                                | *false*    | If you can dismiss the toast        |

---