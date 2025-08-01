import {IdlessToast, IToast} from './toast-provider';
export {ToastProvider} from './toast-provider';
export {IToast} from './toast-provider';

export {withToaster, useToaster} from './toast-consumer';

export type ToasterProps = {
    toaster: {
        add(toast: IdlessToast | IToast): void;
    };
};

export type ToasterHook = (toast: IdlessToast | IToast) => void;
