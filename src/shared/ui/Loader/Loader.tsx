import {classNames} from "shared/lib/classNames/classNames";
import './Loader.scss'
import React from "react";

interface LoaderProps {
    className?: string;
}


export const Loader = ({className}: LoaderProps) => {
    return (
        <div className={classNames("loadingio-spinner-spin-mrhxbkn5vsc", {}, [className])}>
            <div className="ldio-3fdqmo8rx1d">
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

