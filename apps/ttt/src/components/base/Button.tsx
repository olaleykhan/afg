import { FC, ReactNode, ElementType } from 'react';

interface Props {
  children: ReactNode;
  Component?: ElementType;
  className?: string;
  to?: string; // To allow additional props
}

const Button: FC<Props> = ({ children, Component, to, ...rest }) => {
  const className = 'py-1.5 px-3 bg-green-300 hover:bg-green-500';

  if (Component) {
    return (
      <Component
        to={to}
        {...rest}
        className={`${rest?.className || ''} ${className}`}
      >
        {children}
      </Component>
    );
  }

  return (
    <button {...rest} className={`${rest?.className || ''} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
