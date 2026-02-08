import type { ReactNode } from 'react';

type ListProps = {
  type?: 'ul' | 'ol'; // default to 'ul'
  children: ReactNode;
  className?: string;
};

const List = ({ type = 'ul', children, className }: ListProps) => {
  const ListTag = type; // 'ul' or 'ol'

  return <ListTag className={className}>{children}</ListTag>;
};

export default List;
