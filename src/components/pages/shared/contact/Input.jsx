import React from 'react';

const Input = React.forwardRef(({ type = 'text',
                                    placeholder = '',
                                    bg='bg-gray-200',
                                    bold='font-normal',
                                    color='black',
                                    size='text-base',
                                    error, ...rest },
                                ref) => {
  return placeholder !== 'Message' ? (
    <div>
      <input
        type={type}
        placeholder={placeholder + ' *'}
        className={` appearance-none my-1 block w-full text-gray-700 border rounded ${bg} ${bold} ${color} ${size} py-3 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white ${
          error ? 'border-red-500' : ''
        }`}
        ref={ref} // Pass the ref provided by react-hook-form
        {...rest}
      />
      {error && <p className="text-red-500 text-xs italic">This field is required</p>}
    </div>
  ) : (
    <div>
      <textarea
        placeholder={placeholder + ' *'}
        className={`appearance-none min-h-[15vh] my-1 block w-full bg-${bg} text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
          error ? 'border-red-500' : ''
        }`}
        ref={ref} // Pass the ref provided by react-hook-form
        {...rest}
      ></textarea>
      {error && <p className="text-red-500 text-xs italic">This field is required</p>}
    </div>
  );
});

export default Input;
