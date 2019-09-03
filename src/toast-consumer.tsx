import React from 'react';

import {ToastContext} from './toast-provider';

export const ToastConsumer = ({children}): JSX.Element => (
    <ToastContext.Consumer>
        {context => children(context)}
    </ToastContext.Consumer>
);

export const withToaster = (Comp) => (props) => (
    <ToastConsumer>
        {context => <Comp toaster={context} {...props} />}
    </ToastConsumer>
);