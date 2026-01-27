"use client";
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
          <div className="max-w-3xl w-full bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold text-red-600 mb-2">Une erreur est survenue</h2>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">{String(this.state.error && this.state.error.toString())}</pre>
            {this.state.errorInfo && (
              <details className="mt-4 text-xs text-gray-600">
                {String(this.state.errorInfo.componentStack)}
              </details>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
