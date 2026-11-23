
import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: '#fff', padding: 32, fontFamily: 'sans-serif', background: '#050505', minHeight: '100vh' }}>
          <h1 style={{ color: '#ef4444', fontSize: '24px', fontWeight: 'bold' }}>Application Error</h1>
          <p style={{ marginTop: 12, color: '#aaa' }}>The application encountered an error while loading:</p>
          <pre style={{ background: '#111', padding: 16, borderRadius: 8, marginTop: 16, overflowX: 'auto', color: '#ff6b6b' }}>
            {this.state.error?.toString()}
          </pre>
          <button 
            onClick={() => window.location.reload()} 
            style={{ marginTop: 24, padding: '10px 20px', background: '#fff', color: '#000', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}>
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
