import React, {useEffect} from 'react';

import {motion} from 'framer-motion';
import {Alert} from 'react-bootstrap';
import {IToast} from './toast-provider';

interface props {
    toast: IToast;
    defaultTimer: number;
    removeToast(id: number): void;
}

const Toast = (props: props) => {
    useEffect(() => {
        let {dismissTimer, id} = props.toast;

        setTimeout(() => props.removeToast(id || 0), dismissTimer || props.defaultTimer);
    }, []);

    return (
        <motion.div
            layout="position"
            initial={{opacity: 0, y: -30, scale: 0.7}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, scale: 0.7, transition: {type: 'tween', duration: 0.2}}}
        >
            <Alert
                variant={props.toast.variant || 'success'}
                dismissible={props.toast.dismissible !== false}
                onClose={() => props.removeToast(props.toast.id || 0)}
            >
                {props.toast.header && <Alert.Heading>{props.toast.header}</Alert.Heading>}
                {props.toast.content}
            </Alert>
        </motion.div>
    );
};

export default Toast;
