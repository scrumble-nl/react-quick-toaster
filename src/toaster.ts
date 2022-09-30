export {IToast} from './toast-provider';
import {IdlessToast} from './toast-provider';
export {ToastProvider} from './toast-provider';
export {withToaster, useToaster} from './toast-consumer';

export type ToasterProps = {
    toaster: {
        add(toast: IdlessToast): void;
    };
};

export type ToasterHook = (toast: IdlessToast) => void;
