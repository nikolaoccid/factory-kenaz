export const blockProps = (...props: string[]) => ({
  shouldForwardProp: (propName: string) => !props.includes(propName),
});
