import type{ ReactNode } from 'react';

interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor: (item: T) => string | number;
  className?: string;
  emptyMessage?: string;
}

export function ItemList<T>({
  items,
  renderItem,
  keyExtractor,
  className = '',
  emptyMessage = 'Не нашли'
}: ItemListProps<T>) {
  if (items.length === 0) {
    return <div className={className}>{emptyMessage}</div>;
  }

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={keyExtractor(item)}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}