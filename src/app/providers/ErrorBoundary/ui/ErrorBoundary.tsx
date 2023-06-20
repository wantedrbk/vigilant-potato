import React, {ErrorInfo, Suspense} from "react";
import {PageError} from "widgets/PageError";


interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state = { hasError: false };
    
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log("ErrorBoundary caught an error", error, errorInfo);
    }
    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            )
        }
    
        return children;
    }
}
//export defaul withTranslation()(ErrorBoundary);
export default ErrorBoundary;