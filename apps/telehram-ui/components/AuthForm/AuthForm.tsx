'use client';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import styles from './AuthForm.module.scss';
type Variant = 'LOGIN' | 'REGISTER';
/* eslint-disable-next-line */
export interface AuthFormProps {}
export const AuthForm = (props: AuthFormProps) => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [loading, setLoading] = useState(false);
  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') setVariant('REGISTER');
    else setVariant('LOGIN');
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    if (variant === 'REGISTER') {
    } //axios Register
    else if (variant === 'LOGIN') {
    } //axios Login
  };
  const socialActions = (action) => {
    setLoading(true);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}></form>
      </div>
    </div>
  );
};
