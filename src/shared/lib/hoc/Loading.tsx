import React from 'react';

export const Loading = <P extends object>(
  Component: React.ComponentType<P>,
  loadingCondition: (props: P) => boolean
) => {
  const WithLoading: React.FC<P> = (props) => {
    if (loadingCondition(props)) {
      return (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Загрузка постов...</p>
        </div>
      );
    }

    return <Component {...props} />;
  };

  WithLoading.displayName = `WithLoading(${Component.displayName || Component.name})`;

  return WithLoading;
};