import React, {useCallback, useState} from "react"
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {useTranslation} from "react-i18next";
import {Modal} from "shared/ui/Modal/Modal";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface NavBarProps {
    className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
    const {t} = useTranslation(['translation'])
    const [isAuthModal, setIsAuthModal] = useState(false)
    
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    } , [])
    
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEARINVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Sign in')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum ipsa molestias
                necessitatibus repellat totam.
            </Modal>
        </div>
    );
};
