import React from 'react';

import FadeIn from 'react-fade-in';
import {Alert} from 'react-bootstrap';

import {IToast} from './toast-provider';

interface props {
    toast: IToast,
    defaultTimer: number
    removeToast(id: number): void,
}

export default class Toast extends React.Component<props, {}> {

    componentDidMount = (): void => {
        let {dismissTimer, id} = this.props.toast;

        setTimeout(() => this.props.removeToast(id || 0), dismissTimer || this.props.defaultTimer);
    };

    render = (): JSX.Element => {
        return (
            <FadeIn>
                <Alert
                    variant={this.props.toast.variant || 'success'}
                    dismissible={this.props.toast.dismissible !== false}
                    onClose={() => this.props.removeToast(this.props.toast.id || 0)}
                >
                    {!this.props.toast.header || <Alert.Heading>{this.props.toast.header}</Alert.Heading>}
                    {this.props.toast.content}
                </Alert>
            </FadeIn>
        )
    }
}