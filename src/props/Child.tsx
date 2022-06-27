interface ChildProps {
  color: string;
}

export const Child = ({color}: ChildProps) => {
  return <div>Testing Child parent { color }</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return (
    <div>{color}</div>
  )
}
  