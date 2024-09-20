/* ==================== */
/* AUTH */
/* ==================== */

import { supabaseUserClientComponentClient } from '@/supabase-clients/supabaseUserClientComponentClient';
import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { insertEmail } from './supabase-queries';

export const useSignup = ({
  onSuccess,
  onMutate,
  onError,
}: {
  onSuccess?: () => void;
  onMutate?: () => void;
  onError?: (error: unknown) => void;
}) => {
  const toastRef = useRef<string | null>(null);
  return useMutation(
    async ({
      email,
      name,
      message,
    }: {
      email: string;
      name: string;
      message: string;
    }) => {
      return insertEmail(supabaseUserClientComponentClient, {
        name,
        email,
        message,
      });
    },
    {
      onMutate: () => {
        // toastRef.current = toast.loading('');
        onMutate?.();
      },
      onSuccess: () => {
        toast.success('Data send to us successfully.', {
          id: toastRef.current ?? undefined,
        });

        toastRef.current = null;
        onSuccess?.();
      },
      onError: (error) => {
        toast.error(String(error), {
          id: toastRef.current ?? undefined,
        });
        toastRef.current = null;
        onError?.(error);
      },
    }
  );
};
