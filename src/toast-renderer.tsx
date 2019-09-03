import React from 'react';

import Toast from './toast';
import {IToast} from './toast-provider';

interface IToastRenderer {
    toasts: IToast[],
    position?: string,
    removeToast(id: number): void,
    defaultTimer: number,
}

export const ToastRenderer = (props: IToastRenderer): JSX.Element => {
    return (
        <div className={'toaster toaster-' + props.position}>
            {props.toasts.map((item, key) => {
                return (
                   <Toast toast={item} key={key} removeToast={props.removeToast} defaultTimer={props.defaultTimer}/>
                )
            })}
        </div>
    )
};