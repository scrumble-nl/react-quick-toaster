import React from 'react';

import { AnimatePresence } from 'framer-motion';

import Toast from './toast';
import {IToast} from './toast-provider';

interface IToastRenderer {
    toasts: IToast[];
    position?: string;
    removeToast(id: number): void;
    defaultTimer: number;
}

export const ToastRenderer = (props: IToastRenderer): JSX.Element => {
    return (
        <div className={'toaster toaster-' + props.position}>
            <AnimatePresence initial={false}>
                {props.toasts.map((toast) => {
                    return (
                        <Toast toast={toast} key={toast.id} removeToast={props.removeToast} defaultTimer={props.defaultTimer} />
                    );
                })}
            </AnimatePresence>
        </div>
    );
};
