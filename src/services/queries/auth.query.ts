import { useMutation } from '@tanstack/react-query';
import {
  RegisterBody,
  ResetPasswordBody,
  SendMailBody,
  type LoginBody,
} from '@/types/auth';
import { login, register, resetPassword, sendmail } from '../api/auth.service';
import { setTokens } from '@/lib/utils/token';

export const useLoginQuery = () =>
  useMutation(['login'], async (body: LoginBody) => {
    const res = await login(body);
    console.log('🚀 ~ useMutation ~ res:', res);
    const { token: accessToken, refreshToken, user } = res;
    console.log(
      '🚀 ~ useMutation ~  accessToken, refreshToken:',
      accessToken,
      refreshToken
    );

    setTokens(accessToken, refreshToken);
    return res;
  });

export const useRegisterQuery = () =>
  useMutation(['register'], async (body: RegisterBody) => {
    const res = await register(body);
    const { token: accessToken, refreshToken, user } = res;
    console.log(
      '🚀 ~ useMutation ~ accessToken, refreshToken:',
      accessToken,
      refreshToken
    );

    setTokens(accessToken, refreshToken);

    return res;
  });

export const useSendMailQuery = () =>
  useMutation(['sendMail'], async (body: SendMailBody) => {
    const res = await sendmail(body);
    return res;
  });

export const useResetPasswordQuery = () =>
  useMutation(['resetPassword'], async (body: ResetPasswordBody) => {
    const res = await resetPassword(body);
    return res;
  });
