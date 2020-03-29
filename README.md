# Quick-Toaster
A quick and easy wrapper around react-bootstrap toasters, you can simply add the provider and use toasts throughout your application. 

## Quick
![alt text](https://scrumble.nl/wp-content/uploads/2020/03/quick-logo-zonder-alle-tekst.png "Quick image")

todo: 
- correcte image toevoegen
- quick tekst

## Usage
### Provider
First we need to add the provider as top level as we can:
```typescript
import React from 'react';
import App from './src/app';
import {ToastProvider} from 'scrumble-nl/quick-toaster'; // Don't forget to import this

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
The `ToastProvider` has multiple optional props so you can customize to your needs:

| Name         | Type                                                                                   | Required | Description                         | Default|
|--------------|:----------------------------------------------------------------------------------------:|:----------:|:-------------------------------------|------|
| `position`      | 'top-left', 'top-right', 'bottom-left', 'bottom-right' | *false*     | The position of the toast container    | `top-right`
| `maxItems`       | number                                                                                 | *false*    | The maximum amount of toasts rendered at a given time | `8`
| `defaultTimer` | number | *false*    | The default amount of ms before the toast is removed  | `4000`

### Adding toasts

1\. Import `withToaster` and `IToast` in the component where you want to create a toast.
```typescript jsx
import React from 'react';
import {withToaster, IToast} from 'scrumble-nl/quick-toaster'; // here

class MyComponent extends React.Component<{}, {}> {

    showToast = (): void => {
        // show toast
    }

    render = (): JSX.Element => {
        return (
            <button onclick={this.showToast}>Show my awesome toast</button>            
        )
    }
}
```
2\. add `export default withToaster(MyComponent)` to the file
```typescript jsx
import React from 'react';
import {withToaster, IToast} from 'scrumble-nl/quick-toaster'; // here

class MyComponent extends React.Component<{}, {}> {

    showToast = (): void => {
        // show toast
    }

    render = (): JSX.Element => {
        return (
            <button onclick={this.showToast}>Show my awesome toast</button>            
        )
    }
}

export default withToaster(MyComponent);
```
3\. if you are using typescript, add toaster to your interface:
```typescript jsx
import React from 'react';
import {withToaster, IToast} from 'scrumble-nl/quick-toaster'; // here

interface props {
    toaster: {
        add(toast: IToast): void,
    },
}

class MyComponent extends React.Component<props, {}> {

    showToast = (): void => {
        // show toast
    }

    render = (): JSX.Element => {
        return (
            <button onclick={this.showToast}>Show my awesome toast</button>            
        )
    }
}

export default withToaster(MyComponent);
```

4\. Finally, you can create a toast with the desired configuration from your component:
```typescript jsx
import React from 'react';
import {withToaster, IToast} from 'scrumble-nl/quick-toaster'; // here

interface props {
    toaster: {
        add(toast: IToast): void,
    },
}

class MyComponent extends React.Component<props, {}> {

    showToast = (): void => {
        this.props.toaster.add({content: 'Damn, this is an easy package!'});
    }

    render = (): JSX.Element => {
        return (
            <button onclick={this.showToast}>Show my awesome toast</button>            
        )
    }
}

export default withToaster(MyComponent);
```

The following options can be used for customization:

| Name         | Type                                                                                   | Required | Description                         | Default |
|--------------|:----------------------------------------------------------------------------------------:|:----------:|:-------------------------------------| -------- |
| `content`      | string                                                                                 | *true*     | The content for the toast           | `undefined` |
| `header`       | string                                                                                 | *false*    | The header for the toast            | `''`
| `variant`      | 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light' | *false*    | The toast type                      | `success`
| `dismissTimer` | number                                                                                 | *false*    | Auto dismiss amount in milliseconds | `dismissTimer` of `ToastProvider`
| `dismissible`  | boolean                                                                                | *false*    | If you can dismiss the toast        | `true`

## Roadmap
- [x] Packagize component
- [ ] Actual test implementation
- [ ] Switch from interfaces to types
- [ ] Improve scss usage

## Contributing
If you would like to see additions/changes to this package you are always welcome to add some code or improve it.

## Scrumble
This product has been originally developed by [Scrumble](https://www.scrumble.nl) for internal use. As we have been using lots of open source packages we wanted to give back to the community. We hope this helps you getting forward as much as other people helped us!
