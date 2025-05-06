import React, {ReactNode, useContext} from 'react';

import {ToasterHook} from './toaster';
import {IToast} from './toast-provider';
import {ToastContext} from './toast-provider';

type ToastConsumerProps = {
    children: (context: {add(toast: IToast): void}) => ReactNode;
};
export const ToastConsumer = ({children}: ToastConsumerProps): React.JSX.Element => (
    <ToastContext.Consumer>{context => children(context)}</ToastContext.Consumer>
);

export const withToaster = Comp => props =>
    <ToastConsumer>{context => <Comp toaster={context} {...props} />}</ToastConsumer>;

export const useToaster = (): ToasterHook => {
    const {add} = useContext(ToastContext);

    return add;
};
