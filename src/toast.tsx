import React, {useEffect} from 'react';

import {motion} from 'framer-motion';
import {Alert} from 'react-bootstrap';

import {IToast} from './toast-provider';

interface props {
    toast: IToast;
    defaultTimer: number;
    removeToast(id: number): void;
}

const Toast = ({defaultTimer, removeToast, toast}: props) => {
    useEffect(() => {
        const {dismissTimer, id} = toast;

        setTimeout(() => removeToast(id || 0), dismissTimer || defaultTimer);
    }, [toast, removeToast, defaultTimer]);

    return (
        <motion.div
            layout="position"
            initial={{opacity: 0, y: -30, scale: 0.7}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, scale: 0.7, transition: {type: 'tween', duration: 0.2}}}
        >
            <Alert
                variant={toast.variant || 'success'}
                dismissible={toast.dismissible !== false}
                onClose={() => removeToast(toast.id || 0)}
            >
                {toast.header && <Alert.Heading>{toast.header}</Alert.Heading>}
                {toast.content}
            </Alert>
        </motion.div>
    );
};

export default Toast;
