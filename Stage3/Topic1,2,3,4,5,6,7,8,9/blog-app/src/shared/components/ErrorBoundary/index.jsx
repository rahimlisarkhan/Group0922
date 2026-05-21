import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    const data = {
      text: `*Error:* ${error?.toString()}\n*Component Stack:* ${errorInfo?.componentStack}`,
      attachments: [
        {
          color: '#FF0000',
          fields: [
            {
              title: 'Component',
              value: this.props.title || 'Unknown',
              short: true,
            },
            { title: 'Date', value: new Date().toISOString(), short: true },
            {
              title: 'Error Message',
              value: error?.message || 'No message',
              short: false,
            },
            {
              title: 'Component Stack',
              value: errorInfo?.componentStack || 'N/A',
              short: false,
            },
          ],
        },
      ],
    };

    fetch('SLACK_WEBHOOK_REMOVED', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>{this.props.title || 'Something went wrong.'}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
