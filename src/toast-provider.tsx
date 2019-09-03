import React from 'react';

import {ToastRenderer} from './toast-renderer';

import './scss/toaster.scss';

export interface IToast {
    content: string,
    id?: number,
    header?: string,
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | undefined,
    dismissTimer?: number,
    dismissible?: boolean,
}

interface IToastContext {
    add(toast: IToast): void,
}

interface props {
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
    maxItems: number,
    defaultTimer: number,
}

interface state {
    toasts: IToast[],
}

// @ts-ignore
export const ToastContext = React.createContext<IToastContext>();

export class ToastProvider extends React.Component<props, state> {

    state = {toasts: []};

    public static defaultProps = {
        position: 'top-right',
        maxItems: 8,
        defaultTimer: 4000,
    };

    addToast = (toast: IToast): void => {
        if (this.state.toasts.length >= this.props.maxItems) {
            this.removeToastByIndex(0, this.state.toasts.length - this.props.maxItems + 1);
        }

        this.setState({
            toasts: [
                ...this.state.toasts,
                {...toast, id: new Date().getTime()}
            ]
        });
    };

    removeToastByIndex = (index: number, deleteCount = 1): void => {
        let toasts = this.state.toasts;
        toasts.splice(index, deleteCount);
        this.setState({toasts: toasts});
    };

    removeToastById = (id: number): void => {
        for (let i = 0, j = this.state.toasts.length; i < j; i++) {
            // @ts-ignore
            if (this.state.toasts[i].id === id) {
                this.removeToastByIndex(i);
                return;
            }
        }
    };

    render = (): JSX.Element => {
        const context = {add: this.addToast};

        return (
            <ToastContext.Provider value={context}>
                {this.props.children}
                <ToastRenderer
                    toasts={this.state.toasts}
                    position={this.props.position}
                    defaultTimer={this.props.defaultTimer}
                    removeToast={this.removeToastById.bind(this)}
                />
            </ToastContext.Provider>
        );
    }
}