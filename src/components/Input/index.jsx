import { InputItem, ErrorSpan } from "./styles";

const Input = ({ placeholder, error, register, name, ...rest }) => {
  return register ? (
    <>
      <InputItem
        {...register(name)}
        isErrored={!!error}
        placeholder={placeholder}
        {...rest}
        errored={!!error}
      ></InputItem>
    </>
  ) : (
    <InputItem placeholder={placeholder} {...rest} />
  );
};

export default Input;
