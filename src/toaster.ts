export {IToast} from './toast-provider';
import {IToast} from './toast-provider';
export {ToastProvider} from './toast-provider';
export {withToaster, useToaster} from './toast-consumer';

export type ToasterProps = {
    toaster: {
        add(toast: IToast): void;
    };
};

export type ToasterHook = (toast: IToast) => void;
