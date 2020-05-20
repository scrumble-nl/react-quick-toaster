# Quick-Toaster
A quick and easy wrapper around react-bootstrap toasters, you can toast from anywhere in your application with a few simple steps. 

## Quick
![alt text](https://scrumble.nl/wp-content/uploads/2020/03/quick.png "Quick image")
## Installation

```sh
npm install @scrumble-nl/react-quick-toaster
```

or

```sh
yarn add @scrumble-nl/react-quick-toaster
```
## Usage
### Provider
Add the provider as top level as possible:
```typescript
import React from 'react';
import App from './src/app';
import {ToastProvider} from '@scrumble-nl/quick-toaster'; // Don't forget to import this

export default class ToastApp extends React.Component<{}, {}> {
    render = (): JSX.Element => {
        return (
            <ToastProvider>
                <App/>
            </ToastProvider>
        )       
    }       
}
```
The `ToastProvider` has multiple optional props so you can customize it to your needs:

| Name         | Type                                                                                   | Required | Description                         | Default|
|--------------|:----------------------------------------------------------------------------------------:|:----------:|:-------------------------------------|------|
| `position`      | 'top-left', 'top-right', 'bottom-left', 'bottom-right' | *false*     | The position of the toast container    | `top-right`
| `maxItems`       | number                                                                                 | *false*    | The maximum amount of toasts rendered at a given time | `8`
| `defaultTimer` | number | *false*    | The default amount of ms before the toast is removed  | `4000`

### Adding toasts

1. Import `withToaster` in the component where you want to create a toast
2. If you are using TypeScript, import `IToast` and add toaster to your interface
3. Add `export default withToaster(MyComponent)` to the file
4. Finally, you can create a toast with the desired configuration from your component:
```typescript
import React from 'react';
import {withToaster, IToast} from '@scrumble-nl/quick-toaster'; // Step 1 (& 2)

interface props {
    toaster: {
        add(toast: IToast): void, // Step 2
    },
}

class MyComponent extends React.Component<props, {}> {

    showToast = (): void => {
        this.props.toaster.add({content: 'Damn, this is an easy package!'}); // Step 4
    }

    render = (): JSX.Element => {
        return (
            <button onClick={this.showToast}>Show my awesome toast</button>            
        )
    }
}

export default withToaster(MyComponent); // Step 3
```

The following options can be used for customization:

| Name         | Type                                                                                   | Required | Description                         | Default |
|--------------|:----------------------------------------------------------------------------------------:|:----------:|:-------------------------------------| -------- |
| `content`      | string                                                                                 | *true*     | The content for the toast           | `undefined` |
| `header`       | string                                                                                 | *false*    | The header for the toast            | `''`
| `variant`      | 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light' | *false*    | The toast type                      | `success`
| `dismissTimer` | number                                                                                 | *false*    | Auto dismiss amount in milliseconds | `dismissTimer` of `ToastProvider`
| `dismissible`  | boolean                                                                                | *false*    | If you can dismiss the toast        | `true`

Next to that you can override the bootstrap class `.alert` to change the look of the toasts.

## Roadmap
- [x] Packagize component
- [ ] Improve styling customizability
- [ ] Automated testing implementation
- [ ] Switch from interfaces to types
- [ ] Improve scss usage

## Contributing
If you would like to see additions/changes to this package you are always welcome to add some code or improve it.

## Scrumble
This product has been originally developed by [Scrumble](https://www.scrumble.nl) for internal use. As we have been using lots of open source packages we wanted to give back to the community. We hope this helps you getting forward as much as other people helped us!
