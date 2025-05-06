import React, {ReactNode, useContext} from 'react';

import {ToasterHook} from './toaster';
import {ToastContext} from './toast-provider';
import {IdlessToast, IToast} from './toast-provider';

type ToastConsumerProps = {
    children: (context: {add(toast: IdlessToast | IToast): void}) => ReactNode;
};
export const ToastConsumer = ({children}: ToastConsumerProps): React.JSX.Element => (
    <ToastContext.Consumer>{context => children(context)}</ToastContext.Consumer>
);

export const withToaster =
    <P extends object>(Comp: React.ComponentType<P & {toaster: {add(toast: IdlessToast | IToast): void}}>) =>
    (props: P): React.JSX.Element =>
        <ToastConsumer>{context => <Comp toaster={context} {...props} />}</ToastConsumer>;

export const useToaster = (): ToasterHook => {
    const {add} = useContext(ToastContext);

    return add;
};
