"use client";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Button from './Button';
import { HeaderProps } from '../../types';

const Header: React.FC<HeaderProps> = ({ title = 'Tasks List App', onAdd, showAdd }) => {
  const pathname = usePathname()

  return (
    <header className={`flex items-center justify-between`}>
      <h1 className={`text-2xl font-semibold mb-4`}>{title}</h1>
      <span className={`mb-2`}>
      {pathname === '/' && (
        <Button                    
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add Task'}
          onClick={onAdd}
        />
      )}
      </span>
    </header>
  );
};

export default Header;