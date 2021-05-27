import React, {useContext} from 'react';

import {ToasterHook} from './toaster';
import {ToastContext} from './toast-provider';

export const ToastConsumer = ({children}): JSX.Element => (
    <ToastContext.Consumer>{context => children(context)}</ToastContext.Consumer>
);

export const withToaster = Comp => props => (
    <ToastConsumer>{context => <Comp toaster={context} {...props} />}</ToastConsumer>
);

export const useToaster = (): ToasterHook => {
    const {add} = useContext(ToastContext);

    return add;
};
